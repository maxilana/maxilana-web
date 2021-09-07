import gql from 'graphql-tag';
import {
  BANNER_FIELDS_FRAGMENT,
  CATEGORY_FIELDS_FRAGMENT,
  FILTERS_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
  SEO_FIELDS_FRAGMENT,
} from '~/api/cms/fragments';
import { CMSRematesPage } from '~/types/Models/CMSRematesPage';
import graphqlFetcher from '~/api/graphqlFetcher';

/**
 * Obtiene la información para la página de remates del CMS hecho en Strapi
 */
const getCMSRematesPage = async (): Promise<CMSRematesPage> => {
  const response = await graphqlFetcher<{ remate: CMSRematesPage }>(gql`
    ${IMAGE_FIELDS_FRAGMENT}
    ${SEO_FIELDS_FRAGMENT}
    ${FILTERS_FIELDS_FRAGMENT}
    ${CATEGORY_FIELDS_FRAGMENT}
    ${BANNER_FIELDS_FRAGMENT}
    query Remates {
      remate {
        id
        seo {
          ...SeoFields
        }
        categories {
          id
          category {
            ...CategoryFields
          }
        }
        banners {
          id
          banner {
            ...BannerFields
          }
        }
      }
    }
  `);
  return response?.remate;
};

export default getCMSRematesPage;
