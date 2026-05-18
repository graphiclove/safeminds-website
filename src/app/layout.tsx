import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Header } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { PromoBanner } from '@/components/PromoBanner'

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SafeMinds — Online-Unterweisungen Arbeitssicherheit',
  description:
    'Rechtssichere Online-Unterweisungen nach §12 ArbSchG für Betriebe ab 5 Mitarbeitenden. Kostenlos testen, Zertifikat sofort.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://safeminds.eu'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="de" className={`${geist.variable} antialiased`}>
        <body className="min-h-screen flex flex-col">
          <PromoBanner />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
