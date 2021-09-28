import { useRouter } from 'next/router';
import { FC, useEffect, useRef } from 'react';
import { ProductPurchase } from '~/types/Requests';
import { MaxilanaTransaction } from '~/types/Responses';

interface FormValues {
  Card: string;
  Expires: string;
  Total: number;
  CardType: 'VISA' | 'MC';
  MerchantId: number;
  MerchantName: string;
  MerchantCity: string;
  ForwardPath: string;
  Cert3D: string;
  Reference3D: string;
}

interface Props {
  forwardPath: string;
  payment: ProductPurchase;
  transaction: MaxilanaTransaction;
}

const BankTransactionForm: FC<Props> = ({ transaction, payment, forwardPath }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_PAYMENT_URL) {
      router.push('/checkout/response?error=true&errorCode=100');
    } else {
      if (formRef?.current) {
        formRef.current.submit();
      }
    }
  }, []);

  return (
    <form ref={formRef} method="POST" action={process.env.NEXT_PUBLIC_PAYMENT_URL}>
      <input type="hidden" name="Card" value={payment.tarjeta} />
      <input type="hidden" name="Expires" value={payment.vencimiento} />
      <input type="hidden" name="Total" value={payment.importe} />
      <input type="hidden" name="CardType" value={payment.cardtype} />
      <input type="hidden" name="MerchantId" value={transaction.merchanid} />
      <input type="hidden" name="MerchantName" value={transaction.merchanname} />
      <input type="hidden" name="MerchantCity" value={transaction.merchancity} />
      <input type="hidden" name="ForwardPath" value={forwardPath} />
      <input type="hidden" name="Cert3D" value="03" />
      <input type="hidden" name="Reference3D" value={transaction.id} />
    </form>
  );
};

export default BankTransactionForm;
