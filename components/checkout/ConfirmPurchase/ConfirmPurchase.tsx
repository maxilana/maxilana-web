import dayjs from 'dayjs';
import Link from 'next/link';
import { Form, Radio } from 'antd';
import { FC, useState } from 'react';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { Button } from '~/components/ui';
import { BankTransactionForm } from '~/components/payments';
import { CartSummary, FormFeedback, InputField, InputMask, PageLoader } from '~/components/common';

import styles from './ConfirmPurchase.module.css';
import formContainerStyles from '../FormContainer.module.css';
import defaultValidateMessages from 'config/validationMessages';

import { request3DTransaction } from '~/api/payments';
import { Product } from '~/types/Models/Product';
import { CreditCard, ProductPurchase } from '~/types/Requests';
import { MaxilanaTransaction } from '~/types/Responses';
import useShippingCost from '~/hooks/useShippingCost';

interface Props {
  product: Product;
}

type Status = 'idle' | 'submiting' | 'error';
type Data = {
  payment: ProductPurchase;
  transaction: MaxilanaTransaction;
};

interface FormValues extends CreditCard {
  nombreenvio: string;
  celular: string;
  correo: string;
  domicilio: string;
  codigopostal: string;
  colonia: string;
  municipio: string;
  estado: string;
  instrucciones: string;
}

dayjs.extend(customParseFormat);

const ConfirmPurchase: FC<Props> = ({ product }) => {
  const [status, setStatus] = useState<Status>('idle');
  const [data, setData] = useState<Data | null>(null);

  const [form] = Form.useForm<FormValues>();
  const shipping = useShippingCost(product.id);

  const handleFormSubmit = async (data: FormValues) => {
    setStatus('submiting');
    let totalPrice = 0;

    if (product.netPrice) {
      totalPrice = shipping || 0 + product.netPrice;
    } else {
      totalPrice = shipping || 0 + product.price;
    }

    try {
      const params: ProductPurchase = {
        ...data,
        sucursal: product.BranchId,
        upc: product.id,
        importe: totalPrice, // PRECIO + ENVIO
      };

      const maxiTransaction = await request3DTransaction(params);

      setData({
        payment: params,
        transaction: maxiTransaction,
      });
    } catch (err) {
      console.log(err);
      setStatus('error');
    }
  };

  if (status === 'submiting') {
    return (
      <PageLoader text="En un momento serás redirigido a la pasarela de pagos...">
        {data !== null && (
          <BankTransactionForm
            {...data}
            forwardPath={`${window.location.origin}/checkout/response?scost=${shipping}`}
          />
        )}
      </PageLoader>
    );
  }

  return (
    <Form form={form} onFinish={handleFormSubmit} validateMessages={defaultValidateMessages}>
      <div className="container mx-auto md:px-4">
        <div className={styles.root}>
          <h1 className={styles.title}>Confirmar compra</h1>
          <div className={styles.gridContainer}>
            <div>
              <div className={formContainerStyles.root}>
                <h2 className={styles.subtitle}>Dirección de envío</h2>
                <div className="grid gap-4">
                  <div className="col-span-2">
                    <Form.Item name="nombreenvio" rules={[{ required: true }]}>
                      <InputField label="Nombre completo" />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item name="domicilio" rules={[{ required: true }]}>
                      <InputField label="Dirección" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="codigopostal" rules={[{ required: true }]}>
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
                      <InputField label="Celular" placeholder="10 dígitos" maxLength={10} />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item name="correo" rules={[{ required: true }]}>
                      <InputField type="email" label="Correo electrónico" />
                    </Form.Item>
                  </div>
                  <div className="col-span-2">
                    <Form.Item name="instrucciones" rules={[{ required: true }]}>
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
                    <Form.Item name="cardtype" label="Tipo de tarjeta" rules={[{ required: true }]}>
                      <Radio.Group className="flex flex-row">
                        <Radio value="VISA">
                          <span className="mx-2">VISA</span>
                        </Radio>
                        <Radio value="MC">
                          <span className="mx-2">MASTERCARD</span>
                        </Radio>
                      </Radio.Group>
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      name="tarjeta"
                      rules={[{ required: true }]}
                      getValueFromEvent={({ target }) => target.rawValue}
                    >
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
                    <Form.Item name="titular" rules={[{ required: true }]}>
                      <InputField label="Nombre del titular de la tarjeta" />
                    </Form.Item>
                  </div>
                  <div>
                    <Form.Item
                      name="vencimiento"
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
                    <Form.Item name="ccv" rules={[{ required: true }]}>
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
                <FormFeedback
                  visible={status === 'error'}
                  onDismiss={() => {
                    setStatus('idle');
                  }}
                >
                  <div>
                    <CartSummary
                      data={product}
                      shipping={shipping}
                      loadingShipping={shipping === undefined}
                    />
                    <hr className="my-4" />
                    <div>
                      <Button
                        fullWidth
                        size="large"
                        theme="primary"
                        text="Proceder al pago"
                        disabled={shipping === undefined}
                      />
                    </div>
                    <hr className="my-4" />
                    <div className="text-center">
                      <small>
                        Al hacer clic en &ldquo;Proceder al pago&rdquo; confirmas que aceptas los{' '}
                        <Link href="/legal/terminos-y-condiciones">
                          <a className="text-price">TÉRMINOS Y CONDICIONES</a>
                        </Link>{' '}
                        de Maxilana.
                      </small>
                    </div>
                  </div>
                </FormFeedback>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ConfirmPurchase;
