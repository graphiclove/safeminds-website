import Link from 'next/link'
import Script from 'next/script'

export function DemoSection() {
  return (
    <section className="bg-blue-950 py-20">
      <Script
        src="https://js.storylane.io/js/v2/storylane.js"
        strategy="lazyOnload"
      />
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

        {/* Storylane embed */}
        <div className="max-w-4xl mx-auto">
          <div
            className="sl-embed"
            style={{
              position: 'relative',
              paddingBottom: 'calc(60.57% + 25px)',
              width: '100%',
              height: 0,
            }}
          >
            <iframe
              loading="lazy"
              className="sl-demo"
              src="https://app.storylane.io/demo/kgjcarufxclp?embed=inline"
              name="sl-embed"
              allow="fullscreen"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: '1px solid rgba(63,95,172,0.35)',
                boxShadow: '0px 0px 18px rgba(26,19,72,0.15)',
                borderRadius: '10px',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
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
