import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getOtherServices from '~/api/cms/getOtherServices';
import getAllCities from '~/api/getAllCities';
import { Layout } from '~/components/layout';
import { CMSContent } from '~/components/common';
import { Card } from '~/components/ui';
import { DefaultPageProps } from '~/types/DefaultPageProps';
import { CMSOtherService } from '~/types/Models';

export const getStaticProps: GetStaticProps<
  DefaultPageProps<{ otherServices: CMSOtherService[] }>
> = async () => {
  const cities = await getAllCities();
  const legalPages = await getAllLegalPages();
  const otherServices = await getOtherServices();

  return {
    props: { cities, legalPages, otherServices },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const OtrosServicios: NextPage<Props> = ({ cities, legalPages, otherServices }) => {
  return (
    <Layout title="Otros servicios" cities={cities} legalPages={legalPages}>
      <main className="container mx-auto p-4">
        <div className="max-w-5xl space-y-24 pt-12 mx-auto">
          <h1 className="text-center h2">Otros Servicios</h1>
          <div className="grid md:grid-cols-2 gap-24">
            {otherServices.map((item) => (
              <Card className="prose max-w-none" key={item.id}>
                <h2>{item.title}</h2>
                <CMSContent content={item.description} />
              </Card>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default OtrosServicios;
