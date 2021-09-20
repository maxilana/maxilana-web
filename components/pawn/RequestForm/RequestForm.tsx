import cn from 'classnames';
import { FC } from 'react';
import { Form } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { InputField, InputMask, SelectField } from '~/components/common';
import defaultValidateMessages from 'config/validationMessages';
import useCitiesForPawns from '~/hooks/useCitiesForPawns';

import styles from './Form.module.css';
import commonStyles from '../Pawn.module.css';

type FormValues = {
  monto: number;
  plaza: number;
  correo: string;
};

interface Props {
  onBack: () => void;
  onSubmit: (data: FormValues) => Promise<void>;
}

const RequestForm: FC<Props> = ({ onBack, onSubmit }) => {
  const [form] = Form.useForm();
  const { cities, isLoading, error } = useCitiesForPawns();

  const handleFormSubmit = async (data: FormValues) => {
    try {
      await onSubmit?.(data);
    } catch (err) {}
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
              <span
                role="button"
                onClick={onBack}
                className="uppercase text-price text-sm inline-flex items-center mb-3"
              >
                <LeftOutlined />
                Regresar
              </span>
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
                <Form.Item name="plaza" rules={[{ required: true }]}>
                  <SelectField
                    name="plaza"
                    label="Selecciona tu ciudad"
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
