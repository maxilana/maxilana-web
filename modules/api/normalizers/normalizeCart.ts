import { Cart } from '~/types/Models/Cart';
import { MaxilanCartResponse } from '~/types/Responses';

type Carrito = MaxilanCartResponse;

const normalizeCart = (object: Carrito): Cart => ({
  id: object.orden,
  products: object.productos.map((item) => ({
    id: item.id,
    name: item.nombre,
    price: item.precio,
  })),
  pricing: {
    total: object.pago.total,
    subtotal: object.pago.subtotal,
    shipping: object.pago.envio,
  },
});

export default normalizeCart;
