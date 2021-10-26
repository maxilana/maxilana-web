import { Form } from 'antd';
import Image from 'next/image';
import { AxiosError } from 'axios';
import React, { FC, useState } from 'react';

import { Button } from '~/components/ui';
import { FormFeedback, InputField, InputMask } from '~/components/common';

import validationMessages from 'config/validationMessages';

type FormValues = {
  boleta: string;
  letra: string;
  monto: number;
};

interface Props {
  onSubmit: (data: FormValues) => Promise<void>;
}

const PawnAccountForm: FC<Props> = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      setLoading(false);
      await onSubmit(data);
    } catch (err) {
      setError((err as AxiosError).message);
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      onFinish={handleFormSubmit}
      validateMessages={validationMessages}
      className="max-w-sm mx-auto"
    >
      <div className="formContainer">
        <FormFeedback
          visible={error !== null}
          errorMessage={error as string}
          onDismiss={() => {
            setError(null);
          }}
        >
          <React.Fragment>
            <div className="mb-6">
              <h2 className="text-lg mb-4">Agrega una boleta</h2>
              <p>Ingresa los datos que vienen escritos en tu boleta</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="col-span-2">
                <Form.Item name="boleta" rules={[{ required: true }]}>
                  <InputField maxLength={6} label="Número de boleta" />
                </Form.Item>
              </div>
              <div>
                <Form.Item name="letra" rules={[{ required: true, len: 1 }]}>
                  <InputField label="Letra" maxLength={1} />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  name="monto"
                  getValueFromEvent={({ target }) => target.rawValue} // rawValue viene de Cleave.js
                  rules={[{ required: true }]}
                >
                  <InputMask
                    placeholder="$0.00"
                    label="Monto del préstamo"
                    options={{
                      prefix: '$',
                      numeral: true,
                      numeralPositiveOnly: true,
                      rawValueTrimPrefix: true,
                    }}
                  />
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Button
                  fullWidth
                  theme="primary"
                  loading={loading}
                  text={loading ? 'Consultando' : 'Consultar'}
                />
              </div>
            </div>
          </React.Fragment>
        </FormFeedback>
      </div>
    </Form>
  );
};

export default PawnAccountForm;
