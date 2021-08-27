import Image from 'next/image';
import { NextPage } from 'next';
import { PictureOutlined } from '@ant-design/icons';

import { Button } from '~/components/ui';
import { FormContainer, InputField } from '~/components/common';
import { Layout, Container, HelpSidebar } from '~/components/layout';
import { PropsWithCities } from '~/types/PropsWithCities';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const AutoEmpenoPage: NextPage<PropsWithCities> = ({ cities }) => {
  return (
    <div>
      <Layout title="Auto Empeño" cities={cities}>
        <div className="pt-[108px] bg-gradient-to-r from-[#F7D067] to-[#F1C153]">
          <div className="container mx-auto px-4 py-10 sm:py-20">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative sm:order-1">
                <Image
                  width={628}
                  height={347}
                  layout="responsive"
                  src="/foto-hero-auto-empeno.png"
                  alt="Imagen de un automóvil"
                />
              </div>
              <div>
                <h1 className="text-2xl mb-2 lg:text-4xl">
                  Recibe hasta un 60% del valor de tu auto
                </h1>
                <p className="text-lg mb-4">¡En menos de 10 minutos resolvemos tus imprevistos!</p>
                <Button
                  size="small"
                  theme="secondary"
                  text="Llena la solicitud de avalúo"
                  href="#solicitud-avaluo"
                />
              </div>
            </div>
          </div>
        </div>
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
                  comunicará contigo
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
                  <InputField required name="email" type="email" label="Correo electrónico" />
                </div>
                <div>
                  <InputField
                    required
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    name="phoneNumber"
                    label="Teléfono (10 dígitos)"
                  />
                </div>
              </div>
              <div className="py-8">
                <Button theme="primary" text="Enviar Solicitud" fullWidth />
              </div>
              <p className="text-xs text-secondary">
                La Tasa Nominal Anual Máxima (TAE) es de 150% sin IVA. Tasa Anual Fija. Para fines
                informativos y de comparación. Fecha de cálculo 30 de junio de 2017. Por ejemplo
                para un préstamo de $10,000 pesos se deberán abonar 12 cuotas mensuales de $1,250.00
                pesos más IVA cada una. Importe total a pagar (capital + intereses) de $15,000.00
                pesos más IVA. Periodo mínimo de 60 días y máximo de 6 meses (renovable).
              </p>
            </FormContainer>
          </div>
        </section>
        <Container>
          <div className="pt-6 pb-10">
            <HelpSidebar direction="horizontal" questions={questionList} />
          </div>
        </Container>
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

const questionList = [
  {
    id: 1,
    label: '¿Qué es un refrendo?',
    href: '/preguntas-frecuentes#que-es-refrendo',
  },
  {
    id: 2,
    label: '¿Qué es un empeño?',
    href: '/preguntas-frecuentes#que-es-un-empeno',
  },
  {
    id: 3,
    label: '¿Por qué no se puede pagar el refrendo completo del empeño en línea?',
    href: '/preguntas-frecuentes#que-es-un-empeno',
  },
];

export default AutoEmpenoPage;
