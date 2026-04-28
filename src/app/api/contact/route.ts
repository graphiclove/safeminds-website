import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'
import { createBrevoContact } from '@/lib/brevo'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? 'Ungültige Eingabe' },
        { status: 400 }
      )
    }

    const listId =
      parsed.data.form_source === 'kontakt'
        ? Number(process.env.BREVO_LIST_ID_CONTACT)
        : parsed.data.form_source === 'footer-newsletter'
          ? Number(process.env.BREVO_LIST_ID_NEWSLETTER)
          : Number(process.env.BREVO_LIST_ID_DEMO)

    await createBrevoContact(parsed.data, listId)

    return NextResponse.json({ success: true, message: 'Anfrage gesendet' })
  } catch (err) {
    console.error('[/api/contact]', err)
    return NextResponse.json(
      { success: false, error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.' },
      { status: 500 }
    )
  }
}
