interface SpanRate {
  CodigoPlazo: number;
  Tasa: number;
}

export interface GetCalculatedPawn {
  PlazoMaximo: number;
  TasaInteresMensual: number;
  TasaInteresBronce: number;
  TasaInteresPlata: number;
  TasaInteresOro: number;
  Prestamo: number;
  TasaPrestamoMensual: number;
  TasaPrestamoOro: number;
  TasaPrestamoPlata: number;
  TasaPrestamoBronce: number;
  TasaPlazo: SpanRate[];
}
