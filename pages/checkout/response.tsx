import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { CheckoutError, CheckoutSuccess } from '~/components/checkout';
import validatePayment from '~/utils/validatePayment';
import { request2DTransaction } from '~/api/payments/checkout';
import { Cart, CheckoutResponse, ErrorCodes } from '~/types/Models';
import { getCart } from '~/modules/api/cart';

type SSRProps = {
  error?: boolean;
  response?: {
    cart: Cart;
    order: CheckoutResponse;
  };
  errorCode?: ErrorCodes;
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  try {
    const { query } = context;
    const cartToken: string = (query?.oid as string) ?? undefined;

    const validation = await validatePayment(context);

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

    if (!cartToken) {
      throw new Error('No fue posible encontrar el token del carrito');
    }

    if (!validation?.transaction) {
      return {
        props: {
          error: true,
          errorCode: '0',
        },
      };
    }

    const cart = await getCart(cartToken as string);
    const { transaction } = validation;

    const request2D = {
      ...transaction,
      orden: cartToken,
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
  } catch (err) {
    console.log(err);

    return {
      props: {
        error: true,
        errorCode: '0',
      },
    };
  }
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
