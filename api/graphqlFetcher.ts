import { DocumentNode } from 'graphql';
import { cmsAxios } from '~/api/axios';

interface FetcherOptions {
  variables?: Record<string, number | string | boolean>;
}

type GraphQLFetcher = <R = any>(query: DocumentNode, options?: FetcherOptions) => Promise<R>;

const graphqlFetcher: GraphQLFetcher = async (query, { variables } = {}) => {
  return cmsAxios
    .post('/graphql', { query: query?.loc?.source?.body, variables })
    .then((response) => response?.data);
};

export default graphqlFetcher;
