import Link from 'next/link';
import { NextPage } from 'next';
import Image from 'next/image';

import { Button, Calendar } from '~/components/ui';
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

const PagoEmpenoPage: NextPage = () => {
  return (
    <Layout title="Paga online tu boleta de empeño">
      <div className="container mx-auto pt-[140px] pb-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            <div>
              <div className="px-4">
                <h1 className="text-2xl mb-4">Boleta de empeño</h1>
                <p>
                  No pierdas tu artículo y paga tu refrendo. Consulta aquí el estado de cuenta de tu
                  boleta de empeño, y controla mejor tus gastos.
                </p>
              </div>
              <div className="py-6 sm:px-4">
                <div className="flex flex-col gap-6 items-center sm:flex-row">
                  <div>
                    <Image
                      width={328}
                      height={139}
                      layout="fixed"
                      src="/imagen-boleta.jpg"
                      alt="Imagen muestra de boleta de empeño"
                    />
                  </div>
                  <FormContainer>
                    <div className="mb-6">
                      <h2 className="text-lg mb-4">Consulta el estado de cuenta de tu boleta</h2>
                      <p>Ingresa los datos que vienen escritos en tu boleta</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="col-span-2">
                        <InputField required name="numeroBoleta" label="Número de boleta" />
                      </div>
                      <div>
                        <InputField required name="letra" label="Letra" />
                      </div>
                      <div>
                        <InputField
                          required
                          name="monto"
                          label="Monto del préstamo"
                          placeholder="$0.00"
                        />
                      </div>
                      <div className="col-span-2">
                        <Button fullWidth text="Consultar" theme="primary" loading={false} />
                      </div>
                    </div>
                  </FormContainer>
                </div>
              </div>
            </div>
            <div>
              <div className="px-4">
                <h1 className="text-2xl mb-4">Boleta de empeño</h1>
                <p>
                  La consulta muestra la información al dia de hoy, al seleccionar una fecha de
                  cálculo diferente los montos cambiarán automaticamente
                </p>
              </div>
              <div className="py-6 sm:px-4">
                <FormContainer>
                  <div className="grid gap-10 sm:grid-cols-2">
                    <div>
                      <Calendar
                        onSelect={(date) => {
                          console.log(date);
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-secondary">Cliente:</p>
                      <p className="text-primary font-semibold">Camarillo Cervantes Miguel Ángel</p>
                      <div className="mb-4">
                        <div className="py-2 border-b border-b-[#0C5E9C26]">
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Número boleta actual:</span>
                            <span className="text-primary font-semibold">118320.00</span>
                          </div>
                        </div>
                        <div className="py-2 border-b border-b-[#0C5E9C26]">
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Tipo de empeño:</span>
                            <span className="text-sm text-primary">Mensual 3 meses alhada</span>
                          </div>
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Fecha de empeño:</span>
                            <span className="text-sm text-primary">06 Enero 2020</span>
                          </div>
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Fecha de vencimiento:</span>
                            <span className="text-sm text-primary">06 Abril 2020</span>
                          </div>
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Estado de boleta:</span>
                            <span className="text-sm text-danger">Vencida</span>
                          </div>
                        </div>
                        <div className="py-2 border-b border-b-[#0C5E9C26]">
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Monto de préstamo:</span>
                            <span className="text-sm text-primary">$1,000.00</span>
                          </div>
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Pago de interés:</span>
                            <span className="text-sm text-primary font-semibold">$1,000.00</span>
                          </div>
                        </div>
                        <div className="py-2 border-b border-b-[#0C5E9C26]">
                          <div className="flex flex-row justify-between items-center">
                            <span className="text-sm text-secondary">Desempeño:</span>
                            <span className="text-sm text-primary">$1,401.50</span>
                          </div>
                        </div>
                      </div>
                      <Button fullWidth theme="primary" text="Pagar refrendo" onClick={() => {}} />
                    </div>
                  </div>
                </FormContainer>
              </div>
            </div>
            <div>
              <div className="px-4">
                <h1 className="text-2xl mb-4">Boleta de empeño</h1>
                <p>
                  Realiza el pago del referendo para no perder tu artículo. El pago del desempeño de
                  tu artículo tiene que ser en sucursal ya que pierde el seguro que lo protege.
                </p>
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
                          value="PAGO DE INTERÉS CONTRATO (REFRENDO)"
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
          </div>
          <aside className="hidden lg:block">
            <HelpSidebar questions={questionList} />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PagoEmpenoPage;
