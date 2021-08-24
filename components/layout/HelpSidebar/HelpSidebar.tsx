import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { Card } from '~/components/ui';
import styles from './HelpSidebar.module.css';

type Question = {
  id: number;
  label: string;
  href: string;
};

interface Props {
  questions: Question[];
  direction?: 'horizontal' | 'vertical';
}

const HelpSidebar: FC<Props> = ({ direction = 'vertical', questions }) => {
  return (
    <div className={cn(styles.root, { [styles.rootHorizontal]: direction === 'horizontal' })}>
      <Card className={styles.header}>
        <h4 className={styles.headerTitle}>Preguntas Frecuentes</h4>
        <ul>
          {questions.map((item) => (
            <li key={item.id} className={styles.questionItem}>
              <Link href={item.href}>
                <a className={styles.questionLink}>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Card>
      <Card className={styles.footer}>
        <h5 className={styles.footerTitle}>¿Tienes alguna pregunta?</h5>
        <div className="prose">
          <p className={styles.footerCopy}>
            Para cualquier duda o aclaración, por favor comunícate con nosotros a través del los
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
      </Card>
    </div>
  );
};

export default HelpSidebar;
