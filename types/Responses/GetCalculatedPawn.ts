export interface CalculatedPawn {
  PlazoMaximo: number;
  TasaInteresMensual: number;
  TasaInteresBronce: number;
  TasaInteresPlata: number;
  TasaInteresOro: number;
  Prestamo: number;
}

// TODO: EL API NO DEBERÍA DEVOLVER UN OBJETO DE OBJETOS
export type GetCalculatedPawn = {
  [key: string]: CalculatedPawn;
};
