import React, { FC, useState } from 'react';
import { checkAccount } from '~/api/payments';
import PaymentForm, { PawnAccountForm, PawnCalculateForm } from '~/components/payments';
import { PawnAccount } from '~/types/Models';
import { PawnPaymentRequest } from '~/types/Requests';

const PAYMENT_CONCEPT = [
  'PAGO DE INTERÉS NUEVO CONTRATO (REFRENDO, AMPLIACIÓN DE TÉRMINO DEL CONTRATO)',
  'ABONO A INTERÉS',
];

type Payment =
  | ({
      concepto: string;
      importe: number;
    } & PawnPaymentRequest)
  | null;

type FormStatus = 'account_status' | 'calculate_date' | 'payment';

const PawnPaymentFlow: FC = () => {
  const [status, setStatus] = useState<FormStatus>('account_status');
  const [account, setAccount] = useState<PawnAccount | null>(null);
  const [payment, setPayment] = useState<Payment>(null);

  const handlePaymentSelection = (data: PawnPaymentRequest) => {
    let concept = PAYMENT_CONCEPT[1]; // ABONOS

    if (data.codigotipopago === '1') {
      concept = PAYMENT_CONCEPT[0];
    }

    setPayment({ ...data, concepto: concept });
    setStatus('payment');

    return Promise.resolve();
  };

  return (
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
          formType="pawn"
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
  );
};

export default PawnPaymentFlow;
