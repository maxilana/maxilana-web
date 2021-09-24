import React, { FC, useState } from 'react';
import { checkLoanAccount } from '~/api/payments';
import PaymentForm, { LoanAccountForm, LoanSelectionPaymentForm } from '~/components/payments';
import { LoanAccount } from '~/types/Models';

type Payment = { concept: string; amount: number } | null;

type Status = 'account_status' | 'select_payment' | 'payment';

const LoanPaymentFlow: FC = () => {
  const [payment, setPayment] = useState<Payment>(null);
  const [status, setStatus] = useState<Status>('account_status');
  const [account, setAccount] = useState<LoanAccount | null>(null);
  return (
    <div>
      {status === 'account_status' && (
        <LoanAccountForm
          onSubmit={async (data) => {
            const account = await checkLoanAccount(data);
            setAccount(account);
            setStatus('select_payment');
          }}
        />
      )}
      {status === 'select_payment' && account && (
        <LoanSelectionPaymentForm
          account={account}
          onSubmit={(data) => {
            setPayment({
              amount: data.pago,
              concept: `ABONO A PRÉSTAMO NÚMERO ${account.clientCode}`,
            });

            setStatus('payment');
            return Promise.resolve();
          }}
        />
      )}
      {status === 'payment' && payment && (
        <PaymentForm
          data={payment}
          title="Préstamos personales"
          description="Abona a tu préstamo personal en línea"
          onSubmit={(data) => {
            console.log(data);
            return Promise.resolve();
          }}
        />
      )}
    </div>
  );
};

export default LoanPaymentFlow;
