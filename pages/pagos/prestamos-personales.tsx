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

const PersonalLoanPaymentPage: NextPage = () => {
  return (
    <Layout title="Abona a tu préstamo personal en línea">
      <div className="container mx-auto pt-[140px] pb-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            <div>
              <div className="px-4">
                <h1 className="text-2xl mb-4">Préstamos Personales</h1>
                <p>Abona a tu préstamo personal en línea</p>
              </div>
              <div className="py-6 sm:px-4">
                <FormContainer>
                  <div className="mb-6">
                    <h2 className="text-lg mb-4">
                      Consulta el estado de cuenta de tu préstamo personal
                    </h2>
                    <p>Ingresa los datos de tu préstamo</p>
                  </div>
                  <div className="grid gap-4">
                    <div>
                      <InputField
                        required
                        name="numeroPrestamo"
                        label="Número de préstamo"
                        placeholder="#-######"
                      />
                    </div>
                    <div>
                      <InputField required name="importePrestamo" label="Importe del préstamo" />
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
                    <p className="text-sm text-secondary">Cliente:</p>
                    <p className="text-primary font-semibold">Maira Jaime Herrera</p>
                    <div className="grid gap-4">
                      <div>
                        <p className="text-sm text-secondary">
                          Seleccione una opción de abono a su préstamo, en caso de seleccionar “Otro
                          importe” habrá de capturar el importe en el recuadro.
                        </p>
                      </div>
                      <div>
                        <p className="text-primary font-semibold mb-4">
                          ¿Qué desea hacer con su préstamo?
                        </p>
                        <InputField
                          name="pago"
                          type="radio"
                          id="abonar"
                          value={242.43}
                          label="$242.43 de abono tiene hasta el 16/05/2021"
                        />
                        <InputField
                          name="pago"
                          type="radio"
                          id="liquidar"
                          value={2042.43}
                          label="$2042.43 para liquidar al 09/09/2021"
                        />
                      </div>
                      <Button
                        fullWidth
                        theme="primary"
                        text="Proceder al pago"
                        onClick={() => {}}
                      />
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
                        value="ABONO A PRÉSTAMO NÚMERO 0-007312"
                      />
                    </div>
                    <div className="col-span-2">
                      <InputField
                        required
                        disabled
                        name="importe"
                        label="Importe a pagar"
                        value={17201.5}
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

export default PersonalLoanPaymentPage;
