export interface PaymentTransactionRequest {
  eci: string;
  xid: string;
  cavv: string;
  status: string; //200 OK
  cardtype: 'VISA' | 'MC';
  Reference3D: string;
  // Total: string; //number
  //Number: string; // CardNumber
  // Expires: string;
  // MerchantCity: string;
  // MerchantName: string;
  // MerchantId: string;
}
