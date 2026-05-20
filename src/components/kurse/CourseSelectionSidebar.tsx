'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCourseSelection } from '@/lib/courseSelectionStore'

export function CourseSelectionSidebar() {
  const { selectedCourses, count, removeCourse, clearSelection } = useCourseSelection()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  if (count === 0) return null

  const courseList = (
    <div className="space-y-2.5 max-h-64 overflow-y-auto pr-0.5">
      {selectedCourses.map((c) => (
        <div key={c.slug} className="flex items-start gap-2 group">
          <span className="flex-1 text-sm text-[#0f172a] leading-snug">{c.title}</span>
          {c.status === 'produktion' && (
            <span className="shrink-0 text-xs bg-amber-50 text-amber-600 px-1.5 py-0.5 rounded-full border border-amber-200 mt-0.5">
              Vorbestellung
            </span>
          )}
          <button
            onClick={() => removeCourse(c.slug)}
            aria-label={`${c.title} entfernen`}
            className="shrink-0 w-5 h-5 flex items-center justify-center rounded text-[#94a3b8] hover:text-[#ef4444] hover:bg-red-50 transition-colors focus-visible:ring-2 focus-visible:ring-[#1d4ed8] text-base leading-none mt-0.5"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )

  const ctaSection = (
    <div className="space-y-3 pt-4 border-t border-[#f1f5f9]">
      {count >= 10 && (
        <div className="bg-[#eff6ff] border border-[#dbeafe] rounded-xl p-3 text-xs text-[#1d4ed8] leading-relaxed">
          Du hast viele Kurse gewählt — dein Test-Zugang wird alle enthält.
        </div>
      )}
      <button
        onClick={() => router.push('/anfrage')}
        className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
        style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.3)' }}
      >
        Test-Zugang anfragen →
      </button>
      <button
        onClick={clearSelection}
        className="w-full text-xs text-[#94a3b8] hover:text-[#64748b] transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#1d4ed8] rounded"
      >
        Auswahl leeren
      </button>
    </div>
  )

  return (
    <>
      {/* ── Desktop sticky sidebar ── */}
      <aside
        className="hidden lg:block sticky top-24 w-72 shrink-0 self-start"
        aria-label="Kursauswahl"
      >
        <div
          className="rounded-2xl border border-[#e2e8f0] bg-white p-5"
          style={{ boxShadow: '0 4px 20px rgba(15,23,42,0.08)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-[#0f172a]">Deine Auswahl</h2>
            <span
              className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
              style={{ background: '#1d4ed8' }}
            >
              {count} {count === 1 ? 'Kurs' : 'Kurse'}
            </span>
          </div>
          {courseList}
          {ctaSection}
        </div>
      </aside>

      {/* ── Mobile: fixed bottom bar + sheet ── */}
      <div
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-[#e2e8f0]"
        style={{ boxShadow: '0 -4px 20px rgba(15,23,42,0.1)' }}
      >
        {/* Expandable sheet */}
        {mobileOpen && (
          <div
            id="mobile-cart-sheet"
            className="border-b border-[#e2e8f0] px-4 pt-4 pb-2 max-h-64 overflow-y-auto"
          >
            {courseList}
            <div className="mt-3">
              <button
                onClick={clearSelection}
                className="text-xs text-[#94a3b8] hover:text-[#64748b] transition-colors py-1"
              >
                Auswahl leeren
              </button>
            </div>
          </div>
        )}

        {/* Bar */}
        <div className="flex items-center gap-3 p-4">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-cart-sheet"
            className="flex-1 flex items-center gap-2 text-left focus-visible:ring-2 focus-visible:ring-[#1d4ed8] rounded"
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
              style={{ background: '#1d4ed8' }}
            >
              {count}
            </span>
            <span className="font-semibold text-[#0f172a] text-sm">
              {count === 1 ? '1 Kurs' : `${count} Kurse`} ausgewählt
            </span>
            <span className="text-[#94a3b8] text-xs">{mobileOpen ? '▼' : '▲'}</span>
          </button>
          <button
            onClick={() => router.push('/anfrage')}
            className="shrink-0 py-2.5 px-5 rounded-xl font-bold text-sm text-white focus-visible:ring-2 focus-visible:ring-[#1d4ed8] focus-visible:ring-offset-2"
            style={{ background: '#1d4ed8', boxShadow: '0 4px 12px rgba(29,78,216,0.3)' }}
          >
            Anfragen →
          </button>
        </div>
      </div>

      {/* Mobile spacer */}
      <div className="lg:hidden h-20" aria-hidden="true" />
    </>
  )
}
