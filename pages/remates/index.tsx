import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import getCMSCategories from '~/api/cms/getCMSCategories';
import getCMSRematesPage from '~/api/cms/getCMSRematesPage';
import getAllCities from '~/api/getAllCities';
import getProducts from '~/api/getProducts';
import { Banners, CategoryExplorer } from '~/components/common';
import { Layout } from '~/components/layout';
import { City } from '~/types/Models';
import { CMSCategory } from '~/types/Models/CMSCategory';
import { CMSRematesPage } from '~/types/Models/CMSRematesPage';
import { ProductsCarrousel, ProductsFilters } from '~/components/products';
import { Product } from '~/types/Models/Product';
import parseQuery from '~/utils/parseQuery';

interface GSProps {
  cities?: City[];
  page?: CMSRematesPage;
  categories?: CMSCategory[];
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
            const query: ParsedUrlQuery = { limit: '10', orden: 'rand' };
            if (category?.filters?.categories?.length) {
              query.categoria = category?.filters?.categories
                ?.map((item) => item?.itemID)
                .join(',');
            }
            // TODO: soporte para obtener los productos seleccionados en la categoria (CMS)
            if (category?.filters?.search) query.q = category?.filters?.search;

            return getProducts(query).then((response) => {
              return { ...category, products: response?.rows };
            });
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
      <div className="container mx-auto lg:p-4 grid gap-8 lg:gap-8 lg:grid-cols-4">
        <aside>
          <ProductsFilters
            cities={cities}
            categories={categories || []}
            onFiltersChange={handleFiltersChanges}
          />
        </aside>
        <main className="flex-1 lg:col-span-3">
          <div className="px-4 lg:px-0">
            <Banners items={page?.banners} />
            {!!categories && <CategoryExplorer categories={categories} />}
          </div>
          {!!categoriesProducts?.length &&
            categoriesProducts.map((item) => {
              if (!item?.products?.length) return null;
              return (
                <div key={item?.id} className="max-w-full">
                  <h3 className="h5 m-4">{item?.name}</h3>
                  <ProductsCarrousel products={item?.products} />
                </div>
              );
            })}
        </main>
      </div>
    </Layout>
  );
};

export default Remates;
