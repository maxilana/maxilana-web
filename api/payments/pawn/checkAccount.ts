import axios from '~/api/axios';
import parseQuery from '~/utils/parseQuery';
import { PawnAccount } from '~/types/Models';
import { PawnAccountResponse } from '~/types/Responses';

type Body = { [key: string]: any };

const checkAccount = async (data: Body): Promise<PawnAccount> => {
  const queryParams = parseQuery(data);

  const response = await axios.get<PawnAccountResponse>(`/boleta?${queryParams}`);

  if (response.error) {
    throw new Error(response.error);
  }

  const {
    FechaConsulta,
    FechaEmpeno,
    FechaVencimiento,
    EstadoBoleta,
    BoletaActual,
    Cliente,
    Prestamo,
    TipoEmpeno,
    InteresNormal,
  } = response;

  return {
    name: Cliente,
    accountNumber: BoletaActual,
    loanAmount: Number(Prestamo),
    startDate: FechaEmpeno,
    status: EstadoBoleta,
    requestDate: FechaConsulta,
    dueDate: FechaVencimiento,
    description: TipoEmpeno,
    interest: Number(InteresNormal),
  };
};

export default checkAccount;
