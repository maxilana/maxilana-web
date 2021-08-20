import Image from 'next/image';
import { NextPage } from 'next';
import { PictureOutlined } from '@ant-design/icons';

import { FormContainer, Hero, InputField } from '~/components/common';
import { Layout, Container } from '~/components/layout';
import { Button } from '~/components/ui';

const AutoEmpenoPage: NextPage = () => {
  return (
    <div>
      <Layout title="Auto Empeño">
        <Hero
          title="Recibe hasta aun 60% del valor de tu auto"
          subtitle="¡En menos de 10 minutos te resolvemos tus imprevistos!"
          cover={
            <Image
              layout="fill"
              src="/demo-hero-prestamos.jpg"
              alt="Mujer hablando por teléfono, consiguiendo clientes"
              objectFit="cover"
            />
          }
          actions={
            <Button
              size="small"
              theme="secondary"
              text="Solicitar un avaluo"
              href="#solicitud-avaluo"
            />
          }
        />
        <Container>
          <div className="my-12 max-w-5xl mx-auto sm:my-24">
            <div className="bg-gray-200 mt-12 w-full h-60 flex flex-row items-center justify-center">
              <PictureOutlined style={{ fontSize: 48, color: 'white' }} />
            </div>
          </div>
        </Container>
        <Container>
          <div className="py-12 sm:py-24">
            <h2 className="text-2xl text-center">Pasos y requisitos para empeñar tu auto</h2>
            <div className="grid gap-6 mt-16 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((item, idx) => (
                <div key={item.id} className="p-2">
                  <div className="w-[90px] h-[90px] relative mx-auto mb-6">
                    <Image
                      width={90}
                      height={90}
                      layout="responsive"
                      src={item.imageSrc}
                      alt={item.title}
                      objectFit="contain"
                    />
                  </div>
                  <h3 className="text-lg mb-4">{`${idx + 1}. ${item.title}`}</h3>
                  <div
                    className="text-sm text-secondary prose"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
        <section id="solicitud-avaluo" className="my-12 sm:my-24 sm:px-4">
          <div className="max-w-3xl mx-auto">
            <FormContainer>
              <div className="text-center mb-8">
                <h2 className="text-2xl">Solicitud de avalúo</h2>
                <p className="text-secondary text-sm">
                  Conoce cuanto te prestamos por tu auto. A la brevedad un representante se
                  comunicara contigo
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <InputField name="name" label="Nombre" />
                </div>
                <div>
                  <InputField name="firstName" label="Primer Apellido" />
                </div>
                <div>
                  <InputField name="lastName" label="Segundo Apellido" />
                </div>
                <div>
                  <InputField name="birthDate" label="Fecha de nacimiento" />
                </div>
                <div>
                  <InputField name="city" label="Ciudad" />
                </div>
                <div>
                  <InputField name="carBrand" label="Marca" />
                </div>
                <div>
                  <InputField name="carYear" label="Modelo o Año" />
                </div>
                <div>
                  <InputField name="carType" label="Tipo" />
                </div>
                <div>
                  <InputField name="solicitedQuantity" label="Cantidad solicitada" />
                </div>
                <div>
                  <InputField name="email" label="Correo electrónico" />
                </div>
                <div>
                  <InputField name="phoneNumber" label="Teléfono (10 dígitos)" />
                </div>
              </div>
            </FormContainer>
          </div>
        </section>
      </Layout>
    </div>
  );
};

const steps = [
  {
    id: 1,
    imageSrc: '/svg/icono-carro.svg',
    title: 'Lleva tu carro a cualquier sucursal',
    description: `
      <ul>
        <li>Tu vehiculo tiene que tener maximo 10 años de antigüedad.</li>
        <li>Los vehículos importados si se reciben pero deben de contar con placas vigentes y tener maximo 10 años de antigüedad.</li>
      </ul>
    `,
  },
  {
    id: 2,
    imageSrc: '/svg/icono-lupa-outline.svg',
    title: 'Presenta la documentación',
    description: `
      <ul>
        <li>La factura original de tu vehículo.</li>
        <li>Tarjeta de circulación a nombre de quien presenta el vehículo.</li>
        <li>Comprobantes de tenencias o revalidaciones de los últimos 5 años.</li>
        <li>Los nacionalizados deben de contar con la constancia de importación (pedimento).</li>
      </ul>
    `,
  },
  {
    id: 3,
    imageSrc: '/svg/icono-bolsa-dinero.svg',
    title: 'Llévate el dinero que necesites',
    description: `
      <ul>
        <li>Se hara la valuación de tu vehículo, revisión fisica y verificación de los documentos.</li>
        <li>Tendra de 1 a 3 meses de plazo para pagar. Lo puede retirar cuando desee, dentro del plazo señalado, pagando el préstamo e intereses al día del desempeño.</li>
      </ul>
    `,
  },
];

export default AutoEmpenoPage;
