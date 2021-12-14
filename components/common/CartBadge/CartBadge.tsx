import { FC } from 'react';
import Link from 'next/link';
import { ShoppingCartOutlined } from '@ant-design/icons';

import useCart from '~/hooks/cart/useCart';
import styles from './CartBadge.module.css';

const CartBadge: FC = () => {
  const { data } = useCart();

  return (
    <Link href="/carrito" prefetch={false}>
      <a className={styles.root}>
        <small className={styles.badge}>{data !== undefined && data.products.length}</small>
        <ShoppingCartOutlined style={{ fontSize: 24 }} />
      </a>
    </Link>
  );
};

export default CartBadge;
