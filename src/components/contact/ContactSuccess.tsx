'use client'

import { useState } from 'react'
import Link from 'next/link'

const STEPS = [
  {
    n: '1',
    title: 'Wir lesen deine Anfrage',
    desc: 'Heute noch — wir sind ein kleines Team und antworten persönlich.',
  },
  {
    n: '2',
    title: 'Wir antworten innerhalb 24 h',
    desc: 'Per E-Mail an die Adresse, die du angegeben hast.',
  },
  {
    n: '3',
    title: 'Du entscheidest selbst',
    desc: 'Demo, kostenloser Test oder kein Interesse — alles okay.',
  },
]

const VIDEO_SRC = '/videos/kontaktaufnahme_video_aftersales.mp4'

export function ContactSuccess() {
  const [nlEmail, setNlEmail] = useState('')
  const [nlStatus, setNlStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [nlError, setNlError] = useState('')

  async function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setNlStatus('loading')
    setNlError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail, form_source: 'footer-newsletter' }),
      })
      if (!res.ok) throw new Error()
      setNlStatus('success')
    } catch {
      setNlStatus('error')
      setNlError('Anmeldung fehlgeschlagen. Bitte versuche es erneut.')
    }
  }

  return (
    <div
      className="min-h-screen pt-16 pb-24"
      style={{ background: 'linear-gradient(to bottom, #ffffff 60%, #eff6ff 100%)' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

        {/* ── Sektion 1: Erfolgs-Banner ── */}
        <div
          className="text-center rounded-2xl px-8 py-10"
          style={{
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
            boxShadow: '0 4px 20px rgba(16,185,129,0.08)',
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ background: '#ffffff', border: '2px solid #10b981' }}
            aria-hidden="true"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#0f172a' }}>
            Nachricht erhalten.
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Wir melden uns innerhalb von 24 Stunden bei dir.
          </p>
        </div>

        {/* ── Sektion 2: 3 Schritte ── */}
        <div>
          <p className="text-center text-xs font-semibold tracking-widest mb-6" style={{ color: '#64748b' }}>
            SO GEHT ES WEITER
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex sm:flex-col gap-4 sm:gap-3 items-start sm:items-center sm:text-center relative">
                {/* Arrow between cards — desktop only */}
                {i < STEPS.length - 1 && (
                  <span
                    className="hidden sm:block absolute right-0 top-4 translate-x-1/2 text-lg font-light"
                    style={{ color: '#cbd5e1' }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ background: '#eff6ff', color: '#1d4ed8' }}
                >
                  {step.n}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: '#0f172a' }}>{step.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Sektion 3: Gründer-Video ── */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#64748b' }}>
            LERN UNS KENNEN, BIS WIR ANTWORTEN
          </p>
          <p className="text-sm mb-6" style={{ color: '#64748b' }}>
            75 Sekunden über das Warum hinter SafeMinds
          </p>
          <div
            className="aspect-video rounded-2xl overflow-hidden mx-auto"
            style={{
              maxWidth: 720,
              boxShadow: '0 10px 30px rgba(29,78,216,0.15)',
            }}
          >
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
              aria-label="Gründervideo: Das Warum hinter SafeMinds"
              onError={(e) => {
                const wrapper = (e.currentTarget as HTMLVideoElement).parentElement
                if (wrapper) {
                  wrapper.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center bg-slate-100 rounded-2xl gap-3">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      <p style="color:#64748b;font-size:0.875rem">Video wird in Kürze ergänzt</p>
                    </div>`
                }
              }}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              <p className="p-6 text-sm" style={{ color: '#64748b' }}>Video wird in Kürze ergänzt.</p>
            </video>
          </div>
        </div>

        {/* ── Sektion 4: Free-Trial-CTA ── */}
        <div
          className="text-center rounded-2xl px-8 py-12"
          style={{
            background: 'linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)',
            boxShadow: '0 8px 30px rgba(29,78,216,0.25)',
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Du musst nicht warten.
          </h2>
          <p className="mb-8 text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Teste SafeMinds 14 Tage kostenlos. Keine Kreditkarte. Keine Vertragsbindung.
          </p>
          <Link
            href="/testen"
            className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800"
            style={{ color: '#1d4ed8', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
          >
            Jetzt kostenlos testen →
          </Link>
        </div>

        {/* ── Sektion 5: Newsletter ── */}
        <div
          className="rounded-xl px-6 py-8"
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Text */}
            <div className="sm:flex-1">
              <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: '#64748b' }}>
                BLEIB INFORMIERT
              </p>
              <p className="font-bold mb-1" style={{ color: '#0f172a' }}>
                Neuigkeiten zu Arbeitsschutz &amp; Pflichten
              </p>
              <p className="text-xs" style={{ color: '#64748b' }}>
                1× im Monat. Kein Spam. Jederzeit abbestellbar.
              </p>
            </div>

            {/* Form */}
            <div className="sm:flex-1">
              {nlStatus === 'success' ? (
                <p className="font-semibold text-sm" style={{ color: '#10b981' }}>
                  ✓ Angemeldet — danke!
                </p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    placeholder="deine@email.de"
                    className="flex-1 min-w-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
                    style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }}
                    aria-label="E-Mail-Adresse für Newsletter"
                  />
                  <button
                    type="submit"
                    disabled={nlStatus === 'loading'}
                    className="shrink-0 font-semibold text-sm px-5 py-3 rounded-lg text-white transition-all hover:-translate-y-0.5 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
                    style={{ background: '#1d4ed8' }}
                  >
                    {nlStatus === 'loading' ? '…' : 'Anmelden'}
                  </button>
                </form>
              )}
              {nlError && (
                <p className="text-xs mt-2" style={{ color: '#ef4444' }}>{nlError}</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
