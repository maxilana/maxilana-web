import { Form } from 'antd';
import Link from 'next/link';

import { Logo } from '~/components/svg';
import { Button } from '~/components/ui';
import { InputField } from '~/components/common';
import { AuthFooter, BareLayout } from '~/components/layout';
import defaultValidateMessages from 'config/validationMessages';

const SignupPage = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <BareLayout title="Registro" hasHeader={false} meta={{ css: ['/antd/form.css'] }}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <header className="flex items-center justify-center my-4">
          <Link href="/">
            <a className="inline-flex">
              <Logo alt width={182} height={46} />
            </a>
          </Link>
        </header>
        <div className="container mx-auto my-4 px-4 sm:max-w-2xl">
          <h1 className="h5 text-center my-8">
            Regístrate y empieza a obtener beneficios de Maxilana
          </h1>
          <Form
            form={form}
            name="signupForm"
            onFinish={handleSubmit}
            validateMessages={defaultValidateMessages}
            className="bg-white rounded border border-gray-200 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Form.Item name="name" className="sm:col-span-2" rules={[{ required: true }]}>
                <InputField label="Nombre" />
              </Form.Item>
              <Form.Item name="lastname" rules={[{ required: true }]}>
                <InputField label="Apellido paterno" />
              </Form.Item>
              <Form.Item name="surname" rules={[{ required: true }]}>
                <InputField label="Apellido materno" />
              </Form.Item>
              <Form.Item name="celphone" rules={[{ required: true }]}>
                <InputField type="tel" label="Número celular" maxLength={10} />
              </Form.Item>
              <Form.Item name="email" rules={[{ required: true }]}>
                <InputField type="email" label="Correo electrónico" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true }]}>
                <InputField type="password" label="Contraseña" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                rules={[
                  { required: true },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(new Error('Las contraseñas no coinciden'));
                    },
                  }),
                ]}
              >
                <InputField type="password" label="Confirmar contraseña" />
              </Form.Item>
              <div className="sm:col-span-2">
                <Button fullWidth theme="primary" text="Regístrate" />
              </div>
            </div>
            <hr className="my-6" />
            <div className="text-center text-sm">
              <p>
                Al registrarte aceptas el{' '}
                <Link href="/legal/aviso-de-privacidad">
                  <a className="text-link">Aviso de privacidad</a>
                </Link>{' '}
                y los{' '}
                <Link href="/legal/terminos-y-condiciones">
                  <a className="text-link">Términos y condiciones</a>
                </Link>
              </p>
            </div>
          </Form>
        </div>
        <AuthFooter />
      </div>
    </BareLayout>
  );
};

export default SignupPage;
