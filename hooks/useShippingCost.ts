import useSWR from 'swr';

import fetcher from '~/api/fetcher';
import { GetShippingCost } from '~/types/Responses/GetShippingCost';

const useShippingCost = (id: string): number => {
  const { data, isValidating } = useSWR<GetShippingCost>(`/obtenercostoenvio/${id}`, {
    fetcher: fetcher,
    revalidateOnFocus: false,
  });

  if (!isValidating && data !== undefined) {
    const amount = data[0].costotipo;

    return Number(amount);
  }

  return 0;
};

export default useShippingCost;
