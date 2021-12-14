// ESTE MODELO SOLO LLEGA
//  DEL ENDPOINT DEL CARRITO...
interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

export interface MaxilanCartResponse {
  orden: string; //number
  productos: Producto[];
  pago: {
    envio: number;
    subtotal: number;
    total: number;
  };
}
