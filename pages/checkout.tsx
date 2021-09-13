import { NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { CheckoutError } from '~/components/checkout';

const CheckoutPage: NextPage = () => {
  return (
    <BareLayout>
      <CheckoutError />
    </BareLayout>
  );
};

export default CheckoutPage;
