import axios from '../axios';

type Body = { [key: string]: any };

const sendLoanProspect = async (data: Body): Promise<void> => {
  const response = await axios.post('/servicios/pp/postgrabarsolicitudcalculadorapp', data);

  console.log(response);
};

export default sendLoanProspect;
