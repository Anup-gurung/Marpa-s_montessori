import { NextResponse } from 'next/server'

import { verifyAdminSessionToken } from '@/lib/admin-auth'
import { getUsers } from '@/lib/admin-users'

function getTokenFromHeaders(request: Request) {
  return request.headers.get('cookie')?.match(/marpa_admin_session=([^;]+)/)?.[1] ?? null
}

export async function GET(request: Request) {
  const session = await verifyAdminSessionToken(getTokenFromHeaders(request))

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const users = await getUsers()

  return NextResponse.json({ users })
}
