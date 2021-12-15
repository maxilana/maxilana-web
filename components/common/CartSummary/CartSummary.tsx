import cn from 'classnames';
import { FC } from 'react';
import Image from 'next/image';

import { usePrice } from '~/modules/hooks';
import { Product } from '~/types/Models/Product';

import styles from './CartSummary.module.css';
import { formatPrice } from '~/modules/hooks/usePrice';
import getOnlinePrice from '~/utils/getOnlinePrice';
import { Cart } from '~/types/Models';
import { Img } from '~/components/ui';

interface Props {
  data: Cart;
  shipping?: number;
  loadingShipping?: boolean;
}

const LOCALE = 'es-MX';

const CartSummary: FC<Props> = ({ data, shipping = 0, loadingShipping }) => {
  const { products, pricing, id } = data;
  // const { name, price, image, netPrice, observations, brand } = data;

  // const onlinePrice = getOnlinePrice(netPrice, data?.promoDiscount);
  const totalPrice = formatPrice({ amount: pricing.total, locale: LOCALE });
  const shippingPrice = formatPrice({ amount: pricing.shipping, locale: LOCALE });
  const subtotalPrice = formatPrice({ amount: pricing.subtotal, locale: LOCALE });

  // const {
  //   discount,
  //   basePrice,
  //   price: discountPrice,
  // } = usePrice({ amount: onlinePrice, baseAmount: price });

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className={styles.productRow}>
              <div className={styles.productImage}>
                {product.image && (
                  <Img
                    src={product.image}
                    layout="fill"
                    objectFit="contain"
                    alt={`Thumbnail de ${product.name}`}
                  />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className={styles.productTitle}>{product.name}</h3>
                <div>
                  <div className="text-xs mb-2">
                    <span className="text-secondary">Código: </span>
                    <span>{product.id}</span>
                  </div>
                </div>
                <div className={styles.rowSplit}>
                  <span className="text-secondary">Precio del artículo</span>
                  <span className={styles.amount}>
                    {formatPrice({ amount: product.price, locale: LOCALE })}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-2 border-t border-gray-200 pt-2">
        {/* <div className={styles.rowSplit}>
          <span className="text-secondary">Precio del artículo</span>
          <span className={styles.amount}>{basePrice ?? discountPrice}</span>
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
        )} */}
        <div className={styles.rowSplit}>
          <span className="text-secondary">Subtotal</span>
          <span className={cn(styles.amount)}>{loadingShipping ? '-' : subtotalPrice}</span>
        </div>
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
