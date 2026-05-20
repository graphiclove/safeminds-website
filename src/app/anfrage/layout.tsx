import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test-Zugang anfragen — SafeMinds',
  description: 'Wähle deine Kurse aus und fordere einen kostenlosen 14-Tage-Testzugang an.',
}

export default function AnfrageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
