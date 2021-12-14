import maxAxios from '../axios';
import { MaxilanCartResponse } from '~/types/Responses';

type CartRequest = {
  codigo: string;
  orden: string;
};

export default async function removeItem(data: CartRequest): Promise<MaxilanCartResponse> {
  const response = await maxAxios.post<MaxilanCartResponse>('/carrito/eliminararticulo', data);

  if (!response.orden) {
    throw new Error(
      'Ocurrió un error al agregar el producto al carrito, inténtalo en otra ocasión',
    );
  }

  return response;
}
