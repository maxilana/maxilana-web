import { FC } from 'react';
import { Form } from 'antd';

import { Button } from '~/components/ui';
import { InputField } from '~/components/common';

import formStyles from '../../payments/FormContainer.module.css';

const AutoPawnForm: FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <div className={formStyles.root}>
        <div className="text-center mb-8">
          <h2 className="text-2xl">Solicitud de avalúo</h2>
          <p className="text-secondary text-sm">
            Conoce cuanto te prestamos por tu auto. A la brevedad un representante se comunicará
            contigo
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Form.Item noStyle name="name" rules={[{ required: true, message: 'Campo requerido' }]}>
              <InputField name="name" label="Nombre" errors={form.getFieldError('name')} />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="firstName">
              <InputField name="firstName" label="Primer Apellido" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="lastName">
              <InputField name="lastName" label="Segundo Apellido" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="birthDate">
              <InputField name="birthDate" label="Fecha de nacimiento" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="city">
              <InputField name="city" label="Ciudad" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="carBrand">
              <InputField name="carBrand" label="Marca" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="carYear">
              <InputField name="carYear" label="Modelo o Año" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="carType">
              <InputField name="carType" label="Tipo" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="requestedQuantity">
              <InputField name="requestedQuantity" label="Cantidad solicitada" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="email">
              <InputField name="email" type="email" label="Correo electrónico" />
            </Form.Item>
          </div>
          <div>
            <Form.Item noStyle name="phoneNumber">
              <InputField
                required
                type="tel"
                maxLength={10}
                pattern="[0-9]{10}"
                name="phoneNumber"
                label="Teléfono (10 dígitos)"
              />
            </Form.Item>
          </div>
        </div>
        <div className="py-8">
          <Button theme="primary" text="Enviar Solicitud" fullWidth />
        </div>
        <p className="text-xs text-secondary">
          La Tasa Nominal Anual Máxima (TAE) es de 150% sin IVA. Tasa Anual Fija. Para fines
          informativos y de comparación. Fecha de cálculo 30 de junio de 2017. Por ejemplo para un
          préstamo de $10,000 pesos se deberán abonar 12 cuotas mensuales de $1,250.00 pesos más IVA
          cada una. Importe total a pagar (capital + intereses) de $15,000.00 pesos más IVA. Periodo
          mínimo de 60 días y máximo de 6 meses (renovable).
        </p>
      </div>
    </Form>
  );
};

export default AutoPawnForm;
