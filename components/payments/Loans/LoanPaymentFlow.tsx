import React, { FC, useState } from 'react';
import { checkLoanAccount } from '~/api/payments';
import PaymentForm, { LoanAccountForm, LoanSelectionPaymentForm } from '~/components/payments';
import { LoanAccount } from '~/types/Models';

type Payment = {
  concepto: string;
  importe: number;
  codigoprestamo: LoanAccount['clientCode'];
} | null;

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
              importe: data.pago,
              concepto: `ABONO A PRÉSTAMO NÚMERO ${account.clientCode}`,
              codigoprestamo: account.clientCode,
            });

            setStatus('payment');
            return Promise.resolve();
          }}
        />
      )}
      {status === 'payment' && payment && (
        <PaymentForm
          data={payment}
          formType="loan"
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
