import { FilterOutlined } from '@ant-design/icons';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import ms from 'ms';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getCMSCategories from '~/api/cms/getCMSCategories';
import getCMSRematesPage from '~/api/cms/getCMSRematesPage';
import getAllCities from '~/api/getAllCities';
import getProductsFromCMSFilters from '~/api/getProductsFromCMSFilters';
import { Banners } from '~/components/common';
import { Layout } from '~/components/layout';
import useToggleState from '~/hooks/useToggleState';
import { City, CMSLegal } from '~/types/Models';
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
  legalPages: CMSLegal[];
}

export const getStaticProps: GetStaticProps<GSProps> = async () => {
  try {
    const [cities, page, categories, legalPages] = await Promise.all([
      getAllCities(),
      getCMSRematesPage(),
      getCMSCategories(true),
      getAllLegalPages(),
    ]);
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
      props: { cities, page, categories, categoriesProducts, legalPages },
      revalidate: ms(process.env.REMATE_REVALIDATE || '10m') / 1000,
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

const Remates: NextPage<Props> = ({ cities, page, categories, categoriesProducts, legalPages }) => {
  const { push } = useRouter();
  const [visibleFilter, toggleVisibleFilter] = useToggleState();

  const handleFiltersChanges = (queryParams: ParsedUrlQuery) => {
    push(`/busqueda?${parseQuery(queryParams)}`);
  };

  return (
    <Layout
      meta={{ ...(page?.seo || {}), css: ['/antd/radio.css', '/antd/checkbox.css'] }}
      cities={cities || []}
      legalPages={legalPages}
    >
      <div className="container mx-auto lg:p-4 grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-4">
        <aside>
          <ProductsFilters
            cities={cities}
            categories={categories || []}
            visible={visibleFilter}
            onClose={toggleVisibleFilter}
            onFiltersChange={handleFiltersChanges}
          />
        </aside>
        <div className="fixed inset-x-8 bottom-6 z-10 flex justify-center lg:hidden">
          <Button
            icon={<FilterOutlined />}
            text="Filtros y orden"
            onClick={toggleVisibleFilter}
            theme="secondary"
          />
        </div>
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
