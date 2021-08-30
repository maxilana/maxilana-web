import React, { FC, PropsWithChildren } from 'react';
import { Meta } from '~/components/common';
import { MetaProps } from '~/components/common/Meta/Meta';
import { Footer, Navbar } from '~/components/layout';
import { City } from '~/types/Models';

interface Props {
  title?: string;
  meta?: MetaProps;
  cities: City[];
}

const Layout: FC<PropsWithChildren<Props>> = ({ title, meta, cities, children }) => {
  return (
    <>
      <Meta title={title} {...meta} />
      <Navbar cities={cities} />
      <main>{children}</main>
      <Footer cities={cities} />
    </>
  );
};

export default Layout;
