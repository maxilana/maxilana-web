import cn from 'classnames';
import Link from 'next/link';
import { NextPage } from 'next';
import { PictureOutlined } from '@ant-design/icons';

import { BareLayout } from '~/components/layout';
import useCart from '~/hooks/cart/useCart';
import { EmptyCart } from '~/components/svg';
import { Button } from '~/components/ui';

const CartPage: NextPage = () => {
  const { data, isLoading, isEmpty } = useCart();

  return (
    <BareLayout title="Carrito de compras" meta={{ css: ['/antd/form.css'] }}>
      <div className="container mx-auto py-48 sm:max-w-5xl">
        {(() => {
          if (isLoading || isEmpty) {
            return (
              <section className="p-4">
                <h1 className="h5 mb-6 sm:h4">Mi carrito</h1>
                <div className="px-4 py-6">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <EmptyCart />
                    <h2 className="h6 text-center">Tu carrito está vacio</h2>
                    <p className="text-secondary text-center">
                      No se ha agregado ningún artículo para proceder al pago
                    </p>
                    <Button theme="primary" text="Ir a comprar" href="/remates" />
                  </div>
                </div>
              </section>
            );
          }

          return (
            <section className="p-4">
              <h1 className="h5 mb-6 sm:h4">Mi carrito</h1>
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <td className="p-2 border-b-2 border-gray-500">Código</td>
                    <td className="p-2 border-b-2 border-gray-500">Producto</td>
                    <td className="p-2 border-b-2 border-gray-500 text-right">Precio</td>
                  </tr>
                </thead>
                <tbody>
                  {data?.products.map((item) => (
                    <tr key={item.id}>
                      <td className="px-2 py-4">
                        <div className="flex flex-row items-center sm:space-x-3">
                          <div className="flex flex-row items-center justify-center bg-gray-50 h-full text-brand/20">
                            <span className="flex justify-center items-center">
                              <PictureOutlined style={{ fontSize: 40 }} />
                            </span>
                          </div>
                          <div className="flex-1">
                            <h2 className="mb-1 font-bold">{item.id}</h2>
                          </div>
                        </div>
                      </td>
                      <td className="p-2">
                        <span className="font-bold">{item.name}</span>
                      </td>
                      <td className="p-2 text-right">
                        <span className="font-bold">{item.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="py-2 pt-10 text-right border-t-2 border-gray-500">
                      <div className="flex flex-col space-x-2">
                        <p>
                          <span className="font-bold">Subtotal</span>
                          <span>&nbsp;&nbsp;</span>
                          <span className="font-bold text-lg">{data?.pricing.subtotal}</span>
                        </p>
                        <p>
                          <small>Taxes and shipping calculated at checkout</small>
                        </p>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </section>
          );
        })()}
      </div>
    </BareLayout>
  );
};

export default CartPage;
