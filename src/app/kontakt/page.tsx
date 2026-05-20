'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ContactSuccess } from '@/components/contact/ContactSuccess'

type Status = 'idle' | 'loading' | 'success' | 'error'

const NEXT_STEPS = [
  {
    n: '1',
    title: 'Wir lesen Ihre Anfrage',
    desc: 'Noch heute — persönlich, kein Bot.',
  },
  {
    n: '2',
    title: 'Antwort in 24 Stunden',
    desc: 'Per E-Mail an die Adresse, die Sie angegeben haben.',
  },
  {
    n: '3',
    title: 'Sie entscheiden',
    desc: 'Demo, kostenloser Test oder kein Interesse — alles okay.',
  },
]

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
    <main className="py-16 px-4" style={{ background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Page header */}
        <div className="mb-12 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Kontakt</h1>
          <p className="text-gray-500 text-lg">
            Fragen, Demo-Anfrage oder individueller Bedarf — wir antworten persönlich.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          {/* ── LEFT: Form ── */}
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
                rows={6}
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
              className="w-full bg-[#1d4ed8] hover:bg-[#1e3a8a] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
              style={{ boxShadow: '0 4px 12px rgba(29,78,216,0.25)' }}
            >
              {status === 'loading' ? 'Wird gesendet…' : 'Nachricht senden →'}
            </button>
          </form>

          {/* ── RIGHT: Sidebar ── */}
          <aside className="space-y-6">

            {/* Ansprechpartner */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: '#ffffff', borderColor: '#e2e8f0', boxShadow: '0 1px 4px rgba(15,23,42,0.06)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#dbeafe]">
                  <Image
                    src="/images/team/Cem Yücetas.png"
                    alt="Cem Yücetas — SafeMinds"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] leading-tight">Cem Yücetas</p>
                  <p className="text-sm text-[#64748b]">Gründer, SafeMinds</p>
                </div>
              </div>
              <p className="text-sm text-[#334155] leading-relaxed mb-4">
                Ich lese jede Anfrage persönlich — und melde mich innerhalb von 24 Stunden.
              </p>
              <a
                href="mailto:kontakt@safeminds.eu"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1d4ed8] hover:text-[#1e3a8a] transition-colors focus-visible:ring-2 focus-visible:ring-[#1d4ed8] rounded"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                kontakt@safeminds.eu
              </a>
            </div>

            {/* Was passiert jetzt */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}
            >
              <p className="text-xs font-bold tracking-widest text-[#64748b] uppercase mb-4">
                Was passiert nach dem Absenden?
              </p>
              <div className="space-y-4">
                {NEXT_STEPS.map((step) => (
                  <div key={step.n} className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mt-0.5"
                      style={{ background: '#eff6ff', color: '#1d4ed8' }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0f172a] leading-snug">{step.title}</p>
                      <p className="text-xs text-[#64748b] mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  )
}
