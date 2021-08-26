import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import getAllCities from '~/api/getAllCities';

import { Layout } from '~/components/layout';
import getProducts from '~/api/getProducts';
import { Button, ProductCard } from '~/components/ui';
import { City } from '~/types/Models';
import { Product } from '~/types/Models/Product';
import { Pagination } from '~/types/Pagination';
import slugify from '~/utils/slugify';
import { ProductsFilters } from '~/components/products';

interface GSSProps {
  pagination?: Pagination;
  products?: Product[];
  filters?: ParsedUrlQuery;
  cities?: City[];
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (ctx) => {
  const { query } = ctx;
  const { page, limit, ...filters } = query || {};

  try {
    const { rows: products, ...pagination } = await getProducts(query);
    const cities = await getAllCities();
    return {
      props: {
        pagination,
        products,
        filters,
        cities,
      },
    };
  } catch (e) {
    console.log(e);
    return { notFound: 40, props: {} };
  }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Busqueda: NextPage<Props> = ({ pagination, products, cities }) => {
  const imageBaseURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL;
  if (!imageBaseURL) {
    throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
  }
  return (
    <Layout title="Buscador de productos">
      <main className="container mx-auto p-4 flex gap-8 flex-col md:flex-row mb-12 mt-4">
        <aside className="min-w-[250px]">
          <ProductsFilters cities={cities} />
        </aside>
        <div className="flex-">
          <h2 className="h4">Resultado de la búsqueda</h2>
          <p className="text-secondary">{pagination?.count} productos</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 my-12">
            {!!products?.length &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  href={
                    product?.slug
                      ? `/producto/${product?.slug}`
                      : `/producto/${product.id}-${slugify(product.name)}`
                  }
                  title={product.name}
                  price={product.price}
                  salePrice={product.netPrice}
                  image={`${imageBaseURL}/${product.code}.jpg`}
                />
              ))}
          </div>
          <Button text="Cargar mas" fullWidth theme="secondary" />
        </div>
      </main>
    </Layout>
  );
};

export default Busqueda;
