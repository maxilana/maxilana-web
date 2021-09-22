export interface PawnAccount {
  name: string;
  status: 'Activa' | 'Vencida';
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
  normalDailyInterest: number; //InteresDiarioNormal
  dueDailyInterest: number; //InteresDiarioVencido
  minDaysToPay: number; //DiasPagoMinimo
  amountToAply: number; //SaldoPorAplicar
}
