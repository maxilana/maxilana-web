import { FC } from 'react';
import Link from 'next/link';
import { CloseCircleTwoTone } from '@ant-design/icons';

import { Button } from '~/components/ui';

import styles from './Response.module.css';
import { ErrorCodes } from '~/types/Models';

interface Props {
  code?: ErrorCodes;
}

const ERROR_CODES = {
  0: '¡Discúlpanos por el inconveniente! Solucionaremos el problema en un momento.',
  100: 'Ocurrió un error al comunicarnos con el banco. Cód. error: 100',
  200: 'El banco ha regresado un error que no permitió procesar el pago.',
  201: 'Ocurrió un error general en el sistema de Visa o Master Card, espera unos momentos para reintentar la transacción',
  421: 'El servicio 3D Secure no está disponible, espera unos momentos para reintentar la transacción.',
  422: 'Ocurrió un problema genérico al momento de realizar la transacción, inténtalo en otro momento.',
  423: 'La autenticación no fue exitosa, el comprador no se pudo autenticar con éxito.',
  424: 'Autenticación 3D Secure no fue completada. Cód. error: 424',
  425: 'Autenticación inválida. No has ingresado correctamente la contraseña 3D Secure.',
  430: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 430',
  431: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 431',
  432: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 432',
  433: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 433',
  434: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 434',
  435: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 435',
  436: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 436',
  437: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 437',
  438: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 438',
  439: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 439',
  440: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 440',
  441: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 441',
  442: 'Ocurrió un error de parte nuestra, estamos trabajando para solucionarlo. Cód. error: 442',
  443: 'La pasarela de pagos solo acepta tarjetas VISA o Master Card, si has ingresado bien tu tarjeta comunícate con nosotros.',
  444: 'La pasarela de pagos solo acepta tarjetas VISA o Master Card, si has ingresado bien tu tarjeta comunícate con nosotros.',
};

const CheckoutError: FC<Props> = ({ code = '0' }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <CloseCircleTwoTone twoToneColor="#EF3A3A" style={{ fontSize: 60 }} />
          <h1 className={styles.headerTitle}>Ocurrió un problema</h1>
          <p>No fue posible procesar la transacción, por favor inténtalo de nuevo más tarde.</p>
          <p className="text-sm text-secondary">
            <span>{ERROR_CODES[code]}</span>
          </p>
        </div>
      </div>
      <div className="text-center p-4">
        <Button href="/checkout" theme="primary" text="Volver al pago" />
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

export default CheckoutError;
