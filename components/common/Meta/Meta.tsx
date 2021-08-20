import Head from 'next/head';
import React, { FC } from 'react';

export interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta: FC<MetaProps> = ({ title, description, keywords }) => {
  const metaTitle = title ? `${title} | Maxilana` : 'Maxilana | Casa de empeño';
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={description || 'Maxilana casa de empeño y prestamos'} />
      <meta
        name="keywords"
        content={keywords || 'empeño, empeno, facil empeño, prestamos, maxilana, joyeria, remates'}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Meta;
