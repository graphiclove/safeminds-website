import Link from 'next/link'
import { courses, availableCourses, CATEGORIES } from '@/data/courses'
import { Icon, type IconName } from '@/components/ui/Icon'

const CATEGORY_META: Record<string, { icon: IconName }> = {
  'Grundlagen':            { icon: 'clipboard' },
  'Gesundheit & PSA':      { icon: 'shield' },
  'Arbeitsmittel':         { icon: 'wrench' },
  'Fahrzeuge & Maschinen': { icon: 'truck' },
  'Gefahrstoffe':          { icon: 'alert-triangle' },
  'Spezialarbeiten':       { icon: 'settings' },
}

const displayCategories = CATEGORIES.filter((c) => c !== 'Alle')

const stats = [
  { value: `${availableCourses.length}+`, label: 'Kurse verfügbar' },
  { value: `${courses.length}+`,          label: 'Kurse gesamt' },
  { value: '< 10 Min.',                   label: 'pro Unterweisung' },
  { value: '100%',                         label: 'mit Zertifikat' },
]

export function CoursePreview() {
  return (
    <section className="py-24" style={{ background: '#f8fafc' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Kursübersicht</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            Alles was Ihr Betrieb braucht — in einem Paket
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Über {availableCourses.length} Unterweisungen nach §12 ArbSchG, DGUV V2 und BG BAU —
            jede unter 10 Minuten, jede mit revisionssicherem Zertifikat.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-[#e8edf2] px-6 py-5 text-center">
              <div className="text-3xl font-extrabold text-[#1d4ed8] mb-1">{s.value}</div>
              <div className="text-sm text-[#64748b]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {displayCategories.map((cat) => {
            const meta = CATEGORY_META[cat]
            const catCourses = courses.filter((c) => c.category === cat)
            const available = catCourses.filter((c) => c.status === 'verfügbar').length
            const preview = catCourses.filter((c) => c.status === 'verfügbar').slice(0, 3)
            const remaining = available - preview.length

            return (
              <Link
                key={cat}
                href="/kurse"
                className="group bg-white rounded-2xl p-8 border border-[#e8edf2] flex flex-col hover:shadow-md hover:border-[#bfdbfe] transition-all"
              >
                {/* Icon box + count */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-[#1d4ed8]"
                    style={{ background: '#eef2f7' }}
                  >
                    <Icon name={meta.icon} size={22} />
                  </div>
                  <span className="text-xs font-semibold text-[#3b82f6] bg-[#eff6ff] px-2.5 py-1 rounded-full">
                    {catCourses.length} Kurse
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-[#0f172a] text-base mb-4 leading-snug">{cat}</h3>

                {/* Course list */}
                <ul className="space-y-2 flex-1 mb-5">
                  {preview.map((course) => (
                    <li key={course.slug} className="flex items-start gap-2 text-sm text-[#334155]">
                      <svg
                        className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#3b82f6]"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="leading-snug">{course.title}</span>
                    </li>
                  ))}
                  {remaining > 0 && (
                    <li className="text-xs text-[#94a3b8] pl-6">+ {remaining} weitere Kurse</li>
                  )}
                </ul>

                {/* CTA */}
                <span className="text-sm font-semibold text-[#3b82f6] group-hover:text-[#1d4ed8] transition-colors">
                  Kurse ansehen →
                </span>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/kurse"
            className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3 rounded-[10px] border border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#eff6ff] transition-colors"
          >
            Alle {availableCourses.length} Kurse ansehen →
          </Link>
          <p className="text-xs text-[#94a3b8] mt-3">
            Weitere Kurse in Produktion — regelmäßige Erweiterung des Katalogs
          </p>
        </div>

      </div>
    </section>
  )
}
