import { Product } from '~/types/Models/Product';
import { Paginated } from '~/types/Paginated';
import { GetProductos } from '~/types/Responses/GetProductos';
import axios from './axios';

const getProducts = async (
  query: Record<string, number | string> = { page: 1, limit: 24 },
): Promise<Paginated<Product>> => {
  const queryParams = query
    ? Object.keys(query)
        .map((param) => `${param}=${query[param]}`, '')
        .join('&')
    : null;
  const [response] = await axios.get<GetProductos[]>(`/productos?${queryParams}`, { data: query });

  return {
    ...response,
    rows: response.rows.map((item) => ({
      id: item.id,
      code: item.codigo,
      type: item.tipo,
      name: item.nombre,
      BranchId: item.sucursal,
      price: item.precio,
      netPrice: item.precioneto,
      brand: item.marca,
      observations: item.observaciones,
      hasImage: Boolean(item.image),
      precod: item.precod,
    })),
  };
};

export default getProducts;
