import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getAllCities from '~/api/getAllCities';
import { Layout } from '~/components/layout';
import { City, CMSLegal } from '~/types/Models';
import { CardLink } from '~/components/ui';

interface GSProps {
  cities: City[];
  legalPages: CMSLegal[];
}

const sections = [
  {
    id: 1,
    name: 'Indeed',
    href: 'https://mx.indeed.com/cmp/Maxilana-Casa-De-Empe%C3%B1o/reviews',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
  {
    id: 2,
    name: 'Computrabajo',
    href: 'https://www.computrabajo.com.mx/la-nacional-pignoraciones-y-remates',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
  {
    id: 3,
    name: 'OCC',
    href: 'https://www.occ.com.mx/perfiles-empresas/163104194179693-la-nacional-pignoraciones-y-remates-de-cv',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
  {
    id: 4,
    name: 'Jooble',
    href: 'https://mx.jooble.org/trabajo-maxilana-casa-empe%C3%B1o',
    image: 'https://res.cloudinary.com/adhocti/image/upload/v1631732884/pin-48x48_ikfgau.png',
  },
];

export const getStaticProps: GetStaticProps<GSProps> = async () => {
  const cities = await getAllCities();
  const legalPages = await getAllLegalPages();

  return {
    props: {
      cities,
      legalPages,
    },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const JobsPage: NextPage<Props> = ({ cities, legalPages }) => {
  return (
    <Layout title="Empleos" cities={cities} legalPages={legalPages}>
      <main className="container mx-auto p-4 my-12 grid gap-8 lg:grid-cols-3">
        <div>
          <h1 className="h4 mb-4">Empleos</h1>
          <p className="text-secondary">
            Permítenos ser parte de tu desarrollo personal y profesional
          </p>
        </div>
        <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
          {sections?.map?.((section) => (
            <a key={section.id} target="_blank" href={section.href} rel="noreferrer noopener">
              <CardLink
                isExternal
                label={section.name}
                leftIcon={
                  <Image
                    priority
                    width={56}
                    height={56}
                    layout="fixed"
                    src={section.image}
                    alt={`Logo de ${section.name}`}
                  />
                }
              />
            </a>
          ))}
        </div>
      </main>
    </Layout>
  );
};
export default JobsPage;
