import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { PaymentError, PaymentSuccess } from '~/components/payments';
import validatePayment from '~/utils/validatePayment';
import {
  requestCoupon2DTransaction,
  requestLoan2DTransaction,
  requestPawn2DTransaction,
} from '~/api/payments';
import { ErrorCodes, PawnPaymentSuccess } from '~/types/Models';
import { Pawn2DRequest } from '~/types/Requests';

interface SSRProps {
  error?: boolean;
  errorCode?: ErrorCodes;
  response?: boolean | PawnPaymentSuccess;
}

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

  try {
    let response;
    const request2D = validation.transaction;

    if (query?.type === 'coupons') {
      response = await requestCoupon2DTransaction(request2D);
    } else if (query?.type === 'loans') {
      response = await requestLoan2DTransaction(request2D);
    } else if (query?.type === 'pawns') {
      // ASÍ ME LO PIDEN...
      const pawn2DRequest = {
        ...request2D,
        Cliente: query?.client,
        total: query?.total ? Number(query?.total) : undefined,
      } as Pawn2DRequest;

      response = await requestPawn2DTransaction(pawn2DRequest);
    }

    return {
      props: {
        response,
      },
    };
  } catch (err) {
    return {
      props: {
        error: true,
        errorCode: '0',
      },
    };
  }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const PaymentResponsePage: NextPage<Props> = ({ error = false, errorCode, response = null }) => {
  return (
    <BareLayout>
      {(() => {
        if (response && !error) {
          return <PaymentSuccess />;
        }

        return <PaymentError code={errorCode} />;
      })()}
    </BareLayout>
  );
};

export default PaymentResponsePage;
