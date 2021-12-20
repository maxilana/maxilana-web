import { mutate } from 'swr';
import Cookies from 'js-cookie';

import { CART_ID_COOKIE } from 'config/cart';
import { removeItemCart } from '~/modules/api/cart';

const useRemoveItem = () => {
  const cartCookie = Cookies.get(CART_ID_COOKIE);

  const removeItem = async (productId: string) => {
    const token = cartCookie;

    if (!cartCookie) {
      throw new Error('Este carrito ya no existe, vuelve a crear uno.');
    }

    const order = await removeItemCart({ codigo: productId, orden: token as string });

    await mutate(`/carrito?orden=${token}`, order, false);
  };

  return removeItem;
};

export default useRemoveItem;
