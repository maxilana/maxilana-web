import Cookies from 'js-cookie';
import { CART_ID_COOKIE } from 'config/cart';
import { Product } from '~/types/Models/Product';

type Cart = {
  data: Product | null;
};

const useCart = (): Cart => {
  const cart = Cookies.get(CART_ID_COOKIE);

  if (!cart) {
    return {
      data: null,
    };
  }

  return {
    data: JSON.parse(cart),
  };
};

export default useCart;
