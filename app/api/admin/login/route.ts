import { NextResponse } from 'next/server'

import {
  createAdminSessionToken,
  getAdminSessionCookieName,
  isValidAdminCredentials,
} from '@/lib/admin-auth'

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | { email?: string; password?: string }
    | null

  const email = body?.email?.trim() ?? ''
  const password = body?.password ?? ''

  if (!isValidAdminCredentials(email, password)) {
    return NextResponse.json({ error: 'Invalid admin credentials' }, { status: 401 })
  }

  const token = await createAdminSessionToken(email)
  const response = NextResponse.json({ ok: true })

  response.cookies.set(getAdminSessionCookieName(), token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 12,
  })

  return response
}
