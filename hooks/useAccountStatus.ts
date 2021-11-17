import useSWR from 'swr';
import { useMemo } from 'react';

import fetcher from '~/modules/api/fetcher';
import { PawnAccount } from '~/types/Models';
import { GetAccountStatus } from '~/types/Responses';
import roundDecimals from '~/utils/roundDecimals';
import roundUpToFifty from '~/utils/roundUpToFifty';

export default function useAccountStatus(userCode?: string) {
  const { data, error, isValidating } = useSWR<GetAccountStatus>(
    userCode !== undefined ? `/usuarios/estadodecuenta?codigousuario=${userCode}` : null,
    {
      fetcher: fetcher,
      revalidateOnFocus: false,
    },
  );

  const account: PawnAccount[] = useMemo(() => {
    if (data !== undefined && Array.isArray(data)) {
      return data.map((ballot) => {
        const {
          Boleta,
          FecVen,
          Prestamo,
          Refrendo,
          TipoEmpeno,
          // Sucursal,
          Codigosucursal,
          Estatus,
          Nombre,
          ApellidoP,
          ApellidoM,
          FLR,
          // Banco,
          fechaConsulta,
          Prefijo,
          InteresdiarioActivo,
          InteresDiarioVencido,
          DiasPagoMinimo,
          ImportePagoMinimo,
          DiasVencidosPendientes,
          SaldoAFavor,
          BoletaBloqueada,
          Mensaje,
          PagoEnProceso,
          SaldoPorAplicar,
          // PermitirPago,
          comision,
        } = ballot;

        // let decimal = 0;
        let decimalTotal = 0;
        let loan = Number(Prestamo);
        let totalPaymentAmount = 0; // DESEMPEÑO
        const extraCharge = comision; // COMISION
        let paymentAmount = Number(Refrendo); // REFRENDO
        const minPaymentAmount = roundDecimals(
          roundUpToFifty(Number(ImportePagoMinimo)) * extraCharge,
        ); // PAGO MÍNIMO

        /** CÁLCULO DE PAGO DE REFRENDO */
        // TODO: Preguntar si estos son los intereses para hacer en este cálculo
        // TODO: Preguntar si es necesario volver hacer este cálculo, ya viene la cantidad de refrendo
        const interest = Number(InteresdiarioActivo) + Number(InteresDiarioVencido);
        // const diffInterest = interest - Math.round(interest);

        // if (diffInterest > 0) {
        //   decimal = 0.5 - Math.round(diffInterest);
        // }

        // if (decimal === 0) {
        //   paymentAmount = Math.round(interest);
        // } else if (decimal > 0) {
        //   paymentAmount = interest + decimal;
        // } else {
        //   paymentAmount = Math.round(interest + (0.5 + decimal));
        // }

        paymentAmount = roundDecimals(paymentAmount * extraCharge);

        /** CÁLCULO DE PAGO DE DESEMPEÑO */
        // SOLO INFORMATIVO, NO SE PUEDE PAGAR
        // TODO: Preguntar si es necesario hacer este cálculo, el dato no viene del endpoint.
        let subtotal = loan + interest;
        const diffSubtotalInterest = subtotal - Math.round(subtotal);

        if (diffSubtotalInterest > 0) {
          decimalTotal = 0.5 - Math.round(diffSubtotalInterest);
        }

        if (decimalTotal === 0) {
          totalPaymentAmount = Math.round(subtotal);
        } else if (decimalTotal > 0) {
          totalPaymentAmount = subtotal + decimalTotal;
        } else {
          totalPaymentAmount = Math.round(subtotal + (0.5 + decimalTotal));
        }

        totalPaymentAmount = roundDecimals(totalPaymentAmount * extraCharge);

        const accountBlocked = BoletaBloqueada === '1';
        const accountBlockedMessage = accountBlocked ? Mensaje ?? '' : '';

        return {
          extraCharge,
          accountBlocked,
          accountBlockedMessage,
          name: `${Nombre} ${ApellidoP} ${ApellidoM}`.trim(),
          accountNumber: Boleta,
          accountLetter: Prefijo,
          loanAmount: loan,
          startDate: FLR, // TODO: Preguntar si esa fecha es la fecha de empeño
          status: Estatus,
          requestDate: fechaConsulta,
          dueDate: FecVen,
          description: TipoEmpeno,
          paymentAmount: paymentAmount,
          minPaymentAmount: minPaymentAmount,
          totalPaymentAmount: totalPaymentAmount,
          dueDays: Number(DiasVencidosPendientes),
          limitDueDays: Number(DiasVencidosPendientes), // TODO: Preguntar si este dato es diferente, no viene
          pendingDueDays: Number(DiasVencidosPendientes),
          normalDailyInterest: Number(InteresdiarioActivo),
          dueDailyInterest: Number(InteresDiarioVencido),
          minDaysToPay: Number(DiasPagoMinimo),
          amountToAply: Number(SaldoPorAplicar),
          paymentPendingToApply: Number(PagoEnProceso) === 1,
          branch: Codigosucursal,
          creditBalance: Number(SaldoAFavor),
        };
      });
    }

    return [];
  }, [data]);

  return { account, error, loading: isValidating };
}
