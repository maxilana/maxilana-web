import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import getAllCities from '~/api/getAllCities';
import getBranch from '~/api/getBranch';

import { Layout } from '~/components/layout';
import getProducts from '~/api/getProducts';
import { Button, ProductCard, ProductsNotFound } from '~/components/ui';
import { Branch, City } from '~/types/Models';
import { Product } from '~/types/Models/Product';
import { Pagination } from '~/types/Pagination';
import slugify from '~/utils/slugify';
import { ProductsFilters } from '~/components/products';

interface GSSProps {
  pagination?: Pagination;
  products?: Product[];
  filters?: ParsedUrlQuery;
  cities?: City[];
  branch?: Branch | null;
  city?: City | null;
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (ctx) => {
  const { query } = ctx;
  const { page, limit, ...filters } = query || {};

  try {
    const { rows: products, ...pagination } = await getProducts(query);
    const cities = await getAllCities();
    const branch =
      typeof filters?.sucursal === 'string' && Number.isInteger(filters.sucursal)
        ? await getBranch(filters.sucursal as string)
        : null;

    const city = branch?.CityId ? cities.find((item) => item.id === branch?.CityId) : null;

    return {
      props: {
        pagination,
        products,
        filters,
        cities,
        branch,
        city,
      },
    };
  } catch (e) {
    console.log(e);
    return { notFound: 40, props: {} };
  }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Busqueda: NextPage<Props> = ({ pagination, products, cities, branch, city }) => {
  return (
    <Layout title="Buscador de productos" cities={cities || []}>
      <main className="container mx-auto p-4 flex gap-8 flex-col md:flex-row mb-12 mt-4">
        <aside className="min-w-[250px]">
          <ProductsFilters cities={cities} />
        </aside>
        <div className="flex-1">
          {!!products?.length ? (
            <>
              <h2 className="h4">Resultado de la búsqueda</h2>
              <p className="text-secondary">{pagination?.count} productos</p>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 my-12">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
              <Button text="Cargar mas" fullWidth theme="secondary" />
            </>
          ) : (
            <ProductsNotFound />
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Busqueda;
