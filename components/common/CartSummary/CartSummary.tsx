import cn from 'classnames';
import { FC } from 'react';

import { usePrice } from '~/modules/hooks';
import { Product } from '~/types/Models/Product';

import styles from './CartSummary.module.css';

interface Props {
  data: Product;
}

const CartSummary: FC<Props> = ({ data }) => {
  const { name, price, netPrice } = data;

  const { price: basePrice } = usePrice({ amount: price });
  const { price: discountPrice } = usePrice(
    netPrice ? { amount: netPrice, baseAmount: price } : undefined,
  );

  return (
    <div>
      <div className={styles.productRow}>
        <div className={styles.productImage} />
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
          <span className={styles.amount}>{basePrice}</span>
        </div>
        <div className={styles.rowSplit}>
          <span className="text-secondary">Precio entrega</span>
          <span className={styles.amount}>$200.00</span>
        </div>
        <div className={styles.rowSplit}>
          <span className="text-secondary">Impuestos</span>
          <span className={styles.amount}>$43.40</span>
        </div>
        <div className={styles.rowSplit}>
          <span className="font-semibold text-lg">Total</span>
          <span className={cn(styles.amount, styles.amountFeat)}>$4551.70</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
