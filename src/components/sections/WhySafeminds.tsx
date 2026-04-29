const features = [
  {
    icon: '⚖️',
    title: 'Rechtskonform & aktuell',
    desc: '§12 ArbSchG, DGUV V2 — alle Schulungen entsprechen den aktuellen gesetzlichen Anforderungen.',
    highlight: false,
  },
  {
    icon: '✅',
    title: 'Bestanden-Garantie',
    desc: 'Bei falschen Antworten: Hilfestellung und Wiederholung. Nahezu 100% Abschlussquote.',
    highlight: false,
  },
  {
    icon: '🌍',
    title: 'Mehrsprachig — kein Dolmetscher',
    desc: 'Unterweisungen auf Deutsch, Polnisch, Türkisch, Rumänisch u.v.m. — jeder Mitarbeiter versteht, was im Notfall zu tun ist.',
    highlight: true,
  },
  {
    icon: '📄',
    title: 'Zertifikat sofort',
    desc: 'PDF-Download direkt nach Abschluss — rechtssicher, mit Datum und Kurs-Details.',
    highlight: false,
  },
  {
    icon: '📱',
    title: 'Auf jedem Gerät',
    desc: 'Smartphone, Tablet, PC — Fortschritt wird automatisch gespeichert.',
    highlight: false,
  },
  {
    icon: '🔒',
    title: 'Sicher & DSGVO-konform',
    desc: 'Verschlüsselter Zugang, Server in Deutschland, keine Weitergabe an Dritte.',
    highlight: false,
  },
]

export function WhySafeminds() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Warum SafeMinds?
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Entwickelt für Betriebe, die Arbeitssicherheit ernst nehmen — ohne Verwaltungsaufwand.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div key={f.title} className={`rounded-2xl p-6 hover:shadow-md transition-shadow ${
              f.highlight
                ? 'bg-blue-600 border border-blue-500'
                : 'bg-gray-50 border border-gray-100'
            }`}>
              <span className="text-3xl">{f.icon}</span>
              <h3 className={`mt-3 text-base font-bold ${f.highlight ? 'text-white' : 'text-gray-900'}`}>{f.title}</h3>
              <p className={`mt-1.5 text-sm leading-relaxed ${f.highlight ? 'text-blue-100' : 'text-gray-500'}`}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
