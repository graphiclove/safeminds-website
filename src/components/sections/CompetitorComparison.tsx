import Link from 'next/link'

const competitors = [
  { name: 'SafeMinds', us: true },
  { name: 'TÜV Rheinland', us: false },
  { name: 'Unterweisung.de', us: false },
  { name: 'Mibeo', us: false },
  { name: 'Präsenz-Unterweisung', us: false },
]

const criteria = [
  {
    label: 'Mehrsprachig (PL, TR, RO…)',
    values: [true, false, false, false, false],
  },
  {
    label: 'Unter 10 Min. pro Kurs',
    values: [true, false, true, true, false],
  },
  {
    label: 'Automatische Dokumentation',
    values: [true, true, true, true, false],
  },
  {
    label: 'Bestanden-Garantie',
    values: [true, false, false, false, false],
  },
  {
    label: '§12 ArbSchG + DGUV V2',
    values: [true, true, true, true, true],
  },
  {
    label: 'Onboarding-Videos inklusive',
    values: [true, false, false, false, false],
  },
  {
    label: 'Transparente Preise online',
    values: [true, false, true, true, false],
  },
  {
    label: 'Ab 5 Mitarbeitende nutzbar',
    values: [true, false, true, false, true],
  },
]

export function CompetitorComparison() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">Vergleich</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            SafeMinds vs. andere Anbieter
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Warum immer mehr Betriebe zu SafeMinds wechseln — auf einen Blick.
          </p>
        </div>

        <div className="rounded-2xl overflow-x-auto">
          <table className="w-full text-sm">
            {/* Header */}
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left px-4 py-4 text-gray-400 font-medium w-52">Kriterium</th>
                {competitors.map(c => (
                  <th
                    key={c.name}
                    className={`px-4 py-4 text-center font-bold ${
                      c.us
                        ? 'text-blue-400 bg-blue-900/40 rounded-t-xl'
                        : 'text-gray-400'
                    }`}
                  >
                    {c.us && <span className="block text-xs text-blue-300 font-normal mb-0.5">✦</span>}
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, ri) => (
                <tr
                  key={row.label}
                  className={`border-b border-gray-800 ${ri % 2 === 0 ? '' : 'bg-gray-800/30'}`}
                >
                  <td className="px-4 py-3.5 text-gray-300 font-medium">{row.label}</td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3.5 text-center ${competitors[ci].us ? 'bg-blue-900/20' : ''}`}
                    >
                      {val ? (
                        <span className={`text-lg ${competitors[ci].us ? 'text-green-400' : 'text-green-600'}`}>✓</span>
                      ) : (
                        <span className="text-gray-600">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/testen"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            SafeMinds 14 Tage kostenlos testen →
          </Link>
          <p className="text-gray-500 text-xs mt-3">Keine Kreditkarte · Sofortiger Zugang · Jederzeit kündbar</p>
        </div>
      </div>
    </section>
  )
}
