import Link from 'next/link'

export function FinalCTA() {
  return (
    <section
      className="py-28 px-4"
      style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)' }}
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Eyebrow */}
        <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Jetzt loslegen
        </p>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Heute absichern.<br />
          Morgen bereit sein.
        </h2>

        {/* Subline */}
        <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
          Starten Sie kostenlos — keine Kreditkarte, keine Installation, kein Risiko.
          Ihre ersten Ergebnisse haben Sie noch heute.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/testen"
            className="inline-flex items-center justify-center gap-2 bg-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ color: '#1d4ed8' }}
          >
            Kostenlos starten →
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
            style={{
              color: 'white',
              border: '2px solid rgba(255,255,255,0.45)',
              background: 'rgba(255,255,255,0.08)',
            }}
          >
            Demo ansehen
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {['Keine Kreditkarte', '§12 ArbSchG-konform', 'DSGVO-konform', 'Made in Germany'].map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-sm font-medium"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
