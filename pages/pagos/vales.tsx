import { NextPage } from 'next';
import { useState } from 'react';

import { HelpSidebar, Layout } from '~/components/layout';
import PaymentForm, { CouponAccountForm, CouponCheckPaymentForm } from '~/components/payments';

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

type Status = 'account_status' | 'confirm_payment' | 'payment';

const CouponPaymentPage: NextPage = () => {
  const [status, setStatus] = useState<Status>('account_status');

  return (
    <Layout title="Paga online online directamente a tu distribuidora">
      <div className="container mx-auto py-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            {status === 'account_status' && (
              <CouponAccountForm
                onSubmit={(data) => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setStatus('confirm_payment');
                    }, 2000);
                  });
                }}
              />
            )}
            {status === 'confirm_payment' && (
              <CouponCheckPaymentForm
                onSubmit={(data) => {
                  return new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setStatus('payment');
                    }, 2000);
                  });
                }}
              />
            )}
            {status === 'payment' && (
              <PaymentForm
                title="Maxilana Vales"
                description="Paga directamente a tu distribuidora"
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

export default CouponPaymentPage;
