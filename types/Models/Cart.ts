import { Product } from './Product';

// NO PUEDO NORMALIZAR ESTE OBJETO
//  YA QUE NO COINCIDEN LOS DATOS DEL PRODUCTO...
export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Cart {
  id: string;
  products: CartProduct[];
  pricing: {
    shipping: number;
    subtotal: number;
    total: number;
  };
}
