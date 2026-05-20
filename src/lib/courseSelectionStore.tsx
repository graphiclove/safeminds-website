'use client'

import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react'
import { courses } from '@/data/courses'
import type { Course } from '@/data/courses'

const STORAGE_KEY = 'safeminds-course-selection'
const TTL_MS = 24 * 60 * 60 * 1000 // 24 h

interface StoredData {
  slugs: string[]
  lastUpdated: number
}

interface State {
  slugs: string[]
}

type Action =
  | { type: 'ADD'; slug: string }
  | { type: 'REMOVE'; slug: string }
  | { type: 'CLEAR' }
  | { type: 'HYDRATE'; slugs: string[] }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      if (state.slugs.includes(action.slug)) return state
      return { slugs: [...state.slugs, action.slug] }
    case 'REMOVE':
      return { slugs: state.slugs.filter((s) => s !== action.slug) }
    case 'CLEAR':
      return { slugs: [] }
    case 'HYDRATE':
      return { slugs: action.slugs }
    default:
      return state
  }
}

interface SelectionContextValue {
  slugs: string[]
  selectedCourses: Course[]
  count: number
  addCourse: (slug: string) => void
  removeCourse: (slug: string) => void
  clearSelection: () => void
  isSelected: (slug: string) => boolean
}

const SelectionContext = createContext<SelectionContextValue | null>(null)

export function CourseSelectionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { slugs: [] })

  // Hydrate from localStorage (with TTL check)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const data: StoredData = JSON.parse(raw)
      if (Date.now() - data.lastUpdated > TTL_MS) {
        localStorage.removeItem(STORAGE_KEY)
        return
      }
      dispatch({ type: 'HYDRATE', slugs: data.slugs })
    } catch {
      // Corrupt data — ignore
    }
  }, [])

  // Persist to localStorage on change
  useEffect(() => {
    try {
      const data: StoredData = { slugs: state.slugs, lastUpdated: Date.now() }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // Storage unavailable — ignore
    }
  }, [state.slugs])

  const selectedCourses = courses.filter((c) => state.slugs.includes(c.slug))

  const value: SelectionContextValue = {
    slugs: state.slugs,
    selectedCourses,
    count: state.slugs.length,
    addCourse: (slug) => dispatch({ type: 'ADD', slug }),
    removeCourse: (slug) => dispatch({ type: 'REMOVE', slug }),
    clearSelection: () => dispatch({ type: 'CLEAR' }),
    isSelected: (slug) => state.slugs.includes(slug),
  }

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
}

export function useCourseSelection() {
  const ctx = useContext(SelectionContext)
  if (!ctx) throw new Error('useCourseSelection must be used within CourseSelectionProvider')
  return ctx
}
