import { FC } from "react";
import { VStack } from "~/components/layout";
import { CarOutlined, ShopOutlined } from "@ant-design/icons";

import styles from './Cards.module.css';

interface Props {
  title: string;
  price: number;
  salePrice?: number;
  onSale?: boolean;
}

const ProductCard: FC = () => {
  return (
    <div className={`${styles.root} ${styles.rootProduct}`}>
      <div className={styles.productImg} />
      <div className={styles.productBody}>
        <VStack spacing="sm">
          <p className={styles.productTitle}>ANILLO C/ BRILLANTES 3.80 GRAMOS 14 KILATES</p>
          <div className={styles.productPrice}>
            <span className={styles.productPriceSale}>$100,038.25</span>
            <span className={styles.productCompareAtPrice}>$200,038.25</span>
          </div>
          <span className={styles.productBranch}>
            Sucursal Aeropuerto, Culiacán.
          </span>
        </VStack>
      </div>
      <span className={styles.productSaleBadge}>
        Oferta
      </span>
      <div className={styles.productBadge}>
        <div className={styles.productBadgeStore}>
          <ShopOutlined style={{ fontSize: 20 }} />
        </div>
        <div className={styles.productBadgeShipping}>
          <CarOutlined style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
