import { City } from '~/types/Models';
import { GetCitiesForLoans } from '~/types/Responses/GetCitiesForLoans';
import slugify from '~/utils/slugify';

import axios from '../axios';

const getCities = async (): Promise<City[]> => {
  const response = await axios.get<GetCitiesForLoans>('/servicios/pp/getplazas');

  return response.map((item) => ({
    id: item.CodigoPlaza,
    code: item.CodigoPlaza,
    name: item.Plaza,
    slug: slugify(item.Plaza),
  }));
};

export default getCities;
