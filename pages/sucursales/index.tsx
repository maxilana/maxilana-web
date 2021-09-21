import React, { FC } from 'react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import getAllLegalPages from '~/api/cms/getAllLegalPages';

import { Layout } from '~/components/layout';
import getAllBranches from '~/api/getAllBranches';
import { City, Branch, CMSLegal } from '~/types/Models';
import { BranchesMap } from '~/components/Branches';

interface GSProps {
  branches: Branch[];
  cities: City[];
  legalPages: CMSLegal[];
}

export const getStaticProps: GetStaticProps<GSProps> = async () => {
  const response = await getAllBranches();
  let allBranches: Branch[] = [];
  const cities = response.map(({ branches, ...city }) => {
    allBranches = [...allBranches, ...branches];
    return city;
  });
  const legalPages = await getAllLegalPages();

  return {
    props: { cities, branches: allBranches, legalPages },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<Props> = (props) => {
  return (
    <Layout title="Sucursales" cities={props.cities} legalPages={props.legalPages}>
      <BranchesMap {...props} />
    </Layout>
  );
};

export default Index;
