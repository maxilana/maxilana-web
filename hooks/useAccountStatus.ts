import useSWR from 'swr';
import { useMemo } from 'react';

import fetcher from '~/modules/api/fetcher';
import { PawnAccount } from '~/types/Models';
import { GetAccountStatus } from '~/types/Responses';
import roundDecimals from '~/utils/roundDecimals';
import roundUpToFifty from '~/utils/roundUpToFifty';

export default function useAccountStatus(userCode?: number) {
  const { data, error } = useSWR<GetAccountStatus>(
    userCode !== undefined ? `/usuarios/estadodecuenta?codigousuario=${userCode}` : null,
    {
      fetcher: fetcher,
      revalidateOnFocus: true,
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
          // SaldoAFavor,
          BoletaBloqueada,
          Mensaje,
          PagoEnProceso,
          SaldoPorAplicar,
          // PermitirPago,
        } = ballot;

        // let decimal = 0;
        let decimalTotal = 0;
        let loan = Number(Prestamo);
        let paymentAmount = Number(Refrendo); // REFRENDO
        let totalPaymentAmount = 0; // DESEMPEÑO
        // TODO: No viene en el endpoint
        const extraCharge = 1.03; // COMISION
        const minPaymentAmount = roundUpToFifty(Number(ImportePagoMinimo)) * extraCharge; // PAGO MÍNIMO

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

        // paymentAmount = roundDecimals(paymentAmount * extraCharge);

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

        return {
          extraCharge,
          name: `${Nombre} ${ApellidoP} ${ApellidoM}`.trim(),
          accountNumber: Boleta,
          accountLetter: Prefijo,
          loanAmount: loan,
          startDate: FLR, // TODO: Preguntar si esa fecha es la fecha de empeño
          status: Estatus,
          requestDate: fechaConsulta,
          dueDate: FecVen,
          description: Mensaje,
          paymentAmount: paymentAmount,
          minPaymentAmount: minPaymentAmount,
          totalPaymentAmount: totalPaymentAmount,
          dueDays: Number(DiasVencidosPendientes),
          limitDueDays: Number(DiasVencidosPendientes), // TODO: Preguntar si este dato es diferente, no viene
          normalDailyInterest: Number(InteresdiarioActivo),
          dueDailyInterest: Number(InteresDiarioVencido),
          minDaysToPay: Number(DiasPagoMinimo),
          amountToAply: Number(SaldoPorAplicar),
          paymentPendingToApply: Number(PagoEnProceso) === 1, // TODO: Preguntar si PagoEnProceso es el RefrendoPendientedeAplicar.
          accountBlocked: Number(BoletaBloqueada) === 1,
          branch: Codigosucursal,
        };
      });
    }

    return [];
  }, [data]);

  return { account, error };
}
