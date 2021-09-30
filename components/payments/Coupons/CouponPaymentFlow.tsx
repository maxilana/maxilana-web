import React, { FC, useState } from 'react';
import { checkCouponAccount } from '~/api/payments/coupons';
import PaymentForm, { CouponAccountForm, CouponCheckPaymentForm } from '~/components/payments';
import { CouponAccount } from '~/types/Models';

type Status = 'account_status' | 'confirm_payment' | 'payment';

type Payment = {
  concepto: string;
  importe: number;
  cdistribuidora: CouponAccount['partnerNumber'];
};

const PAYMENT_CONCEPT = 'ABONO A LÍNEA DE CRÉDITO DIST.';

const CouponPaymentFlow: FC = () => {
  const [status, setStatus] = useState<Status>('account_status');
  const [payment, setPayment] = useState<Payment | null>(null);
  const [account, setAccount] = useState<CouponAccount | null>(null);

  return (
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
              importe: paymentAmount,
              concepto: `${PAYMENT_CONCEPT} #${account.partnerNumber}`,
              cdistribuidora: account.partnerNumber,
            });

            setStatus('payment');
            return Promise.resolve();
          }}
        />
      )}
      {status === 'payment' && payment && (
        <PaymentForm
          data={payment}
          formType="coupon"
          title="Maxilana Vales"
          description="Paga directamente a tu distribuidora"
          onSubmit={(data) => {
            console.log(data);

            return Promise.resolve();
          }}
        />
      )}
    </div>
  );
};

export default CouponPaymentFlow;
