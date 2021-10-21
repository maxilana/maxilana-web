import { Form } from 'antd';
import Link from 'next/link';

import { Logo } from '~/components/svg';
import { InputField } from '~/components/common';
import { BareLayout } from '~/components/layout';
import { Button } from '~/components/ui';

const LoginPage = () => {
  const [form] = Form.useForm();

  return (
    <BareLayout title="Iniciar Sesión" hasHeader={false}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <header className="flex items-center justify-center my-8">
          <Link href="/">
            <a className="inline-flex">
              <Logo alt width={182} height={46} />
            </a>
          </Link>
        </header>
        <div className="container mx-auto my-12 px-4 sm:max-w-lg">
          <h1 className="h5 text-center my-8">Inicia sesión con tu email o celular</h1>
          <Form
            form={form}
            name="loginForm"
            className="bg-white rounded border border-gray-200 p-6"
          >
            <div className="grid gap-4">
              <Form.Item name="user">
                <InputField label="Email o celular" placeholder="Ingresa número celular o email" />
              </Form.Item>
              <Form.Item name="password">
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
          </Form>
        </div>
        <footer className="my-12 mx-auto sm:max-w-xl">
          <ul className="flex flex-col items-center justify-between text-sm sm:flex-row">
            <li className="text-link uppercase p-1">
              <Link href="/contacto">
                <a>Contacto</a>
              </Link>
            </li>
            <li className="text-link uppercase p-1">
              <Link href="/legal/terminos-y-condiciones">
                <a>Términos y Condiciones</a>
              </Link>
            </li>
            <li className="text-link uppercase p-1">
              <Link href="/legal/aviso-de-privacidad">
                <a>Aviso de privacidad</a>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </BareLayout>
  );
};

export default LoginPage;
