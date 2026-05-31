'use client'

import { useState } from 'react'
import Link from 'next/link'

const ROLES = [
  {
    id: 'agf',
    label: 'Arbeitgeber',
    tag: 'Arbeitgeber & Geschäftsführer',
    stat: '€25.000',
    statLabel: 'Bußgeld\nvermieden',
    headline: 'Haftung weg.\nDokumentation drin.',
    desc: 'Sie sind gesetzlich verpflichtet, Mitarbeiter jährlich zu unterweisen. SafeMinds erledigt das rechtssicher — automatisch, dokumentiert, revisionssicher. Kein Papierkram.',
    benefits: [
      'Nachweise bei Betriebsprüfung sofort verfügbar',
      'Automatische Jahreserinnerungen',
      'Zeitaufwand: Stunden → Minuten',
    ],
    cta: 'Jetzt absichern',
  },
  {
    id: 'sibe',
    label: 'Sicherheitsbeauftragte',
    tag: 'Sicherheitsbeauftragte (SiBe)',
    stat: '100%',
    statLabel: 'Digital &\npapierlos',
    headline: 'Endlich ein System,\ndas die Arbeit abnimmt.',
    desc: 'Schluss mit Excel-Listen und manueller Nachverfolgung. SafeMinds dokumentiert automatisch, erinnert selbstständig und liefert auf Knopfdruck alle Nachweise.',
    benefits: [
      'Automatische Erinnerungen an Mitarbeiter',
      'Übersicht aller offenen Unterweisungen',
      'Rechtssichere PDF-Zertifikate je Mitarbeiter',
    ],
    cta: 'Demo ansehen',
  },
  {
    id: 'hr',
    label: 'HR & Personal',
    tag: 'HR & Personalverantwortliche',
    stat: '4+',
    statLabel: 'Sprachen\ninklusive',
    headline: 'Onboarding und\nUnterweisung in einem.',
    desc: 'Neue Mitarbeiter erhalten beim ersten Login automatisch ihre Einweisung — mehrsprachig, mit Unternehmensfilm und Pflichtunterweisung. Kein Dolmetscher, kein Zeitverlust.',
    benefits: [
      'Polnisch, Türkisch, Rumänisch u.v.m.',
      'Onboarding + Arbeitssicherheit in einem',
      'Nachweis-PDF sofort nach Abschluss',
    ],
    cta: 'Mehr erfahren',
  },
]

export function RoleSections() {
  const [active, setActive] = useState(0)
  const role = ROLES[active]

  return (
    <section style={{ background: '#0f172a' }} className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
            Für wen ist SafeMinds?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Für jeden im Betrieb ein Gewinn
          </h2>
          <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Wähle deine Rolle — SafeMinds löst genau dein Problem.
          </p>
        </div>

        {/* ── Role Tabs ── */}
        <div className="flex gap-2 justify-center mb-8 flex-wrap">
          {ROLES.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
              style={
                active === i
                  ? { background: '#ffffff', color: '#0f172a' }
                  : { background: 'transparent', color: 'rgba(255,255,255,0.55)', border: '1px solid rgba(255,255,255,0.15)' }
              }
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* ── Content Panel ── */}
        <div
          className="rounded-3xl p-8 sm:p-12"
          style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}
        >
          <div className="grid lg:grid-cols-[1fr_220px] gap-10 items-center">

            {/* Left: Text */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#60a5fa' }}>
                {role.tag}
              </p>
              <h3
                className="font-extrabold text-white mb-5 leading-tight whitespace-pre-line"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
              >
                {role.headline}
              </h3>
              <p className="leading-relaxed mb-8 max-w-xl" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.97rem' }}>
                {role.desc}
              </p>

              {/* Benefits */}
              <ul className="space-y-2.5 mb-10">
                {role.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(29,78,216,0.35)', color: '#60a5fa' }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href="/kurse"
                className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-xl text-white transition-all hover:-translate-y-0.5"
                style={{ background: '#1d4ed8', boxShadow: '0 4px 24px rgba(29,78,216,0.45)' }}
              >
                {role.cta} →
              </Link>
            </div>

            {/* Right: Big Stat */}
            <div
              className="hidden lg:flex flex-col items-center justify-center text-center rounded-2xl py-10 px-6"
              style={{ background: 'rgba(29,78,216,0.12)', border: '1px solid rgba(29,78,216,0.25)' }}
            >
              <div
                className="font-black text-white leading-none mb-3"
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}
              >
                {role.stat}
              </div>
              <p
                className="font-semibold whitespace-pre-line leading-snug"
                style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}
              >
                {role.statLabel}
              </p>
            </div>

          </div>
        </div>

        {/* ── Dot Indicators ── */}
        <div className="flex justify-center gap-2 mt-6">
          {ROLES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Rolle ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                height: 4,
                width: active === i ? 28 : 8,
                background: active === i ? '#ffffff' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
