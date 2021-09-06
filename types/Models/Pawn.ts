export interface PawnAccount {
  name: string;
  status: 'Activa' | 'Vencida';
  requestDate: string;
  startDate: string;
  dueDate: string;
  loanAmount: number;
  accountNumber: string;
  description: string;
  interest: number;
  //...
}
