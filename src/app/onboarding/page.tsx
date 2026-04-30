import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digitales Onboarding | SafeMinds',
  description: 'Maßgeschneiderte Onboarding-Videos für neue Mitarbeiter — mehrsprachig, maschinenspezifisch, in 7–14 Tagen geliefert.',
}

const problems = [
  {
    icon: '⏱️',
    title: 'Jede Einweisung kostet Stunden',
    desc: 'Erfahrene Mitarbeiter erklären immer wieder dasselbe. Bei Kurzarbeitern, die kurzfristig kommen und gehen, läuft das täglich.',
  },
  {
    icon: '🌍',
    title: 'Sprachbarrieren erhöhen das Risiko',
    desc: 'Polnische, türkische oder rumänische Mitarbeiter verstehen mündliche Einweisungen oft nicht vollständig — und trauen sich nicht nachzufragen.',
  },
  {
    icon: '📋',
    title: 'Kein Nachweis, keine Dokumentation',
    desc: 'Wer hat wann was gelernt? Bei einer Begehung oder einem Unfall fehlen oft die Nachweise für die durchgeführte Einweisung.',
  },
  {
    icon: '🔄',
    title: 'Immer wieder von vorne',
    desc: 'Neue Saison, neue Leiharbeiter — und wieder stehen Führungskräfte an der Maschine und erklären die Grundlagen.',
  },
]

const industries = [
  {
    name: 'Fleischerei & Lebensmittel',
    example: 'Einweisung an Aufschnittmaschinen, Vakuumierern und Kühlraumsystemen — auf Polnisch und Deutsch.',
    icon: '🏭',
  },
  {
    name: 'Büro & Verwaltung',
    example: 'Abläufe, Systeme, Zuständigkeiten — als Video statt zweitem Onboarding-Gespräch.',
    icon: '🏢',
  },
  {
    name: 'Bau & Handwerk',
    example: 'Maschineneinweisung, Sicherheitsregeln, Notfallverhalten — direkt auf dem Gerät des Mitarbeiters.',
    icon: '🏗️',
  },
  {
    name: 'Logistik & Lager',
    example: 'Staplerbedienung, Lagerordnung, Verladevorschriften — in der Muttersprache der Mitarbeiter.',
    icon: '📦',
  },
  {
    name: 'Pflege & Gesundheit',
    example: 'Hygieneprotokolle, Patientenumgang, Notfallabläufe — für internationale Pflegekräfte.',
    icon: '🏥',
  },
  {
    name: 'Gastronomie & Hotel',
    example: 'Einarbeitung in Küchenabläufe, Serviceprozesse und Hygienestandards — saisonal und skalierbar.',
    icon: '🍽️',
  },
]

const steps = [
  {
    number: '01',
    title: 'Briefing & Begehung',
    desc: 'Wir kommen zu Ihnen vor Ort oder Sie schicken uns Fotos, Videos und Beschreibungen Ihrer Abläufe. Bundesweit tätig.',
    duration: 'Termin in 3 Tagen',
  },
  {
    number: '02',
    title: 'Produktion',
    desc: 'Wir erstellen Ihr Onboarding-Video — als Vor-Ort-Aufnahme oder als professionelle Animation auf Basis Ihrer Unterlagen.',
    duration: '3–5 Werktage',
  },
  {
    number: '03',
    title: 'Übersetzung & Localization',
    desc: 'Ihr Video wird in alle gewünschten Sprachen übersetzt — mit professionellen Sprechern, nicht mit automatischen Tools.',
    duration: '1–2 Werktage',
  },
  {
    number: '04',
    title: 'Integration & Freischaltung',
    desc: 'Das Video erscheint direkt in Ihrem SafeMinds-Portal. Neue Mitarbeiter sehen es beim ersten Login — mit Bestätigungsnachweis.',
    duration: '1 Werktag',
  },
]

const packages = [
  {
    name: 'Starter',
    subtitle: 'Ein Bereich oder eine Maschine',
    price: '1.490',
    unit: 'einmalig',
    features: [
      '1 Onboarding-Video (bis 5 Min.)',
      'Bis zu 2 Sprachen',
      'Vor-Ort oder Animation',
      'Integration in SafeMinds-Portal',
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
      'Bis zu 3 Onboarding-Videos',
      'Bis zu 4 Sprachen',
      'Vor-Ort-Dreh inklusive',
      'Integration in SafeMinds-Portal',
      'Aktualisierungs-Abo optional',
      'Dedizierter Ansprechpartner',
    ],
    cta: 'Anfragen',
    highlight: true,
  },
  {
    name: 'Enterprise',
    subtitle: 'Unbegrenzte Bereiche, zentrale Verwaltung',
    price: 'Auf Anfrage',
    unit: '',
    features: [
      'Beliebig viele Onboarding-Videos',
      'Alle Sprachen',
      'Jährliche Aktualisierung inklusive',
      'API-Integration & SSO',
      'SLA-Garantie',
      'Rahmenvertrag möglich',
    ],
    cta: 'Demo anfragen',
    highlight: false,
  },
]

