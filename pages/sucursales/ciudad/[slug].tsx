import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import getCityBranches from '~/api/getCityBranches';

import { Layout } from '~/components/layout';
import getAllBranches from '~/api/getAllBranches';
import getAllCities from '~/api/getAllCities';
import { City, Branch } from '~/types/Models';
import { BranchesMap } from '~/components/Branches';
import slugify from '~/utils/slugify';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const cities = await getAllCities();
  const slugs = cities.map((city) => slugify(city.name));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true,
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

  const branches = currentCity ? await getCityBranches(currentCity?.id) : [];

  return {
    props: { cities, branches, currentCity },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<Props> = (props) => {
  return (
    <Layout title="Sucursales">
      <BranchesMap {...props} />
    </Layout>
  );
};

export default Index;
