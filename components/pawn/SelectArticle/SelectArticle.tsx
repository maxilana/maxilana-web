import cn from 'classnames';
import { FC } from 'react';
import { CMSCategory } from '~/types/Models/CMSCategory';
import BackButton from '../BackButton';

import commonStyles from '../Pawn.module.css';
import SelectableItem from '../SelectableItem';

interface Props {
  category: CMSCategory | undefined;
  onBack: () => void;
  onSelectArticle: (id: string) => void;
}

const SelectArticle: FC<Props> = ({ category, onBack, onSelectArticle }) => {
  return (
    <div className={commonStyles.root}>
      <div className="bg-white p-4">
        <BackButton onBack={onBack} />
        <div className="mb-6">
          <h3 className={commonStyles.title}>{`Selecciona el tipo de ${category?.name}`}</h3>
        </div>
        <div
          className={cn('grid gap-4', {
            ['grid-cols-2']: category && category?.subcategories?.length > 6,
          })}
        >
          {category?.subcategories?.map?.((item) => (
            <SelectableItem
              key={item.id}
              label={item.name}
              imageSrc={item?.image?.url}
              onClick={() => {
                onSelectArticle(category?.code || item?.code);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const subcategories = [
  {
    id: 1,
    categoryID: 8,
    articleCode: 2,
    label: 'vehículo',
    articles: [
      {
        id: 1,
        label: 'Automóviles',
        imageSrc: '/vehiculo-auto.png',
      },
      {
        id: 2,
        label: 'Motos',
        imageSrc: '/vehiculo-moto.png',
      },
      {
        id: 3,
        label: 'Otros',
        imageSrc: '/vehiculo-otro.png',
      },
    ],
  },
  {
    id: 2,
    categoryID: 2,
    articleCode: 2,
    label: 'herramienta',
    articles: [
      {
        id: 1,
        label: 'Manual',
        imageSrc: '/herramienta-manual.png',
      },
      {
        id: 2,
        label: 'Eléctrica',
        imageSrc: '/herramienta-electrica.png',
      },
    ],
  },
  {
    id: 3,
    categoryID: 5,
    articleCode: 2,
    label: 'aparato electrónico',
    articles: [
      {
        id: 1,
        label: 'Audio',
        imageSrc: '/electronico-audio.png',
      },
      {
        id: 2,
        label: 'Pantalla',
        imageSrc: '/electronico-pantalla.png',
      },
      {
        id: 3,
        label: 'Cámara',
        imageSrc: '/electronico-camara.png',
      },
    ],
  },
  {
    id: 4,
    categoryID: 7,
    articleCode: 2,
    label: 'electrodoméstico',
    articles: [
      {
        id: 1,
        label: 'Hornos',
        imageSrc: '/electrodomestico-horno.png',
      },
      {
        id: 2,
        label: 'Planchas',
        imageSrc: '/electrodomestico-plancha.png',
      },
      {
        id: 3,
        label: 'Licuadoras',
        imageSrc: '/electrodomestico-licuadora.png',
      },
      { id: 4, label: 'Procesadores', imageSrc: '/electrodomestico-procesadores.png' },
      { id: 5, label: 'Refrigeradores', imageSrc: '/electrodomestico-refrigerador.png' },
      { id: 6, label: 'Lavadoras', imageSrc: '/electrodomestico-lavadora.png' },
      { id: 7, label: 'Secadoras', imageSrc: '/electrodomestico-secadora.png' },
    ],
  },
  {
    id: 5,
    categoryID: 6,
    articleCode: 2,
    label: 'relojes',
    articles: [
      {
        id: 1,
        label: 'Pulso',
        imageSrc: '/relojes-pulso.png',
      },
      {
        id: 2,
        label: 'Bolsillo',
        imageSrc: '/relojes-bolsillo.png',
      },
      {
        id: 3,
        label: 'Ornato',
        imageSrc: '/relojes-ornato.png',
      },
    ],
  },
  {
    id: 6,
    categoryID: 1,
    articleCode: 1,
    label: 'joyería y monedas',
    articles: [
      {
        id: 1,
        label: 'Firma',
        imageSrc: '/joyeria-firma.png',
      },
      {
        id: 2,
        label: 'Comercial',
        imageSrc: '/joyeria-comercial.png',
      },
      {
        id: 3,
        label: 'Monedas de inversión',
        imageSrc: '/joyeria-inversion.png',
      },
      {
        id: 4,
        label: 'Medallas conmemorativas',
        imageSrc: '/joyeria-conmemorativa.png',
      },
    ],
  },
];

export default SelectArticle;
