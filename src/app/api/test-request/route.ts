import { NextRequest, NextResponse } from 'next/server'
import { testRequestSchema } from '@/lib/validations'
import { createBrevoContact, sendTestRequestNotification } from '@/lib/brevo'

export async function POST(req: NextRequest) {
  let parsed
  try {
    const body = await req.json()
    parsed = testRequestSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? 'Ungültige Eingabe' },
        { status: 400 }
      )
    }
  } catch {
    return NextResponse.json({ success: false, error: 'Ungültige Anfrage' }, { status: 400 })
  }

  const data = parsed.data

  // --- Brevo contact (best-effort — never block the user) ---
  try {
    const listId = Number(process.env.BREVO_LIST_ID_TEST_REQUEST)
    if (listId) {
      await createBrevoContact(
        {
          name: `${data.vorname} ${data.nachname}`.trim(),
          email: data.email,
          company: data.unternehmen,
          form_source: data.form_source,
        },
        listId
      )
    }
  } catch (err) {
    console.error('[/api/test-request] Brevo contact error:', err)
  }

  // --- Notification email (best-effort) ---
  try {
    await sendTestRequestNotification(data)
  } catch (err) {
    console.error('[/api/test-request] notification error:', err)
  }

  return NextResponse.json({ success: true, message: 'Anfrage gesendet' })
}
