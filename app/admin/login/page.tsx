import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { AdminLoginForm } from '@/components/admin/login-form'
import { getAdminSessionCookieName, verifyAdminSessionToken } from '@/lib/admin-auth'

export default async function AdminLoginPage() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(getAdminSessionCookieName())?.value
  const session = await verifyAdminSessionToken(sessionToken)

  if (session) {
    redirect('/admin')
  }

  return (
    <main className="min-h-screen bg-muted/40 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md space-y-6">
        <Link href="/" className="mx-auto inline-flex w-full items-center justify-center gap-3">
          <Image
            src="/marpas logo mark.png"
            alt="Marpa's Montessori Logo"
            width={56}
            height={56}
            className="object-contain"
          />
          <span className="text-base font-semibold text-foreground">Marpa&apos;s Montessori</span>
        </Link>

        <AdminLoginForm />
      </div>
    </main>
  )
}
