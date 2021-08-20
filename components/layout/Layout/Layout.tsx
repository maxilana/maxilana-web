import React, { FC, PropsWithChildren } from 'react';
import { Meta } from '~/components/common';
import { MetaProps } from '~/components/common/Meta/Meta';
import { Footer, Navbar } from '~/components/layout';

interface Props {
  title?: string;
  meta?: MetaProps;
}

const Layout: FC<PropsWithChildren<Props>> = ({ title, meta, children }) => {
  return (
    <>
      <Meta title={title} {...meta} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
