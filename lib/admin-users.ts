import { mkdir, readFile, writeFile } from 'fs/promises'
import path from 'path'

export type AdminUserStatus = 'active' | 'inactive'

export type AdminUser = {
  id: string
  name: string
  email: string
  phone: string
  status: AdminUserStatus
  registeredAt: string
  lastActiveAt: string
}

const dataDirectory = path.join(process.cwd(), 'data')
const dataFilePath = path.join(dataDirectory, 'admin-users.json')

const seedUsers: AdminUser[] = [
  {
    id: 'user_1001',
    name: 'Ava Johnson',
    email: 'ava.johnson@example.com',
    phone: '+1 (555) 201-1101',
    status: 'active',
    registeredAt: '2026-05-02T08:15:00.000Z',
    lastActiveAt: '2026-06-24T10:45:00.000Z',
  },
  {
    id: 'user_1002',
    name: 'Noah Williams',
    email: 'noah.williams@example.com',
    phone: '+1 (555) 201-1102',
    status: 'active',
    registeredAt: '2026-05-14T11:20:00.000Z',
    lastActiveAt: '2026-06-23T09:15:00.000Z',
  },
  {
    id: 'user_1003',
    name: 'Mia Brown',
    email: 'mia.brown@example.com',
    phone: '+1 (555) 201-1103',
    status: 'inactive',
    registeredAt: '2026-05-29T13:10:00.000Z',
    lastActiveAt: '2026-06-10T14:30:00.000Z',
  },
  {
    id: 'user_1004',
    name: 'Ethan Garcia',
    email: 'ethan.garcia@example.com',
    phone: '+1 (555) 201-1104',
    status: 'active',
    registeredAt: '2026-06-01T07:55:00.000Z',
    lastActiveAt: '2026-06-25T08:05:00.000Z',
  },
  {
    id: 'user_1005',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@example.com',
    phone: '+1 (555) 201-1105',
    status: 'inactive',
    registeredAt: '2026-06-04T09:40:00.000Z',
    lastActiveAt: '2026-06-18T15:12:00.000Z',
  },
]

async function ensureDataFile() {
  await mkdir(dataDirectory, { recursive: true })

  try {
    await readFile(dataFilePath, 'utf8')
  } catch {
    await writeFile(dataFilePath, JSON.stringify(seedUsers, null, 2), 'utf8')
  }
}

export async function getUsers() {
  await ensureDataFile()
  const fileContents = await readFile(dataFilePath, 'utf8')

  return JSON.parse(fileContents) as AdminUser[]
}

export async function saveUsers(users: AdminUser[]) {
  await ensureDataFile()
  await writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf8')

  return users
}

export async function getUserStats() {
  const users = await getUsers()
  const activeUsers = users.filter((user) => user.status === 'active').length
  const inactiveUsers = users.length - activeUsers

  return {
    totalUsers: users.length,
    activeUsers,
    inactiveUsers,
  }
}
