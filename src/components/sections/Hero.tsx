import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      className="relative pt-20 pb-28 sm:pt-8 sm:pb-16"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)' }}
    >
      {/* Decorative radial gradient — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-100px',
          right: '-100px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(29,78,216,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-16 items-center">

          {/* ===== LEFT COLUMN: TEXT ===== */}
          <div style={{ maxWidth: '580px' }}>

            {/* Pill badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { check: true, text: '§12 ArbSchG-konform' },
                { check: true, text: 'DSGVO' },
                { check: false, text: '🇩🇪 Made in Germany' },
              ].map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#dbeafe] text-[#1e3a8a] px-3.5 py-1.5 rounded-full text-xs font-semibold"
                  style={{ boxShadow: 'var(--sm-shadow-sm)' }}
                >
                  {b.check && <span className="font-extrabold text-[#1d4ed8]">✓</span>}
                  {b.text}
                </span>
              ))}
            </div>

            {/* H1 */}
            <h1
              className="font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0f172a] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
            >
              Die Online-Unterweisung, die{' '}
              <span className="text-[#1d4ed8]">Ihren Betrieb</span>{' '}
              wirklich absichert.
            </h1>

            {/* Subtitle */}
            <p className="text-[1.15rem] leading-[1.6] text-[#334155] mb-8">
              Rechtssichere Arbeitsschutz-Unterweisungen nach §12 ArbSchG.
              Video, Wissenstest, Zertifikat — in unter 10 Minuten pro Mitarbeiter.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link
                href="/testen"
                className="inline-flex items-center justify-center gap-2 bg-[#1d4ed8] text-white font-bold text-base px-7 rounded-[10px] transition-all hover:bg-[#1e3a8a] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
                style={{
                  padding: '0.95rem 1.75rem',
                  boxShadow: '0 4px 12px rgba(29,78,216,0.3)',
                }}
              >
                Jetzt kostenlos testen →
              </Link>
              <Link
                href="#demo"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] font-semibold text-base rounded-[10px] border border-[#e2e8f0] transition-all hover:border-[#1d4ed8] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
                style={{ padding: '0.95rem 1.75rem' }}
              >
                <span className="text-[#1d4ed8] text-sm">▶</span>
                Demo ansehen
              </Link>
            </div>

            {/* Disclaimer */}
            <p className="text-sm text-[#64748b]">
              Keine Kreditkarte. Keine Installation. Sofort loslegen.
            </p>
          </div>

          {/* ===== RIGHT COLUMN: VISUAL COMPOSITION ===== */}
          <div className="hero-visual">
            <div className="hero-visual-inner">

              {/* CARD 1: Dashboard — centered, no rotation, no hover lift */}
              <div
                className="animate-float-main absolute overflow-hidden rounded-2xl z-[5]"
                style={{
                  width: '540px',
                  height: '380px',
                  top: '90px',
                  left: '50%',
                  marginLeft: '-270px',
                  boxShadow: 'var(--sm-shadow-lg)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src="/images/hero/dashboard.png"
                    alt="SafeMinds Dashboard — Übersicht aktiver Kurse und Mitarbeitender"
                    fill
                    className="object-contain"
                    sizes="540px"
                    priority
                  />
                </div>
              </div>

              {/* CARD 2: Quiz — top left, -4°, links to #demo */}
              <Link
                href="#demo"
                aria-label="Produktdemo ansehen"
                className="visual-card animate-float-left absolute overflow-hidden rounded-2xl z-[6]"
                style={{
                  width: '260px',
                  height: '230px',
                  top: '10px',
                  left: '0',
                  boxShadow: 'var(--sm-shadow-lg)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src="/images/hero/quiz.png"
                    alt="SafeMinds Wissenstest — interaktive Quiz-Fragen"
                    fill
                    className="object-contain"
                    sizes="260px"
                  />
                </div>
              </Link>

              {/* CARD 3: Zertifikat — bottom right, +3°, links to /kontakt */}
              <Link
                href="/kontakt"
                aria-label="Demo anfragen"
                className="visual-card animate-float-right absolute overflow-hidden rounded-2xl z-[6]"
                style={{
                  width: '290px',
                  height: '200px',
                  bottom: '30px',
                  right: '0',
                  boxShadow: 'var(--sm-shadow-lg)',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src="/images/hero/zertifikat.png"
                    alt="SafeMinds Zertifikat — PDF nach erfolgreichem Kursabschluss"
                    fill
                    className="object-contain"
                    sizes="290px"
                  />
                </div>
              </Link>

              {/* BADGE 1: Sprachen — top right */}
              <div
                className="animate-float-badge-1 absolute z-[11] bg-white rounded-xl flex items-center gap-2"
                style={{
                  top: '30px',
                  right: '20px',
                  padding: '0.65rem 0.95rem',
                  boxShadow: 'var(--sm-shadow-md)',
                }}
              >
                <div
                  className="w-7 h-7 rounded-[7px] bg-[#eff6ff] flex items-center justify-center text-sm flex-shrink-0"
                >
                  🌍
                </div>
                <div>
                  <div className="font-extrabold text-[#1d4ed8] leading-tight" style={{ fontSize: '0.95rem' }}>
                    &gt; 4 Sprachen
                  </div>
                  <div className="text-[#64748b] font-medium mt-0.5" style={{ fontSize: '0.65rem' }}>
                    für Ihre Mitarbeiter
                  </div>
                </div>
              </div>

              {/* BADGE 2: Abschlussquote — middle left */}
              <div
                className="animate-float-badge-2 absolute z-[11] bg-white rounded-xl"
                style={{
                  top: '250px',
                  left: '-10px',
                  padding: '0.65rem 0.95rem',
                  boxShadow: 'var(--sm-shadow-md)',
                }}
              >
                <div className="font-extrabold text-[#1d4ed8] leading-tight" style={{ fontSize: '1.1rem' }}>
                  98%
                </div>
                <div className="text-[#64748b] font-medium mt-0.5" style={{ fontSize: '0.65rem' }}>
                  Abschlussquote
                </div>
              </div>

              {/* BADGE 3: DSGVO — bottom left */}
              <div
                className="animate-float-badge-3 absolute z-[11] bg-white rounded-xl flex items-center gap-2"
                style={{
                  bottom: '30px',
                  left: '30px',
                  padding: '0.65rem 0.95rem',
                  boxShadow: 'var(--sm-shadow-md)',
                }}
              >
                <div
                  className="w-7 h-7 rounded-[7px] flex items-center justify-center text-sm flex-shrink-0 font-bold text-[#10b981]"
                  style={{ background: 'rgba(16,185,129,0.1)' }}
                >
                  ✓
                </div>
                <div>
                  <div className="font-bold text-[#0f172a] leading-tight" style={{ fontSize: '0.82rem' }}>
                    DSGVO-konform
                  </div>
                  <div className="text-[#64748b] font-medium mt-0.5" style={{ fontSize: '0.65rem' }}>
                    Zertifikat erstellt
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// TODO: Alter Hero — nach Review löschen (TrialForm, Foto-Spalte, Trust-Liste)
