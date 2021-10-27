import { NextApiResponse } from 'next';

import maxAxios from '~/modules/api/axios';
import withSession from '~/modules/lib/withSession';
import { MaxilanaLoginResponse } from '~/types/Responses';
import { NextIronRequest } from '~/types/IronSession';
import { User } from '~/types/Models';

export default withSession(async (req: NextIronRequest, res: NextApiResponse) => {
  const { user, password } = req.body;

  try {
    const response = await maxAxios.post<MaxilanaLoginResponse>('/usuarios/login', {
      user,
      password,
    });

    if (!response) {
      throw new Error('No recibimos respuesta del servidor, inténtalo más tarde.');
    } else if (response?.error) {
      throw new Error(response.error);
    }

    const authUser: User = {
      isLoggedIn: true,
      userCode: Number(response.CodigoUsuario),
      name: response.NombreCompleto,
      lastname: `${response.PrimerApellido} ${response.SegundoApellido}`,
    };

    req.session.set('user', authUser);
    await req.session.save();

    res.json(authUser);
  } catch (error) {
    // @ts-ignore
    res
      .status(422)
      .json({ errors: [{ message: `Ocurrió un error al iniciar sesión. ${error?.message}` }] });
  }
});
