import { City } from '../types/Models';
import { GetPlazas } from '../types/Responses';
import axios from './axios';

const getAllCities = async (): Promise<City[]> => {
  const response = await axios.get<GetPlazas>('/plazas');

  return response.map((item) => ({
    code: item?.codigo,
    name: item?.descripcion,
    confirmationEmails: item?.correoparaconfirmaciondecompra,
    notificationsEmails: item?.correoelectronicoparanotificacion,
  }));
};

export default getAllCities;
