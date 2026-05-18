import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getComparison, getAllComparisonSlugs } from '@/data/comparisons'

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) return {}
  return { title: c.metaTitle, description: c.metaDescription }
}

export default async function VergleichPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) notFound()

  return (
    <main style={{ background: '#f8fafc' }} className="min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-white border-b border-[#e8edf2] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-4">Vergleich</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] leading-tight mb-4">
            {c.headline}
          </h1>
          <p className="text-lg text-[#64748b] mb-2">{c.subline}</p>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto leading-relaxed mb-10">{c.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/testen"
              className="inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-[10px] transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.3)' }}
            >
              SafeMinds kostenlos testen →
            </Link>
            <Link
              href="#vergleich"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0f172a] font-semibold text-base rounded-[10px] border border-[#e2e8f0] px-8 py-4 transition-all hover:border-[#1d4ed8]"
            >
              Vergleich ansehen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

        {/* ── FEATURE TABLE ── */}
        <section id="vergleich">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Funktionsvergleich</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              SafeMinds vs. {c.competitor}
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-[#e8edf2] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-3 border-b border-[#e8edf2]">
              <div className="p-5 text-sm font-bold text-[#64748b] uppercase tracking-wider">Funktion</div>
              <div className="p-5 text-center border-l border-[#e8edf2]">
                <span className="text-sm font-extrabold text-[#1d4ed8]">SafeMinds</span>
              </div>
              <div className="p-5 text-center border-l border-[#e8edf2]">
                <span className="text-sm font-semibold text-[#64748b]">{c.competitor}</span>
              </div>
            </div>

            {/* Rows */}
            {c.features.map((f, i) => (
              <div
                key={f.label}
                className={`grid grid-cols-3 border-b border-[#e8edf2] last:border-b-0 ${i % 2 === 0 ? '' : 'bg-[#f8fafc]'}`}
              >
                <div className="p-4 text-sm text-[#334155] font-medium flex items-center">{f.label}</div>
                <div className="p-4 border-l border-[#e8edf2] flex items-center justify-center">
                  <FeatureValue value={f.safeminds} highlight />
                </div>
                <div className="p-4 border-l border-[#e8edf2] flex items-center justify-center">
                  <FeatureValue value={f.competitor} />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#94a3b8] text-center mt-4">
            Stand: 2025 — Angaben basieren auf öffentlich zugänglichen Informationen. Änderungen vorbehalten.
          </p>
        </section>

        {/* ── BENEFITS ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Warum SafeMinds</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              Die klaren Vorteile im Detail
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 border border-[#e8edf2] flex flex-col">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-6 flex-shrink-0"
                  style={{ background: '#eef2f7' }}
                >
                  {b.icon}
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-2.5 leading-snug">{b.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SWITCH REASONS ── */}
        <section className="bg-white rounded-2xl border border-[#e8edf2] p-10">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Warum wechseln?</p>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-8">
              Das sagen Betriebe, die von {c.competitor} zu SafeMinds gewechselt haben
            </h2>
            <ul className="space-y-4">
              {c.switchReasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[#334155] text-base">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="rounded-2xl py-16 px-8 text-center"
          style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Jetzt wechseln
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Überzeugt? Testen Sie SafeMinds kostenlos.
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Keine Kreditkarte, keine Installation, kein Risiko. In 3 Minuten einsatzbereit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
              style={{ color: 'white', border: '2px solid rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.08)' }}
            >
              Demo ansehen
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Keine Kreditkarte', '§12 ArbSchG-konform', 'DSGVO-konform', 'Made in Germany'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}

function FeatureValue({ value, highlight = false }: { value: boolean | string; highlight?: boolean }) {
  if (value === true) {
    return (
      <span className={`flex items-center justify-center w-7 h-7 rounded-full ${highlight ? 'bg-[#dcfce7]' : 'bg-[#f1f5f9]'}`}>
        <svg className={`w-4 h-4 ${highlight ? 'text-[#16a34a]' : 'text-[#64748b]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#fee2e2]">
        <svg className="w-4 h-4 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    )
  }
  return <span className="text-xs font-medium text-[#94a3b8] text-center">{value}</span>
}
