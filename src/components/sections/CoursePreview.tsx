import Link from 'next/link'
import { courses, availableCourses, CATEGORIES } from '@/data/courses'

const categoryMeta: Record<string, { icon: string; color: string; bg: string; border: string }> = {
  'Grundlagen':             { icon: '🏗️', color: 'text-blue-700',   bg: 'bg-blue-50',   border: 'border-blue-100' },
  'Gesundheit & PSA':       { icon: '🦺', color: 'text-green-700',  bg: 'bg-green-50',  border: 'border-green-100' },
  'Arbeitsmittel':          { icon: '🔧', color: 'text-orange-700', bg: 'bg-orange-50', border: 'border-orange-100' },
  'Fahrzeuge & Maschinen':  { icon: '🚜', color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-100' },
  'Gefahrstoffe':           { icon: '⚗️', color: 'text-red-700',    bg: 'bg-red-50',    border: 'border-red-100' },
  'Spezialarbeiten':        { icon: '⛏️', color: 'text-purple-700', bg: 'bg-purple-50', border: 'border-purple-100' },
}

const displayCategories = CATEGORIES.filter((c) => c !== 'Alle')

const stats = [
  { value: `${availableCourses.length}+`, label: 'Kurse verfügbar' },
  { value: `${courses.length}+`, label: 'Kurse gesamt' },
  { value: '< 10 Min.', label: 'pro Unterweisung' },
  { value: '100%', label: 'mit Zertifikat' },
]

export function CoursePreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Kursübersicht</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Alles was Ihr Betrieb braucht — in einem Paket
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Über {availableCourses.length} Unterweisungen nach §12 ArbSchG, DGUV V2 und BG BAU —
            jede unter 10 Minuten, jede mit revisionssicherem Zertifikat.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 text-center">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {displayCategories.map((cat) => {
            const meta = categoryMeta[cat]
            const catCourses = courses.filter((c) => c.category === cat)
            const available = catCourses.filter((c) => c.status === 'verfügbar').length
            const sample = catCourses.slice(0, 3).map((c) => c.title)

            return (
              <Link
                key={cat}
                href={`/kurse`}
                className={`group rounded-2xl border-2 p-6 hover:shadow-md transition-all ${meta.bg} ${meta.border}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{meta.icon}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-white/80 ${meta.color}`}>
                    {available} Kurse
                  </span>
                </div>
                <h3 className={`font-bold text-lg mb-3 ${meta.color}`}>{cat}</h3>
                <ul className="space-y-1.5 mb-4">
                  {sample.map((title) => (
                    <li key={title} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500 shrink-0">✓</span>
                      <span className="truncate">{title}</span>
                    </li>
                  ))}
                  {catCourses.length > 3 && (
                    <li className="text-xs text-gray-400 pl-5">
                      + {catCourses.length - 3} weitere Kurse
                    </li>
                  )}
                </ul>
                <span className={`text-sm font-semibold ${meta.color} group-hover:underline`}>
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
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Alle {availableCourses.length} Kurse ansehen →
          </Link>
          <p className="text-sm text-gray-400 mt-3">
            Weitere Kurse in Produktion — regelmäßige Erweiterung des Katalogs
          </p>
        </div>

      </div>
    </section>
  )
}
