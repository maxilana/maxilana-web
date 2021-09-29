import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import Image from 'next/image';

import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getHomePage from '~/api/cms/getHomePage';
import getAllCities from '~/api/getAllCities';
import getProductsFromCMSFilters from '~/api/getProductsFromCMSFilters';
import { Container, Layout } from '~/components/layout';
import { Card, Button, ProductCard } from '~/components/ui';
import { CategoryExplorer, ComissionsTable, Hero, HeroImg } from '~/components/common';
import { City, CMSLegal } from '~/types/Models';
import { CMSCategory } from '~/types/Models/CMSCategory';
import { CMSHomePage } from '~/types/Models/CMSHomePage';
import { Product } from '~/types/Models/Product';
import getCMSCategories from '~/api/cms/getCMSCategories';

interface GSProps {
  products: Product[];
  page: Partial<CMSHomePage>;
  categories: Array<Partial<CMSCategory>>;
  cities: City[];
  legalPages: CMSLegal[];
}

export const getStaticProps: GetStaticProps<GSProps> = async () => {
  const cities = await getAllCities();
  const page = await getHomePage();
  const categories = page?.categories?.length ? page?.categories : await getCMSCategories();

  const products = await getProductsFromCMSFilters(
    page?.productFilters || { quantity: 8, order: 'rand' },
  );

  const legalPages = await getAllLegalPages();

  return {
    props: {
      cities,
      products,
      page,
      categories,
      legalPages,
    },
    // revalidate: 60 * 60, // Each minute
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ cities, products, page, categories, legalPages }) => {
  // TODO: es probable que cloudinary no se use, se debe tener otra opción para generar las imágenes
  const baseURL = `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/image/upload`;
  const filename = `${page?.hero?.image?.hash}${page?.hero?.image?.ext}`;
  const placeholderImage = `${baseURL}/c_fill,g_auto,w_18,q_70/${filename}`;
  const mobileHeroImage = `${baseURL}/c_fill,g_auto,f_auto,w_360,h_420,q_70/${filename}`;
  const tabletHeroImage = `${baseURL}/c_fill,g_auto,f_auto,w_840,h_400,q_80/${filename}`;
  const desktopHeroImage = `${baseURL}/c_fill,g_auto,f_auto,q_80/${filename}`;
  return (
    <Layout
      meta={{ ...page.seo, images: [placeholderImage, mobileHeroImage] }}
      cities={cities}
      legalPages={legalPages}
    >
      <Hero
        title={`${page?.hero?.mainText}`}
        subtitle={page?.hero?.secondaryText}
        actions={
          <>
            {page?.hero?.actions.map((cta, index) => (
              <Button
                key={cta.id}
                text={cta.text}
                theme={!index ? 'primary' : 'default'}
                href={cta.url}
                prefetch={false}
              />
            ))}
          </>
        }
        cover={
          <HeroImg
            placeholder={placeholderImage}
            mobile={mobileHeroImage}
            tablet={tabletHeroImage}
            desktop={desktopHeroImage}
          />
        }
      />
      <Container>
        <div className="grid gap-6 my-12 md:grid-cols-2 lg:my-16">
          {page?.directAccess?.map?.((card) => (
            <Card key={card.id} className="overflow-hidden" noPadding>
              <div className="p-4 flex flex-col items-center justify-center space-y-4 sm:p-0 sm:pl-4 sm:flex-row-reverse sm:space-y-0 sm:justify-between md:pl-6">
                <div className="relative mr-2 min-w-[150px] lg:min-w-[200px]">
                  <Image
                    width={250}
                    height={364}
                    layout="responsive"
                    src={card.image.url}
                    alt={card.title}
                  />
                </div>
                <div className="text-center pb-2 space-y-3 sm:pb-0 sm:text-left lg:space-y-4">
                  <h5 className="text-lg lg:text-2xl">{card.title}</h5>
                  <p className="text-xs lg:text-base">{card.description}</p>
                  {card.link?.map?.((link) => (
                    <Button key={link?.id} size="small" href={link.url} text={link.text} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <section className="my-12 lg:my-[72px]">
          <h2 className="text-center text-2xl">¡Todos nuestros productos en Remate!</h2>
          {!!categories && <CategoryExplorer categories={categories} />}
          <div className="text-center">
            <Button theme="secondary" text="Ver todos los remates" href="/remates" />
          </div>
        </section>
        <section>
          <h2 className="text-2xl text-center">Nuestros últimos productos</h2>
          <div className="grid grid-cols-2 gap-2 my-4 sm:grid-cols-4 sm:gap-4 lg:gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </section>
      </Container>
      <section className="my-12 lg:my-24">
        <h3 className="text-2xl text-center">Consulta los costos y comisiones</h3>
        <ComissionsTable />
      </section>
    </Layout>
  );
};

export default Home;
