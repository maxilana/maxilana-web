import maxAxios from '~/api/axios';
import { LoanPaymentRequest } from '~/types/Requests';
import { MaxilanaTransaction } from '~/types/Responses';

const requestLoan3DTransaction = async (data: LoanPaymentRequest): Promise<MaxilanaTransaction> => {
  const response = await maxAxios.post<MaxilanaTransaction>(
    '/procesar3dsecure/prestamopersonal',
    data,
  );

  if (!response.id) {
    throw new Error('Ocurrió un error al procesar el pago, inténtalo en otra ocasión.');
  }

  return response;
};

export default requestLoan3DTransaction;
