import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digitales Onboarding | SafeMinds',
  description: 'Individuelle Onboarding-Videos für Ihre Abläufe, Maschinen und Prozesse — mehrsprachig, revisionssicher, direkt im SafeMinds-Portal.',
}

const problems = [
  {
    icon: '⏱️',
    title: 'Einweisung kostet täglich Zeit',
    desc: 'Erfahrene Mitarbeitende erklären immer wieder dasselbe. Besonders bei saisonalem oder wechselndem Personal läuft das jede Woche neu ab.',
  },
  {
    icon: '🌍',
    title: 'Sprachbarrieren erhöhen das Risiko',
    desc: 'Mündliche Einweisungen kommen nicht immer vollständig an — besonders wenn Deutsch nicht die Muttersprache ist.',
  },
  {
    icon: '📋',
    title: 'Kein Nachweis, keine Dokumentation',
    desc: 'Wer hat wann was gelernt? Bei einer Begehung oder einem Unfall fehlt der rechtssichere Nachweis der durchgeführten Einweisung.',
  },
  {
    icon: '🔄',
    title: 'Immer wieder von vorne',
    desc: 'Neue Saison, neue Leiharbeitende — und wieder stehen Führungskräfte an der Maschine und erklären die Grundlagen.',
  },
]

const industries = [
  {
    name: 'Produktion & Lebensmittel',
    example: 'Einweisung an Maschinen und Anlagen — in der Muttersprache der Mitarbeitenden.',
    icon: '🏭',
  },
  {
    name: 'Büro & Verwaltung',
    example: 'Abläufe, Systeme, Zuständigkeiten — als Video statt zweites Onboarding-Gespräch.',
    icon: '🏢',
  },
  {
    name: 'Bau & Handwerk',
    example: 'Sicherheitsregeln, Notfallverhalten, Maschinenbedienung — direkt auf dem Smartphone.',
    icon: '🏗️',
  },
  {
    name: 'Logistik & Lager',
    example: 'Staplerbedienung, Lagerordnung, Verladevorschriften — mehrsprachig und skalierbar.',
    icon: '📦',
  },
  {
    name: 'Pflege & Gesundheit',
    example: 'Hygieneprotokolle, Patientenumgang, Notfallabläufe — für internationale Pflegekräfte.',
    icon: '🏥',
  },
  {
    name: 'Gastronomie & Hotel',
    example: 'Küchenabläufe, Serviceprozesse, Hygienestandards — saisonal und wiederverwendbar.',
    icon: '🍽️',
  },
]

const steps = [
  {
    number: '01',
    title: 'Briefing & Analyse',
    desc: 'Im Gespräch klären wir Ihre Abläufe, Zielgruppen und Sprachen. Sie schicken uns Fotos, Videos oder Beschreibungen — oder wir kommen zu Ihnen.',
    duration: 'ca. 60 Minuten',
  },
  {
    number: '02',
    title: 'Produktion',
    desc: 'Wir produzieren Ihr Onboarding-Video — als Vor-Ort-Aufnahme oder als professionelle Animation auf Basis Ihrer Unterlagen.',
    duration: 'je nach Umfang',
  },
  {
    number: '03',
    title: 'Übersetzung',
    desc: 'Ihr Video wird in die gewünschten Sprachen übertragen — mit verständlichen, geprüften Übersetzungen für Ihre Zielgruppe.',
    duration: 'je nach Sprachanzahl',
  },
  {
    number: '04',
    title: 'Integration & Nachweis',
    desc: 'Das Video erscheint im SafeMinds-Portal. Neue Mitarbeitende sehen es beim ersten Login — mit revisionssicherem Abschlussnachweis.',
    duration: 'nach Abnahme',
  },
]

