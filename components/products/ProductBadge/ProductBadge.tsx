import { CarFilled, ShopFilled } from '@ant-design/icons';
import cn from 'classnames';
import React, { FC } from 'react';

import styles from './ProductBadge.module.css';

interface Props {
  type: 'shop' | 'car';
}

const ProductBadge: FC<Props> = ({ type }) => {
  return (
    <span className={cn(styles.root, styles[type])}>
      {type === 'shop' ? <ShopFilled /> : <CarFilled />}
    </span>
  );
};

export default ProductBadge;
