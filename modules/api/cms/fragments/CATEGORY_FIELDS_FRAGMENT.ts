import gql from 'graphql-tag';

const CATEGORY_FIELDS_FRAGMENT = gql`
  fragment CategoryFields on Category {
    id
    name
    filters {
      ...FilterFields
    }
    image {
      ...ImageFields
    }
  }
`;

export default CATEGORY_FIELDS_FRAGMENT;
