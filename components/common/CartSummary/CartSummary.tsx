import cn from 'classnames';
import { FC } from 'react';
import Image from 'next/image';

import { usePrice } from '~/modules/hooks';
import { Product } from '~/types/Models/Product';

import styles from './CartSummary.module.css';
import useShippingCost from '~/hooks/useShippingCost';

interface Props {
  data: Product;
}

const CartSummary: FC<Props> = ({ data }) => {
  const { name, price, image, netPrice } = data;
  const shipping = useShippingCost(data.id);

  const { price: basePrice } = usePrice({ amount: price });
  const { price: discountPrice } = usePrice(
    netPrice ? { amount: netPrice, baseAmount: price } : undefined,
  );

  const { price: shippingPrice } = usePrice(shipping ? { amount: shipping } : undefined);

  const { price: totalPrice } = usePrice(
    shipping && netPrice ? { amount: netPrice + shipping } : { amount: price + shipping },
  );

  return (
    <div>
      <div className={styles.productRow}>
        <div className={styles.productImage}>
          {image && (
            <Image src={image} layout="fill" objectFit="contain" alt={`Imagen de ${name}`} />
          )}
        </div>
        <div className="flex-1 space-y-2">
          <h5 className={styles.productTitle}>{name}</h5>
          <div className={styles.productPrice}>
            {netPrice ? (
              <>
                <span className={styles.productPriceSale}>{discountPrice}</span>
                <span className={styles.productCompareAtPrice}>{basePrice}</span>
              </>
            ) : (
              <span className={styles.productPriceSale}>{basePrice}</span>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className={styles.rowSplit}>
          <span className="text-secondary">Precio del artículo</span>
          <span className={styles.amount}>{discountPrice ?? basePrice}</span>
        </div>
        <div className={styles.rowSplit}>
          <span className="text-secondary">Precio de envio</span>
          <span className={styles.amount}>{shippingPrice}</span>
        </div>
        <div className={styles.rowSplit}>
          <span className="font-semibold text-lg">Total</span>
          <span className={cn(styles.amount, styles.amountFeat)}>{totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
