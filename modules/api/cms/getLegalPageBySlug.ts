import gql from 'graphql-tag';
import { IMAGE_FIELDS_FRAGMENT, SEO_FIELDS_FRAGMENT } from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSLegal } from '~/types/Models';

const getLegalPageBySlug = async (slug: string): Promise<CMSLegal> => {
  const response = await graphqlFetcher<{ page: CMSLegal }>(
    gql`
      ${IMAGE_FIELDS_FRAGMENT}
      ${SEO_FIELDS_FRAGMENT}
      query LegalPageBySlug($slug: String!) {
        page: legalBySlug(slug: $slug) {
          id
          title
          content
          slug
          seo {
            ...SeoFields
          }
        }
      }
    `,
    {
      variables: { slug },
    },
  );
  return response?.page;
};

export default getLegalPageBySlug;
