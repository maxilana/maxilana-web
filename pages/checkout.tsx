import { NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { CheckoutSuccess, ConfirmPurchase } from '~/components/checkout';

const CheckoutPage: NextPage = () => {
  return (
    <BareLayout>
      <CheckoutSuccess />
    </BareLayout>
  );
};

export default CheckoutPage;
