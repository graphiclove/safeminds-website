'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Course } from '@/data/courses'
import { useCourseSelection } from '@/lib/courseSelectionStore'

interface Props {
  course: Course
  onClose: () => void
}

export function CourseDetailModal({ course, onClose }: Props) {
  const { isSelected, addCourse, removeCourse } = useCourseSelection()
  const selected = isSelected(course.slug)
  const overlayRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  // Focus trap + ESC + body scroll lock
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null
    const getFocusable = () =>
      dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) ?? new NodeList() as unknown as NodeListOf<HTMLElement>

    // Autofocus first element
    getFocusable()[0]?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = Array.from(getFocusable())
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      prevFocus?.focus()
    }
  }, [onClose])

  const modal = (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(2px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="bg-white rounded-2xl w-full shadow-xl"
        style={{
          maxWidth: 520,
          maxHeight: '90vh',
          overflowY: 'auto',
          animation: 'fadeInScale 0.15s ease-out',
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-[#e2e8f0]">
          <div className="flex-1 pr-4">
            <span className="text-xs font-semibold text-[#3b82f6] bg-[#eff6ff] px-2.5 py-1 rounded-full">
              {course.category}
            </span>
            <h2 id="modal-title" className="font-bold text-[#0f172a] text-lg mt-3 leading-snug">
              {course.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Modal schließen"
            className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-[#64748b] hover:bg-[#f1f5f9] text-xl leading-none transition-colors focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 text-sm text-[#64748b]">
            <span>⏱ {course.duration}</span>
            {course.status === 'produktion' && (
              <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                Bald verfügbar
              </span>
            )}
          </div>

          <p className="text-[#334155] leading-relaxed">{course.description}</p>

          {course.status === 'produktion' && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
              Dieser Kurs befindet sich aktuell in der Produktion und wird in Kürze verfügbar sein.
              Vorbestellungen werden bei der Freischaltung priorisiert.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={() => {
              selected ? removeCourse(course.slug) : addCourse(course.slug)
              onClose()
            }}
            className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2 ${
              selected
                ? 'bg-[#eff6ff] text-[#1d4ed8] border border-[#dbeafe] hover:bg-[#dbeafe]'
                : 'text-white hover:bg-[#1e3a8a] hover:-translate-y-0.5'
            }`}
            style={!selected ? { background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.25)' } : undefined}
          >
            {course.status === 'produktion'
              ? selected ? '✓ Vorbestellt — entfernen' : '+ Vorbestellen'
              : selected ? '✓ Ausgewählt — entfernen' : '+ Zur Auswahl hinzufügen'
            }
          </button>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
