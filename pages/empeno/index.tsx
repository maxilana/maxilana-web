import { NextPage } from 'next';
import Image from 'next/image';
import { PictureOutlined } from '@ant-design/icons';

import { Container, HelpSidebar, Layout } from '~/components/layout';
import { ServicePaymentCards } from '~/components/common';
import { PropsWithCities } from '~/types/PropsWithCities';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

const EmpenoPage: NextPage<PropsWithCities> = ({ cities }) => {
  return (
    <Layout
      title="Maxilana | Casa de empeño"
      meta={{
        description: 'Maxilana casa de empeño y prestamos',
        keywords: 'empeño, empeno, facil empeño, prestamos, maxilana, joyeria, remates',
      }}
      cities={cities}
    >
      <Container>
        <div className="py-12 max-w-5xl mx-auto sm:py-24">
          <ServicePaymentCards
            actionCard={{
              title: 'Te prestamos más por tu auto',
              imageSource: '/tarjeta-empeno-auto.png',
              description: 'Recibe más por tu auto, más dinero, mayor plazo.',
              buttonLabel: 'Solicitar un avalúo',
              buttonHref: '/empeno/auto',
            }}
            contextCard={{
              title: 'Realiza abonos de tu empeño sin acudir a sucursal',
              description: 'Por medio de depósito o transferencia en:',
            }}
          />
        </div>
      </Container>
      <Container>
        <div className="py-12 max-w-5xl mx-auto sm:py-24">
          <h2 className="text-2xl text-center">Así de fácil es empeñar en Maxilana</h2>
          <div className="bg-gray-200 mt-12 w-full h-60 flex flex-row items-center justify-center">
            <PictureOutlined style={{ fontSize: 48, color: 'white' }} />
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-12 max-w-4xl mx-auto sm:py-24 sm:px-32">
          <h2 className="text-2xl text-center">Pasos para empeñar en Maxilana</h2>
          <div className="my-12">
            <ol className="flex flex-col space-y-10 sm:space-y-20">
              {steps.map((item) => (
                <li key={item.id} className="flex flex-row items-start">
                  <div className="w-[64px] h-[64px] flex-shrink relative">
                    <Image
                      width={64}
                      height={64}
                      layout="fixed"
                      src={item.imageSrc}
                      alt={item.title}
                      objectFit="contain"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg mb-4">{`${item.id}. ${item.title}`}</h3>
                    <p className="text-sm text-secondary">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
      <Container>
        <div className="py-12 sm:py-24 sm:px-32">
          <h2 className="text-2xl text-center">Recibe más beneficios por empeño</h2>
          <div className="grid gap-6 mt-16 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div key={item.id} className="text-center p-2">
                <div className="w-[100px] h-[100px] relative mx-auto mb-4">
                  <Image
                    width={100}
                    height={100}
                    layout="responsive"
                    src={item.imageSrc}
                    alt={item.title}
                    objectFit="contain"
                  />
                </div>
                <h3 className="text-lg mb-4">{item.title}</h3>
                <p className="text-sm text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container>
        <div className="pb-6">
          <HelpSidebar direction="horizontal" questions={questionList} />
        </div>
      </Container>
    </Layout>
  );
};

const steps = [
  {
    id: 1,
    imageSrc: '/svg/icono-diamante.svg',
    title: 'Trae tu artículo',
    description:
      'Recibimos casi cualquier artículo. Laptops, Joyas, Electrodomesticos, Linea Blanca, Videojuegos. No olvides tu identificación.',
  },
  {
    id: 2,
    imageSrc: '/svg/icono-lupa.svg',
    title: 'Evaluamos tu artículo',
    description:
      'Nuestro valuador experto, valuara las condiciones de tu prenda y el valor que que tiene.',
  },
  {
    id: 3,
    imageSrc: '/svg/icono-billete.svg',
    title: 'Recibe tu dinero',
    description:
      'El artículo se guarda y se asegura en nutras instalaciónes. Puedes recogerlo cuando pagues el desempeño o refrendar el préstamo las veces que quieras',
  },
];

const benefits = [
  {
    id: 1,
    imageSrc: '/svg/icono-bolsa-dinero.svg',
    title: 'Recibe más dinero por tu artículo',
    description:
      'Sabemos que tus prendas valen oro. Es por eso que en Maxilana te damos más por tu empeño.',
  },
  {
    id: 2,
    imageSrc: '/svg/icono-tarjeta-credito.svg',
    title: 'Paga más comodamente',
    description:
      'Paga en línea o en cualquier sucursal. Elige el método de abono que más te convenga.',
  },
  {
    id: 3,
    imageSrc: '/svg/icono-megafono.svg',
    title: 'Promociones todo el tiempo',
    description: 'En Maxilana siempre tenemos promociones que te harán ganar más por menos.',
  },
  {
    id: 4,
    imageSrc: '/svg/icono-escudo-seguridad.svg',
    title: 'Tu prenda está asegurada',
    description: 'Todos los artículos empeñados en Maxilana cuentan con un seguro que los protege.',
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

export default EmpenoPage;
