import { Cart } from '~/types/Models';
import { MaxilanCartResponse } from '~/types/Responses';
import maxAxios from '../axios';
import { normalizeCart } from '../normalizers';

export default async function getCart(cartToken: string): Promise<Cart> {
  const response = await maxAxios.get<MaxilanCartResponse>(`/carrito?orden=${cartToken}`);

  if (!response?.orden) {
    throw new Error('Ocurrió un error obtener los datos de la compra.');
  }

  return normalizeCart(response);
}
