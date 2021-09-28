import { CreditCard } from './CreditCard';

export interface ProductPurchase extends CreditCard {
  sucursal: number;
  upc: string; // Código del producto
  nombreenvio: string;
  celular: string;
  correo: string;
  domicilio: string;
  codigopostal: string;
  colonia: string;
  municipio: string;
  estado: string;
  instrucciones?: string;
}
