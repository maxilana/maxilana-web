import { EnvironmentOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import getAllCities from '~/api/getAllCities';
import getBranchById from '~/api/getBranchById';
import getBranchesSlugs from '~/api/getBranchesSlugs';
import getProducts from '~/api/getProducts';
import { Layout } from '~/components/layout';
import { Branch, City } from '~/types/Models';
import { Product } from '~/types/Models/Product';
import slugify from '~/utils/slugify';
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

export const getStaticProps: GetStaticProps<{ branch: Branch; city?: City; products: Product[] }> =
  async (ctx) => {
    const slug = ctx?.params?.slug as string;
    const [id] = slug.split('-');

    if (Number.isNaN(parseInt(id))) return { notFound: true };

    try {
      const branch = await getBranchById(parseInt(id));
      const cities = await getAllCities();
      const products = await getProducts({ sucursal: id });
      const city = cities.find((item) => item.id === branch.CityId);
      return {
        props: {
          branch,
          city,
          products: products.rows,
        },
      };
    } catch (e) {
      console.log(e);
      return { notFound: true };
    }
  };

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const View: NextPage<Props> = ({ branch, city, products }) => {
  const imageBaseURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL;
  if (!imageBaseURL) {
    throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
  }
  return (
    <Layout title={`${branch.name}, ${city?.name} ${city?.state}`}>
      <main className="container mx-auto p-4 flex flex-col gap-12 md:flex-row">
        <aside className="divide-y divide-gray-300 md:min-w-[237px] xl:min-w-[300px]">
          <div className="py-4 flex flex-col items-center text-center space-y-2">
            <Image src={LogoRedondo} alt="Logo Maxilana" layout="fixed" />
            <h1 className="h6">{branch.name}</h1>
            <p className="text-secondary text-sm">{branch.address}</p>
          </div>
          <div className="grid grid-cols-3 py-4">
            <CircleLink href="#" text="Llamar por teléfono" icon={<PhoneOutlined />} />
            <CircleLink href="#" text="Ver en el mapa" icon={<EnvironmentOutlined />} />
            <CircleLink href="#" text="Enviar WhatsApp" icon={<WhatsAppOutlined />} whatsapp />
          </div>
          <div className="py-4 text-secondary">
            <BranchSchedule branch={branch} />
          </div>
        </aside>
        <section className="mb-16">
          <h2 className="h5 my-6">Algunos productos que puedes encontrar en nuestra sucursal</h2>
          <div className="grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 xl:grid-cols-4">
            {!!products?.length &&
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  href={
                    product?.slug
                      ? `/producto/${product?.slug}`
                      : `/producto/${product.id}-${slugify(product.name)}`
                  }
                  title={product.name}
                  branch={`${branch.name}, ${city?.name} ${city?.state}`}
                  price={product.netPrice}
                  salePrice={product.price}
                  image={`${imageBaseURL}/${product.code}.jpg`}
                />
              ))}
          </div>
          <Button
            href={`/remates?sucursal=${branch.id}`}
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
