import { FilterOutlined } from '@ant-design/icons';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import omit from 'lodash.omit';
import React from 'react';
import ms from 'ms';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getCMSCategories from '~/api/cms/getCMSCategories';
import getCMSMktPagesSlugs from '~/api/cms/getCMSMktPagesSlugs';
import getMktPageBySlug from '~/api/cms/getMktPageBySlug';
import getAllCities from '~/api/getAllCities';
import getProductsFromCMSFilters from '~/api/getProductsFromCMSFilters';
import { CMSContent } from '~/components/common';
import { Layout } from '~/components/layout';
import { ProductsFilters } from '~/components/products';
import { Button, Img, ProductCard } from '~/components/ui';
import useToggleState from '~/hooks/useToggleState';
import { City, CMSLegal } from '~/types/Models';
import { CMSCategory } from '~/types/Models/CMSCategory';
import { CMSMktPage } from '~/types/Models/CMSMktPage';
import { Product } from '~/types/Models/Product';
import filtersToQueryString, { filtersToQueryParams } from '~/utils/filtersToQueryString';
import parseQuery from '~/utils/parseQuery';

interface GSProps {
  cities?: City[];
  categories?: Array<Partial<CMSCategory>>;
  page?: Partial<CMSMktPage>;
  products?: Product[];
  legalPages: CMSLegal[];
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const slugs = await getCMSMktPagesSlugs();
  return {
    paths: slugs?.map?.((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<GSProps, { slug: string }> = async (ctx) => {
  const { slug } = ctx?.params || {};
  if (!slug) return { notFound: true };

  const [cities, categories, page, legalPages] = await Promise.all([
    getAllCities(),
    getCMSCategories(true),
    getMktPageBySlug(slug as string),
    getAllLegalPages(),
  ]);

  if (!page) return { notFound: true };
  const products = page?.productsFilters
    ? await getProductsFromCMSFilters(page?.productsFilters)
    : [];

  return {
    props: { cities, categories, page, products, legalPages },
    revalidate: ms(process.env.REMATE_REVALIDATE || '10m') / 1000,
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const MarketingPage: NextPage<Props> = ({ page, categories, cities, products, legalPages }) => {
  const [visibleFilter, toggleVisibleFilter] = useToggleState();
  const { push } = useRouter();
  const handleFiltersChanges = (queryParams: ParsedUrlQuery) => {
    push(`/busqueda?${parseQuery(omit(queryParams, 'slug'))}`);
  };

  return (
    <Layout
      title={page?.title}
      meta={{ ...(page?.seo || {}), css: ['/antd/radio.css', '/antd/checkbox.css'] }}
      cities={cities || []}
      legalPages={legalPages}
    >
      <div className="container mx-auto p-4 grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-4">
        <aside>
          <ProductsFilters
            onFiltersChange={handleFiltersChanges}
            cities={cities}
            categories={categories || []}
            visible={visibleFilter}
            onClose={toggleVisibleFilter}
            initialValues={filtersToQueryParams(page?.productsFilters || {})}
          />
        </aside>
        <main className="lg:col-span-3 mb-12">
          {page?.cover?.url && (
            <div className="aspect-w-16 aspect-h-7 relative rounded overflow-hidden mb-6">
              <Img src={page?.cover?.url} layout="fill" />
            </div>
          )}
          <h1 className="h4 mb-8">{page?.title}</h1>
          {!!page?.content && (
            <CMSContent content={page?.content} className="prose max-w-none mb-6" />
          )}
          <div className="fixed inset-x-8 bottom-6 z-10 flex justify-center lg:hidden">
            <Button
              icon={<FilterOutlined />}
              text="Filtros y orden"
              onClick={toggleVisibleFilter}
              theme="secondary"
            />
          </div>
          <div className="productsGrid">
            {products?.map?.((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
          <div className="text-center">
            <Button
              text="Ver mas productos"
              theme="primary"
              size="large"
              href={`/busqueda?${filtersToQueryString(page?.productsFilters || {})}`}
            />
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default MarketingPage;
