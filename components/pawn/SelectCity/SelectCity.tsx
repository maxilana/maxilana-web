import cn from 'classnames';
import { FC } from 'react';
import { LeftOutlined, WhatsAppOutlined } from '@ant-design/icons';

import containerStyles from '../Pawn.module.css';
import { Button } from '~/components/ui';

interface Props {
  onBack: () => void;
}

/**
 * TODO: PEDIR LOS NÚMEROS DE WHATSAPP
 */
const PawnSelectableCity: FC<Props> = ({ onBack }) => {
  return (
    <div className={containerStyles.root}>
      <div className="bg-white p-4">
        <span
          role="button"
          className="uppercase text-price text-sm inline-flex items-center mb-3"
          onClick={onBack}
        >
          <LeftOutlined />
          Regresar
        </span>
        <h3 className={containerStyles.title}>Selecciona tu ciudad</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {cities.map((item) => (
            <a
              key={item.id}
              className={cn('border border-surface rounded p-4', 'hover:bg-surface-dark')}
              href={`https://api.whatsapp.com/send?phone=521${item.href}/text=Hola me gustaría solicitar un empeño`}
            >
              <WhatsAppOutlined style={{ fontSize: 32, color: '#0BBF69' }} />
              <span className="ml-4">
                <span className="font-semibold">{item.label}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="mt-4">
          <Button fullWidth href="/sucursales" text="Contacta a tu sucursal más cercana" />
        </div>
      </div>
    </div>
  );
};

const cities = [
  {
    id: 1,
    label: 'Culiacán y Navolato',
    href: '6675021267',
  },
  {
    id: 2,
    label: 'Mazatlán',
    href: '6692405437',
  },
  {
    id: 3,
    label: 'Guadalajara',
    href: '3318911511',
  },
  {
    id: 4,
    label: 'Hermosillo',
    href: '6624294030',
  },
  {
    id: 5,
    label: 'Mexicali',
    href: '6861571304',
  },
  {
    id: 6,
    label: 'Tijuana',
    href: '664120345',
  },
];

export default PawnSelectableCity;
