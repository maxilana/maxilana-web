import { NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { ConfirmPurchase } from '~/components/checkout';
import useCart from '~/hooks/cart/useCart';

const CheckoutPage: NextPage = () => {
  const { data } = useCart();

  return (
    <BareLayout>
      {data !== null ? <ConfirmPurchase product={data} /> : <h1>No hay productos</h1>}
    </BareLayout>
  );
};

export default CheckoutPage;
