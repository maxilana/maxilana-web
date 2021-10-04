import gql from 'graphql-tag';
import {
  CATEGORY_FIELDS_FRAGMENT,
  FILTERS_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
} from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSCategory } from '~/types/Models/CMSCategory';

/**
 * Obtiene las categorías agregadas en el CMS hecho en Strapi
 */
// Si no le pongo async - await typescript se queja
const getCMSCategories = async (onlyWithFilters = false): Promise<Array<Partial<CMSCategory>>> => {
  const response = await graphqlFetcher<{ categories: Array<Partial<CMSCategory>> }>(gql`
    ${FILTERS_FIELDS_FRAGMENT}
    ${IMAGE_FIELDS_FRAGMENT}
    ${CATEGORY_FIELDS_FRAGMENT}
    query AllCategories {
      categories {
        ...CategoryFields
      }
    }
  `);

  return !onlyWithFilters
    ? response.categories
    : response.categories.filter(
        (item) =>
          item?.filters?.categories?.length ||
          item?.filters?.products?.length ||
          item?.filters?.search,
      );
};

export default getCMSCategories;
