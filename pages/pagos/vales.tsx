import Link from 'next/link';
import { NextPage } from 'next';

import { Button } from '~/components/ui';
import { HelpSidebar, Layout } from '~/components/layout';
import { FormContainer, InputField } from '~/components/common';

const questionList = [
  {
    id: 1,
    label: '¿Qué es un refrendo?',
    href: '/preguntas-frecuentes#que-es-refrendo',
  },
  {
    id: 2,
    label: '¿Qué es un empeño?',
    href: '/preguntas-frecuentes#que-es-un-empeno',
  },
  {
    id: 3,
    label: '¿Por qué no se puede pagar el refrendo completo del empeño en línea?',
    href: '/preguntas-frecuentes#que-es-un-empeno',
  },
];

const CouponPaymentPage: NextPage = () => {
  return (
    <Layout title="Paga online online directamente a tu distribuidora">
      <div className="container mx-auto pt-[140px] pb-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            <div>
              <div className="px-4">
                <h1 className="text-2xl mb-4">Maxilana Vales</h1>
                <p>Paga directamente a tu distribuidora</p>
              </div>
              <div className="py-6 sm:px-4">
                <FormContainer>
                  <div className="mb-6">
                    <h2 className="text-lg mb-4">
                      Consulta el estado de cuenta a la quincena actual
                    </h2>
                    <p>Ingresa los datos de tu distribuidor</p>
                  </div>
                  <div className="grid gap-4">
                    <div>
                      <InputField
                        required
                        type="number"
                        name="numeroDistribuidor"
                        label="Número de distribuidor"
                      />
                    </div>
                    <div>
                      <InputField required name="password" type="password" label="Contraseña" />
                    </div>
                    <div>
                      <Button fullWidth text="Buscar" theme="primary" loading={false} />
                    </div>
                  </div>
                </FormContainer>
              </div>
              <div className="py-6 sm:px-4">
                <FormContainer>
                  <div>
                    <p className="text-sm text-secondary">Distribuidor:</p>
                    <p className="text-primary font-semibold">Lilia Concepción Valencia Rojo</p>
                    <div className="grid gap-4">
                      <div>
                        <p className="text-sm text-secondary">
                          El importe que se muestra acontinuación es para la quincena{' '}
                          <span className="text-primary font-semibold">15 Mayo 2020</span>
                        </p>
                      </div>
                      <div>
                        <InputField
                          name="pago"
                          type="radio"
                          value={17201.33}
                          label="Pago de $17,201.33"
                        />
                      </div>
                      <Button fullWidth theme="primary" text="Pagar quincena" onClick={() => {}} />
                    </div>
                  </div>
                </FormContainer>
              </div>
            </div>
            <div className="py-6 sm:px-4">
              <FormContainer>
                <div>
                  <h5 className="text-lg mb-6">Información de pago</h5>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="col-span-2">
                      <InputField
                        required
                        disabled
                        name="concepto"
                        label="Concepto"
                        value="ABONO A LÍNEA DE CRÉDITO DIST. #4"
                      />
                    </div>
                    <div className="col-span-2">
                      <InputField
                        required
                        disabled
                        name="importe"
                        label="Importe a pagar"
                        value={401.5}
                      />
                    </div>
                    <div className="col-span-2">
                      <InputField
                        required
                        name="titular"
                        label="Titular de la tarjeta"
                        placeholder="Nombre del titular de la tarjeta"
                      />
                    </div>
                    <div className="col-span-2">
                      <InputField
                        required
                        maxLength={16}
                        name="numeroTarjeta"
                        label="Número de la tarjeta"
                        placeholder="#### #### #### ####"
                      />
                    </div>
                    <div>
                      <InputField
                        required
                        name="fechaVencimiento"
                        label="Fecha de vencimiento"
                        placeholder="MM/AA"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <InputField
                        required
                        type="password"
                        name="codigoSeguridad"
                        label="Cod. de seguridad"
                        placeholder="###"
                        maxLength={3}
                      />
                    </div>
                    <div className="col-span-2">
                      <InputField
                        required
                        type="email"
                        name="correoElectronico"
                        label="Correo Electrónico"
                      />
                    </div>
                    <div className="col-span-2">
                      <Button
                        fullWidth
                        text="Realizar Pago"
                        theme="primary"
                        loading={false}
                        onClick={() => {}}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <small className="text-xs text-center block">
                      Al hacer click en &quot;Realizar Pago&quot; aceptas los{' '}
                      <Link href="/legal/terminos-condiciones">
                        <a className="text-price underline">TÉRMINOS Y CONDICIONES</a>
                      </Link>
                    </small>
                  </div>
                </div>
              </FormContainer>
            </div>
          </div>
          <aside className="hidden lg:block">
            <HelpSidebar questions={questionList} />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default CouponPaymentPage;
