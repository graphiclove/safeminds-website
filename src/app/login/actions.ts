'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export type LoginState = { error: string | undefined }

export async function wpLogin(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = (formData.get('log') as string) ?? ''
  const password = (formData.get('pwd') as string) ?? ''
  const remember = formData.get('rememberme')

  if (!username || !password) {
    return { error: 'Bitte Benutzername und Passwort eingeben.' }
  }

  const body = new URLSearchParams({
    log: username,
    pwd: password,
    'wp-submit': 'Anmelden',
    redirect_to: 'https://safeminds.eu/dashboard/',
    testcookie: '1',
    ...(remember ? { rememberme: 'foreverme' } : {}),
  })

  let res: Response
  try {
    res = await fetch('https://safeminds.eu/wp-login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Server sets the test cookie directly — no browser cookie needed
        Cookie: 'wordpress_test_cookie=WP Cookie check',
        'User-Agent': 'Mozilla/5.0',
      },
      body: body.toString(),
      redirect: 'manual',
    })
  } catch {
    return { error: 'Verbindung zum Server fehlgeschlagen. Bitte später erneut versuchen.' }
  }

  const location = res.headers.get('location') ?? ''

  // Successful login: WordPress responds with 302 to dashboard or wp-admin
  if ((res.status === 301 || res.status === 302) && !location.includes('wp-login.php')) {
    const cookieStore = await cookies()
    const rawCookies: string[] = res.headers.getSetCookie()

    for (const raw of rawCookies) {
      const parts = raw.split(';').map((p) => p.trim())
      const eqIdx = parts[0].indexOf('=')
      if (eqIdx === -1) continue
      const name = parts[0].slice(0, eqIdx).trim()
      const value = parts[0].slice(eqIdx + 1).trim()
      if (!name) continue

      const get = (prefix: string) =>
        parts.find((p) => p.toLowerCase().startsWith(prefix))?.split('=').slice(1).join('=')

      const expiresRaw = get('expires=')
      const sameSiteRaw = get('samesite=')?.toLowerCase()

      cookieStore.set(name, value, {
        path: get('path=') ?? '/',
        domain: '.safeminds.eu',
        expires: expiresRaw ? new Date(expiresRaw) : undefined,
        secure: parts.some((p) => p.toLowerCase() === 'secure'),
        httpOnly: parts.some((p) => p.toLowerCase() === 'httponly'),
        sameSite:
          sameSiteRaw === 'strict' || sameSiteRaw === 'none' ? sameSiteRaw : 'lax',
      })
    }

    redirect(location)
  }

  return { error: 'Benutzername oder Passwort ist falsch.' }
}
