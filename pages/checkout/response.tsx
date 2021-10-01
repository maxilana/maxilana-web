import getRawBody from 'raw-body';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { CheckoutError, CheckoutSuccess } from '~/components/checkout';
import { request2DTransaction } from '~/api/payments/checkout';
import { Secure3DTransaction } from '~/types/Responses';
import { CheckoutSuccess as CheckoutData, ErrorCodes } from '~/types/Models';

interface Transaction extends Secure3DTransaction {
  envio: number;
}

type SSRProps = {
  error?: boolean;
  response?: CheckoutData;
  errorCode?: ErrorCodes; // Ver ~/types/Models/Checkout para más info...
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  let error = false;
  let response = undefined;
  let errorCode: ErrorCodes = '0';
  const { query, req } = context;

  if (req.method === 'GET') {
    // PETICIÓN INTERNA
    //  LA URL SE ESCRIBIÓ REDIRECCIONAMOS AL HOME
    if (!query?.error && !query?.errorCode) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    // O SI EXISTEN LAS VARIABLES DE ERROR
    //  MOSTRAMOS UN ERROR
    error = true;
    errorCode = query.errorCode as ErrorCodes;
  } else if (req.method === 'POST') {
    // RESPUESTA DEL BANCO
    //  OBTENEMOS LA RESPUESTA
    const body = await getRawBody(req);
    const parsedString = body.toString('utf8');
    //@ts-ignore
    const params: Secure3DTransaction = Object.fromEntries(new URLSearchParams(parsedString));

    //  REVISAMOS STATUS Y RESPUESTA
    if (params.Status !== '200' || !params?.CAVV || !params?.ECI || !params?.XID) {
      error = true;
      errorCode = params.Status !== '200' ? (params.Status as ErrorCodes) : '200';
    } else {
      const shipping = Number(query.scost);
      const request2D: Transaction = {
        ...params,
        envio: shipping,
      };

      response = await request2DTransaction(request2D);
    }
  }

  return {
    props: {
      error,
      errorCode,
      ...(response !== undefined ? response : undefined),
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