const packages = [
  {
    name: 'Starter',
    subtitle: 'Ein Bereich oder eine Maschine',
    price: '1.490',
    unit: 'einmalig',
    features: [
      '1 individuelles Onboarding-Video (bis 5 Min.)',
      'Bis zu 2 Sprachen',
      'Vor-Ort-Dreh oder Animation',
      'Integration im SafeMinds-Portal',
      'Revisionssicherer Abschlussnachweis',
    ],
    cta: 'Anfragen',
    highlight: false,
  },
  {
    name: 'Professional',
    subtitle: 'Bis zu 3 Bereiche oder Prozesse',
    price: '2.990',
    unit: 'einmalig',
    features: [
      'Bis zu 3 individuelle Onboarding-Videos',
      'Bis zu 4 Sprachen',
      'Vor-Ort-Dreh inklusive',
      'Integration im SafeMinds-Portal',
      'Dedizierter Ansprechpartner',
      'Aktualisierungsoption im Folgejahr',
    ],
    cta: 'Anfragen',
    highlight: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'Für größere Betriebe und Standorte',
    price: 'Auf Anfrage',
    unit: '',
    features: [
      'Mehrere Onboarding-Videos nach Bedarf',
      'Alle gewünschten Sprachen',
      'Jährliche Aktualisierung besprechbar',
      'Zentrale Verwaltung im Portal',
      'Rahmenvertrag möglich',
    ],
    cta: 'Erstgespräch anfragen',
    highlight: false,
  },
]

