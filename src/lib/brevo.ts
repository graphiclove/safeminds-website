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
  listId: number,
  extraAttributes: Record<string, string> = {}
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
      ...extraAttributes,
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

  const receivedAt = new Date().toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>${subject}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a; background-color: #f8fafc; margin: 0; padding: 20px;">

  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

    <h2 style="color: #1d4ed8; margin-top: 0;">Neue Anfrage eingegangen</h2>

    <p>Jemand hat das Kontaktformular auf <strong>safeminds.eu</strong> ausgefüllt. Hier sind die Details:</p>

    <div style="background: #eff6ff; border-left: 4px solid #1d4ed8; padding: 20px; border-radius: 6px; margin: 28px 0;">
      <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Zusammenfassung der Anfrage</p>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 4px 0; color: #64748b; font-size: 14px; width: 110px; vertical-align: top;">Name:</td>
          <td style="padding: 4px 0; font-weight: 600;">${data.name ?? '—'}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">E-Mail:</td>
          <td style="padding: 4px 0;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Unternehmen:</td>
          <td style="padding: 4px 0;">${data.company ?? '—'}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Nachricht:</td>
          <td style="padding: 4px 0; white-space: pre-wrap;">${data.message ?? '—'}</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Eingegangen:</td>
          <td style="padding: 4px 0;">${receivedAt} Uhr</td>
        </tr>
      </table>
    </div>

    <p>Antworte direkt auf diese E-Mail — die Antwort geht automatisch an ${data.email}.</p>

    <p style="margin: 28px 0;">
      <a href="mailto:${data.email}" style="background: #1d4ed8; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
        Jetzt antworten →
      </a>
    </p>

    <p style="color: #94a3b8; font-size: 12px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
      SafeMinds — Online-Unterweisungssystem für Arbeitssicherheit<br>
      <a href="https://safeminds.eu" style="color: #94a3b8;">safeminds.eu</a>
    </p>

  </div>

</body>
</html>`

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

export async function sendTestRequestNotification(data: {
  vorname: string
  nachname: string
  email: string
  unternehmen: string
  position: string
  position_sonstiges?: string
  mitarbeiterzahl: string
  branche: string
  aktuelles_system: string
  begruendung?: string
  angefragte_kurse: string[]
}) {
  const name = `${data.vorname} ${data.nachname}`.trim()
  const subject = `Neue Test-Anfrage von ${name} (${data.unternehmen})`

  const receivedAt = new Date().toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const kurseListe = data.angefragte_kurse
    .map((k) => `<li style="margin: 3px 0;">${k}</li>`)
    .join('')

  const htmlContent = `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><title>${subject}</title></head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a; background-color: #f8fafc; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 40px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">

    <h2 style="color: #1d4ed8; margin-top: 0;">Neue Test-Zugang-Anfrage</h2>
    <p>Jemand hat das Anfrageformular auf <strong>safeminds.eu/anfrage</strong> ausgefüllt.</p>

    <div style="background: #eff6ff; border-left: 4px solid #1d4ed8; padding: 20px; border-radius: 6px; margin: 28px 0;">
      <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Kontaktdaten</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; width: 140px; vertical-align: top;">Name:</td>
            <td style="padding: 4px 0; font-weight: 600;">${name}</td></tr>
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">E-Mail:</td>
            <td style="padding: 4px 0;">${data.email}</td></tr>
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Unternehmen:</td>
            <td style="padding: 4px 0;">${data.unternehmen}</td></tr>
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Position:</td>
            <td style="padding: 4px 0;">${data.position}${data.position_sonstiges ? ` — ${data.position_sonstiges}` : ''}</td></tr>
      </table>
    </div>

    <div style="background: #f8fafc; border-left: 4px solid #64748b; padding: 20px; border-radius: 6px; margin: 0 0 28px 0;">
      <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Bedarf</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; width: 140px; vertical-align: top;">Mitarbeitende:</td>
            <td style="padding: 4px 0;">${data.mitarbeiterzahl}</td></tr>
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Branche:</td>
            <td style="padding: 4px 0;">${data.branche}</td></tr>
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Aktuelles System:</td>
            <td style="padding: 4px 0;">${data.aktuelles_system}</td></tr>
        ${data.begruendung ? `<tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Begründung:</td>
            <td style="padding: 4px 0; white-space: pre-wrap;">${data.begruendung}</td></tr>` : ''}
        <tr><td style="padding: 4px 0; color: #64748b; font-size: 14px; vertical-align: top;">Eingegangen:</td>
            <td style="padding: 4px 0;">${receivedAt} Uhr</td></tr>
      </table>
    </div>

    <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">
      Angefragte Kurse (${data.angefragte_kurse.length})
    </p>
    <ul style="margin: 0 0 28px 0; padding-left: 18px; color: #0f172a; font-size: 14px;">
      ${kurseListe}
    </ul>

    <p style="margin: 28px 0 12px 0;">
      <a href="mailto:${data.email}" style="background: #1d4ed8; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">
        Jetzt antworten →
      </a>
    </p>
    <p style="margin: 0 0 28px 0;">
      <a href="https://calendly.com/kontakt-safeminds/30min" style="background: #f8fafc; color: #1d4ed8; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; border: 1px solid #dbeafe;">
        📅 15-Min-Call buchen →
      </a>
    </p>

    <p style="color: #94a3b8; font-size: 12px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
      SafeMinds — Online-Unterweisungssystem für Arbeitssicherheit<br>
      <a href="https://safeminds.eu" style="color: #94a3b8;">safeminds.eu</a>
    </p>
  </div>
</body>
</html>`

  const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      sender: { name: 'SafeMinds Website', email: 'kontakt@safeminds.eu' },
      to: [{ email: 'kontakt@safeminds.eu', name: 'Cem Yücetas' }],
      replyTo: { email: data.email, name },
      subject,
      htmlContent,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    console.error('[Brevo] test-request notification error', response.status, text)
  }
}
