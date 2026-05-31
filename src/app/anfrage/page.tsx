'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useCourseSelection } from '@/lib/courseSelectionStore'

const TEAM_AVATARS = [
  { name: 'Cem Yücetas',    src: '/images/team/Cem Yücetas.png' },
  { name: 'Adam Drobiec',   src: '/images/team/Adam Drobiec.png' },
  { name: 'Stefan Bechler', src: '/images/team/Stefan Bechler.png' },
  { name: 'Eric Olders',    src: '/images/team/Eric Olders.png' },
]

const POSITIONEN = [
  'Geschäftsführer:in',
  'Sicherheitsbeauftragte:r',
  'HR / Personal',
  'Sicherheitsfachkraft (extern)',
  'Sonstiges',
]
const MITARBEITERZAHL = ['1–10', '11–50', '51–200', '200+']
const BRANCHEN = [
  'Bau & Handwerk',
  'Pflege & Gesundheit',
  'Gastronomie & Hotellerie',
  'Büro & Verwaltung',
  'Industrie & Produktion',
  'Sonstiges',
]
const SYSTEME = [
  'Wir haben noch nichts',
  'Papier / Word / PDF',
  'Andere Software',
  'Ist mir nicht bekannt',
]

interface FormData {
  vorname: string
  nachname: string
  email: string
  telefon: string
  unternehmen: string
  position: string
  position_sonstiges: string
  mitarbeiterzahl: string
  branche: string
  aktuelles_system: string
  begruendung: string
  datenschutz: boolean
}

type Errors = Partial<Record<keyof FormData, string>>

const INITIAL: FormData = {
  vorname: '',
  nachname: '',
  email: '',
  telefon: '',
  unternehmen: '',
  position: '',
  position_sonstiges: '',
  mitarbeiterzahl: '',
  branche: '',
  aktuelles_system: '',
  begruendung: '',
  datenschutz: false,
}

function validateStep(data: FormData, step: number): Errors {
  const e: Errors = {}
  if (step === 1) {
    if (!data.vorname.trim()) e.vorname = 'Vorname erforderlich'
    if (!data.nachname.trim()) e.nachname = 'Nachname erforderlich'
    if (!data.email.trim()) e.email = 'E-Mail erforderlich'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Ungültige E-Mail-Adresse'
    if (!data.telefon.trim()) e.telefon = 'Telefonnummer erforderlich'
    if (!data.unternehmen.trim()) e.unternehmen = 'Unternehmen erforderlich'
    if (!data.position) e.position = 'Bitte Position wählen'
  }
  if (step === 2) {
    if (!data.mitarbeiterzahl) e.mitarbeiterzahl = 'Bitte wählen'
    if (!data.branche) e.branche = 'Bitte wählen'
    if (!data.aktuelles_system) e.aktuelles_system = 'Bitte wählen'
  }
  if (step === 3) {
    if (!data.datenschutz) e.datenschutz = 'Bitte der Datenschutzerklärung zustimmen'
  }
  return e
}

