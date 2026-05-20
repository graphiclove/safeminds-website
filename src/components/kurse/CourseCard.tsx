'use client'

import { useState } from 'react'
import type { Course } from '@/data/courses'
import { useCourseSelection } from '@/lib/courseSelectionStore'
import { CourseDetailModal } from './CourseDetailModal'

interface Props {
  course: Course
}

export function CourseCard({ course }: Props) {
  const { isSelected, addCourse, removeCourse } = useCourseSelection()
  const [showModal, setShowModal] = useState(false)
  const selected = isSelected(course.slug)
  const isProduction = course.status === 'produktion'

  return (
    <>
      <div
        className={`relative bg-white rounded-2xl p-6 border transition-all duration-200 ${
          selected
            ? 'ring-2 ring-[#1d4ed8] ring-offset-2 border-[#bfdbfe] shadow-md'
            : isProduction
              ? 'border-dashed border-[#e2e8f0] opacity-70 hover:opacity-90 hover:shadow-sm'
              : 'border-[#e8edf2] hover:border-[#bfdbfe] hover:shadow-md hover:-translate-y-0.5'
        }`}
      >
        {/* Selected badge */}
        {selected && (
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 shadow-sm"
            style={{ background: '#1d4ed8' }}
            aria-hidden="true"
          >
            ✓
          </div>
        )}

        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-[#3b82f6] bg-[#eff6ff] px-2.5 py-1 rounded-full">
            {course.category}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {isProduction && (
              <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                Bald verfügbar
              </span>
            )}
            <span className="text-xs text-[#94a3b8]">⏱ {course.duration}</span>
          </div>
        </div>

        <h2 className="font-bold text-[#0f172a] mb-2 leading-snug text-sm">{course.title}</h2>
        <p className="text-xs text-[#64748b] leading-relaxed mb-4">{course.description}</p>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => selected ? removeCourse(course.slug) : addCourse(course.slug)}
            aria-pressed={selected}
            aria-label={`${course.title} ${selected ? 'aus Auswahl entfernen' : 'zur Auswahl hinzufügen'}`}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2 ${
              selected
                ? 'bg-[#eff6ff] text-[#1d4ed8] border border-[#dbeafe] hover:bg-[#dbeafe]'
                : 'text-white hover:bg-[#1e3a8a] shadow-sm hover:shadow-md'
            }`}
            style={!selected ? { background: '#1d4ed8' } : undefined}
          >
            {isProduction
              ? selected ? '✓ Vorbestellt' : '+ Vorbestellen'
              : selected ? '✓ Ausgewählt' : '+ Zur Auswahl'
            }
          </button>
          <button
            onClick={() => setShowModal(true)}
            aria-label={`Details zu ${course.title} anzeigen`}
            className="py-2 px-3 rounded-lg text-xs font-medium text-[#64748b] border border-[#e2e8f0] bg-white hover:border-[#1d4ed8] hover:text-[#0f172a] transition-all focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
          >
            Details
          </button>
        </div>
      </div>

      {showModal && (
        <CourseDetailModal course={course} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}
