'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)

    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.replace('/admin/login')
      router.refresh()
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <Button variant="outline" onClick={handleLogout} disabled={isLoggingOut}>
      {isLoggingOut ? 'Signing out...' : 'Sign Out'}
    </Button>
  )
}
