import useSWR from 'swr';
import Cookies from 'js-cookie';

import { CART_ID_COOKIE } from 'config/cart';
import fetcher from '~/modules/api/fetcher';
import { MaxilanCartResponse } from '~/types/Responses';
import { normalizeCart } from '~/modules/api/normalizers';

const useCart = () => {
  const cartToken = Cookies.get(CART_ID_COOKIE);
  const { data, isValidating } = useSWR<MaxilanCartResponse>(
    cartToken ? `/carrito?orden=${cartToken}` : null,
    {
      fetcher: fetcher,
      revalidateOnFocus: false,
    },
  );

  return {
    isLoading: isValidating && data === undefined,
    isEmpty: !!(data?.productos && data.productos.length < 1),
    data: data ? normalizeCart(data) : undefined,
  };
};

export default useCart;
