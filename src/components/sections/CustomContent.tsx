import Link from 'next/link'

export function CustomContent() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">
              Individualisierte Inhalte
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Ihre Unterweisung.<br />Ihr Logo. Ihre Sprache.
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Kein Anbieter passt Kurse so an wie SafeMinds. Wir produzieren individuelle Video-Unterweisungen
              mit Ihrem Branding, Ihren Prozessen und Ihrer Unternehmenskultur — in Deutsch, Englisch oder anderen Sprachen.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Eigenes Logo und Firmenfarben in jedem Kurs',
                'Branchenspezifische Inhalte statt Einheitslösung',
                'Mehrsprachig: Deutsch, Englisch, Türkisch, Polnisch',
                'Lieferung in 5–10 Werktagen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                  <span className="text-blue-100">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Individualisierung anfragen
              <span>→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-blue-800 rounded-2xl p-8 border border-blue-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-sm">SM</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Ihre Firma GmbH</div>
                  <div className="text-xs text-blue-400">Unterweisung 2025</div>
                </div>
              </div>
              <div className="aspect-video bg-blue-950 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">▶️</div>
                  <div className="text-sm text-blue-400">Brandschutz · Ihre Firma GmbH</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 bg-blue-700 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs text-blue-400">Ihr Branding</div>
                </div>
                <div className="flex-1 bg-blue-700 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-xs text-blue-400">Sprachen</div>
                </div>
                <div className="flex-1 bg-blue-700 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">5d</div>
                  <div className="text-xs text-blue-400">Lieferzeit</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Nur bei SafeMinds
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
