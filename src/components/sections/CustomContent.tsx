import Link from 'next/link'

export function CustomContent() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Philosophie-Video Feature */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">
              Exklusiv bei SafeMinds
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Mehr als Unterweisung —<br />Identifikation schaffen.
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Jeder Kunde erhält ein individuelles Unternehmensfilm-Modul: Ihre Werte, Ihre Philosophie,
              Ihre Kultur — als Video in der Kursübersicht. Mitarbeiter lernen nicht nur Sicherheitsregeln,
              sondern verstehen warum sie Teil Ihres Unternehmens sind.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Unternehmensfilm direkt in der Kursübersicht integriert',
                'Werte und Unternehmensphilosophie filmisch umgesetzt',
                'Stärkt Zugehörigkeit — besonders bei neuen Mitarbeitern',
                'Mehrsprachig: jeder Mitarbeiter versteht die Botschaft',
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
              Demo anfragen
              <span>→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="bg-blue-800 rounded-2xl p-8 border border-blue-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-sm">IHR</span>
                </div>
                <div>
                  <div className="text-sm font-semibold">Müller Bau GmbH</div>
                  <div className="text-xs text-blue-400">Kursübersicht · Mitarbeiterportal</div>
                </div>
              </div>
              {/* Philosophy video */}
              <div className="bg-blue-950 rounded-xl p-4 mb-4 border border-blue-700">
                <div className="text-xs text-blue-400 mb-2 uppercase tracking-wider">Willkommen bei uns</div>
                <div className="aspect-video bg-gradient-to-br from-blue-800 to-blue-950 rounded-lg flex items-center justify-center mb-2">
                  <div className="text-center">
                    <div className="text-3xl mb-1">▶️</div>
                    <div className="text-xs text-blue-300">Unsere Werte · 3 Min.</div>
                  </div>
                </div>
                <p className="text-xs text-blue-300 italic">"Wer wir sind, was uns antreibt — für alle neuen Kollegen"</p>
              </div>
              <div className="flex gap-2 text-xs text-blue-400">
                <span className="bg-blue-700 rounded-full px-3 py-1">🎬 Ihr Branding</span>
                <span className="bg-blue-700 rounded-full px-3 py-1">🌍 Mehrsprachig</span>
                <span className="bg-blue-700 rounded-full px-3 py-1">✓ Nur bei SafeMinds</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              Nur bei SafeMinds
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 mb-24" />

        {/* Individualisierte Unterweisungen */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
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
                  <div className="text-2xl font-bold">4+</div>
                  <div className="text-xs text-blue-400">Sprachen</div>
                </div>
                <div className="flex-1 bg-blue-700 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">7d</div>
                  <div className="text-xs text-blue-400">Lieferzeit</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">
              Individualisierte Unterweisungen
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Ihre Unterweisung.<br />Ihr Logo. Ihre Sprache.
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Wir produzieren individuelle Video-Unterweisungen mit Ihrem Branding, Ihren Prozessen
              und Ihrer Unternehmenskultur — in Deutsch, Polnisch, Türkisch, Rumänisch oder jeder anderen Sprache.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Eigenes Logo und Firmenfarben in jedem Kurs',
                'Branchenspezifische Inhalte statt Einheitslösung',
                'Mehrsprachig: Deutsch, Englisch, Türkisch, Polnisch u.v.m.',
                'Lieferung in 7–14 Werktagen',
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
        </div>

      </div>
    </section>
  )
}
