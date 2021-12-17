import maxAxios from '~/api/axios';
import { CheckoutSuccess } from '~/types/Models';
import { PaymentTransactionRequest } from '~/types/Requests';
import { MaxilanaSecure2DResponse } from '~/types/Responses';

interface Body extends PaymentTransactionRequest {
  envio: number;
}

const request2DTransaction = async (data: Body): Promise<CheckoutSuccess> => {
  if (!process.env.NEXT_PUBLIC_CHECKOUT_2DSECURE) {
    throw new Error(
      'Ocurrió un error al procesar el pago, la ENV no está definida para los pagos.',
    );
  }

  const response = await maxAxios.post<MaxilanaSecure2DResponse>(
    process.env.NEXT_PUBLIC_CHECKOUT_2DSECURE,
    data,
  );

  if (!response.referencia) {
    throw new Error('Ocurrió un error al procesar el pago, inténtalo en otra ocasión.');
  }

  const { referencia, monto, articulo, contacto, dom, mun, ciudad, nombreenvio, envio } = response;

  return {
    reference: referencia,
    amount: Number(monto),
    productName: articulo,
    contactName: contacto,
    shipping: {
      address: dom,
      city: ciudad,
      locality: mun,
      contactName: nombreenvio,
      amount: Number(envio),
    },
  };
};

export default request2DTransaction;
