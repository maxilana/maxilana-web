import { Cart } from '~/types/Models/Cart';
import { MaxilanCartResponse } from '~/types/Responses';

type Carrito = MaxilanCartResponse;

const imageBaseURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL;
if (!imageBaseURL) {
  throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
}

const normalizeCart = (object: Carrito): Cart => ({
  id: object.orden,
  products: object.productos.map((item) => ({
    id: item.id,
    name: item.nombre,
    price: item.precio,
    image: `${imageBaseURL}/${item.id}.jpg`,
  })),
  pricing: {
    total: object.pago.total,
    subtotal: object.pago.subtotal,
    shipping: object.pago.envio,
  },
});

export default normalizeCart;
