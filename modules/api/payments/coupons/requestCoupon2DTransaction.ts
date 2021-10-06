import maxAxios from '~/api/axios';
import { PaymentTransactionRequest } from '~/types/Requests';

type Body = PaymentTransactionRequest;
type Resp = 'A' | 'D';

const requestCoupon2DTransaction = async (data: Body): Promise<boolean> => {
  const response = await maxAxios.post<Resp>('/procesar2dsecure/vales', data);

  if (response === 'D') {
    return false;
  }

  return true;
};

export default requestCoupon2DTransaction;
