import gql from 'graphql-tag';
import {
  BANNER_FIELDS_FRAGMENT,
  FILTERS_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
  SEO_FIELDS_FRAGMENT,
} from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSMktPage } from '~/types/Models/CMSMktPage';

export default async function getMktPageBySlug(slug: string): Promise<Partial<CMSMktPage>> {
  const query = gql`
    ${IMAGE_FIELDS_FRAGMENT}
    ${SEO_FIELDS_FRAGMENT}
    ${BANNER_FIELDS_FRAGMENT}
    ${FILTERS_FIELDS_FRAGMENT}
    query MarketingPage($slug: String!) {
      productsPageMktBySlug(slug: $slug) {
        id
        slug
        title
        content
        cover {
          alternativeText
          url
          width
          height
        }
        seo {
          ...SeoFields
        }
        banners {
          ...BannerFields
        }
        productsFilters {
          ...FilterFields
        }
      }
    }
  `;
  //console.log(query?.loc?.source.body);
  const response = await graphqlFetcher<{ productsPageMktBySlug: Partial<CMSMktPage> }>(query, {
    variables: { slug },
  });
  return response?.productsPageMktBySlug;
}
