import { FC, useState } from 'react';

import { Button, Img } from '~/components/ui';
import useRemoveItem from '~/hooks/cart/useRemoveItem';
import { usePrice } from '~/modules/hooks';
import { CartProduct } from '~/types/Models';

interface Props {
  data: CartProduct;
}

const LineItem: FC<Props> = ({ data }) => {
  const removeItem = useRemoveItem();
  const [removing, setRemoving] = useState(false);
  const { price } = usePrice({ amount: data?.price });

  const handleRemove = async () => {
    setRemoving(true);

    try {
      await removeItem(data.id);
      setRemoving(false);
    } catch (error) {
      setRemoving(false);
      console.log(error);
    }
  };

  return (
    <div className="p-4 flex flex-row space-x-4">
      <div>
        <Img
          src={data.image}
          width={132}
          height={132}
          objectFit="cover"
          placeholder="empty"
          alt={`Thumbnail de producto: ${data.name}`}
        />
      </div>
      <div>
        <h2 className="h6">{data.name}</h2>
        <p className="text-secondary tex-sm mb-2">{`Código: ${data.id}`}</p>
        <span className="block mb-2 text-danger font-semibold">{price}</span>
        <Button
          size="small"
          theme="danger"
          variant="link"
          loading={removing}
          text={removing ? 'Eliminando...' : 'Eliminar'}
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};

export default LineItem;
