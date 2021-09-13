import Link from 'next/link';
import { FC, ReactNode } from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { CartSummary } from '~/components/common';

import styles from './Response.module.css';

interface Props {
  children?: ReactNode;
}

const product = {
  id: '1',
  name: 'ANILLO C/ BRILLANTES 3.80 GRAMOS 14 KILATES',
  CategoryId: 2,
  Category: 'H',
  BranchId: 3,
  Branch: '',
  price: 4308.25,
  netPrice: 4308.25,
  brand: '',
  observations: '',
  image: '',
  precod: 0,
  slug: '',
  saleOnline: true,
};

const CheckoutSuccess: FC<Props> = ({ children = null }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <CheckCircleTwoTone twoToneColor="#0BBF69" style={{ fontSize: 60 }} />
          <h1 className={styles.headerTitle}>Gracias por su compra</h1>
          <p>Un email de confirmación ha sido enviado con todos los detalles de su pedido.</p>
          <p className="font-semibold text-lg">Pedido #91</p>
        </div>
        <div className={styles.innerSection}>
          <h2 className={styles.subtitle}>Datos de entrega:</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className={styles.subheading}>Tu pedido se enviará a:</h3>
              <div className="space-y-2">
                <p>Ezequiel Rangel Ibarra</p>
                <p>Teléfono: 6674794283</p>
                <p>Dirección: Palmela 4921 Portalegre Villas Culiacán, Sinaloa, México.</p>
              </div>
            </div>
            <div>
              <h3 className={styles.subheading}>Fecha estimada de entrega:</h3>
              <div className="space-y-2">
                <p className="text-[#0BBF69]">20 de octubre de 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.innerSection}>
          <h2 className={styles.subtitle}>Resumen del pedido:</h2>
          <div>
            {/** @ts-ignore */}
            <CartSummary data={product} />
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <Button theme="primary" text="Seguir comprando" href="/remates" />
      </div>
      <div className={styles.footer}>
        <h5 className={styles.footerTitle}>¿Tienes alguna pregunta?</h5>
        <div className="prose">
          <p className={styles.footerCopy}>
            Para cualquier duda o aclaración, por favor comunícarse con nosotros a través del los
            siguientes medios:
          </p>
          <p className={styles.footerCopy}>
            Teléfono: <a href="tel:8002151515">800 215 1515</a>
          </p>
          <p className={styles.footerCopy}>
            Puedes visitar nuestra página de {' '}
            <Link href="/preguntas-frecuentes">
              <a>preguntas frecuentes</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
