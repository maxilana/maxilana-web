import cn from 'classnames';
import React, { FC, ReactNode } from 'react';
import { PictureOutlined } from '@ant-design/icons';

import { VStack } from '~/components/layout';
import { usePrice } from '~/modules/hooks';
import { Img } from '~/components/ui';
import { Product } from '~/types/Models/Product';
import slugify from '~/utils/slugify';

import styles from './Cards.module.css';
import Link from 'next/link';
import ProductBadge from '~/components/products/ProductBadge';

interface Props {
  data: Product;
  className?: string;
}

const ProductCard: FC<Props> = ({ data, className }) => {
  const { image, name, price, Branch, saleOnline, netPrice, id } = data;
  const href = `/producto/${id}-${slugify(name)}`;

  const { price: basePrice } = usePrice({ amount: price });
  const { price: discountPrice } = usePrice(
    netPrice ? { amount: netPrice, baseAmount: price } : undefined,
  );

  return (
    <div
      className={cn(styles.root, styles.rootProduct, { [styles.productLink]: !!href }, className)}
    >
      {!!href && (
        <Link href={href}>
          <a className={styles.blockLink} />
        </Link>
      )}
      <div className={styles.productImgWrapper}>
        <div className={cn(styles.productImg, { [styles.productPlaceholder]: image === null })}>
          {image !== null ? (
            <Img src={image} alt={name} objectFit="contain" layout="fill" />
          ) : (
            <div className="flex justify-center items-center">
              <PictureOutlined />
            </div>
          )}
        </div>
        <div className={styles.productBadge}>
          <ProductBadge type="shop" />
          {saleOnline && <ProductBadge type="car" />}
        </div>
      </div>
      <div className={styles.productBody}>
        <h3 className={styles.productTitle}>
          {!!href ? (
            <Link href={href}>
              <a>{name}</a>
            </Link>
          ) : (
            name
          )}
        </h3>
        <div className={styles.productPrice}>
          {netPrice ? (
            <>
              <span className={styles.productPriceSale}>{discountPrice}</span>{' '}
              {basePrice > discountPrice && (
                <span className={styles.productCompareAtPrice}>{basePrice}</span>
              )}
            </>
          ) : (
            <span className={styles.productPriceSale}>{basePrice}</span>
          )}
        </div>
        <span className={styles.productBranch}>
          <span className="block line-clamp-1">
            {Branch?.name}, {Branch?.City?.name}
          </span>
        </span>
      </div>
      {/* TODO: como sabes cuando un producto esta en oferta? */}
      {/*onSale && <span className={styles.productSaleBadge}>Oferta</span>*/}
    </div>
  );
};

export default ProductCard;
