import maxAxios from '~/api/axios';
import { ProductPurchase } from '~/types/Requests';
import { MaxilanaTransaction } from '~/types/Responses';

const request3DTransaction = async (data: ProductPurchase): Promise<MaxilanaTransaction> => {
  const response = await maxAxios.post<MaxilanaTransaction>('/procesar3dsecure/producto', data);

  if (!response.id) {
    throw new Error('Ocurrió un error al procesar el pago, inténtalo en otra ocasión.');
  }

  return response;
};

export default request3DTransaction;
