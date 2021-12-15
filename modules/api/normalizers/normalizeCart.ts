import { Cart } from '~/types/Models/Cart';
import { MaxilanCartResponse } from '~/types/Responses';

type Carrito = MaxilanCartResponse;

const imageBaseURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL;
if (!imageBaseURL) {
  throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
}

const normalizeCart = (object: Carrito): Cart => ({
  id: object.orden,
  cart: object.carrito.map((item) => ({
    branch: item.plaza,
    details: {
      shipping: Number(item.detalle.envio),
      products: item.detalle.productos.map((product) => ({
        id: product.id,
        name: product.nombre,
        price: product.precio,
        branchId: product.sucursal,
        image: `${imageBaseURL}/${product.id}.jpg`,
      })),
    },
  })),
  pricing: {
    total: object.pago.total,
    subtotal: object.pago.subtotal,
    shipping: object.pago.envio,
  },
});

export default normalizeCart;
