import { Branch, City } from '~/types/Models';
import { GetSucursales } from '~/types/Responses';

import axios from './axios';

interface CityWithBranches extends City {
  branches: Branch[];
}

const getAllBranches = async (): Promise<CityWithBranches[]> => {
  const response = await axios.get<GetSucursales>('/sucursales');
  return response.map((city) => ({
    id: city?.id,
    slug: city?.codigo,
    name: city?.ciudad,
    branches: city?.sucursales.map((item) => ({
      id: item?.id,
      number: item?.numero,
      name: item?.nombre,
      address: item?.direccion,
      phone: item?.telefono,
      CityId: item?.codigociudad,
      state: item?.estado,
      imgSketch: item?.img_croquis,
      active: item?.activo,
      mondayToFridaySchedule: item?.HorarioLV,
      saturdaySchedule: item?.HorarioS,
      sundaySchedule: item?.HorarioD,
      constancy: item?.constancia,
      mapId: item?.identifcadorparamapa,
      whatsapp: item?.whatsapp,
      formattedSchedule: item?.HorarioConFormato,
      formattedWhatsApp: item?.whatsappConFormato,
      email: item?.correoelectronico,
      mondayToFridayOpeningTime: item?.HoraAperturaLV,
      mondayToFridayClosingTime: item?.HoraCierreLV,
      saturdayOpeningTime: item?.HoraAperturaS,
      saturdayClosingTime: item?.HoraCierreS,
      sundayOpeningTime: item?.HoraAperturaD,
      sundayClosingTime: item?.HoraCierreD,
    })),
  }));
};

export default getAllBranches;
