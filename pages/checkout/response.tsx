import getRawBody from 'raw-body';
import { useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { BareLayout } from '~/components/layout';
import { PageLoader } from '~/components/common';
import { CheckoutError, CheckoutSuccess } from '~/components/checkout';
import { Secure3DTransaction } from '~/types/Responses';
import { CheckoutSuccess as CheckoutData, ErrorCodes } from '~/types/Models';
import { request2DTransaction } from '~/api/payments/checkout';

/**
 * CÓDIGOS DE ERROR
 * 100 - NO EXISTE LA VARIABLE DE ENTORNO CON LA URL DEL BANCO
 * 200 - EL BANCO REGRESÓ ERRORES CON EL PAGO
 */

type SSRProps = {
  error?: boolean;
  errorCode?: ErrorCodes;
  response?: Secure3DTransaction;
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (context) => {
  const { query, req } = context;

  if (req.method === 'GET') {
    // PETICIÓN INTERNA
    //  LA URL SE ESCRIBIÓ O REDIRECCIONAMOS DE UN ERROR
    let errorCode: ErrorCodes = '0';

    if (query?.errorCode) {
      errorCode = query.errorCode as ErrorCodes;
    }

    return { props: { error: true, errorCode } };
  } else if (req.method === 'POST') {
    // RESPUESTA DEL BANCO
    //  REVISAMOS STATUS Y RESPUESTA
    const body = await getRawBody(req);
    const parsedString = body.toString('utf8');
    //@ts-ignore
    const params: Secure3DTransaction = Object.fromEntries(new URLSearchParams(parsedString));

    if (params.Status !== '200' || !params?.CAVV || !params?.ECI || !params?.XID) {
      return {
        props: {
          error: true,
          errorCode: '200',
        },
      };
    }

    return {
      props: {
        response: params,
      },
    };
  }

  // CUALQUIER OTRA PETICIÓN DEBERÍA SER UN ERROR
  return {
    props: {
      error: true,
      errorCode: '0',
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const CheckoutResponsePage: NextPage<Props> = ({ error = false, errorCode, response = null }) => {
  const [data, setData] = useState<CheckoutData | null>(null);
  const [loading, setLoading] = useState(true);

  const processFinalTransaction = async () => {
    const bankTxn = response as Secure3DTransaction;
    const success = await request2DTransaction({ ...bankTxn, envio: 100 });

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

        return <CheckoutSuccess />;
      })()}
    </BareLayout>
  );
};

export default CheckoutResponsePage;
