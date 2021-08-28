import { Branch } from '~/types/Models/Branch';

export interface Product {
  id: string;
  //code: string;
  name: string;
  type: number; // TODO:Que es esto? preguntas a maxilana
  BranchId: number;
  Branch?: Partial<Branch>;
  price: number;
  netPrice: number;
  brand?: string;
  observations?: string;
  image: string | null;
  precod: number; // TODO:Que es esto? preguntas a maxilana
  slug?: string;
  saleOnline?: boolean;
}
