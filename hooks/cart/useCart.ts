import useSWR from 'swr';
import Cookies from 'js-cookie';

import { CART_ID_COOKIE } from 'config/cart';
import fetcher from '~/modules/api/fetcher';
import { MaxilanCartResponse } from '~/types/Responses';

const useCart = () => {
  const cartToken = Cookies.get(CART_ID_COOKIE);
  const response = useSWR<MaxilanCartResponse>(cartToken ? `/carrito?orden=${cartToken}` : null, {
    fetcher: fetcher,
    revalidateOnFocus: false,
  });

  return {
    data: response?.data,
    isLoading: response.data === undefined,
    isEmpty: response.data && response.data.productos.length < 1,
  };
};

export default useCart;
