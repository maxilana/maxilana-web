import { FC } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';

import styles from '../Pawn.module.css';
import PawnSelectableArticle from '../PawnSelectableArticle';
import Joyeria from '~/public/empeno-articulo-joyeria.jpg';
import Auto from '~/public/empeno-articulo-auto.jpg';
import Celulares from '~/public/empeno-articulo-celulares.jpg';
import Relojes from '~/public/empeno-articulo-relojes.jpg';
import Instrumentos from '~/public/empeno-articulo-musicales.jpg';
import Herramientas from '~/public/empeno-articulo-herramientas.jpg';

const articles = [
  {
    id: 1,
    label: 'Joyería',
    imageSrc: Joyeria,
  },
  {
    id: 2,
    label: 'Automóviles',
    imageSrc: Auto,
  },
  {
    id: 3,
    label: 'Celulares',
    imageSrc: Celulares,
  },
  {
    id: 4,
    label: 'Relojes',
    imageSrc: Relojes,
  },
  {
    id: 5,
    label: 'Instrumentos musicales',
    imageSrc: Instrumentos,
  },
  {
    id: 6,
    label: 'Herramientas',
    imageSrc: Herramientas,
  },
];

interface Props {
  onSelect: () => void;
  onWhatsappClick: () => void;
}

const PawnRequest: FC<Props> = ({ onSelect, onWhatsappClick }) => {
  return (
    <div className={styles.root}>
      <div className="p-4 bg-white">
        <div className="mb-4">
          <h2 className={styles.title}>Descubre hasta cuánto te podemos dar por tu prenda</h2>
          <p className="text-primary">Calcula tu préstamo con nuestro simulador:</p>
        </div>
        <div className="my-6 grid gap-2 sm:grid-cols-2">
          {articles.map((item) => {
            return (
              <PawnSelectableArticle
                key={item.id}
                label={item.label}
                imageSrc={item.imageSrc}
                onClick={onSelect}
              />
            );
          })}
        </div>
      </div>
      <div className="border-surface-dark border-t p-4 bg-white md:bg-transparent">
        <p className="mb-4">O comunícate directamente con un valuador:</p>
        <Button
          fullWidth
          size="large"
          theme="whatsapp"
          text="Obtén una valuación de un experto"
          onClick={onWhatsappClick}
          icon={<WhatsAppOutlined style={{ color: 'white', fontSize: 20 }} />}
        />
      </div>
    </div>
  );
};

export default PawnRequest;
