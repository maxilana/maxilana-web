import { Product } from './Product';

export default interface Cart {
  id: string;
  products: Product[];
  pricing: {
    shipping: number;
    subtotal: number;
    total: number;
  };
}
