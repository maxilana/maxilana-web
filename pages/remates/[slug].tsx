import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import getCMSCategories from '~/api/cms/getCMSCategories';
import getCMSMktPagesSlugs from '~/api/cms/getCMSMktPagesSlugs';
import getMktPageBySlug from '~/api/cms/getMktPageBySlug';
import getAllCities from '~/api/getAllCities';
import getProductsFromCMSFilters from '~/api/getProductsFromCMSFilters';
import { Markdown } from '~/components/common';
import { Layout } from '~/components/layout';
import { ProductsFilters } from '~/components/products';
import { Button, Img, ProductCard } from '~/components/ui';
import { City } from '~/types/Models';
import { CMSCategory } from '~/types/Models/CMSCategory';
import { CMSMktPage } from '~/types/Models/CMSMktPage';
import { Product } from '~/types/Models/Product';

interface GSProps {
  cities?: City[];
  categories?: Array<Partial<CMSCategory>>;
  page?: Partial<CMSMktPage>;
  products?: Product[];
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const slugs = await getCMSMktPagesSlugs();
  return {
    paths: slugs?.slice?.(0, 1)?.map?.((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<GSProps, { slug: string }> = async (ctx) => {
  const { slug } = ctx?.params || {};
  if (!slug) return { notFound: true };
  const cities = await getAllCities();
  const categories = await getCMSCategories();
  const page = await getMktPageBySlug(slug as string);
  const products = page?.productsFilters
    ? await getProductsFromCMSFilters(page?.productsFilters)
    : [];

  if (!page) return { notFound: true };

  return {
    props: { cities, categories, page, products },
    revalidate: 10 * 60, // Each 10 minutes
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const MarketingPage: NextPage<Props> = ({ page, categories, cities, products }) => {
  return (
    <Layout
      title={page?.title}
      meta={{ title: page?.seo?.metaTitle, description: page?.seo?.metaDescription }}
      cities={cities || []}
    >
      <div className="container mx-auto lg:p-4 grid grid-cols-1 gap-8 lg:gap-8 lg:grid-cols-4">
        <aside>
          <ProductsFilters
            onFiltersChange={console.log}
            cities={cities}
            categories={categories || []}
          />
        </aside>
        <main className="lg:col-span-3">
          {page?.cover?.url && (
            <div className="aspect-w-16 aspect-h-7 relative rounded overflow-hidden mb-6">
              <Img src={page?.cover?.url} layout="fill" />
            </div>
          )}
          <h1 className="h4 mb-8">{page?.title}</h1>
          {!!page?.content && (
            <Markdown content={page?.content} className="prose max-w-none mb-6" />
          )}
          <div className="productsGrid">
            {products?.map?.((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
          <Button text="Ver mas productos" href={`/busqueda?`} />
        </main>
      </div>
    </Layout>
  );
};

export default MarketingPage;
