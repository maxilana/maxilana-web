import { ParsedUrlQuery } from 'querystring';
import { cmsAxios as axios } from '../axios';
import { CMSCategory } from '~/types/Models/CMSCategory';
import parseQuery from '~/utils/parseQuery';

/**
 * Obtiene las categorías agregadas en el CMS hecho en Strapi
 * @param query
 */
// Si no le pongo async - await typescript se queja
const getCMSCategories = async (query?: ParsedUrlQuery): Promise<CMSCategory[]> =>
  await axios.get<CMSCategory[]>(`/categories?${!!query ? parseQuery(query) : ''}`);

export default getCMSCategories;
