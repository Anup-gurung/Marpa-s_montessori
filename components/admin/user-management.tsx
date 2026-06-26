'use client'

import { useEffect, useMemo, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { AdminUser } from '@/lib/admin-users'

type Props = {
  initialUsers: AdminUser[]
}

export function UserManagement({ initialUsers }: Props) {
  const [users, setUsers] = useState(initialUsers)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setUsers(initialUsers)
  }, [initialUsers])

  const sortedUsers = useMemo(
    () => [...users].sort((left, right) => right.registeredAt.localeCompare(left.registeredAt)),
    [users],
  )

  const refreshUsers = async () => {
    const response = await fetch('/api/admin/users')

    if (!response.ok) {
      throw new Error('Unable to load users')
    }

    const payload = (await response.json()) as { users: AdminUser[] }

    setUsers(payload.users)
  }

  const updateUserStatus = async (userId: string, status: 'active' | 'inactive') => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(payload?.error ?? 'Unable to update user')
      }

      await refreshUsers()
    } catch (statusError) {
      setError(statusError instanceof Error ? statusError.message : 'Unable to update user')
    } finally {
      setIsLoading(false)
    }
  }

  const deleteUser = async (userId: string) => {
    const confirmed = window.confirm('Permanently delete this user? This cannot be undone.')

    if (!confirmed) {
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(payload?.error ?? 'Unable to delete user')
      }

      await refreshUsers()
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : 'Unable to delete user')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>
          View all registered users and manage account status.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Registered</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{new Date(user.registeredAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateUserStatus(user.id, user.status === 'active' ? 'inactive' : 'active')}
                      disabled={isLoading}
                    >
                      {user.status === 'active' ? 'Deactivate' : 'Reactivate'}
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteUser(user.id)}
                      disabled={isLoading}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
