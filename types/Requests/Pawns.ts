import { CreditCard } from './CreditCard';

/**
 * Códigos de pago
 * 1 - Pago de refrendo
 * 2 - Compra de días
 * 3 - Abono de cantidad
 */
export interface PawnPaymentRequest extends CreditCard {
  sucursal: string;
  boleta: string;
  prestamo: number;
  codigotipopago: string; // '1' | '2' | '3';
  fechaconsulta: string;
  diaspagados: number;
  importe: number;
  email: string;
}

export interface PawnRequest {
  codigoarticulo: number;
  monto: number;
  plaza: number;
  correo: string;
}

export interface AutoPawnRequest {
  ciudad: string;
  marca: string;
  modelo: string;
  tipo: string;
  cantidad: number;
  correo: string;
  telefono: string;
  nombre: string;
  primerapellido: string;
  segundoapellido: string;
  fecnac: string;
}
