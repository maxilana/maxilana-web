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
  image: 1 | 0;
  precod: number;
  slug?: string;
}

export type GetProductos = Paginated<Producto>;
