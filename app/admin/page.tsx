import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Shield, UserRoundCheck, UserRoundX, Users } from 'lucide-react'

import { LogoutButton } from '@/components/admin/logout-button'
import { UserManagement } from '@/components/admin/user-management'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getAdminSessionCookieName, verifyAdminSessionToken } from '@/lib/admin-auth'
import { getUserStats, getUsers } from '@/lib/admin-users'

export default async function AdminDashboardPage() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get(getAdminSessionCookieName())?.value
  const session = await verifyAdminSessionToken(sessionToken)

  if (!session) {
    redirect('/admin/login')
  }

  const [stats, users] = await Promise.all([getUserStats(), getUsers()])

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/marpas logo mark.png"
              alt="Marpa's Montessori Logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <div>
              <p className="font-semibold text-foreground">Admin Dashboard</p>
              <p className="text-sm text-muted-foreground">Marpa&apos;s Montessori</p>
            </div>
          </Link>

          <LogoutButton />
        </div>
      </div>

      <div className="container mx-auto space-y-8 px-4 py-8">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Registered Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.totalUsers}</div>
              <CardDescription>All accounts in the system</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <UserRoundCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.activeUsers}</div>
              <CardDescription>Users currently enabled</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inactive Users</CardTitle>
              <UserRoundX className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.inactiveUsers}</div>
              <CardDescription>Accounts temporarily disabled</CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Admin Access</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-semibold">Protected</div>
              <CardDescription>Only authenticated admins can use this area</CardDescription>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">
              Manage users, control access, and monitor registrations from one place.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Overview</CardTitle>
              <CardDescription>Latest user activity and account health at a glance.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {users.slice(0, 3).map((user) => (
                <div key={user.id} className="rounded-lg border bg-background p-4">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <p className="mt-2 text-sm">
                    Status: <span className="font-medium">{user.status}</span>
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <UserManagement initialUsers={users} />
      </div>
    </main>
  )
}
