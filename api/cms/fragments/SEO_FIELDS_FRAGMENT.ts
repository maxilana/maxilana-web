import gql from 'graphql-tag';

const SEO_FIELDS_FRAGMENT = gql`
  fragment SeoFields on ComponentSharedSeo {
    metaDescription
    metaTitle
    metaKeywords
    shareImage {
      ...ImageFields
    }
  }
`;

export default SEO_FIELDS_FRAGMENT;
