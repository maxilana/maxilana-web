export interface CheckoutSuccess {
  reference: string;
  amount: number;
  productName: string;
  contactName: string;
  shipping: {
    address: string;
    locality: string;
    city: string;
    amount: number;
    contactName: string;
  };
}

export type ErrorCodes = '0' | '100' | '200';