export default function OnboardingPage() {
  return (
    <main style={{ background: '#f8fafc' }}>

      {/* ── HERO ── */}
      <section className="bg-white border-b border-[#e8edf2] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eff6ff] border border-[#bfdbfe] px-4 py-1.5 text-sm font-semibold text-[#1d4ed8] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
              Individuelles Onboarding
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
              Neue Mitarbeitende einweisen —<br />
              <span className="text-[#1d4ed8]">ohne jedes Mal dabei zu sein.</span>
            </h1>
            <p className="text-xl text-[#64748b] mb-10 leading-relaxed max-w-2xl">
              Wir produzieren individuelle Onboarding-Videos für Ihre Abläufe, Maschinen und Prozesse —
              mehrsprachig, revisionssicher und direkt in Ihrem SafeMinds-Portal verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-[10px] transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.3)' }}
              >
                Kostenloses Erstgespräch →
              </Link>
              <a
                href="#prozess"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] font-semibold px-8 py-4 rounded-[10px] border border-[#e2e8f0] transition-all hover:border-[#1d4ed8]"
              >
                So funktioniert es
              </a>
            </div>
            <p className="text-sm text-[#94a3b8] mt-4">
              Kein Aufwand für Sie — wir übernehmen Konzept, Produktion und Integration.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Das Problem</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              Das kennen Sie wahrscheinlich
            </h2>
            <p className="text-[#64748b] max-w-lg mx-auto">
              Besonders Betriebe mit wechselnden oder saisonalen Mitarbeitenden verlieren täglich Zeit beim Einweisen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map(p => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-[#e8edf2]">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 flex-shrink-0"
                  style={{ background: '#eef2f7' }}
                >
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{p.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-white py-24 px-4 border-y border-[#e8edf2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Branchen</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              Für jeden Betrieb anpassbar
            </h2>
            <p className="text-[#64748b] max-w-lg mx-auto">
              Jeder Betrieb hat eigene Abläufe. Genau deshalb produzieren wir individuelle Videos — kein generisches Kursmaterial.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(i => (
              <div key={i.name} className="rounded-2xl border border-[#e8edf2] p-6 flex flex-col">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4 flex-shrink-0"
                  style={{ background: '#eef2f7' }}
                >
                  {i.icon}
                </div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{i.name}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{i.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="prozess"
        className="py-24 px-4"
        style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Unser Prozess
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Von der Idee zum fertigen Onboarding-Video
            </h2>
            <p className="max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Wir kommen zu Ihnen — oder Sie schicken uns Ihr Material. Beides funktioniert.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative">
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px -translate-x-4 z-0" style={{ background: 'rgba(255,255,255,0.2)' }} />
                )}
                <div
                  className="relative z-10 rounded-2xl p-6 flex flex-col h-full"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  <div className="text-3xl font-extrabold text-white mb-4 opacity-60">{step.number}</div>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>{step.desc}</p>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mt-4 self-start"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm mt-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Kein Vor-Ort-Termin möglich? Mit Fotos, Kurzvideos und einer Beschreibung Ihrer Abläufe erstellen wir professionelle Animationen.
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-white py-24 px-4 border-b border-[#e8edf2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Pakete</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              Einmalige Investition.<br />Dauerhafter Nutzen.
            </h2>
            <p className="text-[#64748b] max-w-md mx-auto">
              Einmalproduktion — danach unbegrenzt nutzbar für jeden neuen Mitarbeitenden.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {packages.map(pkg => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-7 flex flex-col gap-5 ${
                  pkg.highlight
                    ? 'text-white shadow-xl'
                    : 'bg-white border border-[#e8edf2]'
                }`}
                style={pkg.highlight ? { background: '#1d4ed8' } : {}}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0f172a] text-white text-xs font-bold px-4 py-1 whitespace-nowrap">
                    Empfohlen
                  </span>
                )}
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${pkg.highlight ? 'opacity-70' : 'text-[#94a3b8]'}`}>
                    {pkg.name}
                  </p>
                  <p className={`text-sm font-semibold mt-0.5 ${pkg.highlight ? 'text-white' : 'text-[#64748b]'}`}>
                    {pkg.subtitle}
                  </p>
                </div>
                <div>
                  {pkg.unit ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-[#0f172a]'}`}>
                          € {pkg.price}
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 ${pkg.highlight ? 'opacity-70' : 'text-[#94a3b8]'}`}>
                        {pkg.unit} · zzgl. MwSt.
                      </p>
                    </>
                  ) : (
                    <span className={`text-2xl font-bold ${pkg.highlight ? 'text-white' : 'text-[#0f172a]'}`}>
                      {pkg.price}
                    </span>
                  )}
                </div>
                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-blue-200' : 'text-[#3b82f6]'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className={pkg.highlight ? 'text-blue-50' : 'text-[#334155]'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontakt"
                  className={`w-full text-center rounded-xl py-3 font-semibold text-sm transition-all hover:-translate-y-0.5 ${
                    pkg.highlight
                      ? 'bg-white hover:bg-blue-50'
                      : 'text-white hover:opacity-90'
                  }`}
                  style={pkg.highlight ? { color: '#1d4ed8' } : { background: '#1d4ed8' }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl p-6 max-w-2xl mx-auto text-center border border-[#e8edf2] bg-[#f8fafc]">
            <p className="font-semibold text-[#0f172a] mb-2">Aktualisierungsoption</p>
            <p className="text-sm text-[#64748b]">
              Neue Maschinen, neue Abläufe? Im Folgejahr aktualisieren wir Ihre Videos auf Wunsch —
              ohne vollständige Neuproduktion. Konditionen im Erstgespräch.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Was enthalten ist</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
              Mehr als ein Video — ein fertiges Onboarding-System
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: '🎬', title: 'Individuell produziertes Video', desc: 'Kein generisches Standardmaterial — Ihr Video zeigt Ihre Maschinen, Ihre Abläufe, Ihre Sprache.' },
              { icon: '🌍', title: 'Mehrsprachig', desc: 'Übersetzungen in die Sprachen Ihrer Belegschaft — damit Einweisungen wirklich ankommen.' },
              { icon: '📱', title: 'Im SafeMinds-Portal', desc: 'Neue Mitarbeitende sehen das Video direkt beim ersten Login — auf jedem Gerät, ohne App.' },
              { icon: '✅', title: 'Revisionssicherer Nachweis', desc: 'Wer hat wann was gesehen und bestätigt? Alles dokumentiert — bei Begehungen sofort abrufbar.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#e8edf2] flex gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: '#eef2f7' }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 px-4"
        style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Jetzt anfragen
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Bereit für Onboarding, das wirklich funktioniert?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Im kostenlosen Erstgespräch analysieren wir Ihren Bedarf und machen ein konkretes Angebot.
            Kein Aufwand für Sie bis zur Entscheidung.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-white font-bold text-base px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ color: '#1d4ed8' }}
          >
            Jetzt Erstgespräch anfragen →
          </Link>
          <p className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Antwort innerhalb von 1–2 Werktagen
          </p>
        </div>
      </section>

    </main>
  )
}
