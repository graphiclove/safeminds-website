import Link from 'next/link'

// Replace ARCADE_EMBED_URL with your Arcade.software embed link
// Create free at: https://arcade.software
const ARCADE_EMBED_URL = '' // TODO: paste Arcade embed URL here

export function DemoSection() {
  return (
    <section className="bg-blue-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3">Produktdemo</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Sehen Sie SafeMinds in Aktion
          </h2>
          <p className="text-blue-200 max-w-lg mx-auto">
            Klicken Sie sich durch — so sieht es für Ihren Mitarbeiter aus: Login, Kurs, Zertifikat in unter 10 Minuten.
          </p>
        </div>

        {/* Demo embed or placeholder */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-blue-800">
          {ARCADE_EMBED_URL ? (
            <iframe
              src={ARCADE_EMBED_URL}
              title="SafeMinds Demo"
              className="w-full aspect-video"
              allowFullScreen
            />
          ) : (
            /* Placeholder until Arcade is set up */
            <div className="aspect-video bg-blue-900 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-blue-700">
              <div className="text-5xl">▶</div>
              <p className="text-blue-200 font-semibold text-lg">Interaktive Demo</p>
              <p className="text-blue-400 text-sm max-w-xs text-center">
                Demo wird eingebettet via Arcade.software.<br />
                Erstellen unter: arcade.software
              </p>
              <Link
                href="/testen"
                className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Jetzt kostenlos testen →
              </Link>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/testen"
            className="bg-white text-blue-900 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            14 Tage kostenlos starten
          </Link>
          <Link
            href="/kontakt"
            className="text-blue-300 hover:text-white font-semibold text-sm transition-colors"
          >
            Persönliche Demo anfragen →
          </Link>
        </div>
      </div>
    </section>
  )
}