export default function OnboardingPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-white pt-16 pb-20 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 mb-6">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Neu: Digitales Onboarding
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Neue Mitarbeiter einweisen —<br />
                <span className="text-orange-500">ohne jedes Mal dabei zu sein.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Wir produzieren maßgeschneiderte Onboarding-Videos für Ihre Abläufe, Maschinen und Prozesse —
                mehrsprachig, revisionssicher, in 7–14 Werktagen geliefert. Bundesweit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
                >
                  Kostenloses Erstgespräch
                  <span>→</span>
                </Link>
                <a
                  href="#prozess"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-orange-300 hover:text-orange-600 font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  So funktioniert es
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Das kennen Sie wahrscheinlich
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto">
                Besonders Betriebe mit wechselnden oder saisonalen Mitarbeitern verlieren täglich Zeit beim Einweisen.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {problems.map(p => (
                <div key={p.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Branchen</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Für jeden Betrieb anpassbar
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto">
                Wir haben Erfahrung mit sehr unterschiedlichen Abläufen — vom Maschinenraum bis zum Büro.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {industries.map(i => (
                <div key={i.name} className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                  <span className="text-3xl">{i.icon}</span>
                  <h3 className="mt-3 text-base font-bold text-gray-900">{i.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{i.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="prozess" className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-3">Unser Prozess</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Von Auftrag bis Freischaltung<br />in 7–14 Werktagen
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto">
                Wir kommen zu Ihnen — oder Sie schicken uns Ihr Material. Beides funktioniert.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div key={step.number} className="relative">
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gray-700 -translate-x-6 z-0" />
                  )}
                  <div className="relative z-10 bg-gray-800 rounded-2xl p-6 border border-gray-700 h-full">
                    <div className="text-3xl font-extrabold text-orange-500 mb-4">{step.number}</div>
                    <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{step.desc}</p>
                    <span className="inline-block bg-gray-700 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-10">
              Kein Vor-Ort-Termin möglich? Kein Problem — mit Fotos, Kurzvideos und einer Beschreibung Ihrer Abläufe erstellen wir professionelle Animationen.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">Pakete</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Einmalige Investition.<br />Dauerhafter Nutzen.
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Einmalproduktion — danach unbegrenzt nutzbar. Aktualisierung optional jährlich buchbar.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {packages.map(pkg => (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl p-7 flex flex-col gap-5 ${
                    pkg.highlight
                      ? 'bg-orange-500 text-white shadow-xl ring-2 ring-orange-300'
                      : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gray-900 text-white text-xs font-bold px-4 py-1 whitespace-nowrap">
                      Empfohlen
                    </span>
                  )}
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${pkg.highlight ? 'text-orange-100' : 'text-gray-400'}`}>
                      {pkg.name}
                    </p>
                    <p className={`text-sm font-semibold mt-0.5 ${pkg.highlight ? 'text-white' : 'text-gray-600'}`}>
                      {pkg.subtitle}
                    </p>
                  </div>
                  <div>
                    {pkg.unit ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-3xl font-extrabold ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                            € {pkg.price}
                          </span>
                        </div>
                        <p className={`text-xs mt-0.5 ${pkg.highlight ? 'text-orange-100' : 'text-gray-400'}`}>
                          {pkg.unit} · zzgl. MwSt.
                        </p>
                      </>
                    ) : (
                      <span className={`text-2xl font-bold ${pkg.highlight ? 'text-white' : 'text-gray-900'}`}>
                        {pkg.price}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <svg
                          className={`h-4 w-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-white' : 'text-orange-500'}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={pkg.highlight ? 'text-orange-50' : 'text-gray-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className={`w-full text-center rounded-xl py-3 font-semibold text-sm transition-colors ${
                      pkg.highlight
                        ? 'bg-white text-orange-600 hover:bg-orange-50'
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>

            {/* Retainer Hinweis */}
            <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 max-w-2xl mx-auto text-center">
              <p className="font-semibold text-gray-900 mb-2">🔄 Aktualisierungs-Abo</p>
              <p className="text-sm text-gray-600">
                Neue Mitarbeiter, neue Maschinen, neue Abläufe? Mit dem optionalen Jahres-Abo ab <strong>€ 490 / Jahr</strong> aktualisieren
                wir Ihre Videos und übersetzen Änderungen — ohne Neuproduktion.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Bereit für Onboarding, das wirklich funktioniert?
            </h2>
            <p className="text-orange-100 text-lg mb-8">
              Kostenfreies Erstgespräch — wir analysieren Ihren Bedarf und machen ein konkretes Angebot.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-10 py-4 rounded-xl hover:bg-orange-50 transition-colors text-lg"
            >
              Jetzt Erstgespräch anfragen →
            </Link>
            <p className="text-orange-200 text-sm mt-4">Bundesweit · Antwort innerhalb von 24 Stunden</p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
