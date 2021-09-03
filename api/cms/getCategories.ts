import { ParsedUrlQuery } from 'querystring';
import { cmsAxios as axios } from '~/api/axios';
import { CMSCategory } from '~/types/Models/CMSCategory';
import parseQuery from '~/utils/parseQuery';

const getCategories = (query?: ParsedUrlQuery) =>
  axios.get<CMSCategory[]>(`/categories?${!!query ? parseQuery(query) : ''}`);

export default getCategories;
