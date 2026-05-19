import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getComparison, getAllComparisonSlugs } from '@/data/comparisons'
import { Icon, type IconName } from '@/components/ui/Icon'

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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-4">Vergleich</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] leading-tight mb-4">
            {c.headline}
          </h1>
          <p className="text-lg font-semibold text-[#334155] mb-4">{c.subline}</p>
          <p className="text-base text-[#64748b] leading-relaxed mb-10">{c.intro}</p>
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

        {/* ── COMPETITOR STRENGTHS (fairness section) ── */}
        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Was {c.competitor} gut macht</p>
          <h2 className="text-xl font-extrabold text-[#0f172a] mb-5">
            Beide Plattformen sind solide — hier die Stärken von {c.competitor}
          </h2>
          <ul className="space-y-3">
            {c.competitorStrengths.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[#334155] text-base">
                <svg className="w-5 h-5 text-[#64748b] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {s}
              </li>
            ))}
          </ul>
        </section>

        {/* ── FEATURE TABLE ── */}
        <section id="vergleich">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Funktionsvergleich</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              Feature für Feature
            </h2>
            <p className="text-sm text-[#64748b] mt-2 max-w-lg mx-auto">
              Angaben basieren auf öffentlich zugänglichen Informationen — Stand 2025.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e8edf2] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[#e8edf2] bg-[#f8fafc]">
              <div className="p-5 text-xs font-bold text-[#64748b] uppercase tracking-wider">Funktion</div>
              <div className="p-5 text-center border-l border-[#e8edf2]">
                <span className="text-sm font-extrabold text-[#1d4ed8]">SafeMinds</span>
              </div>
              <div className="p-5 text-center border-l border-[#e8edf2]">
                <span className="text-sm font-semibold text-[#64748b]">{c.competitor}</span>
              </div>
            </div>

            {c.features.map((f, i) => (
              <div
                key={f.label}
                className={`grid grid-cols-3 border-b border-[#e8edf2] last:border-b-0 ${i % 2 === 0 ? '' : 'bg-[#f8fafc]'}`}
              >
                <div className="p-4 text-sm text-[#334155] flex flex-col justify-center">
                  <span className="font-medium">{f.label}</span>
                  {f.note && <span className="text-xs text-[#94a3b8] mt-0.5">{f.note}</span>}
                </div>
                <div className="p-4 border-l border-[#e8edf2] flex items-center justify-center">
                  <FeatureValue value={f.safeminds} highlight />
                </div>
                <div className="p-4 border-l border-[#e8edf2] flex items-center justify-center">
                  <FeatureValue value={f.competitor} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#94a3b8] text-center mt-4 max-w-2xl mx-auto leading-relaxed">
            Angaben zu Drittanbietern basieren ausschließlich auf öffentlich zugänglichen Informationen (Stand: 2025). „—" bedeutet: nicht öffentlich bestätigt. Für Vollständigkeit und Aktualität wird keine Gewähr übernommen.
          </p>
        </section>

        {/* ── BENEFITS ── */}
        <section>
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Unterschiede im Detail</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
              Wo SafeMinds einen anderen Ansatz verfolgt
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 border border-[#e8edf2] flex flex-col">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 text-[#1d4ed8]"
                  style={{ background: '#eef2f7' }}
                >
                  <Icon name={b.icon as IconName} size={22} />
                </div>
                <h3 className="font-bold text-[#0f172a] text-base mb-2.5 leading-snug">{b.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DIFFERENTIATORS ── */}
        <section className="bg-white rounded-2xl border border-[#e8edf2] p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Für wen passt was?</p>
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-3">
              SafeMinds ist die bessere Wahl, wenn…
            </h2>
            <p className="text-sm text-[#64748b] mb-7">
              Beide Plattformen erfüllen die gesetzlichen Anforderungen. SafeMinds ist vor allem dann im Vorteil:
            </p>
            <ul className="space-y-4">
              {c.differentiators.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-[#334155] text-base">{d}</span>
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
            Selbst überzeugen
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Testen Sie SafeMinds kostenlos.
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
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#f1f5f9]">
        <svg className="w-4 h-4 text-[#cbd5e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    )
  }
  // '—' = not publicly confirmed — shown as neutral dash with tooltip hint
  if (value === '—') {
    return (
      <span
        className="text-sm font-semibold text-[#cbd5e1]"
        title="Nicht öffentlich bestätigt"
      >
        —
      </span>
    )
  }
  return <span className="text-xs font-medium text-[#64748b] text-center leading-snug max-w-[90px]">{value}</span>
}
