import gql from 'graphql-tag';
import {
  HERO_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
  SEO_FIELDS_FRAGMENT,
} from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSPaybill } from '~/types/Models/CMSPaybill';

const getPaybillsPage = async (): Promise<CMSPaybill> => {
  const response = await graphqlFetcher<{ paybill: CMSPaybill }>(gql`
    ${IMAGE_FIELDS_FRAGMENT}
    ${SEO_FIELDS_FRAGMENT}
    ${HERO_FIELDS_FRAGMENT}
    query PaybillsPage {
      paybill {
        hero {
          ...HeroFields
        }
        seo {
          ...SeoFields
        }
        bankAccount {
          bankName
          number
          clabe
        }
        whatsapps {
          name
          number
        }
        faqs {
          id
          question
          section {
            slug
          }
        }
        payment {
          title
          description
          CTAText
          slug
          image {
            ...ImageFields
          }
        }
      }
    }
  `);
  return response?.paybill;
};

export default getPaybillsPage;
