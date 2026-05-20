'use client'

import { useState } from 'react'
import { ContactSuccess } from '@/components/contact/ContactSuccess'

// Metadata must be exported from a server component — move to separate layout if needed
// export const metadata: Metadata = { title: 'Kontakt — SafeMinds' }

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function KontaktPage() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setError('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          form_source: 'kontakt',
          page_url: window.location.href,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.')
    }
  }

  if (status === 'success') {
    return (
      <main>
        <ContactSuccess />
      </main>
    )
  }

  return (
    <main className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kontakt</h1>
          <p className="text-gray-600 text-lg">
            Fragen, Demo-Anfrage oder individueller Bedarf — wir antworten innerhalb von 24 Stunden.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Max Mustermann"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                E-Mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="max@firma.de"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="company">
              Unternehmen
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Ihre Firma GmbH"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Wie können wir Ihnen helfen?"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors"
          >
            {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden →'}
          </button>
        </form>
      </div>
    </main>
  )
}
