import { FC } from 'react';

import { Button } from '~/components/ui';
import useRemoveItem from '~/hooks/cart/useRemoveItem';
import { usePrice } from '~/modules/hooks';
import { CartProduct } from '~/types/Models';

interface Props {
  data: CartProduct;
}

const LineItem: FC<Props> = ({ data }) => {
  const removeItem = useRemoveItem();
  const { price } = usePrice({ amount: data?.price });

  const handleRemove = async () => {
    try {
      await removeItem(data.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <td className="p-4 border-b border-gray-200">
      <h2 className="h6">{data.name}</h2>
      <p className="text-secondary tex-sm mb-2">{`Código: ${data.id}`}</p>
      <span className="block mb-2 text-danger font-semibold">{price}</span>
      <Button size="small" theme="danger" text="Eliminar" variant="link" onClick={handleRemove} />
    </td>
  );
};

export default LineItem;
