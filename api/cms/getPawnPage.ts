import gql from 'graphql-tag';
import {
  HERO_FIELDS_FRAGMENT,
  IMAGE_FIELDS_FRAGMENT,
  SEO_FIELDS_FRAGMENT,
} from '~/api/cms/fragments';
import graphqlFetcher from '~/api/graphqlFetcher';
import { CMSPawn } from '~/types/Models';

const getPawnPage = async () => {
  const response = await graphqlFetcher<{ page: CMSPawn }>(gql`
    ${IMAGE_FIELDS_FRAGMENT}
    ${SEO_FIELDS_FRAGMENT}
    ${HERO_FIELDS_FRAGMENT}
    query PawnPage {
      page: pawn {
        seo {
          ...SeoFields
        }
        linkVideo
        faqs {
          id
          question
          section {
            slug
          }
        }
        payment {
          id
          title
          description
          slug
          CTAText
          image {
            ...ImageFields
          }
        }
        hero {
          ...HeroFields
        }
        bankAccount {
          bankName
          number
          clabe
        }
        categories {
          id
          name
          code
          image {
            ...ImageFields
          }
          subcategories {
            id
            name
            code
            image {
              ...ImageFields
            }
          }
        }
      }
    }
  `);

  return response?.page;
};

export default getPawnPage;
