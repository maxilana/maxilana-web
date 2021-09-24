import { FC } from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';

import styles from '../Pawn.module.css';
import SelectableItem from '../SelectableItem';

const categories = [
  {
    id: 1,
    label: 'Joyería y Monedas',
  },
  {
    id: 2,
    label: 'Herramientas',
  },
  {
    id: 3,
    label: 'Computadoras',
  },
  {
    id: 4,
    label: 'Celulares',
  },
  {
    id: 5,
    label: 'Electrónica',
  },
  {
    id: 6,
    label: 'Relojes',
  },
  {
    id: 7,
    label: 'Electrodomésticos',
  },
  {
    id: 8,
    label: 'Vehículos',
  },
];

interface Props {
  onSelect: (id: number) => void;
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
          {categories.map((item) => {
            return (
              <SelectableItem
                key={item.id}
                label={item.label}
                onClick={() => {
                  onSelect(item.id);
                }}
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
