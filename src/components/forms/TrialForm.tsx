'use client'

import { useState } from 'react'

interface TrialFormProps {
  formSource?: string
  onSuccess?: () => void
  buttonText?: string
  placeholder?: string
}

export function TrialForm({
  formSource = 'hero-trial',
  onSuccess,
  buttonText = 'Kostenlos testen',
  placeholder = 'Deine E-Mail-Adresse',
}: TrialFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const params = new URLSearchParams(window.location.search)

    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          form_source: formSource,
          utm_source: params.get('utm_source') ?? undefined,
          utm_campaign: params.get('utm_campaign') ?? undefined,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        onSuccess?.()
      } else {
        setStatus('error')
        setErrorMsg(data.error ?? 'Etwas ist schiefgelaufen.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Verbindungsfehler. Bitte erneut versuchen.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 px-6 py-4 text-center">
        <p className="text-green-800 font-semibold text-lg">✓ Prüfe deine E-Mails!</p>
        <p className="text-green-700 text-sm mt-1">Dein Zugang ist unterwegs — meist in unter 60 Sekunden.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-base"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="whitespace-nowrap rounded-xl bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-6 py-3 transition-colors text-base"
        >
          {status === 'loading' ? 'Wird gesendet…' : buttonText}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-red-600 text-sm">{errorMsg}</p>
      )}
      <p className="mt-2 text-xs text-gray-400">
        Kein Kreditkarte. Kein Passwort. 14 Tage kostenlos.
      </p>
    </form>
  )
}
