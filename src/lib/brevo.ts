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

  const requestBody = {
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
  }

  const response = await fetch(`${BREVO_API_URL}/contacts`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(requestBody),
  })

  const responseText = await response.text()

  if (!response.ok && response.status !== 204) {
    console.error('[Brevo] error', response.status, responseText)
    const error = JSON.parse(responseText || '{}')
    throw new Error(error.message ?? `Brevo API error: ${response.status}`)
  }

  return true
}

export async function sendContactNotification(data: {
  name?: string
  email: string
  company?: string
  message?: string
  form_source: string
}) {
  const subject =
    data.form_source === 'kontakt'
      ? `Neue Kontaktanfrage von ${data.name ?? data.email}`
      : data.form_source === 'footer-newsletter'
        ? `Neuer Newsletter-Abonnent: ${data.email}`
        : `Neue Demo-Anfrage von ${data.name ?? data.email}`

  const rows = [
    ['Von', data.name ?? '—'],
    ['E-Mail', data.email],
    ['Unternehmen', data.company ?? '—'],
    ['Nachricht', data.message ?? '—'],
    ['Quelle', data.form_source],
    ['Eingegangen', new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })],
  ]

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#64748b;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#0f172a">${value}</td></tr>`
    )
    .join('')

  const htmlContent = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#1d4ed8;margin-bottom:16px">${subject}</h2>
      <table style="border-collapse:collapse;width:100%;background:#f8fafc;border-radius:8px;overflow:hidden">
        ${tableRows}
      </table>
      <p style="margin-top:20px;font-size:13px;color:#94a3b8">
        Diese E-Mail wurde automatisch von der SafeMinds-Website gesendet.
      </p>
    </div>
  `

  const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      sender: { name: 'SafeMinds Website', email: 'kontakt@safeminds.eu' },
      to: [{ email: 'kontakt@safeminds.eu', name: 'Cem Yücetas' }],
      replyTo: { email: data.email, name: data.name ?? data.email },
      subject,
      htmlContent,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    console.error('[Brevo] notification error', response.status, text)
    // Non-fatal — don't throw, form submission already succeeded
  }
}
