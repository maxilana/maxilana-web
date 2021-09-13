import Cookies from 'js-cookie';

import { Product } from '~/types/Models/Product';
import { CART_ID_COOKIE, COOKIE_EXPIRATION } from 'config/cart';

const useAddItem = () => {
  const addItem = (data: Product) => {
    const object = JSON.stringify(data);
    Cookies.set(CART_ID_COOKIE, object, { expires: COOKIE_EXPIRATION });

    return data;
  };

  return addItem;
};

export default useAddItem;
