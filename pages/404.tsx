import { ArrowRightOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import Link from 'next/link';
import { FormEventHandler } from 'react';
import { Error404, Logo } from '~/components/svg';
import { Button } from '~/components/ui';
import { InputField } from '~/components/common';

const custom404 = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  };
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <div className="bg-brand py-4">
        <Link href="/">
          <a className="w-64 mx-auto block">
            <Logo />
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-center flex-1">
        <div className="text-center space-y-8">
          <Error404 />
          <div>
            <span className="h4 mt-8 mb-4 block">Oops!... La página que buscas no existe.</span>
            <span className="block">
              Lo sentimos puede que la página que buscas ya no exista o nunca fue creada.
            </span>
          </div>
          <Button text="Ir al inicio" rightIcon={<ArrowRightOutlined />} href="/" />
          <Form className="max-w-sm mx-auto" onFinish={handleSubmit}>
            <Form.Item name="q">
              <InputField placeholder="Buscar productos" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default custom404;
