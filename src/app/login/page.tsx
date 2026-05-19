'use client'

import { useActionState, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wpLogin, type LoginState } from './actions'

const initialState: LoginState = { error: undefined }

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(wpLogin, initialState)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: '#f8fafc' }}>

      {/* Logo */}
      <Link href="/" className="mb-8 inline-block">
        <Image
          src="/images/logos/Safeminds_Blue_Horizontal.png"
          alt="SafeMinds"
          width={160}
          height={40}
          className="h-9 w-auto"
        />
      </Link>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl border border-[#e8edf2] p-8 shadow-sm">
        <h1 className="text-2xl font-extrabold text-[#0f172a] mb-1">Willkommen zurück</h1>
        <p className="text-sm text-[#64748b] mb-8">Melden Sie sich mit Ihren Zugangsdaten an.</p>

        {state.error && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 font-medium">
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-5">

          {/* Username / E-Mail */}
          <div>
            <label htmlFor="log" className="block text-sm font-semibold text-[#334155] mb-1.5">
              Benutzername oder E-Mail-Adresse
            </label>
            <input
              id="log"
              name="log"
              type="text"
              autoComplete="username"
              required
              disabled={isPending}
              className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/10 transition-colors disabled:opacity-50"
              placeholder="name@firma.de"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="pwd" className="block text-sm font-semibold text-[#334155]">
                Passwort
              </label>
              <a
                href="https://safeminds.eu/wp-login.php?action=lostpassword"
                className="text-xs text-[#1d4ed8] hover:underline"
              >
                Passwort vergessen?
              </a>
            </div>
            <div className="relative">
              <input
                id="pwd"
                name="pwd"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                disabled={isPending}
                className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-sm text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/10 transition-colors disabled:opacity-50 pr-11"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#64748b] transition-colors"
                aria-label={showPassword ? 'Passwort verbergen' : 'Passwort anzeigen'}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              name="rememberme"
              value="foreverme"
              disabled={isPending}
              className="w-4 h-4 rounded border-[#e2e8f0] text-[#1d4ed8] focus:ring-[#1d4ed8]/20"
            />
            <span className="text-sm text-[#64748b]">Angemeldet bleiben</span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.25)' }}
          >
            {isPending ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Anmeldung läuft…
              </>
            ) : (
              'Anmelden →'
            )}
          </button>
        </form>
      </div>

      {/* Bottom links */}
      <div className="mt-6 text-center space-y-2">
        <p className="text-sm text-[#64748b]">
          Noch kein Konto?{' '}
          <Link href="/testen" className="text-[#1d4ed8] font-semibold hover:underline">
            Kostenlos testen →
          </Link>
        </p>
        <p className="text-xs text-[#94a3b8]">
          Bei Problemen:{' '}
          <a href="mailto:kontakt@safeminds.eu" className="hover:underline">
            kontakt@safeminds.eu
          </a>
        </p>
      </div>

    </main>
  )
}
