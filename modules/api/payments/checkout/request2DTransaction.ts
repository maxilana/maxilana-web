import maxAxios from '~/api/axios';
import { CheckoutResponse } from '~/types/Models';
import { PaymentTransactionRequest } from '~/types/Requests';
import { MaxilanaCheckout2DResponse } from '~/types/Responses';

interface Body extends PaymentTransactionRequest {
  total: number;
}

const request2DTransaction = async (data: Body): Promise<CheckoutResponse> => {
  const response = await maxAxios.post<MaxilanaCheckout2DResponse>(
    '/procesar2dsecure/web/productos',
    data,
  );

  if (response?.resultado !== true) {
    throw new Error(
      'Ocurrió un error al procesar el pago, comunícate con una sucursal para resolver el problema.',
    );
  }

  const { referencia, datosenvio } = response;

  return {
    reference: referencia,
    shipping: {
      name: datosenvio.nombre,
      cellphone: datosenvio.celular,
      address: datosenvio.domicilio,
      locality: datosenvio.colonia,
      zipcode: datosenvio.codigopostal,
      city: datosenvio.municipio,
      state: datosenvio.estado,
    },
  };
};

export default request2DTransaction;
