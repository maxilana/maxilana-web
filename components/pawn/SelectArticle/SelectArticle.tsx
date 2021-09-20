import cn from 'classnames';
import { FC } from 'react';
import BackButton from '../BackButton';

import commonStyles from '../Pawn.module.css';
import SelectableItem from '../SelectableItem';

interface Props {
  category: number;
  onBack: () => void;
}

const SelectArticle: FC<Props> = ({ category, onBack }) => {
  const subcategory = subcategories.find((item) => item.categoryID === category);

  return (
    <div className={commonStyles.root}>
      <div className="bg-white p-4">
        <BackButton onBack={onBack} />
        <div className="mb-6">
          <h3 className={commonStyles.title}>{`Selecciona el tipo de ${subcategory?.label}`}</h3>
        </div>
        <div
          className={cn('grid gap-4', {
            ['grid-cols-2']: subcategory && subcategory.articles.length > 6,
          })}
        >
          {subcategory?.articles.map((item) => (
            <SelectableItem key={item.id} label={item.label} />
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
    label: 'vehículo',
    articles: [
      {
        id: 1,
        label: 'Automóviles',
      },
      {
        id: 2,
        label: 'Motos',
      },
      {
        id: 3,
        label: 'Otros',
      },
    ],
  },
  {
    id: 2,
    categoryID: 2,
    label: 'herramienta',
    articles: [
      {
        id: 1,
        label: 'Manual',
      },
      {
        id: 2,
        label: 'Eléctrica',
      },
    ],
  },
  {
    id: 3,
    categoryID: 5,
    label: 'aparato electrónico',
    articles: [
      {
        id: 1,
        label: 'Audio',
      },
      {
        id: 2,
        label: 'Pantalla',
      },
      {
        id: 3,
        label: 'Cámara',
      },
    ],
  },
  {
    id: 4,
    categoryID: 7,
    label: 'electrodoméstico',
    articles: [
      {
        id: 1,
        label: 'Hornos',
      },
      {
        id: 2,
        label: 'Planchas',
      },
      {
        id: 3,
        label: 'Licuadoras',
      },
      { id: 4, label: 'Procesadores' },
      { id: 5, label: 'Refrigeradores' },
      { id: 6, label: 'Lavadoras' },
      { id: 7, label: 'Secadoras' },
    ],
  },
  {
    id: 5,
    categoryID: 6,
    label: 'relojes',
    articles: [
      {
        id: 1,
        label: 'Pulso',
      },
      {
        id: 2,
        label: 'Bolsillo',
      },
      {
        id: 3,
        label: 'Ornato',
      },
    ],
  },
  {
    id: 6,
    categoryID: 1,
    label: 'joyería y monedas',
    articles: [
      {
        id: 1,
        label: 'Firma',
      },
      {
        id: 2,
        label: 'Comercial',
      },
      {
        id: 3,
        label: 'Monedas de inversión',
      },
      {
        id: 4,
        label: 'Medallas conmemorativas',
      },
    ],
  },
];

export default SelectArticle;
