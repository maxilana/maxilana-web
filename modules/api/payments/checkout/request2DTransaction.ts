import maxAxios from '~/api/axios';
import { PaymentTransactionRequest } from '~/types/Requests';

interface Body extends PaymentTransactionRequest {
  total: number;
}

type Checkout2DSecureResponse = {
  resultado: boolean;
};

const request2DTransaction = async (data: Body): Promise<boolean> => {
  const response = await maxAxios.post<Checkout2DSecureResponse>(
    '/procesar2dsecure/web/productos',
    data,
  );

  if (!response?.resultado) {
    throw new Error(
      'Ocurrió un error al procesar el pago, comunícate con una sucursal para resolver el problema.',
    );
  }

  return true;
};

export default request2DTransaction;
