import cn from 'classnames';
import React, { FC, ReactNode } from "react";
import { CarOutlined, PictureOutlined, ShopOutlined } from "@ant-design/icons";

import { VStack } from "~/components/layout";
import { usePrice } from "~/modules/hooks";

import styles from './Cards.module.css';

interface Props {
  title: string;
  price: number;
  branch: string;
  image?: ReactNode;
  salePrice?: number;
  onSale?: boolean;
  shipping?: boolean;
}

const ProductCard: FC<Props> = ({
  title,
  price,
  branch,
  image = null,
  onSale = null,
  shipping = null,
  salePrice = null,
}) => {
  const { price: basePrice } = usePrice({ amount: price });
  const { price: discountPrice } = usePrice(
    salePrice
      ? { amount: salePrice, baseAmount: price }
      : undefined
  );

  return (
    <div className={`${styles.root} ${styles.rootProduct}`}>
      <div
        className={cn(
          styles.productImg,
          { [styles.productPlaceholder]: image === null }
        )}
      >
        {
          image !== null
            ? image
            : <PictureOutlined style={{ fontSize: 40, color: "white" }} />
        }
      </div>
      <div className={styles.productBody}>
        <VStack spacing="sm">
          <p className={styles.productTitle}>{title}</p>
          <div className={styles.productPrice}>
            {
              salePrice ?
                (
                  <React.Fragment>
                    <span className={styles.productPriceSale}>{discountPrice}</span>
                    <span className={styles.productCompareAtPrice}>{basePrice}</span>
                  </React.Fragment>
                )
                : <span className={styles.productPriceSale}>{basePrice}</span>
            }
          </div>
          <span className={styles.productBranch}>
            {branch}
          </span>
        </VStack>
      </div>
      {onSale && (
        <span className={styles.productSaleBadge}>
          Oferta
        </span>
      )}
      <div className={styles.productBadge}>
        <div className={styles.productBadgeStore}>
          <ShopOutlined style={{ fontSize: 20 }} />
        </div>
        {shipping && (
          <div className={styles.productBadgeShipping}>
            <CarOutlined style={{ fontSize: 20 }} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard;
