import omit from 'lodash.omit';
import { ParsedUrlQuery } from 'querystring';
import { CMSCategory } from '~/types/Models/CMSCategory';
import { filtersToQueryParams } from '~/utils/filtersToQueryString';
import parseQuery from '~/utils/parseQuery';

const generateCategoryURL = (item: Partial<CMSCategory>, query?: ParsedUrlQuery): string => {
  return `/busqueda?${parseQuery({
    ...omit(query || {}, 'q'),
    categoria: `${item?.id}`,
    ...(item?.filters ? filtersToQueryParams(item?.filters) : {}),
  })}`;
};

export default generateCategoryURL;
