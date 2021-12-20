import getRawBody from 'raw-body';
import { GetServerSidePropsContext } from 'next';

import { ErrorCodes } from '~/types/Models';
import { normalize3DTransaction } from '~/api/normalizers';
import { PaymentTransactionRequest } from '~/types/Requests';

type Validation = {
  redirect?: boolean;
  error?: {
    errorCode: ErrorCodes;
  };
  transaction?: PaymentTransactionRequest;
};

/**
 * Función que valida la respuesta del banco cuando se realiza un pago
 */
const validatePayment = async (context: GetServerSidePropsContext): Promise<Validation> => {
  const { query, req } = context;

  // PETICIÓN INTERNA
  if (req.method === 'GET') {
    // SI LA URL SE ESCRIBIÓ REDIRECCIONAMOS AL HOME
    if (!query?.error && !query?.errorCode) {
      return {
        redirect: true,
      };
    }

    return {
      error: {
        errorCode: query.errorCode as ErrorCodes,
      },
    };
  }
  // RESPUESTA DEL BANCO
  else if (req.method === 'POST') {
    // OBTENEMOS LA RESPUESTA
    const bankresponse = await getRawBody(req);
    const paymentrequest = normalize3DTransaction(bankresponse);

    //  REVISAMOS STATUS Y RESPUESTA
    if (
      paymentrequest.status !== '200' ||
      !paymentrequest?.cavv ||
      !paymentrequest?.eci ||
      !paymentrequest?.xid
    ) {
      return {
        error: {
          errorCode:
            paymentrequest.status !== '200' ? (paymentrequest.status as ErrorCodes) : '200',
        },
      };
    }

    return {
      transaction: paymentrequest,
    };
  } else {
    // CUALQUIER OTRO MÉTODO ERROR
    return {
      error: {
        errorCode: '0',
      },
    };
  }
};

export default validatePayment;
