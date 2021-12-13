import Cart from '~/types/Models/Cart';
import { MaxilanCartResponse } from '~/types/Responses';
import normalizeProduct from './normalizeProduct';

type Carrito = MaxilanCartResponse;

const normalizeCart = (object: Carrito): Cart => ({
  id: object.orden,
  products: object.productos.map(normalizeProduct),
  pricing: {
    total: object.pago.total,
    subtotal: object.pago.subtotal,
    shipping: object.pago.envio,
  },
});

export default normalizeCart;
