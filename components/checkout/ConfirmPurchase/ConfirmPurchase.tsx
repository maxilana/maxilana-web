import { FC } from 'react';
import { Form } from 'antd';
import dayjs from 'dayjs';

import { Button } from '~/components/ui';
import { CartSummary, InputField, InputMask } from '~/components/common';

import styles from './ConfirmPurchase.module.css';
import formContainerStyles from '../FormContainer.module.css';

import defaultValidateMessages from 'config/validationMessages';
import { Product } from '~/types/Models/Product';

interface Props {
  product: Product;
}

const ConfirmPurchase: FC<Props> = ({ product }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form form={form} validateMessages={defaultValidateMessages}>
      <div className="container mx-auto md:px-4">
        <div className={styles.root}>
          <h1 className={styles.title}>Confirmar compra</h1>
          <div className={styles.gridContainer}>
            <div>
              <div className={formContainerStyles.root}>
                <h2 className={styles.subtitle}>Dirección de envío</h2>
                <div className="grid gap-4">
                  <div className="col-span-2">
                    <Form.Item name="nombre" rules={[{ required: true }]}>
                      <InputField
                        label="Nombre completo"
                        placeholder="Nombre del titular de la tarjeta"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item name="direccion" rules={[{ required: true }]}>
                      <InputField label="Dirección" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="codigoPostal" rules={[{ required: true }]}>
                      <InputField label="Código Postal" maxLength={5} />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="colonia" rules={[{ required: true }]}>
                      <InputField label="Colonia" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="municipio" rules={[{ required: true }]}>
                      <InputField label="Municipio" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="estado" rules={[{ required: true }]}>
                      <InputField label="Estado" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="celular" rules={[{ required: true }]}>
                      <InputField label="Celular" placeholder="10 dígitos" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="correo" rules={[{ required: true }]}>
                      <InputField type="email" label="Correo electrónico" />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item name="instrucciones">
                      <InputField
                        label="Instrucciones de entrega"
                        placeholder="Escribe referencias de cómo localizar tu casa"
                      />
                    </Form.Item>
                  </div>
                </div>
                <hr className={styles.divider} />
                <h2 className={styles.subtitle}>Información de pago</h2>
                <div className="grid gap-4">
                  <div className="col-span-2">
                    <Form.Item name="numeroTarjeta">
                      <InputMask
                        label="Número de la tarjeta"
                        placeholder="#### #### #### ####"
                        options={{
                          creditCard: true,
                        }}
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      name="fechaVencimiento"
                      rules={[
                        {
                          required: true,
                          validator: (_, value) => {
                            const dt = dayjs(value, 'MM/YY');
                            const isFuture = dt.isAfter(dayjs());

                            if (dt.isValid() && isFuture) {
                              return Promise.resolve();
                            }

                            return Promise.reject(new Error('Fecha inválida'));
                          },
                        },
                      ]}
                    >
                      <InputMask
                        label="Fecha de vencimiento"
                        placeholder="MM/AA"
                        maxLength={5}
                        options={{
                          date: true,
                          datePattern: ['m', 'Y'],
                        }}
                      />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="codigoSeguridad">
                      <InputMask
                        type="password"
                        label="Cod. de seguridad"
                        placeholder="###"
                        maxLength={3}
                        options={{
                          numericOnly: true,
                        }}
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[520px]">
              <div className={formContainerStyles.root}>
                <div>
                  <CartSummary data={product} />
                  <hr className="my-4" />
                  <div>
                    <Button fullWidth size="large" theme="primary" text="Proceder al pago" />
                  </div>
                  <hr className="my-4" />
                  <div className="text-center">
                    <small>
                      Al hacer clic en &ldquo;Proceder al pago&rdquo; confirmas que aceptas los
                      TÉRMINOS Y CONDICIONES de Maxilana.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ConfirmPurchase;
