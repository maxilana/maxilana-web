// ESTE MODELO SOLO LLEGA
//  DEL ENDPOINT DEL CARRITO...
interface Producto {
  id: string;
  nombre: string;
  precio: number;
  sucursal: number; // El id de la sucursal
  seguro?: number; // Cantidad de seguro de producto, joyería o >= $10K
}

interface ItemCarrito {
  plaza: string;
  detalle: {
    envio: string; // number
    productos: Producto[];
  };
}

export interface MaxilanCartResponse {
  orden: string; //number
  carrito: ItemCarrito[];
  pago: {
    envio: number;
    subtotal: number;
    total: number;
  };
}
