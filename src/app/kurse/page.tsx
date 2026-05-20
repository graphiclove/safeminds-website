'use client'

import { useState } from 'react'
import { courses, CATEGORIES, availableCourses } from '@/data/courses'
import { CourseCard } from '@/components/kurse/CourseCard'
import { CourseSelectionSidebar } from '@/components/kurse/CourseSelectionSidebar'
import { useCourseSelection } from '@/lib/courseSelectionStore'

function QuickSelectButtons() {
  const { addCourse } = useCourseSelection()

  function addGrundlagen() {
    availableCourses
      .filter((c) => c.category === 'Grundlagen')
      .forEach((c) => addCourse(c.slug))
  }

  function addAll() {
    availableCourses.forEach((c) => addCourse(c.slug))
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={addGrundlagen}
        className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-all focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
      >
        + Alle Grundlagen-Kurse
      </button>
      <button
        onClick={addAll}
        className="text-xs font-medium px-3 py-1.5 rounded-lg border border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#1d4ed8] hover:text-[#1d4ed8] transition-all focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
        title={`Fügt alle ${availableCourses.length} verfügbaren Kurse hinzu`}
      >
        + Komplett-Paket ({availableCourses.length} Kurse)
      </button>
    </div>
  )
}

export default function KursePage() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const { count } = useCourseSelection()

  const filtered =
    activeCategory === 'Alle'
      ? courses
      : courses.filter((c) => c.category === activeCategory)

  const available = availableCourses.length

  return (
    <main style={{ background: '#f8fafc' }} className="min-h-screen py-16 px-4 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-3">Kursübersicht</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">Alle Kurse</h1>
          <p className="text-base text-[#64748b] max-w-2xl leading-relaxed">
            <span className="font-semibold text-[#0f172a]">{available} Kurse</span> sofort verfügbar —
            rechtssicher nach §12 ArbSchG, DGUV V2 und BG BAU-Richtlinien.
            Alle Kurse enden mit revisionssicherem Zertifikat.
          </p>
        </div>

        {/* Filter row + Quick-select */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-8">
          <div className="flex flex-wrap gap-2">
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
          <QuickSelectButtons />
        </div>

        {/* Grid + Sidebar */}
        <div className="flex gap-8 items-start">
          <div
            className={`flex-1 grid sm:grid-cols-2 gap-4 mb-16 ${
              count > 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
            }`}
          >
            {filtered.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>

          <CourseSelectionSidebar />
        </div>

        {/* Bottom CTA — only when nothing is selected */}
        {count === 0 && (
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
              border: '1px solid #bfdbfe',
            }}
          >
            <h2 className="text-2xl font-extrabold text-[#0f172a] mb-3">
              Kurse auswählen — Test-Zugang anfragen
            </h2>
            <p className="text-[#64748b] mb-2 max-w-xl mx-auto text-sm leading-relaxed">
              Klicke auf „+ Zur Auswahl" bei den Kursen, die dich interessieren.
              Dann kannst du deinen personalisierten Test-Zugang in 3 Schritten anfragen.
            </p>
            <p className="text-xs text-[#94a3b8]">
              19 weitere Kurse befinden sich in Produktion und werden automatisch ergänzt.
            </p>
          </div>
        )}

      </div>
    </main>
  )
}
