import { EnvironmentOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import getAllCities from '~/api/getAllCities';
import getBranchById from '~/api/getBranchById';
import getBranchesSlugs from '~/api/getBranchesSlugs';
import { Layout } from '~/components/layout';
import { Branch, City } from '~/types/Models';
import LogoRedondo from '../../public/logo-redondo.png';
import { CircleLink } from '~/components/Branches';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const slugs = await getBranchesSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ branch: Branch; city?: City }> = async (ctx) => {
  const slug = ctx?.params?.slug as string;
  const [id] = slug.split('-');

  if (Number.isNaN(parseInt(id))) return { notFound: true };

  try {
    const branch = await getBranchById(parseInt(id));
    const cities = await getAllCities();
    const city = cities.find((item) => item.id === branch.CityId);
    return {
      props: {
        branch,
        city,
      },
    };
  } catch (e) {
    return { notFound: true };
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const View: NextPage<Props> = ({ branch, city }) => {
  return (
    <Layout title={`${branch.name}, ${city?.name} ${city?.state}`}>
      <main className="container mx-auto p-4 flex flex-col gap-12 md:flex-row">
        <aside className="divide-y divide-gray-300 md:max-w-[237px]">
          <div className="py-4 flex flex-col items-center text-center space-y-2">
            <Image src={LogoRedondo} alt="Logo Maxilana" layout="fixed" />
            <h1 className="h6">{branch.name}</h1>
            <p className="text-secondary text-sm">
              {branch.address}, {city?.name}, {city?.state}
            </p>
          </div>
          <div className="grid grid-cols-3 py-4">
            <CircleLink href="#" text="Llamar por teléfono" icon={<PhoneOutlined />} />
            <CircleLink href="#" text="Ver en el mapa" icon={<EnvironmentOutlined />} />
            <CircleLink
              href="#"
              text="Enviar WhatsApp"
              icon={<WhatsAppOutlined />}
              bgColor="whatsapp"
            />
          </div>
          <div className="py-4 text-secondary">
            <span className="font-bold block text-primary">Horario:</span>
            <span className="flex justify-between">
              <span>Lun - Vie:</span>
              <span>{branch?.mondayToFridaySchedule} hrs.</span>
            </span>
            <span className="flex justify-between">
              <span>Sáb:</span>
              <span>{branch?.saturdaySchedule} hrs.</span>
            </span>
            <span className="flex justify-between">
              <span>Dom:</span>
              <span>
                {branch?.sundaySchedule === 'Cerrado'
                  ? 'Cerrado'
                  : `${branch?.sundaySchedule} hrs.`}
              </span>
            </span>
          </div>
        </aside>
        <section>
          <h2 className="h5">Algunos productos que puedes encontrar en nuesta sucursal</h2>
        </section>
      </main>
    </Layout>
  );
};

export default View;
