import { City } from '~/types/Models';
import { GetCities } from '~/types/Responses';
import axios from './axios';

const getAllCities = async (): Promise<City[]> => {
  const response = await axios.get<GetCities>('/ciudades');

  return response.map((item) => ({
    id: item?.id,
    slug: item?.codigo,
    code: item?.codigoplaza,
    name: item?.nombre,
    state: item?.estado,
    active: Boolean(item?.activo),
  }));
};

export default getAllCities;
