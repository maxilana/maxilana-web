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
}

const ProductCard: FC<Props> = ({ data }) => {
  const { image, name, price, Branch, saleOnline, netPrice, slug, id } = data;
  const href = `/producto/${id}-${slugify(name)}`;

  const { price: basePrice } = usePrice({ amount: price });
  const { price: discountPrice } = usePrice(
    netPrice ? { amount: netPrice, baseAmount: price } : undefined,
  );

  return (
    <div className={cn(styles.root, styles.rootProduct, { [styles.productLink]: !!href })}>
      {!!href && (
        <Link href={href}>
          <a className={styles.blockLink} />
        </Link>
      )}
      <div className={styles.productImgWrapper}>
        <div>
          <div className={cn(styles.productImg, { [styles.productPlaceholder]: image === null })}>
            {image !== null ? (
              <Img
                src={image}
                alt={name}
                objectFit="contain"
                layout="responsive"
                width={512}
                height={512}
              />
            ) : (
              <PictureOutlined />
            )}
          </div>
          <div className={styles.productBadge}>
            <ProductBadge type="shop" />
            {saleOnline && <ProductBadge type="car" />}
          </div>
        </div>
      </div>
      <div className={styles.productBody}>
        <VStack spacing="sm">
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
                <span className={styles.productPriceSale}>{discountPrice}</span>
                <span className={styles.productCompareAtPrice}>{basePrice}</span>
              </>
            ) : (
              <span className={styles.productPriceSale}>{basePrice}</span>
            )}
          </div>
          <span className={styles.productBranch}>
            {Branch?.name}, {Branch?.City?.name}
          </span>
        </VStack>
      </div>
      {/* TODO: como sabes cuando un producto esta en oferta? */}
      {/*onSale && <span className={styles.productSaleBadge}>Oferta</span>*/}
    </div>
  );
};

export default ProductCard;
