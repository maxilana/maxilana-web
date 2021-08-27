import { ParsedUrlQuery } from 'querystring';

const parseQuery = (query: ParsedUrlQuery) => {
  return Object.keys(query)
    .map((param) => `${param}=${query[param]}`, '')
    .join('&');
};

export default parseQuery;
