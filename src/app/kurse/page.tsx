'use client'

import Link from 'next/link'
import { useState } from 'react'
import { courses, CATEGORIES } from '@/data/courses'

export default function KursePage() {
  const [activeCategory, setActiveCategory] = useState('Alle')

  const filtered = activeCategory === 'Alle'
    ? courses
    : courses.filter((c) => c.category === activeCategory)

  const available = courses.filter((c) => c.status === 'verfügbar').length

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Kursübersicht</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Alle Kurse
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            <span className="font-semibold text-gray-900">{available} Kurse</span> sofort verfügbar —
            rechtssicher nach §12 ArbSchG, DGUV V2 und BG BAU-Richtlinien.
            Alle Kurse enden mit revisionssicherem Zertifikat.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
              {cat !== 'Alle' && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({courses.filter((c) => c.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filtered.map((course) => (
            <div
              key={course.slug}
              className={`bg-white border rounded-xl p-5 hover:shadow-md transition-all ${
                course.status === 'verfügbar'
                  ? 'border-gray-200 hover:border-blue-200'
                  : 'border-dashed border-gray-200 opacity-75'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                  {course.category}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  {course.status === 'produktion' && (
                    <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
                      Bald verfügbar
                    </span>
                  )}
                  <span className="text-xs text-gray-400">⏱ {course.duration}</span>
                </div>
              </div>
              <h2 className="font-semibold text-gray-900 mb-2 leading-snug text-sm">
                {course.title}
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{course.description}</p>
              {course.status === 'verfügbar' ? (
                <Link
                  href="/testen"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
                >
                  Kostenlos testen →
                </Link>
              ) : (
                <span className="text-xs text-gray-400">In Produktion</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ihren Betrieb absichern — jetzt kostenlos starten
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            14 Tage kostenlos testen. Kein Kreditkarte, keine automatische Verlängerung.
            Alle Unterweisungen nach §12 ArbSchG und DGUV V2.
          </p>
          <Link
            href="/testen"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Kostenlos testen →
          </Link>
        </div>
      </div>
    </main>
  )
}
