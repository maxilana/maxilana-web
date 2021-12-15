// NO PUEDO NORMALIZAR ESTE OBJETO
//  YA QUE NO COINCIDEN LOS DATOS DEL PRODUCTO...
export interface CartProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  branchId: number;
  insurance?: number;
}

export interface LineItem {
  branch: string;
  branchId?: number;
  details: {
    shipping: number;
    products: CartProduct[];
  };
}

export interface Cart {
  id: string;
  cart: LineItem[];
  pricing: {
    shipping: number;
    subtotal: number;
    total: number;
  };
}
