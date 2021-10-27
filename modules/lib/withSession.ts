import { withIronSession } from 'next-iron-session';
import { NextIronHandler } from '~/types/IronSession';

export default function withSession(handler: NextIronHandler) {
  return withIronSession(handler, {
    password: process.env?.SECRET_COOKIE_PASSWORD ?? '', // NO DEBERÍA QUEDAR EN LIMPIO
    cookieName: 'maxilana-auth-session',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  });
}
