import ms from 'ms';
import { GetStaticProps } from 'next';
import getAllLegalPages from '~/api/cms/getAllLegalPages';
import getAllCities from '~/api/getAllCities';
import { City, CMSLegal } from '~/types/Models';

export const defaultGetStaticProps: GetStaticProps<{ cities: City[]; legalPages: CMSLegal[] }> =
  async () => {
    const cities = await getAllCities();
    const legalPages = await getAllLegalPages();

    return {
      props: {
        cities,
        legalPages,
      },
      revalidate: ms(process.env.DEFAULT_REVALIDATE || '10m'),
    };
  };

export default defaultGetStaticProps;
