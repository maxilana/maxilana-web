import maxAxios from '~/api/axios';
import { PawnPaymentRequest } from '~/types/Requests';
import { MaxilanaTransaction } from '~/types/Responses';

const requestPawn3DTransaction = async (data: PawnPaymentRequest): Promise<MaxilanaTransaction> => {
  const response = await maxAxios.post<MaxilanaTransaction>('/procesar3dsecure/boletas', data);

  if (!response.id) {
    throw new Error('Ocurrió un error al procesar el pago, inténtalo en otra ocasión.');
  }

  return response;
};

export default requestPawn3DTransaction;
