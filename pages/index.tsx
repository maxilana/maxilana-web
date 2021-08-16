import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { CategoryExplorer, Hero } from '~/components/common';
import { Footer, Layout } from '~/components/layout';
import { Card, Button } from '~/components/ui';

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero
        title="En Maxilana te sacamos del apuro"
        subtitle="Averigua hasta cuánto te podemos dar por tus pertenencias"
        actions={(
          <React.Fragment>
            <Button text="Avalúa tu empeño" theme="primary" />
            <Button text="Solicita un préstamo" />
          </React.Fragment>
        )}
        cover={(
          <Image
            layout="fill"
            src="/demo-hero.jpg"
            alt="Hero Homepage Image"
            objectFit="cover"
          />
        )}
      />
      <Layout>
        <div className="grid gap-6 my-12 md:grid-cols-2 lg:my-16">
          {cards.map(card => (
            <Card key={card.id}>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row-reverse sm:space-y-0 sm:justify-between">
                <div className="relative min-w-[150px] lg:min-w-[200px]">
                  <Image
                    width={250}
                    height={364}
                    layout="responsive"
                    src={card.image.src}
                    alt={card.image.alt}
                  />
                </div>
                <div className="text-center space-y-3 sm:text-left lg:space-y-4">
                  <h5 className="text-lg lg:text-2xl">{card.title}</h5>
                  <p className="text-xs lg:text-base">
                    {card.description}
                  </p>
                  <Button text={card.action.label} size="small" />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <section className="my-12 lg:my-[72px]">
          <h2 className="text-center text-2xl">Remates por categoría</h2>
          <CategoryExplorer />
          <div className="text-center">
            <Button theme="secondary" text="Ver todos los remates" href="/" />
          </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}

const cards = [
  {
    id: 1,
    title: "Paga en línea",
    description: "Paga tu empeño, Maxilana Vales o tu prestamo personal.",
    image: {
      src: "/ilustracion-pago-online-inicio.png",
      alt: "Ilustración de tarjetas para pagar en línea",
    },
    action: {
      label: "Pagar en línea",
      href: "/"
    }
  },
  {
    id: 2,
    title: "Gana más con Maxilana Vales",
    description: "Conviértete en distribuidora de vales.",
    image: {
      src: "/ilustracion-pago-online-inicio.png",
      alt: "Ilustración de tarjetas para pagar en línea",
    },
    action: {
      label: "Más información",
      href: "/"
    }
  },
  {
    id: 3,
    title: "¿Necesitas dinero?",
    description: "Obtén un préstamo personal fácil y rápido.",
    image: {
      src: "/fotografia-hombre-sin-dinero.png",
      alt: "Ilustración de tarjetas para pagar en línea",
    },
    action: {
      label: "Solicitar préstamo",
      href: "/"
    }
  },
  {
    id: 4,
    title: "Visítanos en sucursal",
    description: "Nuestros expertos en sucursale pueden calcular el valor justo de una amplia variedad de mercancías.",
    image: {
      src: "/ilustracion-mapa-inicio.png",
      alt: "Ilustración de tarjetas para pagar en línea",
    },
    action: {
      label: "Ver sucursales",
      href: "/"
    }
  }
];

export default Home;
