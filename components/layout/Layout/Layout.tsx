import React, { FC, PropsWithChildren } from 'react';
import { Meta } from '~/components/common';
import { MetaProps } from '~/components/common/Meta/Meta';
import { Footer, Navbar } from '~/components/layout';
import { City } from '~/types/Models';

interface Props {
  title?: string;
  meta?: MetaProps;
  cities: City[];
  bgWhite?: boolean;
}

const Layout: FC<PropsWithChildren<Props>> = ({ title, meta, cities = [], children, bgWhite }) => {
  return (
    <>
      <Meta title={title} {...meta} />
      <div className="min-h-screen flex flex-col">
        <Navbar cities={cities} />
        <main className={`flex-1${bgWhite ? ' bg-white' : ''}`}>{children}</main>
        <Footer cities={cities} />
      </div>
    </>
  );
};

export default Layout;
