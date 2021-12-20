import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { CheckoutError, CheckoutSuccess } from '~/components/checkout';
import validatePayment from '~/utils/validatePayment';
import { request2DTransaction } from '~/api/payments/checkout';
import { Cart, CheckoutResponse, ErrorCodes } from '~/types/Models';
import { PaymentTransactionRequest } from '~/types/Requests';
import { getCart } from '~/modules/api/cart';

interface PaymentRequest extends PaymentTransactionRequest {
  total: number;
}

type SSRProps = {
  error?: boolean;
  response?: {
    cart: Cart;
    order: CheckoutResponse;
  };
  errorCode?: ErrorCodes; // Ver ~/types/Models/Checkout para más info...
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const {
    req: { cookies },
  } = context;
  const validation = await validatePayment(context);
  const cartToken = cookies['maxilana_cart_cookie'] ?? undefined;

  if (validation?.redirect) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (validation?.error) {
    return {
      props: {
        error: true,
        errorCode: validation.error.errorCode,
      },
    };
  }

  if (!validation?.transaction || !cartToken) {
    return {
      props: {
        error: true,
        errorCode: '0',
      },
    };
  }

  const cart = await getCart(cartToken);

  const request2D: PaymentRequest = {
    ...validation.transaction,
    total: cart.pricing.total,
  };

  const order = await request2DTransaction(request2D);

  return {
    props: {
      response: {
        cart,
        order,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const CheckoutResponsePage: NextPage<Props> = ({
  error = false,
  errorCode = '0',
  response = null,
}) => {
  return (
    <BareLayout>
      {(() => {
        if (response !== null && !error) {
          return <CheckoutSuccess cart={response.cart} order={response.order} />;
        }

        return <CheckoutError code={errorCode} />;
      })()}
    </BareLayout>
  );
};

export default CheckoutResponsePage;
