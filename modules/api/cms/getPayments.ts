import gql from 'graphql-tag';
import { IMAGE_FIELDS_FRAGMENT } from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSPayment } from '~/types/Models';

const getPaymentsList = async () => {
  const response = await graphqlFetcher<{ pays: CMSPayment[] }>(gql`
    ${IMAGE_FIELDS_FRAGMENT}
    query PaymentsList {
      pays {
        id
        title
        description
        slug
        CTAText
        type
        image {
          ...ImageFields
        }
      }
    }
  `);
  return response?.pays;
};

export default getPaymentsList;
