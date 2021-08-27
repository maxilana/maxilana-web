import React from 'react';
import Image from 'next/image';

import { Container, Layout } from '~/components/layout';
import { Card, Button, ProductCard } from '~/components/ui';
import { CategoryExplorer, Hero } from '~/components/common';

import cards from '~/modules/mock/homelinks.json';
import products from '~/modules/mock/products.json';

function Home() {
  return (
    <Layout
      title="Maxilana | Casa de empeño"
      meta={{
        description: 'Maxilana casa de empeño y prestamos',
        keywords: 'empeño, empeno, facil empeño, prestamos, maxilana, joyeria, remates',
      }}
    >
      <Hero
        title="En Maxilana te sacamos del apuro"
        subtitle="Averigua hasta cuánto te podemos dar por tus pertenencias"
        actions={
          <>
            <Button text="Avalúa tu empeño" theme="primary" />
            <Button text="Solicita un préstamo" />
          </>
        }
        cover={
          <Image
            layout="fill"
            src="/demo-hero.jpg"
            alt="Hero Homepage Image"
            objectFit="cover"
            priority
          />
        }
      />
      <Container>
        <div className="grid gap-6 my-12 md:grid-cols-2 lg:my-16">
          {cards.map((card) => (
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
                  <p className="text-xs lg:text-base">{card.description}</p>
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
        <section>
          <h2 className="text-2xl">Nuestros últimos productos</h2>
          <div className="grid grid-cols-2 gap-2 my-4 sm:grid-cols-4 sm:gap-4 lg:gap-6">
            {products.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                branch={item.branch}
                onSale={item?.onSale}
                shipping={item?.shipping}
                salePrice={item?.salePrice}
              />
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default Home;
