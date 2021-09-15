import Image from 'next/image';
import { NextPage } from 'next';

import { Button } from '~/components/ui';
import { AutoPawnForm } from '~/components/pawn';
import { Layout, Container, HelpSidebar } from '~/components/layout';
import { PropsWithCities } from '~/types/PropsWithCities';
import HeroAutoEmpeno from '~/public/foto-hero-auto-empeno.png';

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
                  src={HeroAutoEmpeno}
                  alt="Imagen de un automóvil"
                  placeholder="blur"
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
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe
                className="absolute inset-0"
                src="https://www.youtube.com/embed/5NZyvct4KK0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
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
            <AutoPawnForm />
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
