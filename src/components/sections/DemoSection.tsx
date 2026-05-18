import Link from 'next/link'

// TODO: Loom-Video-URL hier eintragen sobald Aufnahme fertig
// z.B. 'https://www.loom.com/embed/DEINE-VIDEO-ID'
const LOOM_EMBED_URL = ''

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
            Login, Kurs starten, Zertifikat — alles in unter 10 Minuten. Wir zeigen es Ihnen live.
          </p>
        </div>

        {/* Loom embed or CTA */}
        <div className="max-w-4xl mx-auto">
          {LOOM_EMBED_URL ? (
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-800 aspect-video">
              <iframe
                src={LOOM_EMBED_URL}
                title="SafeMinds Demo"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="rounded-2xl border border-blue-800 bg-blue-900/40 p-12 flex flex-col sm:flex-row items-center gap-10">
              {/* Steps */}
              <div className="flex flex-col gap-5 flex-1">
                {[
                  { n: '01', title: 'Login', desc: 'Mitarbeiter öffnet den Link — keine App nötig.' },
                  { n: '02', title: 'Kurs starten', desc: 'Video-Unterweisung + Wissenstest.' },
                  { n: '03', title: 'Zertifikat', desc: 'PDF sofort nach Abschluss — automatisch archiviert.' },
                ].map(step => (
                  <div key={step.n} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-xl bg-blue-600 text-white text-sm font-extrabold flex items-center justify-center shrink-0">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-white font-bold text-sm">{step.title}</p>
                      <p className="text-blue-300 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA */}
              <div className="flex flex-col items-center gap-4 shrink-0">
                <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <Link
                  href="/kontakt"
                  className="bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm text-center"
                >
                  Live-Demo anfragen
                </Link>
                <p className="text-blue-400 text-xs text-center">Persönlich · 20 Min. · kostenlos</p>
              </div>
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
