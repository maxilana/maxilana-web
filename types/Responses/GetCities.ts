export type GetCities = Array<{
  id: number;
  slug: string;
  nombre: string;
  estado: string;
  activo: 0 | 1;
  codigoplaza: number;
}>;
