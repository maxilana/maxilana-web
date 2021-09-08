import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import getCMSCategories from '~/api/cms/getCMSCategories';
import getCMSRematesPage from '~/api/cms/getCMSRematesPage';
import getAllCities from '~/api/getAllCities';
import getProducts from '~/api/getProducts';
import getProductsFromCMSFilters from '~/api/getProductsFromCMSFilters';
import { Banners, CategoryExplorer } from '~/components/common';
import { Layout } from '~/components/layout';
import { City } from '~/types/Models';
import { CMSCategory } from '~/types/Models/CMSCategory';
import { CMSRematesPage } from '~/types/Models/CMSRematesPage';
import { ProductsCarrousel, ProductsFilters } from '~/components/products';
import { Product } from '~/types/Models/Product';
import parseQuery from '~/utils/parseQuery';
import { Button } from '~/components/ui';
import generateCategoryURL from '~/utils/generateCategoryURL';

interface GSProps {
  cities?: City[];
  page?: CMSRematesPage;
  categories?: Array<Partial<CMSCategory>>;
  categoriesProducts?: Array<Partial<CMSCategory & { products: Product[] }>>;
}

export const getStaticProps: GetStaticProps<GSProps> = async () => {
  try {
    const cities = await getAllCities();
    const page = await getCMSRematesPage();
    const categories = await getCMSCategories();
    const categoriesProducts = page?.categories?.length
      ? await Promise.all(
          page?.categories.map((item) => {
            const category = categories.find(({ id }) => id === item?.category?.id);
            return category?.filters
              ? getProductsFromCMSFilters(category?.filters).then((products) => {
                  return { ...category, products };
                })
              : { ...category, products: [] as Product[] };
          }),
        )
      : [];

    return {
      props: { cities, page, categories, categoriesProducts },
      revalidate: 10 * 60, // each 10 minutes
    };
  } catch (e) {
    console.log('Error getStaticProps');
    console.log(e as Error);
    return {
      notFound: true,
    };
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Remates: NextPage<Props> = ({ cities, page, categories, categoriesProducts }) => {
  const { push } = useRouter();
  const { metaTitle, metaDescription, metaKeywords } = page?.seo || {};
  const handleFiltersChanges = (queryParams: ParsedUrlQuery) => {
    push(`/busqueda?${parseQuery(queryParams)}`);
  };
  return (
    <Layout
      title={metaTitle}
      meta={{ description: metaDescription, keywords: metaKeywords }}
      cities={cities || []}
    >
      <div className="container mx-auto lg:p-4 grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-4">
        <aside>
          <ProductsFilters
            cities={cities}
            categories={categories || []}
            onFiltersChange={handleFiltersChanges}
          />
        </aside>
        <main className="lg:col-span-3">
          <div className="px-4 lg:px-0 mb-12">
            <Banners items={page?.banners} />
          </div>
          {!!categoriesProducts?.length &&
            categoriesProducts
              .filter((item) => item?.products?.length)
              .map((item) => {
                return (
                  <div key={item?.id} className="max-w-full">
                    <div className="flex">
                      <h3 className="h5 m-4">{item?.name}</h3>
                      <Button
                        text="Ver todos"
                        theme="secondary"
                        variant="link"
                        href={generateCategoryURL(item)}
                      />
                    </div>
                    <ProductsCarrousel products={item?.products || []} />
                  </div>
                );
              })}
        </main>
      </div>
    </Layout>
  );
};

export default Remates;
