import { NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { ConfirmPurchase } from '~/components/checkout';

const CheckoutPage: NextPage = () => {
  return (
    <BareLayout>
      <ConfirmPurchase />
    </BareLayout>
  );
};

export default CheckoutPage;
