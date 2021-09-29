import cn from 'classnames';
import { FC, useState } from 'react';
import { Form } from 'antd';
import BackButton from '~/components/pawn/BackButton';

import { Button } from '~/components/ui';
import { InputField, InputMask, SelectField } from '~/components/common';
import defaultValidateMessages from 'config/validationMessages';
import useCitiesForPawns from '~/hooks/useCitiesForPawns';

import styles from './Form.module.css';
import commonStyles from '../Pawn.module.css';
import { RequestPawn } from '~/types/Requests/RequestPawn';

type FormValues = RequestPawn;

interface Props {
  onBack: () => void;
  onSubmit: (data: FormValues) => Promise<void>;
}

const RequestForm: FC<Props> = ({ onBack, onSubmit }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { cities, isLoading, error } = useCitiesForPawns();

  const handleFormSubmit = async (data: FormValues) => {
    setLoading(true);

    try {
      await onSubmit?.(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className={cn(commonStyles.root, styles.root)}>
      {(() => {
        if (error) {
          return (
            <div className={commonStyles.loaderOverlay}>
              <span className={commonStyles.loader}>
                Ocurrió un error vuelve en otra ocasión para poder usar la calculadora.
              </span>
            </div>
          );
        }

        if (isLoading) {
          return (
            <div className={commonStyles.loaderOverlay}>
              <span className={commonStyles.loader}>Cargando datos...</span>
            </div>
          );
        }

        return (
          <Form form={form} onFinish={handleFormSubmit} validateMessages={defaultValidateMessages}>
            <div>
              <BackButton onBack={onBack} />
              <h3 className={commonStyles.title}>Contesta las siguientes preguntas</h3>
              <div className="grid gap-8">
                <Form.Item
                  name="monto"
                  rules={[{ required: true }]}
                  getValueFromEvent={({ target }) => target.rawValue} // rawValue viene de Cleave.js
                >
                  <InputMask
                    label="¿Cuál es el valor de tu prenda en el mercado?"
                    options={{
                      prefix: '$',
                      numeral: true,
                      numeralPositiveOnly: true,
                      rawValueTrimPrefix: true,
                    }}
                  />
                </Form.Item>
                <Form.Item name="plaza" rules={[{ required: true }]} initialValue="default">
                  <SelectField
                    name="plaza"
                    placeholder="Selecciona tu ciudad"
                    options={
                      cities !== undefined
                        ? cities.map((item) => ({
                            value: item.code,
                            label: item.name,
                          }))
                        : []
                    }
                  />
                </Form.Item>
                <Form.Item name="correo">
                  <InputField label="Correo electrónico" />
                </Form.Item>
                <div>
                  <Button
                    fullWidth
                    theme="primary"
                    loading={loading}
                    text="Ver cuánto te prestamos por tu artículo"
                  />
                </div>
              </div>
            </div>
          </Form>
        );
      })()}
    </div>
  );
};

export default RequestForm;
