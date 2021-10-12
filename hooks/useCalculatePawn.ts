import { useMemo } from 'react';

import { formatPrice } from '~/modules/hooks/usePrice';
import { PawnCalculation } from '~/types/Models';

const defaultTable = [
  {
    id: 1,
    label: 'Público general',
    payment: 10,
    amount: 10,
    paymentClass: 'border-[#DEEAF5]',
    amountClass: 'bg-[#DEEAF5]',
  },
  {
    id: 2,
    label: 'Cliente bronce',
    payment: 10,
    amount: 10,
    amountClass: 'text-white bg-[#CE9550]',
    paymentClass: 'border-[#CE9550]',
  },
  {
    id: 3,
    label: 'Cliente plata',
    payment: 10,
    amount: 10,
    amountClass: 'bg-gray-300',
    paymentClass: 'border-gray-300',
  },
  {
    id: 4,
    label: 'Cliente oro',
    payment: 10,
    amount: 10,
    amountClass: 'bg-accent-dark',
    paymentClass: 'border-accent-dark',
  },
];

const useCalculatePawn = (data: PawnCalculation, monthlySpan: number) => {
  const config = useMemo(() => {
    const rates = [
      { interest: data.monthlyInterest, amount: data.commonAmountRate },
      { interest: data.bronzeInterest, amount: data.bronzeAmountRate },
      { interest: data.silverInterest, amount: data.silverAmountRate },
      { interest: data.goldInterest, amount: data.goldAmountRate },
    ];

    const table = defaultTable.map((item, idx) => {
      const span = data.amount / monthlySpan;
      const amount = (rates[idx].amount + 1) * data.amount;
      const payment = span * rates[idx].interest + span;

      return {
        ...item,
        payment: formatPrice({ amount: payment, locale: 'es-MX' }),
        amount: formatPrice({ amount, locale: 'es-MX' }),
      };
    });

    return table;
  }, [monthlySpan]);

  return config;
};

export default useCalculatePawn;
