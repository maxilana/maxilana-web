import { NextPage } from 'next';
import { useState } from 'react';

import { HelpSidebar, Layout } from '~/components/layout';
import PaymentForm, { LoanAccountForm, LoanSelectionPaymentForm } from '~/components/payments';

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

type Status = 'account_status' | 'select_payment' | 'payment';

const PersonalLoanPaymentPage: NextPage = () => {
  const [status, setStatus] = useState<Status>('account_status');

  return (
    <Layout title="Abona a tu préstamo personal en línea">
      <div className="container mx-auto py-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            {status === 'account_status' && (
              <LoanAccountForm
                onSubmit={(data) => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      console.log(data);
                      resolve();
                      setStatus('select_payment');
                    }, 2000);
                  });
                }}
              />
            )}
            {status === 'select_payment' && (
              <LoanSelectionPaymentForm
                onSubmit={(data) => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      console.log(data);
                      resolve();
                      setStatus('payment');
                    }, 2000);
                  });
                }}
              />
            )}
            {status === 'payment' && (
              <PaymentForm
                title="Préstamos personales"
                description="Abona a tu préstamo personal en línea"
                onSubmit={(data) => {
                  console.log(data);
                }}
              />
            )}
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
