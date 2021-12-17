import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { CheckoutError, CheckoutSuccess } from '~/components/checkout';
import validatePayment from '~/utils/validatePayment';
import { request2DTransaction } from '~/api/payments/checkout';
import { Cart, ErrorCodes } from '~/types/Models';
import { PaymentTransactionRequest } from '~/types/Requests';
import { getCart } from '~/modules/api/cart';

interface PaymentRequest extends PaymentTransactionRequest {
  total: number;
}

type SSRProps = {
  error?: boolean;
  response?: Cart;
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

  // TODO: Debería regresar la info del envio/cliente
  //  por ahora solo regresa un boolean.
  await request2DTransaction(request2D);

  return {
    props: {
      response: cart,
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
          return <CheckoutSuccess data={response} />;
        }

        return <CheckoutError code={errorCode} />;
      })()}
    </BareLayout>
  );
};

export default CheckoutResponsePage;
