import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { CheckoutError, CheckoutSuccess } from '~/components/checkout';
import validatePayment from '~/utils/validatePayment';
import { request2DTransaction } from '~/api/payments/checkout';
import { CheckoutSuccess as CheckoutData, ErrorCodes } from '~/types/Models';
import { PaymentTransactionRequest } from '~/types/Requests';

interface PaymentRequest extends PaymentTransactionRequest {
  envio: number;
}

type SSRProps = {
  error?: boolean;
  response?: CheckoutData;
  errorCode?: ErrorCodes; // Ver ~/types/Models/Checkout para más info...
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const { query } = context;
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

  if (!validation?.transaction) {
    return {
      props: {
        error: true,
        errorCode: '0',
      },
    };
  }

  const shipping = Number(query.scost);
  const request2D: PaymentRequest = {
    ...validation.transaction,
    envio: shipping,
  };

  const response = await request2DTransaction(request2D);

  return {
    props: {
      response,
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
