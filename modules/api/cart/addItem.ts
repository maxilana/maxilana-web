import maxAxios from '../axios';
import { Cart } from '~/types/Models/Cart';
import { MaxilanCartResponse } from '~/types/Responses';

type CartRequest = {
  codigo: string;
  orden: string;
};

export default async function addItem(data: CartRequest): Promise<MaxilanCartResponse> {
  const response = await maxAxios.post<MaxilanCartResponse>('/carrito/agregararticulo', data);

  if (!response.orden) {
    throw new Error(
      'Ocurrió un error al agregar el producto al carrito, inténtalo en otra ocasión',
    );
  }

  return response;
}
