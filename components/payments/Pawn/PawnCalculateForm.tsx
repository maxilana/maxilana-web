import dayjs from 'dayjs';
import cn from 'classnames';
import { AxiosError } from 'axios';
import { Radio, Form } from 'antd';
import { FC, useState } from 'react';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import { Button } from '~/components/ui';
import { usePrice } from '~/modules/hooks';
import { PawnAccount } from '~/types/Models';
import { FormFeedback, InputMask } from '~/components/common';

import styles from '../FormContainer.module.css';

type Status = 'idle' | 'loading' | 'searching';

type FormValues = {
  paymentType: 'REFRENDO' | 'ABONO' | 'OTRO-ABONO';
  paymentAmount?: number;
};

interface Props {
  data: PawnAccount;
  onSubmit: (data: FormValues) => Promise<void>;
}

dayjs.extend(localizedFormat);

const PawnCalculateForm: FC<Props> = ({ data, onSubmit }) => {
  const [form] = Form.useForm();

  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const { price: loanAmount } = usePrice({ amount: data.loanAmount }); // PRÉSTAMO
  const { price: paymentAmount } = usePrice({ amount: data.paymentAmount }); // REFRENDO
  const { price: totalPaymentAmount } = usePrice({ amount: data.totalPaymentAmount }); // DESEMPEÑO (SOLO ES INFORMATIVO)

  const startDate = dayjs(data.startDate, 'YYYY-MM-DD').locale('es').format('DD MMMM YYYY');
  const dueDate = dayjs(data.dueDate, 'YYYY-MM-DD').locale('es').format('DD MMMM YYYY');

  const buttonText = {
    idle: 'Pagar',
    loading: 'Pagar',
    searching: 'Calculando montos e intereses',
  };

  const statusStyles = {
    Activa: 'text-[#0BBF69]',
    Vencida: 'text-danger',
  };

  const handleFormSubmit = async (values: FormValues) => {
    setStatus('loading');
    const { paymentType } = values;

    try {
      let amount = 0;

      if (paymentType === 'REFRENDO') {
        amount = data.paymentAmount;
      } else if (paymentType === 'ABONO') {
        amount = 63.5; // TODO: NO SE DE DÓNDE SALE ESTO
      } else if (paymentType === 'OTRO-ABONO') {
        if (!values.paymentAmount) {
          throw new Error('Escribe una cantidad correcta para otro pago');
        }

        amount = Number(values.paymentAmount);
      }

      await onSubmit({ paymentType, paymentAmount: amount });
    } catch (err) {
      setError((err as AxiosError).message);
    }

    setStatus('idle');
  };

  return (
    <Form
      form={form}
      onFinish={handleFormSubmit}
      initialValues={{
        paymentType: 'REFRENDO',
        paymentAmount: data.minPaymentAmount,
      }}
    >
      <div className="px-4">
        <h1 className="text-2xl mb-4">Boleta de empeño</h1>
        <p>
          La consulta muestra la información al dia de hoy, al seleccionar una fecha de cálculo
          diferente los montos cambiarán automaticamente
        </p>
      </div>
      <div className="py-6 sm:px-4">
        <div className={cn(styles.root, 'relative')}>
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm text-secondary">Cliente:</p>
              <p className="text-primary font-semibold">{data.name}</p>
              <div className="mb-4">
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Número boleta actual:</span>
                    <span className="text-primary font-semibold">{data.accountNumber}</span>
                  </div>
                </div>
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Tipo de empeño:</span>
                    <span className="text-sm text-primary">{data.description}</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Fecha de empeño:</span>
                    <span className="text-sm text-primary">{startDate}</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Fecha de vencimiento:</span>
                    <span className="text-sm text-primary">{dueDate}</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Estado de boleta:</span>
                    <span className={cn('text-sm', statusStyles[data.status])}>{data.status}</span>
                  </div>
                </div>
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Monto de préstamo:</span>
                    <span className="text-sm text-primary">{loanAmount}</span>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Pago de interés:</span>
                    <span className="text-sm text-primary font-semibold">{paymentAmount}</span>
                  </div>
                </div>
                <div className="py-2 border-b border-b-[#0C5E9C26]">
                  <div className="flex flex-row justify-between items-center">
                    <span className="text-sm text-secondary">Desempeño:</span>
                    <span className="text-sm text-primary">{totalPaymentAmount}</span>
                  </div>
                </div>
              </div>
            </div>
            <FormFeedback
              visible={error !== null}
              errorMessage={error as string}
              onDismiss={() => {
                setError(null);
              }}
            >
              <div className="flex flex-col h-full">
                <h2 className="text-lg mb-4">Selecciona el monto que desees pagar</h2>
                <div className="flex-1">
                  <Form.Item name="paymentType">
                    <Radio.Group>
                      <span className="block my-2">
                        <Radio value="REFRENDO">
                          Pago de refrendo <strong>{paymentAmount}</strong>
                        </Radio>
                      </span>
                      <span className="block my-2">
                        <Radio value="ABONO">
                          Pago de extensión de 7 días <strong>$63.50</strong>
                        </Radio>
                      </span>
                      <span className="block my-2">
                        <Radio value="OTRO-ABONO">
                          <div className="flex flex-row items-center space-x-3">
                            <span>Pagar abono</span>
                            <Form.Item noStyle shouldUpdate>
                              {({ getFieldValue }) =>
                                getFieldValue('paymentType') === 'OTRO-ABONO' ? (
                                  <Form.Item
                                    name="paymentAmount"
                                    rules={[
                                      {
                                        required: true,
                                        message: 'Campo requerido',
                                      },
                                    ]}
                                    getValueFromEvent={({ target }) => target.rawValue}
                                  >
                                    <InputMask
                                      options={{
                                        prefix: '$',
                                        numeral: true,
                                        numeralPositiveOnly: true,
                                        rawValueTrimPrefix: true,
                                      }}
                                    />
                                  </Form.Item>
                                ) : null
                              }
                            </Form.Item>
                          </div>
                        </Radio>
                      </span>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <Button
                  fullWidth
                  theme="primary"
                  text={buttonText[status]}
                  loading={['loading', 'searching'].includes(status)}
                />
              </div>
            </FormFeedback>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default PawnCalculateForm;
