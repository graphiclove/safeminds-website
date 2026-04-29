import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    employees: 'bis 10 Mitarbeitende',
    priceYear: '599',
    priceMonthly: '49,90',
    perMaHint: '≈ € 4,99 / MA',
    desc: 'Für Kleinbetriebe und Handwerk — alle Kurse, sofortiger Zugang.',
    features: [
      'Bis zu 10 Nutzer',
      'Alle Kurse inklusive',
      'Mehrsprachige Unterweisungen',
      'Zertifikate + Dokumentation',
      'E-Mail-Support',
    ],
    cta: 'Kostenlos testen',
    ctaHref: '/testen',
    ctaStyle: 'primary',
    highlight: false,
  },
  {
    name: 'Basic',
    employees: 'bis 25 Mitarbeitende',
    priceYear: '1.347',
    priceMonthly: '112',
    perMaHint: '≈ € 4,49 / MA',
    desc: 'Für wachsende Teams — transparent, dokumentiert, mehrsprachig.',
    features: [
      'Bis zu 25 Nutzer',
      'Alle Kurse inklusive',
      'Mehrsprachige Unterweisungen',
      'Admin-Dashboard + Reporting',
      'Automatische Erinnerungen',
    ],
    cta: 'Kostenlos testen',
    ctaHref: '/testen',
    ctaStyle: 'primary',
    highlight: false,
  },
  {
    name: 'Standard',
    employees: 'bis 50 Mitarbeitende',
    priceYear: '2.394',
    priceMonthly: '199',
    perMaHint: '≈ € 3,99 / MA',
    desc: 'Die goldene Mitte — volle Dokumentation, Mehrsprachigkeit, kein Dolmetscher mehr.',
    features: [
      'Bis zu 50 Nutzer',
      'Alle Kurse inklusive',
      'Mehrsprachige Unterweisungen',
      'Admin-Dashboard + Reporting',
      'Automatische Erinnerungen',
      'Prioritäts-Support',
    ],
    cta: 'Kostenlos testen',
    ctaHref: '/testen',
    ctaStyle: 'highlight',
    highlight: true,
  },
  {
    name: 'Business',
    employees: 'bis 100 Mitarbeitende',
    priceYear: '4.188',
    priceMonthly: '349',
    perMaHint: '≈ € 3,49 / MA',
    desc: 'Für mittelständische Betriebe — inkl. individualisierte Kursinhalte.',
    features: [
      'Bis zu 100 Nutzer',
      'Alle Kurse inklusive',
      'Mehrsprachige Unterweisungen',
      'Individualisierte Kursinhalte',
      'Dedizierter Ansprechpartner',
    ],
    cta: 'Kostenlos testen',
    ctaHref: '/testen',
    ctaStyle: 'primary',
    highlight: false,
  },
  {
    name: 'Enterprise',
    employees: 'ab 101 Mitarbeitende',
    priceYear: null,
    priceMonthly: null,
    perMaHint: 'ab € 2,99 / MA',
    desc: 'Für Konzerne und Unternehmensgruppen mit zentraler Verwaltung und SSO.',
    features: [
      'Bis zu 250+ Nutzer',
      'SSO & API-Integration',
      'Individuelle Kursproduktion',
      'SLA-Garantie',
      'Dedizierter Account Manager',
    ],
    cta: 'Demo anfragen',
    ctaHref: '/kontakt',
    ctaStyle: 'outline',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Preise</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Einfache, transparente Preise
          </h2>
          <p className="mt-3 text-gray-500 max-w-md mx-auto">
            Jährliche Abrechnung · 14 Tage kostenlos testen · Keine Kreditkarte nötig
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch mt-12">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-5 flex flex-col gap-4 ${
                plan.highlight
                  ? 'bg-blue-600 text-white shadow-xl ring-2 ring-blue-400'
                  : 'bg-white border border-gray-100 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 text-white text-xs font-bold px-4 py-1 whitespace-nowrap">
                  Beliebteste Wahl
                </span>
              )}

              <div>
                <p className={`text-xs font-bold uppercase tracking-wider ${plan.highlight ? 'text-blue-200' : 'text-gray-400'}`}>
                  {plan.name}
                </p>
                <p className={`text-sm font-semibold mt-0.5 ${plan.highlight ? 'text-blue-100' : 'text-gray-700'}`}>
                  {plan.employees}
                </p>
              </div>

              <div>
                {plan.priceYear ? (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                        € {plan.priceYear}
                      </span>
                      <span className={`text-sm font-semibold ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>/Jahr</span>
                    </div>
                    <p className={`text-xs mt-0.5 ${plan.highlight ? 'text-blue-300' : 'text-gray-400'}`}>
                      € {plan.priceMonthly} / Monat · {plan.perMaHint}
                    </p>
                  </>
                ) : (
                  <>
                    <span className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                      Auf Anfrage
                    </span>
                    <p className={`text-xs mt-0.5 ${plan.highlight ? 'text-blue-300' : 'text-gray-400'}`}>
                      {plan.perMaHint}
                    </p>
                  </>
                )}
                <p className={`text-xs mt-2 leading-relaxed ${plan.highlight ? 'text-blue-200' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-green-300' : 'text-green-500'}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlight ? 'text-blue-100' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`w-full text-center rounded-xl py-3 font-semibold text-sm transition-colors mt-2 ${
                  plan.ctaStyle === 'highlight'
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : plan.ctaStyle === 'primary'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Alle Preise zzgl. MwSt. · Jährliche Abrechnung · Bei Fragen:{' '}
          <a href="mailto:kontakt@safeminds.eu" className="underline hover:text-gray-600">kontakt@safeminds.eu</a>
        </p>
      </div>
    </section>
  )
}
