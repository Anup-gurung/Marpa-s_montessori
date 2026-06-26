import { NextResponse } from 'next/server'

import { verifyAdminSessionToken } from '@/lib/admin-auth'
import { getUsers, saveUsers } from '@/lib/admin-users'

function getTokenFromHeaders(request: Request) {
  return request.headers.get('cookie')?.match(/marpa_admin_session=([^;]+)/)?.[1] ?? null
}

async function requireAdmin(request: Request) {
  const session = await verifyAdminSessionToken(getTokenFromHeaders(request))

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return null
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const unauthorizedResponse = await requireAdmin(request)

  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  const { id } = params
  const body = (await request.json().catch(() => null)) as { status?: 'active' | 'inactive' } | null

  if (!body?.status) {
    return NextResponse.json({ error: 'Missing status' }, { status: 400 })
  }

  const users = await getUsers()
  const userExists = users.some((user) => user.id === id)

  if (!userExists) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const nextUsers = users.map((user) =>
    user.id === id ? { ...user, status: body.status, lastActiveAt: new Date().toISOString() } : user,
  )

  await saveUsers(nextUsers)

  return NextResponse.json({ ok: true })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const unauthorizedResponse = await requireAdmin(request)

  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  const { id } = params
  const users = await getUsers()
  const filteredUsers = users.filter((user) => user.id !== id)

  if (filteredUsers.length === users.length) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  await saveUsers(filteredUsers)

  return NextResponse.json({ ok: true })
}
