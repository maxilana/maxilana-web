import { NextPage } from 'next';
import Link from 'next/link';
import { Form } from 'antd';
import { PhoneFilled, QuestionCircleFilled, ShopFilled } from '@ant-design/icons';

import { Container, Layout } from '~/components/layout';
import { DefaultPageProps } from '~/types/DefaultPageProps';
import { InputField, SocialMenu } from '~/components/common';
import { Button } from '~/components/ui';
import defaultValidateMessages from 'config/validationMessages';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const ContactPage: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  const [form] = Form.useForm();

  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Layout cities={cities} title="Contáctanos" legalPages={legalPages}>
      <Container>
        <div className="grid gap-10 my-12 sm:my-24 lg:grid-flow-col">
          <div className="lg:max-w-md">
            <div className="space-y-2">
              <h1 className="text-2xl">Estamos para ayudarte</h1>
              <p className="text-secondary">
                Nos encantaría escuchar lo que tienes qué decir. También puedes consultar las{' '}
                <Link href="/preguntas-frecuentes">
                  <a className="text-price underline">preguntas frecuentes</a>
                </Link>
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded overflow-hidden">
              <div className="grid sm:grid-cols-2">
                <div className="p-6">
                  <Form
                    form={form}
                    onFinish={handleFormSubmit}
                    validateMessages={defaultValidateMessages}
                  >
                    <h2 className="text-xl">Tu opinión es importante para nosotros</h2>
                    <div className="grid gap-4 grid-cols-2 my-4">
                      <div className="col-span-2">
                        <Form.Item name="tema" rules={[{ required: true }]}>
                          <InputField label="Tema" />
                        </Form.Item>
                      </div>
                      <div className="col-span-2">
                        <Form.Item name="nombre" rules={[{ required: true }]}>
                          <InputField label="Nombre" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item name="correoElectronico" rules={[{ required: true }]}>
                          <InputField type="email" label="Correo Electrónico" />
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item name="ciudad">
                          <InputField label="Ciudad" />
                        </Form.Item>
                      </div>
                      <div className="col-span-2">
                        <Form.Item name="asunto">
                          <InputField label="Asunto" />
                        </Form.Item>
                      </div>
                      <div className="col-span-2">
                        <Form.Item name="mensaje">
                          <InputField label="Mensaje" />
                        </Form.Item>
                      </div>
                      <div className="col-span-2">
                        <Button fullWidth theme="secondary" text="Enviar" />
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="bg-gradient-to-br from-[#1E83E1] to-[#1362AB] p-6">
                  <div className="flex flex-col justify-center h-full text-white">
                    <div className="space-y-3">
                      <h2 className="text-xl text-white">Información de contacto</h2>
                      <p className="text-white">
                        Para cualquier duda o aclaración, por favor comunícate con nosotros a través
                        del los siguientes medios:
                      </p>
                    </div>
                    <div className="flex-grow my-10">
                      <ul className="list-none space-y-6">
                        <li className="flex flex-row space-x-2 items-center uppercase text-xs">
                          <PhoneFilled style={{ fontSize: 20, color: '#FEC200' }} />
                          <a href="tel:800215515">800 215 1515</a>
                        </li>
                        <li className="flex flex-row space-x-2 items-center uppercase text-xs">
                          <ShopFilled style={{ fontSize: 20, color: '#FEC200' }} />
                          <Link href="/sucursales">
                            <a>Buscar Sucursales</a>
                          </Link>
                        </li>
                        <li className="flex flex-row space-x-2 items-center uppercase text-xs">
                          <QuestionCircleFilled style={{ fontSize: 20, color: '#FEC200' }} />
                          <Link href="/preguntas-frecuentes">
                            <a>Ver preguntas frecuentes</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <SocialMenu />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
