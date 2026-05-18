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

        {/* Course cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filtered.map((course) => (
            <div
              key={course.slug}
              className={`bg-white rounded-2xl p-6 border transition-all hover:shadow-md ${
                course.status === 'verfügbar'
                  ? 'border-[#e8edf2] hover:border-[#bfdbfe]'
                  : 'border-dashed border-[#e2e8f0] opacity-70'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-[#3b82f6] bg-[#eff6ff] px-2.5 py-1 rounded-full">
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
              <h2 className="font-bold text-[#0f172a] mb-2 leading-snug text-sm">
                {course.title}
              </h2>
              <p className="text-xs text-[#64748b] leading-relaxed mb-4">{course.description}</p>
              {course.status === 'verfügbar' ? (
                <Link
                  href="/testen"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#3b82f6] hover:text-[#1d4ed8] transition-colors"
                >
                  Kostenlos testen →
                </Link>
              ) : (
                <span className="text-xs text-[#94a3b8]">In Produktion</span>
              )}
            </div>
          ))}
        </div>

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
