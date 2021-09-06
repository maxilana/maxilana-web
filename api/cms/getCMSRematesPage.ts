import { cmsAxios as axios } from '~/api/axios';
import { CMSRematesPage } from '~/types/Models/CMSRematesPage';

/**
 * Obtiene la información para la página de remates del CMS hecho en Strapi
 */
const getCMSRematesPage = async (): Promise<CMSRematesPage> => {
  return await axios.get('remates');
};

export default getCMSRematesPage;
