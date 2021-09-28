import Cookies from 'js-cookie';

import { CART_ID_COOKIE } from 'config/cart';

const useRemoveItem = () => {
  const removeItem = () => {
    Cookies.remove(CART_ID_COOKIE);
  };

  return removeItem;
};

export default useRemoveItem;
