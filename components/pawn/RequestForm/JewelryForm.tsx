import { Form } from 'antd';
import { FC, useState } from 'react';

import { Button } from '~/components/ui';
import { InputField, SelectField } from '~/components/common';
import defaultValidateMessages from 'config/validationMessages';
import { City } from '~/types/Models';
import { RequestPawn } from '~/types/Requests/RequestPawn';

type FormValues = RequestPawn;

interface Props {
  cities?: City[];
  onSubmit: (data: FormValues) => Promise<void>;
}

const JewelryForm: FC<Props> = ({ onSubmit, cities = null }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

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
    <Form
      form={form}
      onFinish={handleFormSubmit}
      validateMessages={defaultValidateMessages}
      initialValues={{ plaza: '---' }}
    >
      <div className="grid grid-cols-2 gap-4">
        <Form.Item name="material" initialValue="default" rules={[{ required: true }]}>
          <SelectField
            name="material"
            label="¿Cuál es el material de tu joya?"
            placeholder="Selecciona material"
            options={[
              { label: 'Oro', value: 'oro' },
              { label: 'Plata', value: 'plata' },
              { label: 'Platino', value: 'platino' },
            ]}
          />
        </Form.Item>
        <Form.Item name="kilataje" rules={[{ required: true }]}>
          <InputField label="¿Cuál es el kilataje de tu joya?" placeholder="14 kilates" />
        </Form.Item>
        <div className="col-span-2">
          <Form.Item name="peso">
            <InputField label="¿Cuál es el peso de tu joya en gramos?" placeholder="0.00 gramos" />
          </Form.Item>
        </div>
        <div className="col-span-2">
          <Form.Item name="plaza" rules={[{ required: true }]}>
            <SelectField
              name="plaza"
              label="Selecciona tu ciudad"
              options={
                cities !== null
                  ? cities.map((item) => ({
                      value: item.code,
                      label: item.name,
                    }))
                  : []
              }
            />
          </Form.Item>
        </div>
        <div className="col-span-2">
          <Form.Item name="correo">
            <InputField label="Correo electrónico" />
          </Form.Item>
        </div>
        <div className="col-span-2">
          <Button
            fullWidth
            theme="primary"
            loading={loading}
            text="Ver cuánto te prestamos por tu artículo"
          />
        </div>
      </div>
    </Form>
  );
};

export default JewelryForm;
