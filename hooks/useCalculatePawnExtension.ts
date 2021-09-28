import { useMemo } from 'react';
import { PawnAccount } from '~/types/Models';

const useCalculatePawnExtension = (data: PawnAccount, daysToExtend: number): number => {
  // Calcula el importe a pagar
  //  para la extensión de dias.
  const extensionAmount = useMemo(() => {
    let totalAmount = 0;
    let subtotalAmount = 0;
    let totalDaysAmount = 0;
    let totalDueDaysAmount = 0;

    const { dueDays, minDaysToPay, normalDailyInterest, dueDailyInterest, amountToAply } = data;

    const adjustment = (total: number) => {
      const integer = Math.trunc(total);
      let decimal = total - integer;

      if (decimal < 0.5) {
        decimal = 0.5;
      } else if (decimal > 0.5) {
        decimal = 1;
      }

      return integer + decimal;
    };

    if (daysToExtend < minDaysToPay) {
      throw new Error(`La cantidad de días mínimos son: ${minDaysToPay}`);
    }

    // Cobro de días normales
    const daysToPay = daysToExtend - dueDays;

    // Cobro de días vencidos
    const dueDaysToPay = daysToExtend - daysToPay;

    if (daysToPay > 0) {
      totalDaysAmount = daysToPay * normalDailyInterest;
      totalDueDaysAmount = dueDaysToPay * dueDailyInterest;
    } else {
      totalDueDaysAmount = daysToExtend * dueDailyInterest;
    }

    subtotalAmount = totalDaysAmount + totalDueDaysAmount - amountToAply;
    subtotalAmount = adjustment(subtotalAmount);
    totalAmount = subtotalAmount * 1.03; // MAGIC NUMBER - Supongo es una comisión.

    return Math.round(totalAmount);
  }, [daysToExtend]);

  return extensionAmount;
};

export default useCalculatePawnExtension;
