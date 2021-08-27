export interface Product {
  id: number;
  code: string;
  name: string;
  type: number; // TODO:Que es esto? preguntas a maxilana
  BranchId: number;
  price: number;
  netPrice: number;
  brand?: string;
  observations?: string;
  hasImage: boolean;
  precod: number; // TODO:Que es esto? preguntas a maxilana
  slug?: string;
}
