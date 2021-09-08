import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import getCMSSectionBySlug from '~/api/cms/getCMSSectionBySlug';
import getCMSSections from '~/api/cms/getCMSSections';
import getCMSSectionsSlugs from '~/api/cms/getCMSSectionsSlugs';
import getAllCities from '~/api/getAllCities';
import { Layout } from '~/components/layout';
import { SideMenu, Markdown } from '~/components/common';
import { Collapse } from '~/components/ui';
import { City } from '~/types/Models';
import { CMSSection } from '~/types/Models/CMSSection';

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const slugs = await getCMSSectionsSlugs();
  return {
    paths: slugs?.map?.((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

interface GSProps {
  cities: City[];
  section: CMSSection;
  sections: Array<Partial<CMSSection>>;
}

export const getStaticProps: GetStaticProps<GSProps> = async (ctx) => {
  const { slug } = ctx?.params || {};
  const cities = await getAllCities();
  const section = await getCMSSectionBySlug(slug as string);
  const sections = await getCMSSections();

  return {
    props: {
      cities,
      section,
      sections,
    },
    revalidate: 60 * 60, // Each hour
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Faq: NextPage<Props> = ({ cities, section, sections }) => {
  return (
    <Layout title={section?.name} cities={cities}>
      <main className="container mx-auto px-4 py-12 grid gap-16 lg:grid-cols-3">
        <div className="hidden lg:block">
          <SideMenu
            links={
              sections.map((item) => ({
                label: `${item?.name}`,
                href: `/preguntas-frecuentes/${item?.slug}`,
              })) || []
            }
          />
        </div>
        <div className="lg:col-span-2">
          <h1 className="h4 mb-8">{section?.name}</h1>
          <div className="bg-white rounded divide-y">
            {section?.faqs?.map?.((faq) => (
              <Collapse
                key={faq?.id}
                title={<h2 className="h6">{faq?.question}</h2>}
                className="p-4"
                indicatorStyle="circle"
                collapsed
              >
                <Markdown content={`${faq?.answer}`} className="prose max-w-none" />
              </Collapse>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Faq;
