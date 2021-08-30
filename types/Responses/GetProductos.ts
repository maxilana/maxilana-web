import { Paginated } from '~/types/Paginated';

export interface Producto {
  id: number;
  codigo: string;
  tipo: number;
  nombre: string;
  sucursal: number;
  precio: number;
  precioneto: number;
  marca: string;
  observaciones: string;
  imagen: 1 | 0;
  precod: number;
  slug?: string;
  ventalinea: 1 | 0;
}

export type GetProductos = Paginated<Producto>;
