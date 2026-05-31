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

export const testRequestSchema = z.object({
  vorname: z.string().min(1, 'Vorname erforderlich'),
  nachname: z.string().min(1, 'Nachname erforderlich'),
  email: z.string().email('Bitte gültige E-Mail eingeben'),
  unternehmen: z.string().min(1, 'Unternehmen erforderlich'),
  position: z.string().min(1, 'Position erforderlich'),
  position_sonstiges: z.string().optional(),
  mitarbeiterzahl: z.string().min(1, 'Mitarbeiterzahl erforderlich'),
  branche: z.string().min(1, 'Branche erforderlich'),
  aktuelles_system: z.string().min(1, 'Bitte wählen'),
  begruendung: z.string().optional(),
  telefon: z.string().min(1, 'Telefonnummer erforderlich'),
  datenschutz: z.boolean().refine((v) => v === true, 'Datenschutz muss akzeptiert werden'),
  angefragte_kurse: z.array(z.string()).min(1, 'Mindestens 1 Kurs erforderlich'),
  form_source: z.string(),
  page_url: z.string().optional(),
})

export type TestRequestSchema = z.infer<typeof testRequestSchema>

export type ContactSchema = z.infer<typeof contactSchema>
export type TrialSchema = z.infer<typeof trialSchema>
