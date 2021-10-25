import { FC } from 'react';
import { Form } from 'antd';

import { Button } from '~/components/ui';
import { InputField } from '~/components/common';
import defaultValidateMessages from 'config/validationMessages';

interface Props {
  onSubmit?: () => {};
}

const EditProfileForm: FC<Props> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="profileForm"
      onFinish={onSubmit}
      className="formContainer"
      validateMessages={defaultValidateMessages}
    >
      <>
        <h1 className="h6">Editar perfil</h1>
        <div className="grid gap-4 mt-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Form.Item name="nombre" rules={[{ required: true }]}>
              <InputField label="Nombre completo" />
            </Form.Item>
          </div>
          <Form.Item name="apellidoPaterno" rules={[{ required: true }]}>
            <InputField label="Apellido materno" />
          </Form.Item>
          <Form.Item name="apellidoMaterno" rules={[{ required: true }]}>
            <InputField label="Apellido materno" />
          </Form.Item>
          <Form.Item name="celular" rules={[{ required: true }]}>
            <InputField type="tel" label="Celular" maxLength={10} />
          </Form.Item>
          <Form.Item name="correoElectronico" rules={[{ required: true }]}>
            <InputField label="Correo electrónico" />
          </Form.Item>
          <div className="sm:col-span-2">
            <h2 className="heading capitalize">Cambiar contraseña</h2>
          </div>
          <div className="sm:col-span-2">
            <Form.Item
              name="contrasenaActual"
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (getFieldValue('contrasenaNueva') !== null && !value) {
                      return Promise.reject('Ingresa tu contraseña actual');
                    }

                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <InputField type="password" label="Contraseña actual" />
            </Form.Item>
          </div>
          <Form.Item name="contrasenaNueva">
            <InputField type="password" label="Contraseña nueva" />
          </Form.Item>
          <Form.Item
            name="confirmarContrasenaNueva"
            dependencies={['contrasenaNueva']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('contrasenaNueva') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Las nuevas contraseñas no coinciden.'));
                },
              }),
            ]}
          >
            <InputField type="password" label="Confirmar contraseña nueva" />
          </Form.Item>
          <div className="sm:col-span-2">
            <Button fullWidth text="Guardar" theme="primary" />
          </div>
        </div>
      </>
    </Form>
  );
};

export default EditProfileForm;
