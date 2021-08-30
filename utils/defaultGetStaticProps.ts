import { GetStaticProps, InferGetStaticPropsType } from 'next';
import getAllCities from '~/api/getAllCities';
import { City } from '~/types/Models';

export const defaultGetStaticProps: GetStaticProps<{ cities: City[] }> = async () => {
  const cities = await getAllCities();

  return {
    props: {
      cities,
    },
  };
};

export default defaultGetStaticProps;
