import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import getAllCities from '~/api/getAllCities';
import getBranch from '~/api/getBranch';
import getCityBranchesBySlug from '~/api/getCityBranchesBySlug';

import { Layout } from '~/components/layout';
import getProducts from '~/api/getProducts';
import { Button, ProductCard, ProductsNotFound } from '~/components/ui';
import { Branch, City } from '~/types/Models';
import { Product } from '~/types/Models/Product';
import { Pagination } from '~/types/Pagination';
import slugify from '~/utils/slugify';
import { ProductsFilters } from '~/components/products';
import parseQuery from '~/utils/parseQuery';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

interface GSSProps {
  pagination?: Pagination;
  products?: Product[];
  query?: ParsedUrlQuery;
  cities?: City[];
  branch?: Branch | null;
  city?: City | null;
  branches?: Branch[] | null;
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (ctx) => {
  const { query } = ctx;
  const { page, limit, ...filters } = query || {};

  try {
    const paginatedProducts = await getProducts(query);
    const { rows: products, ...pagination } = paginatedProducts;
    const cities = await getAllCities();
    const branch = typeof filters?.sucursal === 'string' ? await getBranch(filters.sucursal) : null;

    const city =
      branch?.CityId || filters?.ciudad
        ? cities.find((item) =>
            [branch?.CityId, parseInt(filters?.ciudad as string)].includes(item.id),
          )
        : null;
    const branches = city ? await getCityBranchesBySlug(city?.slug) : null;

    return {
      props: {
        pagination,
        products,
        query,
        cities,
        branch,
        city,
        branches,
      },
    };
  } catch (e) {
    console.log('ERROR: getServerSideProps');
    console.log(e);
    return { notFound: 40, props: {} };
  }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Busqueda: NextPage<Props> = ({
  pagination,
  products,
  cities,
  branch,
  city,
  branches,
  query,
}) => {
  return (
    <Layout title="Buscador de productos" cities={cities || []}>
      <main className="container mx-auto p-4 flex gap-8 flex-col md:flex-row mb-12 mt-4">
        <aside className="min-w-[250px] md:max-w-[250px]">
          <ProductsFilters cities={cities} branches={branches} />
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
              <div className="flex space-x-6 justify-center">
                <Button
                  icon={<ArrowLeftOutlined />}
                  text="Anterior"
                  disabled={!pagination?.prev}
                  theme={pagination?.prev ? 'secondary' : 'default'}
                  href={
                    pagination?.prev
                      ? `/busqueda?${parseQuery({
                          ...query,
                          page: `${pagination?.page - 1}`,
                        })}`
                      : undefined
                  }
                />
                <Button
                  text="Siguiente"
                  rightIcon={<ArrowRightOutlined />}
                  disabled={!pagination?.next}
                  theme={pagination?.next ? 'secondary' : 'default'}
                  href={
                    pagination?.next
                      ? `/busqueda?${parseQuery({
                          ...query,
                          page: `${pagination?.page + 1}`,
                        })}`
                      : undefined
                  }
                />
              </div>
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
