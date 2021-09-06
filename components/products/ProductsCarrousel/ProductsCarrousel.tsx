import React, { FC, LegacyRef, UIEventHandler, useRef, useState } from 'react';
import { ProductCard } from '~/components/ui';
import { Product } from '~/types/Models/Product';

import styles from './ProductsCarrousel.module.css';

interface Props {
  products: Product[];
}

const ProductsCarrousel: FC<Props> = ({ products }) => {
  const scrollRef = useRef(null);
  const [width, setWidth] = useState<number>();
  const [scrollWidth, setScrollWidth] = useState<number>();
  const [left, setLeft] = useState<number>();

  const handleScrollEvent: UIEventHandler<HTMLDivElement> = (e) => {
    if (width === null || scrollWidth === null) {
      setWidth(e.currentTarget.offsetWidth);
      setScrollWidth(e.currentTarget.scrollWidth);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.scroll} onScroll={handleScrollEvent} ref={scrollRef}>
        {!!products?.length &&
          products.map((product) => (
            <ProductCard data={product} key={product.id} className={styles.item} />
          ))}
      </div>
    </div>
  );
};

export default ProductsCarrousel;
