import { WithRouterProps } from 'next/dist/client/with-router';
import { withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import {
  WhatsAppOutlined,
  LoadingOutlined,
  ShopFilled,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';

import getAllCities from '~/api/getAllCities';
import getBranch from '~/api/getBranch';
import getProducts from '~/api/getProducts';
import { ShareLinks } from '~/components/common';
import { Layout } from '~/components/layout';
import { usePrice } from '~/modules/hooks';
import { Branch, City } from '~/types/Models';
import { Product } from '~/types/Models/Product';
import generateProductGallery from '~/utils/generateProductGallery';
import slugify from '~/utils/slugify';
import getProductById from '~/api/getProductById';
import { Button, Map, ProductCard } from '~/components/ui';
import { ProductBadge, Gallery } from '~/components/products';

import LogoRedondo from '../../public/logo-redondo.png';

interface GSProps {
  product: Product;
  gallery: string[];
  cities?: City[];
  relatedProducts?: Product[];
  branch?: Branch;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paginatedProducts = await getProducts();
  const { rows: products } = paginatedProducts;
  return {
    paths: products.map((product) => ({
      params: { slug: `${product?.id}-${slugify(product?.name)}` },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<GSProps, { slug: string }> = async (ctx) => {
  try {
    const slug = ctx?.params?.slug as string;
    const id = slug.split('-')[0];
    const product = await getProductById(id);
    if (!product) return { notFound: true };
    const { rows: relatedProducts } = await getProducts({
      limit: '4',
      ciudad: `${product?.Branch?.CityId}`,
      categoria: `${product.CategoryId}`,
    });

    const branch = await getBranch(product?.BranchId);

    const cities = await getAllCities();

    const gallery = await generateProductGallery(product.id);

    return {
      props: {
        product,
        gallery,
        branch,
        relatedProducts,
        cities,
      },
      revalidate: 60 * 30, // Update each 30 minutes
    };
  } catch (e) {
    console.log('getStaticProps ERROR:', e);
    return { notFound: true };
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps> & WithRouterProps;

const ProductView: NextPage<Props> = ({
  product,
  gallery,
  cities,
  relatedProducts,
  branch,
  router,
}) => {
  // const [visibleShare, toggleShare] = useToggleState();
  const [shareURL, setShareURL] = useState<string>();
  const { isFallback } = router;
  const { price: basePrice } = usePrice({ amount: product?.price });
  const { price: discountPrice } = usePrice(
    product?.netPrice ? { amount: product?.netPrice, baseAmount: product?.price } : undefined,
  );
  useEffect(() => {
    if (process.browser) {
      setShareURL(window?.location?.toString());
    }
  }, []);
  if (isFallback || !product) {
    return (
      <Layout title="Cargando..." cities={[]}>
        <div className="container mx-auto px4 py-48 text-center space-y-6">
          <LoadingOutlined className="text-brand text-2xl" />
          <span className="block text-secondary text-2xl md:text-3xl">
            Obteniendo información del producto
          </span>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={product?.name} cities={cities || []} bgWhite>
      <div className="container mx-auto pb-12">
        <div className="grid gap-6 mt-8 px-4 md:grid-cols-2 md:max-w-none lg:grid-cols-5 xl:grid-cols-3">
          <main className="md:px-12 md:px-0 lg:col-span-2 order-2 xl:col-span-1">
            <div className="px-4 space-y-6 border rounded pt-4">
              <div>
                <h1 className="h6">{product.name}</h1>
                <span className="text-secondary block">Código: {product.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h4 text-danger">{discountPrice}</span>
                <span className="h5 text-secondary line-through">{basePrice}</span>
              </div>
              {product?.observations && (
                <div>
                  <span className="font-bold block text-secondary">Descripción</span>
                  <p>{product?.observations}</p>
                </div>
              )}
              {product?.brand && (
                <div>
                  <span className="font-bold block text-secondary">Marca</span>
                  <p>{product?.brand}</p>
                </div>
              )}
              {product?.saleOnline && (
                <span className="flex items-center gap-4">
                  <ProductBadge type="car" />
                  <strong>Entrega estimada de 3 a 5 días hábiles.</strong>
                </span>
              )}
              <span className="flex flex items-center gap-4">
                <ProductBadge type="shop" />
                <span>Disponible en sucursal</span>
              </span>
              <p className="font-semibold">
                Si te interesa recoger en tienda este producto comunicate a la sucursal.
              </p>
              {product?.saleOnline && <Button text="Comprar en línea" theme="primary" fullWidth />}
              <Button
                text="Comprar en sucursal"
                theme="whatsapp"
                fullWidth
                icon={<WhatsAppOutlined />}
              />
              {!product?.saleOnline && (
                <Button text="Llamar a sucursal" fullWidth icon={<PhoneOutlined />} />
              )}
              <ShareLinks url={`${shareURL}`} text={product?.name} className="border-t border-b" />
              <div className="flex items-center gap-4 border-b py-4">
                <div className="shadow rounded-full overflow-hidden w-[72px] h-[72px]">
                  <Image src={LogoRedondo} width={72} height={72} alt="Logo Maxilana" />
                </div>
                <div>
                  <span className="text-secondary text-sm">Sucursal</span>
                  <Link href={`/sucursales/${product?.Branch?.slug}`}>
                    <a className="font-bold block">{product?.Branch?.name}</a>
                  </Link>
                  <span className="text-secondary text-sm">{product?.Branch?.City?.name}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4">
                <span className="text-white text-xl bg-brand rounded-full min-w-[72px] min-h-[72px] border-accent border-4 border flex justify-center items-center">
                  <ShopFilled />
                </span>
                <div>
                  <span className="block font-bold">
                    Producto de venta exclusiva solo en sucursal.
                  </span>
                  <span className="text-secondary">
                    Este producto solo esta disponible en esta sucursal
                  </span>
                </div>
              </div>
            </div>
          </main>
          <div className="contents md:block md:order-1 lg:col-span-3 xl:col-span-2">
            <aside className=" xl:col-span-2 order-1 md:order-none">
              {product?.image && <Gallery images={gallery} />}
            </aside>
            {!!branch && (
              <div className="aspect-w-16 aspect-h-8 bg-surface my-6 order-3 md:order-none rounded overflow-hidden">
                <Map branches={[branch]} />
              </div>
            )}
          </div>
        </div>
        {!!relatedProducts && (
          <div className="px-4 py-12">
            <h3 className="h4 mb-4">Productos similares</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item?.id} data={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withRouter(ProductView);
