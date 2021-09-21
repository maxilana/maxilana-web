import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { RightOutlined } from '@ant-design/icons';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getCMSSections from '~/api/cms/getCMSSections';
import getAllCities from '~/api/getAllCities';
import { Layout } from '~/components/layout';
import { City, CMSLegal } from '~/types/Models';
import { CMSSection } from '~/types/Models/CMSSection';

interface GSProps {
  cities: City[];
  sections?: Array<Partial<CMSSection>>;
  legalPages: CMSLegal[];
}

export const getStaticProps: GetStaticProps<GSProps> = async () => {
  const cities = await getAllCities();
  const sections = await getCMSSections();
  const legalPages = await getAllLegalPages();

  return {
    props: {
      cities,
      sections,
      legalPages,
    },
    revalidate: 60 * 60, // Each hour
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Sections: NextPage<Props> = ({ cities, sections, legalPages }) => {
  return (
    <Layout title="Preguntas frecuentes" cities={cities} legalPages={legalPages}>
      <main className="container mx-auto p-4 my-12 grid gap-8 lg:grid-cols-3">
        <div>
          <h1 className="h6 text-brand uppercase mb-2">Preguntas frecuentes</h1>
          <h2 className="h4 mb-4">¿En que podemos ayudarte?</h2>
          <p className="text-secondary">
            Encuentra las respuestas que buscas del tema de tu interés. para más información{' '}
            <Link href="/contacto">
              <a className="text-brand underline">comunicate con nosotros</a>
            </Link>
          </p>
        </div>
        <div className="grid gap-4 md:col-span-2 md:grid-cols-2">
          {sections?.map?.((section) => (
            <Link href={`/preguntas-frecuentes/${section.slug}`} key={section.id}>
              <a className="rounded bg-white border hover:bg-surface-dark">
                <div className="px-6 py-6 flex justify-between items-center space-x-4 h-full">
                  <h3 className="h5">{section.name}</h3>
                  <span className="circleRight">
                    <RightOutlined />
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
};
export default Sections;
