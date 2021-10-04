import maxAxios from '~/api/axios';
import { PawnPaymentSuccess } from '~/types/Models';
import { PaymentTransactionRequest } from '~/types/Requests';
import { PawnSecure2DResponse } from '~/types/Responses';

type Body = PaymentTransactionRequest;

const requestLoan2DTransaction = async (data: Body): Promise<PawnPaymentSuccess> => {
  const response = await maxAxios.post<PawnSecure2DResponse>(
    '/procesar2dsecure/boletas/prueba',
    data,
  );

  if (!response.referencia) {
    throw new Error(
      'Ocurrió un error al procesar el pago, comunícate con una sucursal para resolver el problema.',
    );
  }

  const { cliente, sucod, sucnom, boleta, monto, codaut, referencia } = response;

  return {
    reference: referencia,
    reference3D: cliente,
    branchCode: sucod,
    branchName: sucnom,
    accountNumber: boleta,
    paymentAmount: Number(monto),
    authCode: codaut,
  };
};

export default requestLoan2DTransaction;
