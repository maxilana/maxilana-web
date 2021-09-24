import gql from 'graphql-tag';
import {
  HERO_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
  SEO_FIELDS_FRAGMENT,
} from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSCarPawn } from '~/types/Models';

const getCarPawnPage = async () => {
  const response = await graphqlFetcher<{ page: CMSCarPawn }>(gql`
    ${IMAGE_FIELDS_FRAGMENT}
    ${SEO_FIELDS_FRAGMENT}
    ${HERO_FIELDS_FRAGMENT}
    query CarPawnPage {
      page: carPawn {
        seo {
          ...SeoFields
        }
        video
        faqs {
          id
          question
          section {
            slug
          }
        }
        hero {
          ...HeroFields
        }
      }
    }
  `);

  return response?.page;
};

export default getCarPawnPage;
