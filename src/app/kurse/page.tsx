'use client'

import Link from 'next/link'
import { useState } from 'react'
import { courses, CATEGORIES } from '@/data/courses'

const CATEGORY_META: Record<string, { icon: string; bg: string; accent: string; border: string; countColor: string }> = {
  'Grundlagen':           { icon: '📋', bg: '#eff6ff', accent: '#1d4ed8', border: '#bfdbfe', countColor: '#1d4ed8' },
  'Gesundheit & PSA':     { icon: '🦺', bg: '#f0fdf4', accent: '#15803d', border: '#bbf7d0', countColor: '#16a34a' },
  'Arbeitsmittel':        { icon: '🔧', bg: '#fff7ed', accent: '#c2410c', border: '#fed7aa', countColor: '#ea580c' },
  'Fahrzeuge & Maschinen':{ icon: '🚜', bg: '#fefce8', accent: '#92400e', border: '#fde68a', countColor: '#a16207' },
  'Gefahrstoffe':         { icon: '⚠️', bg: '#fff1f2', accent: '#be123c', border: '#fecdd3', countColor: '#e11d48' },
  'Spezialarbeiten':      { icon: '⛏️', bg: '#faf5ff', accent: '#6d28d9', border: '#ddd6fe', countColor: '#7c3aed' },
}

export default function KursePage() {
  const [activeCategory, setActiveCategory] = useState('Alle')

  const filteredCourses = activeCategory === 'Alle'
    ? courses
    : courses.filter((c) => c.category === activeCategory)

  const available = courses.filter((c) => c.status === 'verfügbar').length

  const categoriesWithCourses = CATEGORIES.filter((c) => c !== 'Alle').map((cat) => ({
    name: cat,
    meta: CATEGORY_META[cat],
    courses: courses.filter((c) => c.category === cat),
    available: courses.filter((c) => c.category === cat && c.status === 'verfügbar').length,
  }))

  return (
    <main style={{ background: '#f8fafc' }} className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Kursübersicht</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
            Alle Kurse
          </h1>
          <p className="text-base text-[#64748b] max-w-2xl leading-relaxed">
            <span className="font-semibold text-[#0f172a]">{available} Kurse</span> sofort verfügbar —
            rechtssicher nach §12 ArbSchG, DGUV V2 und BG BAU-Richtlinien.
            Alle Kurse enden mit revisionssicherem Zertifikat.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-[#1d4ed8] text-white border-[#1d4ed8]'
                  : 'bg-white text-[#64748b] border-[#e2e8f0] hover:border-[#1d4ed8] hover:text-[#0f172a]'
              }`}
            >
              {cat}
              {cat !== 'Alle' && (
                <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'opacity-80' : 'opacity-60'}`}>
                  ({courses.filter((c) => c.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* CATEGORY OVERVIEW — shown when "Alle" is active */}
        {activeCategory === 'Alle' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {categoriesWithCourses.map(({ name, meta, courses: catCourses, available: catAvail }) => {
              const preview = catCourses.filter((c) => c.status === 'verfügbar').slice(0, 3)
              const remaining = catAvail - preview.length

              return (
                <div
                  key={name}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: meta.bg,
                    border: `1px solid ${meta.border}`,
                  }}
                >
                  {/* Top row: icon + count */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl leading-none">{meta.icon}</span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: meta.countColor }}
                    >
                      {catCourses.length} Kurse
                    </span>
                  </div>

                  {/* Category title */}
                  <h2
                    className="font-extrabold text-lg mb-4 leading-snug"
                    style={{ color: meta.accent }}
                  >
                    {name}
                  </h2>

                  {/* Course list */}
                  <ul className="space-y-2 flex-1 mb-4">
                    {preview.map((course) => (
                      <li key={course.slug} className="flex items-start gap-2 text-sm text-[#334155]">
                        <svg
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: meta.accent }}
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
                  <button
                    onClick={() => setActiveCategory(name)}
                    className="text-sm font-semibold transition-opacity hover:opacity-70 text-left"
                    style={{ color: meta.accent }}
                  >
                    Kurse ansehen →
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* INDIVIDUAL COURSE CARDS — shown when a category is filtered */}
        {activeCategory !== 'Alle' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {filteredCourses.map((course) => (
              <div
                key={course.slug}
                className={`bg-white rounded-2xl p-5 border transition-all hover:shadow-md ${
                  course.status === 'verfügbar'
                    ? 'border-[#e2e8f0] hover:border-[#bfdbfe]'
                    : 'border-dashed border-[#e2e8f0] opacity-70'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold bg-[#f1f5f9] text-[#64748b] px-2 py-0.5 rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    {course.status === 'produktion' && (
                      <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                        Bald verfügbar
                      </span>
                    )}
                    <span className="text-xs text-[#94a3b8]">⏱ {course.duration}</span>
                  </div>
                </div>
                <h2 className="font-semibold text-[#0f172a] mb-2 leading-snug text-sm">
                  {course.title}
                </h2>
                <p className="text-xs text-[#64748b] leading-relaxed mb-4">{course.description}</p>
                {course.status === 'verfügbar' ? (
                  <Link
                    href="/testen"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#1d4ed8] hover:text-[#1e3a8a] transition-colors"
                  >
                    Kostenlos testen →
                  </Link>
                ) : (
                  <span className="text-xs text-[#94a3b8]">In Produktion</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', border: '1px solid #bfdbfe' }}
        >
          <h2 className="text-2xl font-extrabold text-[#0f172a] mb-3">
            Ihren Betrieb absichern — jetzt kostenlos starten
          </h2>
          <p className="text-[#64748b] mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            14 Tage kostenlos testen. Keine Kreditkarte, keine automatische Verlängerung.
            Alle Unterweisungen nach §12 ArbSchG und DGUV V2.
          </p>
          <Link
            href="/testen"
            className="inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-[10px] transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{
              background: '#1d4ed8',
              boxShadow: '0 4px 14px rgba(29,78,216,0.35)',
            }}
          >
            Kostenlos testen →
          </Link>
        </div>

      </div>
    </main>
  )
}
