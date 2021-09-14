import { NextPage } from 'next';
import { useState } from 'react';

import { HelpSidebar, Layout } from '~/components/layout';
import PaymentForm, { CouponAccountForm, CouponCheckPaymentForm } from '~/components/payments';
import { checkCouponAccount } from '~/api/payments/coupons';
import { CouponAccount } from '~/types/Models';
import { PropsWithCities } from '~/types/PropsWithCities';

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

type Status = 'account_status' | 'confirm_payment' | 'payment';

type Payment = {
  concept: string;
  amount: number;
};

const PAYMENT_CONCEPT = 'ABONO A LÍNEA DE CRÉDITO DIST.';

const CouponPaymentPage: NextPage<PropsWithCities> = ({ cities }) => {
  const [status, setStatus] = useState<Status>('account_status');
  const [payment, setPayment] = useState<Payment | null>(null);
  const [account, setAccount] = useState<CouponAccount | null>(null);

  return (
    <Layout
      title="Paga online online directamente a tu distribuidora"
      cities={cities}
      meta={{ css: ['/antd/form.css', '/antd/radio.css'] }}
    >
      <div className="container mx-auto py-6">
        <div className="grid grid-flow-col gap-6">
          <div>
            {status === 'account_status' && (
              <CouponAccountForm
                onSubmit={async (data) => {
                  const account = await checkCouponAccount(data);

                  setAccount(account);
                  setStatus('confirm_payment');
                }}
              />
            )}
            {status === 'confirm_payment' && account && (
              <CouponCheckPaymentForm
                account={account}
                onSubmit={(data) => {
                  const { paymentAmount } = data;
                  setPayment({
                    amount: paymentAmount,
                    concept: `${PAYMENT_CONCEPT} #${account.partnerNumber}`,
                  });

                  setStatus('payment');
                  return Promise.resolve();
                }}
              />
            )}
            {status === 'payment' && payment && (
              <PaymentForm
                data={payment}
                title="Maxilana Vales"
                description="Paga directamente a tu distribuidora"
                onSubmit={(data) => {
                  console.log(data);

                  return Promise.resolve();
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
