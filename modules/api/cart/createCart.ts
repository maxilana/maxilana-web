import { MaxilanCartResponse } from '~/types/Responses';
import maxAxios from '../axios';

export default async function createCart(productId: string): Promise<string> {
  const response = await maxAxios.post<MaxilanCartResponse>('/carrito/nuevo', {
    codigo: productId,
  });

  if (!response?.orden) {
    throw new Error('Ocurrió un error al crear el carrito. Inténtalo en otra ocasión.');
  }

  return response.orden;
}
