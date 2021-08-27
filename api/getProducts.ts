import { ParsedUrlQuery } from 'querystring';
import { Product } from '~/types/Models/Product';
import { Paginated } from '~/types/Paginated';
import { GetProductos } from '~/types/Responses/GetProductos';
import parseQuery from '~/utils/parseQuery';
import axios from './axios';

const getProducts = async (query?: ParsedUrlQuery): Promise<Paginated<Product>> => {
  const imageBaseURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL;
  if (!imageBaseURL) {
    throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
  }
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
      Branch: {
        id: item.sucursal,
      },
      price: item.precio,
      netPrice: item.precioneto,
      brand: item.marca,
      observations: item.observaciones,
      image: !!item.imagen ? `${imageBaseURL}/${item.codigo}.jpg` : null,
      precod: item.precod,
      saleOnline: Boolean(item.ventalinea),
    })),
  };
};

export default getProducts;
