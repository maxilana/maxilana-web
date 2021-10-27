import Link from 'next/link';
import { Form } from 'antd';
import { FC, useEffect, useState } from 'react';

import { Logo } from '~/components/svg';
import { Button } from '~/components/ui';
import { CustomForm, InputField } from '~/components/common';
import { NextAPIMutator } from '~/modules/api/nextApiFetcher';

type FormValues = {
  user: string;
  password: string;
};

const LoginForm: FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    setLoading(true);

    try {
      const authUser = await NextAPIMutator({
        endpoint: '/api/login',
        method: 'POST',
        body: JSON.stringify(values),
      });

      console.log(authUser);
    } catch (err) {
      setLoading(false);
      throw err;
    }

    setLoading(false);
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
    <CustomForm
      form={form}
      name="loginForm"
      className="max-w-lg"
      containerType="modal"
      onSubmit={handleSubmit}
    >
      <>
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
              <Button fullWidth theme="primary" loading={loading} text="Iniciar Sesión" />
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
      </>
    </CustomForm>
  );
};

export default LoginForm;
