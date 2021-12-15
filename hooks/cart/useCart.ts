import useSWR from 'swr';
import { useMemo } from 'react';
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

  const productsInCart = useMemo(() => {
    if (data?.carrito) {
      const qtyProducts = data.carrito.reduce((prevValue, currItem) => {
        const { detalle } = currItem;
        const newValue = prevValue + (detalle?.productos?.length ?? 0);

        return newValue;
      }, 0);

      return qtyProducts;
    }

    return 0;
  }, [data]);

  return {
    isEmpty: productsInCart < 1,
    isLoading: isValidating && data === undefined,
    data: data ? normalizeCart(data) : undefined,
    cartLength: productsInCart,
  };
};

export default useCart;
