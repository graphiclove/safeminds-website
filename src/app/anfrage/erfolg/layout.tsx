import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anfrage erhalten — SafeMinds',
  description: 'Deine Test-Zugang-Anfrage ist eingegangen.',
  robots: { index: false, follow: false },
}

export default function AnfrageErfolgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
