import Link from 'next/link'

const ARCADE_URL = 'https://app.arcade.software/share/0xPZbOJULhg8dFw1Y0y6'

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

        {/* Demo card — opens in new tab */}
        <a
          href={ARCADE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group max-w-4xl mx-auto block rounded-2xl overflow-hidden shadow-2xl border border-blue-800 hover:border-blue-500 transition-colors"
        >
          <div className="aspect-video bg-gradient-to-br from-blue-900 to-blue-950 flex flex-col items-center justify-center gap-5 relative">
            {/* Play button */}
            <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-white font-bold text-lg">Interaktive Demo starten</p>
              <p className="text-blue-300 text-sm mt-1">Öffnet in neuem Tab · Kein Login nötig</p>
            </div>
            {/* Steps preview */}
            <div className="absolute bottom-6 flex gap-3">
              {['Login', 'Kursübersicht', 'Unterweisung', 'Zertifikat'].map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold">{i+1}</span>
                  <span className="text-blue-300 text-xs hidden sm:block">{s}</span>
                  {i < 3 && <span className="text-blue-700 text-xs hidden sm:block">›</span>}
                </div>
              ))}
            </div>
          </div>
        </a>

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
