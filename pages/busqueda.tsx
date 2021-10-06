import cn from 'classnames';
import omit from 'lodash.omit';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined, FilterOutlined } from '@ant-design/icons';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getCMSCategories from '~/api/cms/getCMSCategories';

import getAllCities from '~/api/getAllCities';
import getBranch from '~/api/getBranch';
import getCityBranchesBySlug from '~/api/getCityBranchesBySlug';

import { Layout } from '~/components/layout';
import getProducts from '~/api/getProducts';
import { Button, ProductCard, ProductsNotFound } from '~/components/ui';
import useToggleState from '~/hooks/useToggleState';
import { Branch, City, CMSLegal } from '~/types/Models';
import { CMSCategory } from '~/types/Models/CMSCategory';
import { Product } from '~/types/Models/Product';
import { Pagination } from '~/types/Pagination';
import { AppliedFilters, ProductsFilters } from '~/components/products';
import { filtersToQueryParams } from '~/utils/filtersToQueryString';
import parseQuery from '~/utils/parseQuery';

interface GSSProps {
  pagination?: Pagination;
  products?: Product[];
  query?: ParsedUrlQuery;
  cities?: City[];
  branch?: Branch | null;
  city?: City | null;
  branches?: Branch[] | null;
  categories?: Array<Partial<CMSCategory>>;
  legalPages?: CMSLegal[];
}

export const getServerSideProps: GetServerSideProps<GSSProps> = async (ctx) => {
  const { query } = ctx;
  const { page, limit, ...filters } = query || {};
  const [categories, cities, legalPages] = await Promise.all([
    getCMSCategories(true),
    getAllCities(),
    getAllLegalPages(),
  ]);

  if (query.categoria) {
    const category = categories.find((item) => item.id === query?.categoria);
    const { filters } = category || {};
    if (filters) {
      if (filters?.categories) {
        query.categoria = filters?.categories.map((item) => item?.itemID).join(',');
      }
      Object.assign(filtersToQueryParams(filters), query);
    }
  }

  const paginatedProducts = await getProducts(query);
  const { rows: products, ...pagination } = paginatedProducts;

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
      categories,
      legalPages,
    },
  };
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
  categories,
  legalPages,
}) => {
  const [visibleFilter, toggleVisibleFilter] = useToggleState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const category = categories?.find?.((item) => `${item.id}` === `${router?.query?.categoria}`);

  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      if (url.includes('busqueda')) {
        setLoading(true);
        if (visibleFilter) toggleVisibleFilter();
      }
    };
    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, []);

  const search = (queryParams: ParsedUrlQuery) => {
    router.push(`/busqueda?${parseQuery(omit(queryParams, 'page', 'slug'))}`, undefined, {
      scroll: false,
    });
  };

  return (
    <Layout
      title="Buscador de productos"
      cities={cities || []}
      meta={{ css: ['/antd/radio.css', '/antd/checkbox.css'] }}
      legalPages={legalPages || []}
    >
      <main className="container mx-auto grid p-4 md:px-16 lg:p-4 mb-12 mt-4 lg:grid-cols-4 lg:gap-8 lg:flex-row">
        <aside>
          <ProductsFilters
            categories={categories || []}
            cities={cities}
            branches={branches}
            visible={visibleFilter}
            onClose={toggleVisibleFilter}
            onFiltersChange={search}
          />
        </aside>
        <div className={cn('lg:col-span-3', { 'opacity-50': loading })}>
          <h2 className="h4">
            {(() => {
              if (category?.name) {
                return query?.q ? (
                  <span>
                    {category.name}:{' '}
                    <span className="text-secondary line-clamp-1">
                      {query.q.includes('|')
                        ? `${query.q}`.split('|').map((item) => <span key={item}>{item} </span>)
                        : query.q}
                    </span>
                  </span>
                ) : (
                  category.name
                );
              }
              return query?.q ? (
                <span>{`${query?.q}`.replace?.(/\|/gm, ' | ')}</span>
              ) : (
                'Lista de productos en remate!'
              );
            })()}
          </h2>
          <p className="text-secondary">{pagination?.count} productos</p>
          <AppliedFilters city={city} branch={branch} onFiltersChange={search} />
          <div className="fixed inset-x-8 bottom-6 z-10 flex justify-center lg:hidden">
            <Button
              icon={<FilterOutlined />}
              text="Filtros y orden"
              onClick={toggleVisibleFilter}
              theme="secondary"
            />
          </div>
          {!!products?.length ? (
            <>
              <div className="productsGrid">
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
