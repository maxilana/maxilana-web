import { EnvironmentOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import getAllCities from '~/api/getAllCities';
import getBranch from '~/api/getBranch';
import getBranchesSlugs from '~/api/getBranchesSlugs';
import getProducts from '~/api/getProducts';
import { Layout } from '~/components/layout';
import { Branch, City } from '~/types/Models';
import { Product } from '~/types/Models/Product';
import { CircleLink, BranchSchedule } from '~/components/Branches';
import { Button, ProductCard } from '~/components/ui';

import LogoRedondo from '../../public/logo-redondo.png';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const slugs = await getBranchesSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  branch: Branch;
  city?: City;
  products: Product[];
  cities: City[];
}> = async (ctx) => {
  const slug = ctx?.params?.slug as string;
  try {
    const branch = await getBranch(slug);
    const cities = await getAllCities();
    const products = await getProducts({ sucursal: `${branch?.id}` });
    const city = cities.find((item) => item.id === branch.CityId);
    return {
      props: {
        branch,
        city,
        products: products.rows,
        cities,
      },
    };
  } catch (e) {
    console.log(e);
    return { notFound: true };
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const View: NextPage<Props> = ({ branch, city, products, cities }) => {
  const { phone = '', whatsapp = '', email } = branch || {};
  const phoneLink = `tel:52${phone.replace(/\s/g, '')}`;
  const whatsappLink = `https://api.whatsapp.com/send?phone=521${whatsapp.replace(/\s/g, '')}`;

  return (
    <Layout title={`${branch.name}, ${city?.name} ${city?.state}`} cities={cities}>
      <main className="container mx-auto p-4 flex flex-col gap-12 md:flex-row">
        <aside className="divide-y divide-gray-300 md:min-w-[237px] xl:min-w-[300px]">
          <div className="py-4 flex flex-col items-center text-center space-y-2">
            <Image src={LogoRedondo} alt="Logo Maxilana" layout="fixed" />
            <h1 className="h6">{branch.name}</h1>
            <p className="text-secondary text-sm">{branch.address}</p>
          </div>
          <div className="grid grid-cols-3 py-4">
            <CircleLink href={phoneLink} text="Llamar por teléfono" icon={<PhoneOutlined />} />
            <CircleLink href="#" text="Ver en el mapa" icon={<EnvironmentOutlined />} />
            <CircleLink
              whatsapp
              href={whatsappLink}
              text="Enviar WhatsApp"
              icon={<WhatsAppOutlined />}
            />
          </div>
          <div className="py-4 text-secondary">
            <BranchSchedule branch={branch} />
          </div>
          <div className="py-4 text-secondary">
            <span className="block text-brand-dark text-xs font-semibold uppercase">Contacto</span>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </aside>
        <section className="mb-16">
          <h2 className="h5 my-6">Algunos productos que puedes encontrar en nuestra sucursal</h2>
          <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 xl:grid-cols-4">
            {!!products?.length &&
              products.map((product) => <ProductCard key={product.id} data={product} />)}
          </div>
          <Button
            href={`/busqueda?sucursal=${branch.id}&ciudad=${branch.CityId}`}
            text="Ver todos"
            theme="secondary"
            fullWidth
          />
        </section>
      </main>
    </Layout>
  );
};

export default View;
