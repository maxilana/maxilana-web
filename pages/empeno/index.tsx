import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import { PawnRequestFlow } from '~/components/pawn';
import { Container, HelpSidebar, Layout } from '~/components/layout';
import { ServicePaymentCards, YouTube } from '~/components/common';
import { PropsWithCities } from '~/types/PropsWithCities';
import { Button, Card } from '~/components/ui';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

import Auto from '~/public/tarjeta-empeno-auto.png';
import HeroEmpeno from '~/public/hero-empeno.png';
import PagoOnline from '~/public/ilustracion-pago-online-inicio.png';

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
      <div className="bg-[#F7D067] sm:p-4 lg:py-12 border-b">
        <div className="container mx-auto grid gap-6 items-center lg:gap-4 lg:grid-flow-col">
          <div className="lg:w-[628px]">
            <div className="relative text-center mb-6">
              <Image
                priority
                quality={100}
                src={HeroEmpeno}
                alt="Imagen de un hombre feliz con varios artículos"
              />
            </div>
            <div className="px-4 space-y-2">
              <h1 className="text-2xl sm:text-4xl">Recibimos casi todos los artículos</h1>
              <p className="text-lg">¡Te damos más por tu prenda!</p>
            </div>
          </div>
          <PawnRequestFlow />
        </div>
      </div>
      <Container>
        <div className="my-12 max-w-5xl mx-auto sm:my-12">
          <ServicePaymentCards
            actionCard={{
              title: 'Paga en línea o en cualquier sucursal',
              imageSource: PagoOnline,
              description: 'Paga tu empeño y no pierdas tu artículo',
              buttonLabel: 'Pagar refrendo',
              buttonHref: '/pagos/empeno',
            }}
            contextCard={{
              title: 'Realiza abonos de tu empeño sin acudir a sucursal',
              description: 'Por medio de depósito o transferencia en:',
            }}
          />
        </div>
      </Container>
      <Container>
        <div className="my-12 sm:my-24">
          <Card>
            <div className="sm:flex flex-row items-center">
              <div className="flex-grow">
                <Image src={Auto} layout="responsive" alt="Fotografía de un auto" />
              </div>
              <div className="sm:w-1/2">
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-2xl">Te prestamos más por tu auto</h3>
                  <p>Recibe más por tu auto, más dinero, mayor plazo.</p>
                  <Button theme="secondary" href="/empeno/auto" text="Solicitar un avalúo" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
      <Container>
        <div className="my-12 max-w-5xl mx-auto sm:my-24">
          <h2 className="text-2xl text-center mb-6">Así de fácil es empeñar en Maxilana</h2>
          <YouTube url="https://www.youtube.com/embed/Zc_9C0XGnwk" />
        </div>
      </Container>
      <Container>
        <div className="my-12 max-w-4xl mx-auto sm:my-24 sm:px-32">
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
        <div className="my-12 sm:my-24">
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
