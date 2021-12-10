import { Producto } from './GetProductos';

export interface MaxilanCartResponse {
  orden: string; //number
  productos: Producto[];
  pago: {
    envio: number;
    subtotal: number;
    total: number;
  };
}
