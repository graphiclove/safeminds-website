import Link from 'next/link'

const roles = [
  {
    role: 'Arbeitgeber & Geschäftsführer',
    icon: '🏢',
    headline: 'Haftung weg. Dokumentation drin.',
    desc: 'Sie sind gesetzlich verpflichtet, Mitarbeiter jährlich zu unterweisen. SafeMinds erledigt das rechtssicher — automatisch, dokumentiert, revisionssicher. Kein Papierkram, kein Organisationsaufwand.',
    benefits: [
      'Bußgelder bis €25.000 vermieden',
      'Nachweise bei Betriebsprüfung sofort verfügbar',
      'Zeitaufwand von Stunden auf Minuten reduziert',
    ],
    cta: 'Jetzt absichern',
    color: 'blue',
  },
  {
    role: 'Sicherheitsbeauftragte (SiBe)',
    icon: '🦺',
    headline: 'Endlich ein System, das Ihnen die Arbeit abnimmt.',
    desc: 'Schluss mit Excel-Listen, Unterschriftenbögen und der manuellen Nachverfolgung wer was wann gemacht hat. SafeMinds dokumentiert automatisch, erinnert selbstständig und liefert auf Knopfdruck alle Nachweise.',
    benefits: [
      'Automatische Erinnerungen an Mitarbeiter',
      'Übersicht über alle offenen Unterweisungen',
      'Rechtssichere PDF-Zertifikate je Mitarbeiter',
    ],
    cta: 'Demo ansehen',
    color: 'green',
  },
  {
    role: 'HR & Personalverantwortliche',
    icon: '👥',
    headline: 'Onboarding und Unterweisung in einem Durchlauf.',
    desc: 'Neue Mitarbeiter erhalten beim ersten Login automatisch ihre Einweisung — mehrsprachig, mit Unternehmensfilm und Pflichtunterweisung in einem. Kein zweites Gespräch, kein Dolmetscher, kein Zeitverlust.',
    benefits: [
      'Mehrsprachig: Polnisch, Türkisch, Rumänisch u.v.m.',
      'Onboarding + Arbeitssicherheit in einem',
      'Nachweis-PDF sofort nach Abschluss',
    ],
    cta: 'Mehr erfahren',
    color: 'purple',
  },
]

const colorMap = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    icon: 'bg-blue-100 text-blue-600',
    check: 'text-blue-500',
    cta: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  green: {
    badge: 'bg-green-50 text-green-700 border-green-100',
    icon: 'bg-green-100 text-green-600',
    check: 'text-green-500',
    cta: 'bg-green-600 hover:bg-green-700 text-white',
  },
  purple: {
    badge: 'bg-purple-50 text-purple-700 border-purple-100',
    icon: 'bg-purple-100 text-purple-600',
    check: 'text-purple-500',
    cta: 'bg-purple-600 hover:bg-purple-700 text-white',
  },
}

export function RoleSections() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Für wen ist SafeMinds?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Für jeden im Betrieb ein Gewinn
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            SafeMinds löst gleichzeitig das Problem von Geschäftsführern, Sicherheitsbeauftragten und HR.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {roles.map(r => {
            const colors = colorMap[r.color as keyof typeof colorMap]
            return (
              <div key={r.role} className="rounded-2xl bg-gray-50 border border-gray-100 p-7 flex flex-col gap-5 hover:shadow-md transition-shadow">
                <div>
                  <span className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full border mb-4 ${colors.badge}`}>
                    <span>{r.icon}</span>
                    {r.role}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">{r.headline}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {r.benefits.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <svg className={`h-4 w-4 flex-shrink-0 mt-0.5 ${colors.check}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/testen" className={`w-full text-center rounded-xl py-2.5 font-semibold text-sm transition-colors ${colors.cta}`}>
                  {r.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
