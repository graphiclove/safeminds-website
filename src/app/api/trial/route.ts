import { NextRequest, NextResponse } from 'next/server'
import { trialSchema } from '@/lib/validations'
import { createBrevoContact } from '@/lib/brevo'
import { createClerkClient } from '@clerk/backend'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3002'

function clerk() {
  return createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY! })
}

async function sendMagicLinkEmail(email: string, magicLinkUrl: string) {
  await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      sender: { email: 'noreply@safeminds.eu', name: 'SafeMinds' },
      to: [{ email }],
      subject: 'Ihr SafeMinds-Testzugang ist bereit',
      htmlContent: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:40px 24px">
          <h2 style="color:#0F172A;margin-bottom:8px">Ihr Zugang ist bereit 🎉</h2>
          <p style="color:#475569;margin-bottom:24px">Klicken Sie auf den Button, um sich einzuloggen — kein Passwort nötig. Der Link ist 15 Minuten gültig.</p>
          <a href="${magicLinkUrl}" style="display:inline-block;background:#16A34A;color:#fff;font-weight:700;padding:14px 28px;border-radius:10px;text-decoration:none">
            Jetzt einloggen →
          </a>
          <p style="color:#94A3B8;font-size:13px;margin-top:32px">Falls der Button nicht funktioniert, kopieren Sie diesen Link: ${magicLinkUrl}</p>
        </div>
      `,
    }),
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = trialSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? 'Ungültige Eingabe' },
        { status: 400 }
      )
    }

    const { email } = parsed.data

    // 1. Brevo-Kontakt anlegen
    await createBrevoContact(parsed.data, Number(process.env.BREVO_LIST_ID_TRIAL))

    // 2. Clerk: Nutzer anlegen / Magic Link senden
    const c = clerk()

    // Check if user already exists
    const existing = await c.users.getUserList({ emailAddress: [email] })
    const existingUser = existing.data[0]

    if (existingUser) {
      // Existing user → create sign-in token + send via Brevo
      const tokenObj = await c.signInTokens.createSignInToken({
        userId: existingUser.id,
        expiresInSeconds: 900,
      })
      const magicLinkUrl = `${APP_URL}/sign-in#clerk-ticket=${tokenObj.token}`
      await sendMagicLinkEmail(email, magicLinkUrl)
    } else {
      // New user → create invitation (Clerk sends email automatically)
      await c.invitations.createInvitation({
        emailAddress: email,
        redirectUrl: `${APP_URL}/dashboard`,
        publicMetadata: { source: 'trial', form_source: parsed.data.form_source },
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Prüfe deine E-Mails — dein Zugang ist unterwegs.',
    })
  } catch (err) {
    console.error('[/api/trial]', err)
    return NextResponse.json(
      { success: false, error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.' },
      { status: 500 }
    )
  }
}
