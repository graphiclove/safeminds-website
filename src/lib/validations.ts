import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben').optional(),
  email: z.string().email('Bitte gültige E-Mail eingeben'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().optional(),
  form_source: z.string(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
  page_url: z.string().optional(),
})

export const trialSchema = z.object({
  email: z.string().email('Bitte gültige E-Mail eingeben'),
  form_source: z.string(),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
})

export type ContactSchema = z.infer<typeof contactSchema>
export type TrialSchema = z.infer<typeof trialSchema>
