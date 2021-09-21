import { NextPage } from 'next';
import { useState } from 'react';
import { checkAccount } from '~/api/payments';

import { HelpSidebar, Layout } from '~/components/layout';
import PaymentForm, { PawnAccountForm, PawnCalculateForm } from '~/components/payments';
import { PawnAccount } from '~/types/Models';
import { DefaultPageProps } from '~/types/DefaultPageProps';

export { default as getStaticProps } from '~/utils/defaultGetStaticProps';

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

type Payment = { concept: string; amount: number } | null;

type FormStatus = 'account_status' | 'calculate_date' | 'payment';

const PAYMENT_CONCEPT = [
  'PAGO DE INTERÉS NUEVO CONTRATO (REFRENDO, AMPLIACIÓN DE TÉRMINO DEL CONTRATO)',
  'ABONO A INTERÉS',
];

const PagoEmpenoPage: NextPage<DefaultPageProps> = ({ cities, legalPages }) => {
  const [status, setStatus] = useState<FormStatus>('account_status');
  const [account, setAccount] = useState<PawnAccount | null>(null);
  const [payment, setPayment] = useState<Payment>(null);

  const handlePaymentSelection = (data: any) => {
    let concept = PAYMENT_CONCEPT[1]; // ABONOS

    if (data.paymentType === 'REFRENDO') {
      concept = PAYMENT_CONCEPT[0];
    }

    setPayment({ concept, amount: data.paymentAmount });
    setStatus('payment');

    return Promise.resolve();
  };

  return (
    <Layout
      title="Paga online tu boleta de empeño"
      cities={cities}
      meta={{
        css: ['/antd/form.css', '/antd/radio.css', '/antd/calendar.css', '/antd/select.css'],
      }}
      legalPages={legalPages}
    >
      <div className="container mx-auto py-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            {status === 'account_status' && (
              <PawnAccountForm
                onSubmit={async (data) => {
                  const account = await checkAccount(data);
                  setAccount(account);
                  setStatus('calculate_date');
                }}
              />
            )}
            {status === 'calculate_date' && account && (
              <PawnCalculateForm data={account} onSubmit={handlePaymentSelection} />
            )}
            {status === 'payment' && payment && (
              <PaymentForm
                data={payment}
                title="Boleta de empeño"
                description="Realiza el pago del refrendo para no perder tu artículo.
                 El pago del desempeño de tu artículo tiene que ser en sucursal ya que pierde el seguro que lo protege."
                onSubmit={(data) => {
                  console.log(data);
                  return Promise.resolve();
                }}
              />
            )}
          </div>
          <aside className="hidden w-[512px] lg:block">
            <HelpSidebar questions={questionList} />
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default PagoEmpenoPage;