export default function AnfragePage() {
  const { selectedCourses, count, removeCourse } = useCourseSelection()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<Errors>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [submitError, setSubmitError] = useState('')

  useEffect(() => { setMounted(true) }, [])

  // After hydration: redirect to /kurse if nothing selected
  useEffect(() => {
    if (mounted && count === 0) router.replace('/kurse')
  }, [mounted, count, router])

  if (!mounted || count === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: '#f8fafc' }}>
        <p className="text-[#64748b] text-sm">Weiterleitung zur Kursauswahl…</p>
      </main>
    )
  }

  function update<K extends keyof FormData>(field: K, value: FormData[K]) {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n })
  }

  function goNext() {
    const errs = validateStep(form, step)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStep((s) => s + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goBack() {
    setErrors({})
    setStep((s) => s - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSubmit() {
    const errs = validateStep(form, 3)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setSubmitStatus('loading')
    setSubmitError('')

    try {
      const res = await fetch('/api/test-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          angefragte_kurse: selectedCourses.map((c) => c.title),
          form_source: 'test-request',
          page_url: window.location.href,
        }),
      })
      if (!res.ok) throw new Error()
      sessionStorage.setItem('sm_submitted', JSON.stringify({ vorname: form.vorname, telefon: form.telefon, email: form.email }))
      router.push('/anfrage/erfolg')
    } catch {
      setSubmitStatus('error')
      setSubmitError('Es ist ein Fehler aufgetreten. Bitte versuche es erneut oder schreib uns direkt an kontakt@safeminds.eu.')
    }
  }

  const inputCls = (f: keyof FormData) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-2 transition-all ${
      errors[f]
        ? 'border-red-400 focus:ring-red-200'
        : 'border-[#e2e8f0] focus:border-[#1d4ed8] focus:ring-[#dbeafe]'
    }`

  const selectCls = (f: keyof FormData) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-[#0f172a] focus:outline-none focus:ring-2 transition-all ${
      errors[f]
        ? 'border-red-400 focus:ring-red-200'
        : 'border-[#e2e8f0] focus:border-[#1d4ed8] focus:ring-[#dbeafe]'
    }`

  const btnPrimary = 'py-3 px-6 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2'
  const btnSecondary = 'py-3 px-6 rounded-xl font-semibold border border-[#e2e8f0] bg-white text-[#0f172a] hover:border-[#1d4ed8] transition-all focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2'

  return (
    <main className="min-h-screen py-12 px-4 pb-24" style={{ background: '#f8fafc' }}>
      <div className="max-w-4xl mx-auto">

        {/* Back + Stepper — zentriert wie vorher */}
        <div className="max-w-xl mx-auto">
          <Link
            href="/kurse"
            className="inline-flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#0f172a] transition-colors mb-8 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] rounded"
          >
            ← Zurück zur Kursauswahl
          </Link>

          {/* Stepper */}
          <div className="flex items-center mb-10" role="list" aria-label="Formular-Fortschritt">
            {([1, 2, 3] as const).map((s, i) => (
              <div key={s} className="flex items-center" role="listitem">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    s < step ? 'bg-[#10b981] text-white'
                    : s === step ? 'bg-[#1d4ed8] text-white'
                    : 'bg-white border-2 border-[#e2e8f0] text-[#94a3b8]'
                  }`}
                  aria-current={s === step ? 'step' : undefined}
                >
                  {s < step ? '✓' : s}
                </div>
                {i < 2 && (
                  <div className={`h-0.5 w-10 mx-1 ${s < step ? 'bg-[#10b981]' : 'bg-[#e2e8f0]'}`} />
                )}
              </div>
            ))}
            <span className="ml-3 text-sm text-[#64748b]">Schritt {step} von 3</span>
          </div>
        </div>

        {/* ── Step 1: Über dich — Form links, Hint-Karte rechts ── */}
        {step === 1 && (
          <div className="flex gap-8 items-start">

            {/* Formular */}
            <div className="flex-1 min-w-0 max-w-xl">
              <h1 className="text-2xl font-bold text-[#0f172a] mb-2">Über dich</h1>
              <p className="text-[#64748b] mb-8 text-sm">Damit wir deinen Test-Zugang einrichten können.</p>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="vorname">Vorname *</label>
                    <input id="vorname" type="text" value={form.vorname} onChange={(e) => update('vorname', e.target.value)}
                      placeholder="Max" className={inputCls('vorname')} aria-invalid={!!errors.vorname} aria-describedby={errors.vorname ? 'err-vorname' : undefined} />
                    {errors.vorname && <p id="err-vorname" className="text-xs text-red-500 mt-1">{errors.vorname}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="nachname">Nachname *</label>
                    <input id="nachname" type="text" value={form.nachname} onChange={(e) => update('nachname', e.target.value)}
                      placeholder="Mustermann" className={inputCls('nachname')} aria-invalid={!!errors.nachname} aria-describedby={errors.nachname ? 'err-nachname' : undefined} />
                    {errors.nachname && <p id="err-nachname" className="text-xs text-red-500 mt-1">{errors.nachname}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="email">E-Mail *</label>
                  <input id="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
                    placeholder="max@firma.de" className={inputCls('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
                  {errors.email && <p id="err-email" className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="telefon">Telefon *</label>
                  <input id="telefon" type="tel" value={form.telefon} onChange={(e) => update('telefon', e.target.value)}
                    placeholder="+49 170 1234567" className={inputCls('telefon')} aria-invalid={!!errors.telefon} aria-describedby={errors.telefon ? 'err-telefon' : undefined} />
                  {errors.telefon && <p id="err-telefon" className="text-xs text-red-500 mt-1">{errors.telefon}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="unternehmen">Unternehmen *</label>
                  <input id="unternehmen" type="text" value={form.unternehmen} onChange={(e) => update('unternehmen', e.target.value)}
                    placeholder="Muster GmbH" className={inputCls('unternehmen')} aria-invalid={!!errors.unternehmen} aria-describedby={errors.unternehmen ? 'err-unternehmen' : undefined} />
                  {errors.unternehmen && <p id="err-unternehmen" className="text-xs text-red-500 mt-1">{errors.unternehmen}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="position">Position / Rolle *</label>
                  <select id="position" value={form.position} onChange={(e) => update('position', e.target.value)}
                    className={selectCls('position')} aria-invalid={!!errors.position}>
                    <option value="">Bitte wählen</option>
                    {POSITIONEN.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.position && <p className="text-xs text-red-500 mt-1">{errors.position}</p>}
                </div>

                {form.position === 'Sonstiges' && (
                  <div>
                    <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="position_sonstiges">Welche Position?</label>
                    <input id="position_sonstiges" type="text" value={form.position_sonstiges}
                      onChange={(e) => update('position_sonstiges', e.target.value)}
                      placeholder="z.B. Projektleiter" className={inputCls('position_sonstiges')} />
                  </div>
                )}

                <button onClick={goNext} className={`w-full ${btnPrimary}`}
                  style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.25)' }}>
                  Weiter →
                </button>
              </div>
            </div>

            {/* Hint-Karte — neben dem Formular, nur auf Desktop */}
            <div
              className="hidden lg:flex flex-col items-center text-center sticky top-24 w-52 shrink-0 rounded-2xl p-5"
              style={{ border: '2px solid #1d4ed8', background: '#ffffff', boxShadow: '0 4px 16px rgba(29,78,216,0.08)' }}
            >
              {/* Avatar-Stack */}
              <div className="flex justify-center mb-4">
                {TEAM_AVATARS.map((m, i) => (
                  <div
                    key={m.name}
                    className="relative w-11 h-11 rounded-full overflow-hidden"
                    style={{ marginLeft: i === 0 ? 0 : -10, zIndex: TEAM_AVATARS.length - i, border: '2px solid #1d4ed8' }}
                    title={m.name}
                  >
                    <Image src={m.src} alt={m.name} fill className="object-cover" sizes="44px" />
                  </div>
                ))}
              </div>

              <p className="font-bold text-[#0f172a] mb-2" style={{ fontSize: '0.95rem', lineHeight: 1.3 }}>
                Wir rufen dich persönlich an
              </p>
              <p className="text-[#64748b]" style={{ fontSize: '0.83rem', lineHeight: 1.5 }}>
                Jemand vom Team meldet sich noch heute — kein Bot, kein automatischer Account.
              </p>
              <p className="mt-3 text-[#1d4ed8] font-semibold" style={{ fontSize: '0.83rem' }}>
                ☎ Bitte korrekte Nummer eingeben.
              </p>
            </div>

          </div>
        )}

        {/* ── Step 2: Über euren Bedarf ── */}
        {step === 2 && (
          <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold text-[#0f172a] mb-2">Über euren Bedarf</h1>
            <p className="text-[#64748b] mb-8 text-sm">Hilft uns, den Zugang optimal vorzubereiten.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="mitarbeiterzahl">Anzahl Mitarbeitende *</label>
                <select id="mitarbeiterzahl" value={form.mitarbeiterzahl} onChange={(e) => update('mitarbeiterzahl', e.target.value)}
                  className={selectCls('mitarbeiterzahl')}>
                  <option value="">Bitte wählen</option>
                  {MITARBEITERZAHL.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
                {errors.mitarbeiterzahl && <p className="text-xs text-red-500 mt-1">{errors.mitarbeiterzahl}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="branche">Branche *</label>
                <select id="branche" value={form.branche} onChange={(e) => update('branche', e.target.value)}
                  className={selectCls('branche')}>
                  <option value="">Bitte wählen</option>
                  {BRANCHEN.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                {errors.branche && <p className="text-xs text-red-500 mt-1">{errors.branche}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="aktuelles_system">Aktuelles System für Unterweisungen *</label>
                <select id="aktuelles_system" value={form.aktuelles_system} onChange={(e) => update('aktuelles_system', e.target.value)}
                  className={selectCls('aktuelles_system')}>
                  <option value="">Bitte wählen</option>
                  {SYSTEME.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.aktuelles_system && <p className="text-xs text-red-500 mt-1">{errors.aktuelles_system}</p>}
              </div>

              <div className="flex gap-3 pt-2">
                <button onClick={goBack} className={`flex-1 ${btnSecondary}`}>← Zurück</button>
                <button onClick={goNext} className={`flex-[2] ${btnPrimary}`}
                  style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.25)' }}>
                  Weiter →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 3: Übersicht & Absenden ── */}
        {step === 3 && (
          <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold text-[#0f172a] mb-2">Übersicht & Absenden</h1>
            <p className="text-[#64748b] mb-8 text-sm">Prüfe deine Kursauswahl und sende die Anfrage ab.</p>

            <div className="space-y-6">
              {/* Selected courses */}
              <div className="bg-white border border-[#e2e8f0] rounded-xl p-5">
                <p className="text-xs font-bold text-[#64748b] uppercase tracking-widest mb-3">
                  Ausgewählte Kurse ({count})
                </p>
                {count > 0 ? (
                  <div className="space-y-2.5">
                    {selectedCourses.map((c) => (
                      <div key={c.slug} className="flex items-center gap-2">
                        <span className="flex-1 text-sm text-[#0f172a]">{c.title}</span>
                        {c.status === 'produktion' && (
                          <span className="text-xs bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded-full border border-amber-200">
                            Vorbestellung
                          </span>
                        )}
                        <button onClick={() => removeCourse(c.slug)} aria-label={`${c.title} entfernen`}
                          className="w-5 h-5 flex items-center justify-center rounded text-[#94a3b8] hover:text-[#ef4444] hover:bg-red-50 transition-colors text-base leading-none">
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-3">
                    <p className="text-sm text-[#64748b] mb-3">Keine Kurse ausgewählt.</p>
                    <Link href="/kurse" className="text-sm font-semibold text-[#1d4ed8] hover:underline">
                      Zurück zur Kursauswahl →
                    </Link>
                  </div>
                )}
              </div>

              {/* Begründung */}
              <div>
                <label className="block text-sm font-medium text-[#0f172a] mb-2" htmlFor="begruendung">
                  Warum möchtest du diese Kurse testen?{' '}
                  <span className="font-normal text-[#94a3b8]">(optional)</span>
                </label>
                <textarea id="begruendung" value={form.begruendung} onChange={(e) => update('begruendung', e.target.value)}
                  rows={4} placeholder="z.B. wir bauen gerade ein Sicherheitskonzept neu auf"
                  className="w-full bg-white border border-[#e2e8f0] rounded-lg px-4 py-3 text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:border-[#1d4ed8] focus:ring-[#dbeafe] transition-all resize-none" />
              </div>

              {/* Datenschutz */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.datenschutz} onChange={(e) => update('datenschutz', e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-[#e2e8f0] text-[#1d4ed8] focus:ring-[#1d4ed8] shrink-0"
                    aria-invalid={!!errors.datenschutz} aria-describedby={errors.datenschutz ? 'err-datenschutz' : undefined} />
                  <span className="text-sm text-[#334155] leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu (
                    <Link href="/datenschutz" className="text-[#1d4ed8] hover:underline" target="_blank" rel="noopener">
                      Datenschutzerklärung
                    </Link>
                    ). *
                  </span>
                </label>
                {errors.datenschutz && (
                  <p id="err-datenschutz" className="text-xs text-red-500 mt-1 ml-7">{errors.datenschutz}</p>
                )}
              </div>

              {submitError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {submitError}
                </p>
              )}

              <div className="flex gap-3">
                <button onClick={goBack} className={`flex-1 ${btnSecondary}`}>← Zurück</button>
                <button onClick={handleSubmit} disabled={submitStatus === 'loading' || count === 0}
                  className={`flex-[2] ${btnPrimary}`}
                  style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.25)' }}>
                  {submitStatus === 'loading' ? 'Wird gesendet…' : 'Anfrage senden →'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
