import { Branch } from '~/types/Models';
import { Sucursal } from '~/types/Responses';

import axios from './axios';

const getBranch = async (idOrSlug: string | number): Promise<Branch> => {
  const branch = await axios.get<Sucursal>(`/sucursal/${idOrSlug}`);

  return {
    id: branch?.id,
    number: branch?.numero,
    name: branch?.nombre,
    address: branch?.direccion,
    phone: branch?.telefono,
    CityId: branch?.codigociudad || branch?.ciudad,
    state: branch?.estado,
    imgSketch: branch?.img_croquis,
    active: branch?.activo,
    mondayToFridaySchedule: branch?.HorarioLV,
    saturdaySchedule: branch?.HorarioS,
    sundaySchedule: branch?.HorarioD,
    constancy: branch?.constancia,
    mapId: branch?.identifcadorparamapa,
    whatsapp: branch?.whatsapp,
    formattedSchedule: branch?.HorarioConFormato,
    formattedWhatsApp: branch?.whatsappConFormato,
    email: branch?.correoelectronico,
    mondayToFridayOpeningTime: branch?.HoraAperturaLV,
    mondayToFridayClosingTime: branch?.HoraCierreLV,
    saturdayOpeningTime: branch?.HoraAperturaS,
    saturdayClosingTime: branch?.HoraCierreS,
    sundayOpeningTime: branch?.HoraAperturaD,
    sundayClosingTime: branch?.HoraCierreD,
  };
};

export default getBranch;
