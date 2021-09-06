import { Form } from 'antd';
import { FC, useState, useCallback } from 'react';

import { Button } from '~/components/ui';
import { InputField, InputMask } from '~/components/common';

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

const PawnRequest: FC = () => {
  const [form] = Form.useForm();
  const [selected, setSelected] = useState<number[]>([]);

  const handleToggleArticle = useCallback(
    (id: number) => {
      const found = selected.find((item) => item === id);

      if (found) {
        const newSelected = selected.filter((item) => item !== id);
        setSelected(newSelected);
      } else {
        setSelected([id, ...selected]);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [selected],
  );

  const handleSubmit = (values: any) => {
    const selectedArticles = articles
      .filter((item) => {
        return selected.includes(item.id);
      })
      .map((item) => item.label);

    console.log({
      ...values,
      Articulos: selectedArticles,
    });
  };

  return (
    <div className={styles.root}>
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={{
          ValorPrenda: 0,
          CorreoElectronico: '',
        }}
      >
        <div className="mb-6">
          <h1 className={styles.title}>Recibimos casi todos tus artículos</h1>
          <p className={styles.copy}>
            Usa nuestra herramienta para saber hasta cuánto te podemos dar por tus pertenencias.
          </p>
        </div>
        <span className="block text-lg text-primary">¿Qué tipo de artículo quieres empeñar?</span>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          {articles.map((item) => {
            return (
              <PawnSelectableArticle
                key={item.id}
                label={item.label}
                imageSrc={item.imageSrc}
                checked={selected.includes(item.id)}
                onClick={() => {
                  handleToggleArticle(item.id);
                }}
              />
            );
          })}
        </div>
        <div className="my-6 grid gap-4 sm:grid-cols-2">
          <div>
            <Form.Item
              noStyle
              name="ValorPrenda"
              getValueFromEvent={({ target }) => {
                return target.rawValue;
              }}
            >
              <InputMask
                name="ValorPrenda"
                label="¿Cuál es el valor de tu prenda?"
                options={{
                  numeral: true,
                  numeralPositiveOnly: true,
                }}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="CorreoElectronico" noStyle>
              <InputField
                type="email"
                name="CorreoElectronico"
                label="Ingresa tu correo electrónico"
              />
            </Form.Item>
          </div>
          <div className="col-span-2">
            <Button fullWidth theme="primary" text="Cotiza tu empeño" />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PawnRequest;
