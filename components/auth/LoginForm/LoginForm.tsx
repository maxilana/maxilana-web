import Link from 'next/link';
import { Form } from 'antd';
import { FC, useEffect } from 'react';

import { Logo } from '~/components/svg';
import { Button } from '~/components/ui';
import { InputField } from '~/components/common';
import defaultValidateMessages from 'config/validationMessages';

const LoginForm: FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    if (!document.getElementById('/antd/form.css')) {
      const head = document.head;
      const link = document.createElement('link');

      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = '/antd/form.css';

      head.appendChild(link);
    }
  }, []);

  return (
    <Form
      form={form}
      name="loginForm"
      onFinish={handleSubmit}
      validateMessages={defaultValidateMessages}
      className="max-w-lg"
    >
      <div className="formContainerModal">
        <header className="text-center">
          <Link href="/">
            <a className="inline-flex">
              <Logo alt width={182} height={46} />
            </a>
          </Link>
        </header>
        <div className="px-4">
          <p className="text-center text-secondary my-6">Inicia sesión con tu email o celular</p>
          <div>
            <div className="grid gap-4">
              <Form.Item name="user" rules={[{ required: true }]}>
                <InputField label="Email o celular" placeholder="Ingresa número celular o email" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true }]}>
                <InputField type="password" label="Contraseña" />
              </Form.Item>
              <Button fullWidth theme="primary" text="Iniciar Sesión" />
            </div>
            <hr className="my-6" />
            <div className="text-center text-sm">
              <p>
                ¿No estás registrado?{' '}
                <Link href="/auth/registro">
                  <a className="text-link">Regístrate aquí</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
