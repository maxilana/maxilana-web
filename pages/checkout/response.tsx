import getRawBody from 'raw-body';
import { useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { PageLoader } from '~/components/common';
import { CheckoutError, CheckoutSuccess } from '~/components/checkout';
import { request2DTransaction } from '~/api/payments/checkout';
import { Secure3DTransaction } from '~/types/Responses';
import { CheckoutSuccess as CheckoutData, ErrorCodes } from '~/types/Models';

interface Transaction extends Secure3DTransaction {
  envio: number;
}

type SSRProps = {
  error?: boolean;
  errorCode?: ErrorCodes; // Ver ~/types/Models/Checkout para más info...
  response?: Transaction;
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
      response = {
        ...params,
        envio: shipping,
      };
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

const CheckoutResponsePage: NextPage<Props> = ({ error = false, errorCode, response = null }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CheckoutData | null>(null);

  const processFinalTransaction = async () => {
    const bankTxn = response as Transaction;
    const success = await request2DTransaction(bankTxn);

    setData(success);
    setLoading(false);
  };

  useEffect(() => {
    if (!error && response !== null) {
      processFinalTransaction();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <BareLayout>
      {(() => {
        if (loading) {
          return <PageLoader text="Terminando de procesar el pago..." />;
        }

        if (error) {
          return <CheckoutError code={errorCode || '0'} />;
        }

        return <CheckoutSuccess data={data as CheckoutData} />;
      })()}
    </BareLayout>
  );
};

export default CheckoutResponsePage;
