import maxAxios from '~/api/axios';
import { Pawn2DRequest } from '~/types/Requests';

type Pawn2DSecureResponse = {
  resultado: boolean;
};

const requestPawn2DTransaction = async (data: Pawn2DRequest): Promise<boolean> => {
  const response = await maxAxios.post<Pawn2DSecureResponse>('/procesar2dsecure/web/boletas', data);

  if (!response?.resultado) {
    throw new Error(
      'Ocurrió un error al procesar el pago, comunícate con una sucursal para resolver el problema.',
    );
  }

  return true;
};

export default requestPawn2DTransaction;
