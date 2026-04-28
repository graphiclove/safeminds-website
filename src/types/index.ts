export interface ContactFormData {
  name?: string
  email: string
  company?: string
  phone?: string
  message?: string
  form_source: string
  utm_source?: string
  utm_campaign?: string
  page_url?: string
}

export interface TrialFormData {
  email: string
  form_source: string
  utm_source?: string
  utm_campaign?: string
}

export interface ApiResponse {
  success: boolean
  message?: string
  error?: string
}

export interface Course {
  slug: string
  title: string
  duration: string
  price: number
  description: string
  category: string
  isFeatured?: boolean
}
