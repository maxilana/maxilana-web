import Cookies from 'js-cookie';

import { CART_ID_COOKIE } from 'config/cart';
import { useEffect } from 'react';

export default function useRemoveCart() {
  useEffect(() => {
    Cookies.remove(CART_ID_COOKIE);
  }, []);
}
