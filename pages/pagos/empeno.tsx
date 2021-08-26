import { NextPage } from 'next';
import { useState } from 'react';

import { HelpSidebar, Layout } from '~/components/layout';
import PaymentForm, { PawnAccountForm, PawnCalculateForm } from '~/components/payments';

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

type FormStatus = 'account_status' | 'calculate_date' | 'payment';

const PagoEmpenoPage: NextPage = () => {
  const [status, setStatus] = useState<FormStatus>('account_status');

  return (
    <Layout title="Paga online tu boleta de empeño">
      <div className="container mx-auto py-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            {status === 'account_status' && (
              <PawnAccountForm
                onSubmit={(data) => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      setStatus('calculate_date');
                      resolve();
                    }, 2000);
                  });
                }}
              />
            )}
            {status === 'calculate_date' && (
              <PawnCalculateForm
                onSubmit={() => {
                  setStatus('payment');
                }}
              />
            )}
            {status === 'payment' && (
              <PaymentForm
                title="Boleta de empeño"
                description="Realiza el pago del refrendo para no perder tu artículo.
                 El pago del desempeño de tu artículo tiene que ser en sucursal ya que pierde el seguro que lo protege."
                onSubmit={(data) => {
                  console.log(data);
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
