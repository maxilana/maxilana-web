export interface PawnAccount {
  name: string;
  status: 'Activa' | 'Extraviada' | 'Vencida';
  requestDate: string;
  startDate: string;
  dueDate: string;
  loanAmount: number;
  accountNumber: string;
  description: string;
  paymentAmount: number;
  minPaymentAmount: number;
  totalPaymentAmount: number;
  dueDays: number; //DiasVencidos
  limitDueDays: number; //DiasVencidosPermitidos
  normalDailyInterest: number; //InteresDiarioNormal
  dueDailyInterest: number; //InteresDiarioVencido
  minDaysToPay: number; //DiasPagoMinimo
  amountToAply: number; //SaldoPorAplicar
  paymentPendingToApply: boolean; // RefrendoPendienteAplicar
  accountBlocked: boolean; // BoletaBloqueada
  branch: string; // CodigoSucursal
  extraCharge: number; //comision
}

export interface PawnPaymentSuccess {
  reference3D: string;
  branchCode: string;
  branchName: string;
  accountNumber: string;
  paymentAmount: number;
  authCode: string;
  reference: string;
}
