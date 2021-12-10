import { mutate } from 'swr';
import Cookies from 'js-cookie';
import deepmerge from 'deepmerge';
import { addItemCart, createCart } from '~/modules/api/cart';
import { CART_ID_COOKIE, COOKIE_EXPIRATION } from 'config/cart';
import Cart from '~/types/Models/Cart';
import { Product } from '~/types/Models/Product';

const useAddItem = () => {
  const cartCookie = Cookies.get(CART_ID_COOKIE);

  const addItem = async (product: Product) => {
    let token = cartCookie;
    const productId = product.id;

    if (!token) {
      const orderId = await createCart(productId);
      Cookies.set(CART_ID_COOKIE, orderId, { expires: COOKIE_EXPIRATION });
    } else {
      await addItemCart({ codigo: productId, orden: token as string });
    }

    await mutate(
      `/carrito?orden=${token}`,
      (cached: Cart) => {
        const updatedCart = deepmerge(cached, { products: [product] });

        return updatedCart;
      },
      !!token,
    );
  };

  return addItem;
};

export default useAddItem;
