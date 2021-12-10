import Cart from '~/types/Models/Cart';
import { MaxilanCartResponse } from '~/types/Responses';
import maxAxios from '../axios';
import { normalizeProduct } from '../normalizers';

type CartRequest = {
  codigo: string;
  orden: string;
};

export default async function addItem(data: CartRequest): Promise<Cart> {
  const response = await maxAxios.post<MaxilanCartResponse>('/carrito/agregararticulo', data);

  if (!response.orden) {
    throw new Error(
      'Ocurrió un error al agregar el producto al carrito, inténtalo en otra ocasión',
    );
  }

  const { orden, productos, pago } = response;
  return {
    id: orden,
    products: productos.map(normalizeProduct),
    pricing: {
      shipping: pago.envio,
      subtotal: pago.subtotal,
      total: pago.total,
    },
  };
}
