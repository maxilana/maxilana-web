import { NextPage } from 'next';
import Link from 'next/link';

import { BareLayout } from '~/components/layout';
import { EmptyCart } from '~/components/svg';
import { Button } from '~/components/ui';
import useCart from '~/hooks/cart/useCart';
import { formatPrice } from '~/modules/hooks/usePrice';

const CartPage: NextPage = () => {
  const { data, isLoading, isEmpty } = useCart();

  return (
    <BareLayout title="Carrito de compras" meta={{ css: ['/antd/form.css'] }}>
      <div className="container mx-auto py-8 lg:py-48">
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
            <section className="py-4 sm:px-4">
              <header className="mb-4 px-4 flex flex-row justify-between items-center sm:px-0">
                <h1 className="h5 sm:h4">Mi carrito</h1>
                <Link href="/remates">
                  <a className="text-link underline">Continuar comprando</a>
                </Link>
              </header>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="formContainer p-0">
                    <table className="w-full table-fixed">
                      <tbody>
                        {data?.products.map((item) => (
                          <tr key={item.id}>
                            <td className="p-4 border-b border-gray-200">
                              <h2 className="h6">{item.name}</h2>
                              <p className="text-secondary tex-sm mb-2">{`Código: ${item.id}`}</p>
                              <span className="block mb-2 text-danger font-semibold">
                                {formatPrice({ amount: item.price, locale: 'es-MX' })}
                              </span>
                              <Button
                                size="small"
                                theme="danger"
                                text="Eliminar"
                                variant="link"
                                onClick={() => {
                                  console.log(item.id);
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <aside>
                  <div className="formContainer">
                    <h2 className="h6 text-center mb-6">
                      {`Resumen (${data?.products.length} productos)`}
                    </h2>
                    <dl className="border-b border-gray-200 pb-4">
                      <div className="flex flex-row justify-between items-center mt-4">
                        <dt className="text-secondary">Subtotal:</dt>
                        <dd className="font-semibold">
                          {data?.pricing &&
                            formatPrice({ amount: data.pricing.subtotal, locale: 'es-MX' })}
                        </dd>
                      </div>
                      <div className="flex flex-row justify-between items-center mt-4">
                        <dt className="text-secondary">Precio de envio:</dt>
                        <dd className="font-semibold">
                          {data?.pricing &&
                            formatPrice({ amount: data.pricing.shipping, locale: 'es-MX' })}
                        </dd>
                      </div>
                    </dl>
                    <footer>
                      <dl className="flex flex-row justify-between items-center border-b border-gray-200 py-4 mb-4">
                        <dt className="h6">Total:</dt>
                        <dd className="text-xl font-semibold">
                          {data?.pricing &&
                            formatPrice({ amount: data.pricing.total, locale: 'es-MX' })}
                        </dd>
                      </dl>
                      <Button fullWidth theme="primary" text="Proceder al pago" href="/checkout" />
                    </footer>
                  </div>
                </aside>
              </div>
            </section>
          );
        })()}
      </div>
    </BareLayout>
  );
};

export default CartPage;
