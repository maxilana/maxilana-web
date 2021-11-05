import { Form } from 'antd';
import { NextPage } from 'next';

import { Layout } from '~/components/layout';
import { Breadcrumbs, Button } from '~/components/ui';
import { CustomForm, InputField } from '~/components/common';
import { AuthPageProps } from '~/types/AuthPageProps';

export { default as getServerSideProps } from '~/utils/authGetServerSideProps';

const EditProfilePage: NextPage<AuthPageProps> = ({ cities = [], legalPages = [] }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    console.log(values);

    throw new Error('Este es un error de prueba');
  };

  return (
    <Layout
      cities={cities}
      title="Editar tu perfil"
      legalPages={legalPages}
      meta={{ css: ['/antd/form.css'] }}
    >
      <section className="max-w-2xl mx-auto py-4 sm:px-4 sm:py-8">
        <div className="px-4 sm:px-0">
          <Breadcrumbs
            links={[
              { label: 'Perfil', href: '/perfil' },
              { label: 'Editar perfil', href: '/perfil/editar-perfil' },
            ]}
          />
        </div>
        <CustomForm form={form} name="profileForm" onSubmit={handleSubmit}>
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
        </CustomForm>
      </section>
    </Layout>
  );
};

export default EditProfilePage;
