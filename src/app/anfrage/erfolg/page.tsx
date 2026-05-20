'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCourseSelection } from '@/lib/courseSelectionStore'
import type { Course } from '@/data/courses'

const STEPS = [
  { n: '1', title: 'Wir prüfen deine Anfrage', desc: 'Noch heute — persönlich, kein Bot.' },
  { n: '2', title: 'Wir richten deinen Zugang ein', desc: 'Innerhalb von 24 Stunden.' },
  { n: '3', title: 'Du loggst dich ein und legst los', desc: 'Mit deinen E-Mail-Login-Daten.' },
]

const VIDEO_SRC    = '/videos/kontaktaufnahme_video_aftersales-vertical_with_captions.mp4'
const VIDEO_POSTER = '/videos/Video%20thumbnail%20kontaktaufnahme%20aftersales%20vertical.png'

export default function AnfrageErfolgPage() {
  const { selectedCourses, clearSelection } = useCourseSelection()
  const [courses, setCourses] = useState<Course[]>([])
  const [playing, setPlaying] = useState(false)
  const [nlEmail, setNlEmail] = useState('')
  const [nlStatus, setNlStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [nlError, setNlError] = useState('')
  const videoRef = useRef<HTMLVideoElement>(null)

  // Snapshot selected courses on mount, then clear the selection
  useEffect(() => {
    if (selectedCourses.length > 0) {
      setCourses(selectedCourses)
      clearSelection()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    <div className="min-h-screen pt-16 pb-24" style={{ background: 'linear-gradient(to bottom, #ffffff 60%, #eff6ff 100%)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">

        {/* ── 1. Erfolgs-Banner ── */}
        <div
          className="text-center rounded-2xl px-8 py-10"
          style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', boxShadow: '0 4px 20px rgba(16,185,129,0.08)' }}
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
            Anfrage erhalten!
          </h1>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Wir richten deinen Test-Zugang innerhalb von 24&nbsp;h ein und melden uns per E-Mail.
          </p>
        </div>

        {/* ── 2. Angefragte Kurse ── */}
        {courses.length > 0 && (
          <div className="bg-white border border-[#e2e8f0] rounded-2xl p-6" style={{ boxShadow: '0 1px 4px rgba(15,23,42,0.06)' }}>
            <p className="text-xs font-bold tracking-widest text-[#64748b] uppercase mb-4">
              Deine angefragten Kurse ({courses.length})
            </p>
            <div className="grid sm:grid-cols-2 gap-2">
              {courses.map((c) => (
                <div key={c.slug} className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-[#0f172a]">{c.title}</span>
                  {c.status === 'produktion' && (
                    <span className="text-xs bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded-full border border-amber-200 ml-auto">
                      Vorbestellung
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── 3. 3 Schritte ── */}
        <div>
          <p className="text-center text-xs font-semibold tracking-widest mb-6" style={{ color: '#64748b' }}>
            SO GEHT ES WEITER
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <div key={step.n} className="flex sm:flex-col gap-4 sm:gap-3 items-start sm:items-center sm:text-center relative">
                {i < STEPS.length - 1 && (
                  <span className="hidden sm:block absolute right-0 top-4 translate-x-1/2 text-lg font-light" style={{ color: '#cbd5e1' }} aria-hidden="true">
                    →
                  </span>
                )}
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ background: '#eff6ff', color: '#1d4ed8' }}>
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

        {/* ── 4. Gründer-Video ── */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-widest mb-2" style={{ color: '#64748b' }}>
            LERN UNS KENNEN, BIS WIR ANTWORTEN
          </p>
          <p className="text-sm mb-6" style={{ color: '#64748b' }}>
            75 Sekunden über das Warum hinter SafeMinds
          </p>
          <div className="relative w-full rounded-2xl overflow-hidden"
            style={{ maxWidth: 400, aspectRatio: '9 / 16', boxShadow: '0 10px 30px rgba(29,78,216,0.15)', background: '#0f172a' }}>
            <video ref={videoRef} className="w-full h-full object-cover" controls={playing}
              preload="metadata" playsInline poster={VIDEO_POSTER}
              aria-label="Gründervideo: Das Warum hinter SafeMinds"
              onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}>
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
            {!playing && (
              <button onClick={() => { videoRef.current?.play(); setPlaying(true) }}
                className="absolute inset-0 flex items-center justify-center group" aria-label="Video abspielen"
                style={{ background: 'rgba(0,0,0,0.18)' }}>
                <div className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
                  style={{ width: 72, height: 72, background: 'rgba(255,255,255,0.95)', boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#1d4ed8">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* ── 5. Newsletter ── */}
        <div className="rounded-xl px-6 py-8" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="sm:flex-1">
              <p className="text-xs font-semibold tracking-widest mb-1" style={{ color: '#64748b' }}>BLEIB INFORMIERT</p>
              <p className="font-bold mb-1" style={{ color: '#0f172a' }}>Neuigkeiten zu Arbeitsschutz &amp; Pflichten</p>
              <p className="text-xs" style={{ color: '#64748b' }}>1× im Monat. Kein Spam. Jederzeit abbestellbar.</p>
            </div>
            <div className="sm:flex-1">
              {nlStatus === 'success' ? (
                <p className="font-semibold text-sm" style={{ color: '#10b981' }}>✓ Angemeldet — danke!</p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input type="email" required value={nlEmail} onChange={(e) => setNlEmail(e.target.value)}
                    placeholder="deine@email.de"
                    className="flex-1 min-w-0 rounded-lg px-4 py-3 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
                    style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0f172a' }}
                    aria-label="E-Mail-Adresse für Newsletter" />
                  <button type="submit" disabled={nlStatus === 'loading'}
                    className="shrink-0 font-semibold text-sm px-5 py-3 rounded-lg text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: '#1d4ed8' }}>
                    {nlStatus === 'loading' ? '…' : 'Anmelden'}
                  </button>
                </form>
              )}
              {nlError && <p className="text-xs mt-2" style={{ color: '#ef4444' }}>{nlError}</p>}
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link href="/kurse" className="text-sm text-[#64748b] hover:text-[#0f172a] transition-colors">
            ← Weitere Kurse ansehen
          </Link>
        </div>

      </div>
    </div>
  )
}
