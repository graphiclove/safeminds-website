const rows = [
  {
    feature: 'Zeitaufwand pro Unterweisung',
    safeminds: 'unter 10 Minuten',
    traditional: '2–4 Stunden',
    safemindsGood: true,
  },
  {
    feature: 'Dokumentation & Nachweis',
    safeminds: 'Automatisch, PDF sofort',
    traditional: 'Manuell, oft lückenhaft',
    safemindsGood: true,
  },
  {
    feature: 'Mehrsprachig',
    safeminds: 'Deutsch, Polnisch, Türkisch u.v.m.',
    traditional: 'Nur Deutsch (oder Dolmetscher)',
    safemindsGood: true,
  },
  {
    feature: 'Verfügbarkeit',
    safeminds: '24/7 — Smartphone, Tablet, PC',
    traditional: 'Fixer Termin, Präsenz nötig',
    safemindsGood: true,
  },
  {
    feature: 'Rechtssicherheit',
    safeminds: '§12 ArbSchG + DGUV V2 ✓',
    traditional: 'Abhängig von Durchführung',
    safemindsGood: true,
  },
  {
    feature: 'Abschlussquote',
    safeminds: '98% mit Bestanden-Garantie',
    traditional: 'Keine Garantie',
    safemindsGood: true,
  },
  {
    feature: 'Kosten',
    safeminds: 'ab €4,99 / MA / Monat',
    traditional: 'Stundenlohn × Anzahl MA',
    safemindsGood: true,
  },
  {
    feature: 'Erinnerungen & Fristen',
    safeminds: 'Automatisch per E-Mail',
    traditional: 'Manuelle Nachverfolgung',
    safemindsGood: true,
  },
]

export function ComparisonTable() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Vergleich</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            SafeMinds vs. Präsenz-Unterweisung
          </h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">
            Was Betriebe täglich Zeit, Geld und Nerven kostet — und wie SafeMinds es löst.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-900 text-white text-sm font-semibold">
            <div className="px-6 py-4 text-gray-400">Kriterium</div>
            <div className="px-6 py-4 flex items-center gap-2 text-blue-300">
              <span>✦</span> SafeMinds
            </div>
            <div className="px-6 py-4 text-gray-400">Präsenz-Unterweisung</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 border-t border-gray-100 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="px-6 py-4 font-medium text-gray-700">{row.feature}</div>
              <div className="px-6 py-4 flex items-start gap-2 text-gray-900 font-medium">
                <svg className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {row.safeminds}
              </div>
              <div className="px-6 py-4 flex items-start gap-2 text-gray-400">
                <svg className="h-4 w-4 text-red-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {row.traditional}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Alle Angaben basieren auf Durchschnittswerten aus Kundengesprächen und Branchenstudien.
        </p>
      </div>
    </section>
  )
}
