import { NextResponse, type NextRequest } from 'next/server'

import { getAdminSessionCookieName, verifyAdminSessionToken } from '@/lib/admin-auth'

function isAdminRoute(pathname: string) {
  return pathname.startsWith('/admin') || pathname.startsWith('/api/admin')
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    !isAdminRoute(pathname) ||
    pathname === '/admin/login' ||
    pathname === '/api/admin/login' ||
    pathname === '/api/admin/logout'
  ) {
    return NextResponse.next()
  }

  const sessionToken = request.cookies.get(getAdminSessionCookieName())?.value
  const session = await verifyAdminSessionToken(sessionToken)

  if (session) {
    return NextResponse.next()
  }

  if (pathname.startsWith('/api/admin')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const loginUrl = new URL('/admin/login', request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
