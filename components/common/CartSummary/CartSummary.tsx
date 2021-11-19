import cn from 'classnames';
import { FC } from 'react';
import Image from 'next/image';

import { usePrice } from '~/modules/hooks';
import { Product } from '~/types/Models/Product';

import styles from './CartSummary.module.css';

interface Props {
  data: Product;
  shipping?: number;
  loadingShipping?: boolean;
}

const CartSummary: FC<Props> = ({ data, shipping = 0, loadingShipping }) => {
  const { name, price, image, netPrice, observations, brand } = data;

  const { price: shippingPrice } = usePrice({ amount: shipping });

  const {
    price: discountPrice,
    basePrice,
    discount,
  } = usePrice({ amount: netPrice, baseAmount: price });

  const { price: totalPrice } = usePrice(
    discount ? { amount: netPrice + shipping } : { amount: price + shipping },
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
          <div>
            <div className="text-xs mb-2">
              <p className="text-secondary">Marca:</p>
              <p>{brand}</p>
            </div>
            <div className="text-xs mb-2">
              <p className="text-secondary">Descripción:</p>
              <p>{observations}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className={styles.rowSplit}>
          <span className="text-secondary">Precio del artículo</span>
          <span className={styles.amount}>{basePrice}</span>
        </div>
        {discount && (
          <div className={styles.rowSplit}>
            <span className="text-secondary">Descuento</span>
            <span className={styles.amount}>{discount}</span>
          </div>
        )}
        {discount && (
          <div className={styles.rowSplit}>
            <span className="text-secondary">Precio con descuento</span>
            <span className={styles.amount}>{discountPrice}</span>
          </div>
        )}
        <div className={styles.rowSplit}>
          <span className="text-secondary">Precio de envio</span>
          <span className={styles.amount}>{loadingShipping ? '...' : shippingPrice}</span>
        </div>
        <div className={styles.rowSplit}>
          <span className="font-semibold text-lg">Total</span>
          <span className={cn(styles.amount, styles.amountFeat)}>
            {loadingShipping ? '-' : totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
