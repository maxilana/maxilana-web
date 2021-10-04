import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { cmsAxios } from '~/api/axios';

interface FetcherOptions {
  variables?: Record<string, number | string | boolean>;
}

type GraphQLFetcher = <R = any>(
  query: string | DocumentNode,
  options?: FetcherOptions,
) => Promise<R>;

const graphqlFetcher: GraphQLFetcher = async (query, { variables } = {}) => {
  return cmsAxios
    .post('/graphql', {
      query: typeof query === 'string' ? gql(query) : query?.loc?.source?.body,
      variables,
    })
    .then((response) => response?.data);
};

export default graphqlFetcher;
