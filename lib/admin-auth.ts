import type { NextRequest } from 'next/server'

const SESSION_COOKIE = 'marpa_admin_session'
const SESSION_TTL_MS = 1000 * 60 * 60 * 12

type AdminSessionPayload = {
  email: string
  issuedAt: number
  expiresAt: number
}

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET ?? 'dev-admin-session-secret'
}

function getAdminEmail() {
  return process.env.ADMIN_EMAIL ?? 'admin@example.com'
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? 'admin1234'
}

function base64UrlEncode(value: string) {
  return btoa(value).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

function base64UrlDecode(value: string) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/')
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=')

  return atob(padded)
}

function encodePayload(payload: AdminSessionPayload) {
  return base64UrlEncode(JSON.stringify(payload))
}

function decodePayload(payload: string) {
  return JSON.parse(base64UrlDecode(payload)) as AdminSessionPayload
}

function toBase64Url(bytes: Uint8Array) {
  let binary = ''

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })

  return base64UrlEncode(binary)
}

function fromBase64Url(value: string) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/')
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=')
  const binary = atob(padded)

  return Uint8Array.from(binary, (character) => character.charCodeAt(0))
}

async function hmacSignature(value: string) {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value))

  return toBase64Url(new Uint8Array(signature))
}

async function verifySignature(value: string, signature: string) {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['verify'],
  )

  return crypto.subtle.verify('HMAC', key, fromBase64Url(signature), encoder.encode(value))
}

export function getAdminCredentials() {
  return {
    email: getAdminEmail(),
    password: getAdminPassword(),
  }
}

export async function createAdminSessionToken(email: string) {
  const now = Date.now()
  const payload: AdminSessionPayload = {
    email,
    issuedAt: now,
    expiresAt: now + SESSION_TTL_MS,
  }
  const encodedPayload = encodePayload(payload)
  const signature = await hmacSignature(encodedPayload)

  return `${encodedPayload}.${signature}`
}

export async function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return null
  }

  const [encodedPayload, signature] = token.split('.')

  if (!encodedPayload || !signature) {
    return null
  }

  const isValidSignature = await verifySignature(encodedPayload, signature)

  if (!isValidSignature) {
    return null
  }

  try {
    const payload = decodePayload(encodedPayload)

    if (payload.expiresAt < Date.now()) {
      return null
    }

    if (payload.email !== getAdminEmail()) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

export function getAdminSessionCookieName() {
  return SESSION_COOKIE
}

export function isValidAdminCredentials(email: string, password: string) {
  const credentials = getAdminCredentials()

  return email === credentials.email && password === credentials.password
}

export function getAdminSessionFromRequest(request: NextRequest) {
  return request.cookies.get(SESSION_COOKIE)?.value ?? null
}
