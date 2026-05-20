import type { ContactFormData, TrialFormData } from '@/types'

const BREVO_API_URL = 'https://api.brevo.com/v3'

function getHeaders() {
  return {
    'accept': 'application/json',
    'content-type': 'application/json',
    'api-key': process.env.BREVO_API_KEY!,
  }
}

export async function createBrevoContact(
  data: ContactFormData | TrialFormData,
  listId: number
) {
  const fullName = 'name' in data ? (data.name ?? '') : ''
  const [vorname, ...rest] = fullName.trim().split(/\s+/)
  const nachname = rest.join(' ')

  const company  = 'company' in data ? data.company  : undefined
  const message  = 'message' in data ? data.message  : undefined

  const response = await fetch(`${BREVO_API_URL}/contacts`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      email: data.email,
      attributes: {
        ...(vorname  && { VORNAME:      vorname }),
        ...(nachname && { NACHNAME:     nachname }),
        ...(company  && { UNTERNEHMEN:  company }),
        ...(message  && { NACHRICHT:    message }),
        FORM_SOURCE: data.form_source,
        ...(data.utm_source   && { UTM_SOURCE:   data.utm_source }),
        ...(data.utm_campaign && { UTM_CAMPAIGN: data.utm_campaign }),
        SUBMITTED_AT: new Date().toISOString(),
      },
      listIds: [listId],
      updateEnabled: true,
    }),
  })

  if (!response.ok && response.status !== 204) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.message ?? `Brevo API error: ${response.status}`)
  }

  return true
}
