import Link from 'next/link'
import Image from 'next/image'

export function CustomContent() {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden">

        {/* Philosophie-Video Feature — full-bleed right */}
        <div className="grid lg:grid-cols-2 items-center mb-24">
          <div className="px-4 sm:px-6 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:pr-12 py-8 lg:py-0">
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

          <div>
            <Image
              src="/images/Unternehmensfilm/Komposition-nobg.png"
              alt="Unternehmensfilm-Komposition: Video-Mockup mit Badge-Übersicht"
              width={1672}
              height={941}
              className="w-full h-auto"
              priority={true}
            />
          </div>
        </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <div className="border-t border-blue-800 mb-24" />
      </div>

        {/* Individualisierte Unterweisungen — full-bleed left */}
        <div className="grid lg:grid-cols-2 items-center">
          <div>
            <Image
              src="/images/Unternehmensfilm/ihr-logo.png"
              alt="Individualisierte Unterweisung mit Ihrem Logo und Branding"
              width={1264}
              height={842}
              className="w-full h-auto"
            />
          </div>

          <div className="px-4 sm:px-6 lg:pr-[max(2rem,calc((100vw-72rem)/2+2rem))] lg:pl-12 py-8 lg:py-0">
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
    </section>
  )
}
