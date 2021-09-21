import maxAxios from './axios';
import parseQuery from '~/utils/parseQuery';
import { RequestPawn } from '~/types/Requests/RequestPawn';
import { GetCalculatedPawn } from '~/types/Responses/GetCalculatedPawn';
import { PawnCalculation } from '~/types/Models/PawnCalculation';

const getCalculatedPawn = async (data: RequestPawn): Promise<PawnCalculation> => {
  // @ts-ignore
  const queryParams = parseQuery(data);

  const response = await maxAxios.get<GetCalculatedPawn>(
    `/calculadoraempeno/calcularprestamo?${queryParams}`,
  );

  if (response) {
    const {
      PlazoMaximo,
      TasaInteresMensual,
      TasaInteresBronce,
      TasaInteresPlata,
      TasaInteresOro,
      Prestamo,
    } = response[0];

    return {
      amount: Prestamo,
      maxMonthlyPaymentLimit: PlazoMaximo,
      monthlyInterest: TasaInteresMensual,
      bronzeInterest: TasaInteresBronce,
      silverInterest: TasaInteresPlata,
      goldInterest: TasaInteresOro,
    };
  }

  throw new Error('Ocurrió un error al calcular el préstamo para tu empeño');
};

export default getCalculatedPawn;
