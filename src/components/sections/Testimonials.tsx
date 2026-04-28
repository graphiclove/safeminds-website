import Image from 'next/image'

const testimonials = [
  {
    quote:
      'Früher haben wir Unterweisungen in Präsenz gemacht — zwei Stunden pro Gruppe, immer schwierig mit Schichtplänen. Jetzt erledigt jeder Mitarbeiter es selbst, wann es passt. Die Nachweisdokumentation ist ein Traum.',
    name: 'Thomas K.',
    role: 'Sicherheitsbeauftragter',
    company: 'Metallbau GmbH, 48 MA',
    rating: 5,
    avatar: null,
  },
  {
    quote:
      'Die Bestanden-Garantie hat mich überzeugt. Ich wollte nicht, dass Mitarbeiter durch die Unterweisung fallen und wir nachschulen müssen. Bei SafeMinds hat noch niemand versagt — das Kurssystem ist wirklich gut erklärt.',
    name: 'Sandra M.',
    role: 'Geschäftsführerin',
    company: 'Pflegedienst Sonnenschein, 23 MA',
    rating: 5,
    avatar: null,
  },
  {
    quote:
      'Wir haben polnische und türkische Mitarbeiter. Die mehrsprachigen Kurse haben uns wirklich geholfen. Endlich versteht wirklich jeder, was er im Notfall tun soll.',
    name: 'Robert B.',
    role: 'HR-Leiter',
    company: 'Logistik AG, 120 MA',
    rating: 5,
    avatar: null,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Kundenstimmen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Was Betriebe wirklich sagen
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-2xl p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-gray-200 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert badge */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 max-w-2xl mx-auto">
          <div className="shrink-0">
            <Image
              src="/images/team/Eric Olders.png"
              alt="Eric Olders, Sicherheitsingenieur"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>
          <div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">
              &ldquo;Alle Unterweisungen bei SafeMinds sind nach §12 ArbSchG und DGUV V2 konzipiert.
              Jedes Zertifikat trägt meine Unterschrift — ich stehe persönlich für die Qualität.&rdquo;
            </p>
            <div className="font-semibold text-gray-900">Eric Olders</div>
            <div className="text-sm text-blue-600">Sicherheitsingenieur · Fachkraft für Arbeitssicherheit</div>
          </div>
        </div>
      </div>
    </section>
  )
}
