import gql from 'graphql-tag';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSHomePage } from '~/types/Models/CMSHomePage';
import {
  CATEGORY_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
  FILTERS_FIELDS_FRAGMENT,
  SEO_FIELDS_FRAGMENT,
  HERO_FIELDS_FRAGMENT,
} from './fragments';

const getHomePage = async () => {
  const response = await graphqlFetcher<{ homepage: Partial<CMSHomePage> }>(gql`
    ${FILTERS_FIELDS_FRAGMENT}
    ${IMAGE_FIELDS_FRAGMENT}
    ${SEO_FIELDS_FRAGMENT}
    ${CATEGORY_FIELDS_FRAGMENT}
    ${HERO_FIELDS_FRAGMENT}
    query HomePage {
      homepage {
        seo {
          ...SeoFields
        }
        hero {
          ...HeroFields
        }
        directAccess {
          id
          title
          description
          image {
            ...ImageFields
          }
          link {
            text
            url
          }
        }
        categories {
          ...CategoryFields
        }
        productFilters {
          ...FilterFields
        }
      }
    }
  `);

  return response?.homepage;
};

export default getHomePage;
