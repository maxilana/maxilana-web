import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import Image from 'next/image';
import { CarOutlined, PictureOutlined, ShopOutlined } from '@ant-design/icons';

import { VStack } from '~/components/layout';
import { usePrice } from '~/modules/hooks';

import styles from './Cards.module.css';
import Link from 'next/link';

interface Props {
  title: string;
  price: number;
  branch: string;
  image?: string;
  salePrice?: number;
  onSale?: boolean;
  shipping?: boolean;
  href?: string;
}

const ProductCard: FC<Props> = ({
  title,
  price,
  branch,
  image = null,
  onSale = null,
  shipping = null,
  salePrice = null,
  href = null,
}) => {
  const { price: basePrice } = usePrice({ amount: price });
  const { price: discountPrice } = usePrice(
    salePrice ? { amount: salePrice, baseAmount: price } : undefined,
  );

  return (
    <div className={cn(styles.root, styles.rootProduct, { [styles.productLink]: !!href })}>
      {!!href && (
        <Link href={href}>
          <a className={styles.blockLink} />
        </Link>
      )}
      <div className={cn(styles.productImg, { [styles.productPlaceholder]: image === null })}>
        {image !== null ? (
          <Image src={image} alt={title} objectFit="cover" layout="fill" />
        ) : (
          <PictureOutlined style={{ fontSize: 40, color: 'white' }} />
        )}
      </div>
      <div className={styles.productBody}>
        <VStack spacing="sm">
          <h3 className={styles.productTitle}>
            {!!href ? (
              <Link href={href}>
                <a>{title}</a>
              </Link>
            ) : (
              title
            )}
          </h3>
          <div className={styles.productPrice}>
            {salePrice ? (
              <React.Fragment>
                <span className={styles.productPriceSale}>{discountPrice}</span>
                <span className={styles.productCompareAtPrice}>{basePrice}</span>
              </React.Fragment>
            ) : (
              <span className={styles.productPriceSale}>{basePrice}</span>
            )}
          </div>
          <span className={styles.productBranch}>{branch}</span>
        </VStack>
      </div>
      {onSale && <span className={styles.productSaleBadge}>Oferta</span>}
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
  );
};

export default ProductCard;
