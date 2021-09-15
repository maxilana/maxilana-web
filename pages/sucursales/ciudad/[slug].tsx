import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import getCityBranchesBySlug from '~/api/getCityBranchesBySlug';

import { Layout } from '~/components/layout';
import getAllCities from '~/api/getAllCities';
import { City, Branch } from '~/types/Models';
import { BranchesMap } from '~/components/Branches';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const cities = await getAllCities();
  const slugs = cities.map((city) => city?.slug);

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  branches: Branch[];
  cities: City[];
  currentCity?: City;
}> = async (ctx) => {
  const slug = ctx?.params?.slug as string;
  const cities = await getAllCities();
  const currentCity = cities.find((city) => city.slug === slug);

  const branches = currentCity ? await getCityBranchesBySlug(slug) : [];

  return {
    props: { cities, branches, currentCity },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<Props> = (props) => {
  return (
    <Layout title="Sucursales" cities={props.cities}>
      <BranchesMap {...props} zoom={12} />
    </Layout>
  );
};

export default Index;
