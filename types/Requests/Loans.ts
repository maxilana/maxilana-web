import { CreditCard } from './CreditCard';

export interface LoanPaymentRequest extends CreditCard {
  sucursal: number;
  codigoprestamo: string;
}
