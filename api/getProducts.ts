import { ParsedUrlQuery } from 'querystring';
import { Product } from '~/types/Models/Product';
import { Paginated } from '~/types/Paginated';
import { GetProductos } from '~/types/Responses/GetProductos';
import parseQuery from '~/utils/parseQuery';
import axios from './axios';

const getProducts = async (query?: ParsedUrlQuery): Promise<Paginated<Product>> => {
  const queryParams = parseQuery({ page: '1', limit: '24', ...query });
  const response = await axios.get<GetProductos>(`/productos?${queryParams}`);

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
