import { FC } from 'react';
import Link from 'next/link';
import { ShoppingCartOutlined } from '@ant-design/icons';

import useCart from '~/hooks/cart/useCart';

const CartBadge: FC = () => {
  const { data } = useCart();

  return (
    <Link href="/carrito" prefetch={false}>
      <a>
        <span className="text-white text-sm inline-flex items-baseline">
          {data !== undefined && data.productos.length}
          <ShoppingCartOutlined style={{ fontSize: 18 }} />
        </span>
      </a>
    </Link>
  );
};

export default CartBadge;
