import { Product } from '~/types/Models/Product';
import { Producto } from '~/types/Responses/GetProductos';

const imageBaseURL = process.env.NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL;
if (!imageBaseURL) {
  throw Error('Environment variable NEXT_PUBLIC_PRODUCT_IMAGES_BASEURL is missing');
}

const normalizeProduct = (noNormalized: Producto): Product => ({
  id: noNormalized.codigo,
  name: noNormalized.nombre,
  BranchId: noNormalized.idsucursal,
  Branch: {
    id: noNormalized.idsucursal,
    name: noNormalized.nombresucursal,
    slug: noNormalized.slugsucursal,
    CityId: noNormalized.idciudad,
    City: {
      id: noNormalized.idciudad,
      name: noNormalized.ciudadnombre,
      slug: noNormalized.slugciudad,
    },
  },
  CategoryId: noNormalized.idcategoria,
  Category: {
    id: noNormalized.idcategoria,
    name: noNormalized.nombrecategoria,
    slug: noNormalized.slugcategoria,
  },
  price: noNormalized.precio,
  netPrice: noNormalized.precioneto,
  brand: noNormalized.marca,
  observations: noNormalized.observaciones,
  image: !!noNormalized.imagen ? `${imageBaseURL}/${noNormalized.codigo}.jpg` : null,
  precod: noNormalized.precod,
  saleOnline: Boolean(noNormalized.ventalinea),
});

export default normalizeProduct;
