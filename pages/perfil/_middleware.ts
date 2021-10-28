import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, evt: NextFetchEvent) {
  const cookie = req.cookies[process.env?.AUTH_COOKIE_NAME ?? ''];

  if (!cookie) {
    return NextResponse.rewrite('/');
  }

  return NextResponse.next();
}
