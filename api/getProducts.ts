import { Product } from '~/types/Models/Product';
import { Paginated } from '~/types/Paginated';
import { GetProductos } from '~/types/Responses/GetProductos';
import axios from './axios';

const getProducts = async (
  query?: Record<string, number | string>,
): Promise<Paginated<Product>> => {
  const [response] = await axios.get<GetProductos[]>('/productos', { data: query });

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
