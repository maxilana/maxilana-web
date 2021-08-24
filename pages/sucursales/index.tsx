import React, { FC } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { Layout } from '~/components/layout';
import getAllBranches from '~/api/getAllBranches';
import getAllCities from '~/api/getAllCities';
import { City, Branch } from '~/types/Models';
import { BranchesMap } from '~/components/Branches';

export const getStaticProps: GetStaticProps<{ branches: Branch[]; cities: City[] }> = async () => {
  const response = await getAllBranches();
  let allBranches: Branch[] = [];
  const cities = response.map(({ branches, ...city }) => {
    allBranches = [...allBranches, ...branches];
    return city;
  });

  return {
    props: { cities, branches: allBranches },
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
