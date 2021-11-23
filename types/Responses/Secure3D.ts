// Response de la transacción de Maxilana
export interface MaxilanaTransaction {
  id: string;
  merchancity: string; // "CULIACAN"
  merchanname: string; // "MAXILANA ECOMM",
  merchanid: string; // "8279402",
  correoEmpresa: string; // "webmaxilana@maxilana.com",
  correoserv: string; // "smtp.office365.com",
  correopass: string; // "cceMaxiWeb2015"
}

// Response de la transacción del banco
export interface BankTransaction {
  ECI: string;
  XID: string;
  CAVV: string;
  Status: string; //200 OK
  Total: string; //number
  CardType: 'VISA' | 'MC';
  Number: string; // CardNumber
  Expires: string;
  MerchantCity: string;
  MerchantName: string;
  MerchantId: string;
  Reference3D: string;
}
