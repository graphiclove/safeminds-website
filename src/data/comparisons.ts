export interface ComparisonFeature {
  label: string
  safeminds: boolean | string
  competitor: boolean | string
  note?: string
}

export interface ComparisonBenefit {
  icon: string
  title: string
  desc: string
}

export interface Comparison {
  slug: string
  competitor: string
  competitorUrl: string
  headline: string
  subline: string
  intro: string
  competitorStrengths: string[]
  features: ComparisonFeature[]
  benefits: ComparisonBenefit[]
  differentiators: string[]
  metaTitle: string
  metaDescription: string
}

export const comparisons: Comparison[] = [
  {
    slug: 'unterweisung24',
    competitor: 'Unterweisung24.de',
    competitorUrl: 'unterweisung24.de',
    headline: 'SafeMinds vs. Unterweisung24',
    subline: 'Ein ehrlicher Vergleich — ohne Schönfärberei',
    intro: 'Unterweisung24.de ist eine etablierte Plattform für digitale Arbeitsschutz-Unterweisungen. Beide Anbieter erfüllen die gesetzlichen Anforderungen nach §12 ArbSchG. Der Unterschied liegt im Detail: Zielgruppe, Sprachunterstützung und wie schnell man startklar ist.',
    competitorStrengths: [
      'Langjährige Erfahrung im deutschen Arbeitsschutzmarkt',
      'Breites bestehendes Kursangebot',
      'Solide rechtssichere Dokumentation',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat nach Kursabschluss', safeminds: true, competitor: true },
      { label: 'DSGVO-konforme Datenhaltung', safeminds: true, competitor: true },
      { label: 'Keine IT-Installation nötig', safeminds: true, competitor: true },
      { label: 'Made in Germany', safeminds: true, competitor: true },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: 'Eingeschränkt', note: 'SafeMinds wurde von Anfang an für Mobilgeräte entwickelt' },
      { label: 'Mehrsprachig (4+ Sprachen)', safeminds: true, competitor: false, note: 'Für Teams mit internationalen Mitarbeitenden relevant' },
      { label: 'Bestanden-Garantie mit Wiederholung', safeminds: true, competitor: false },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: false },
      { label: 'Sofort startklar (< 5 Min.)', safeminds: true, competitor: 'Aufwändiger', note: 'Unterweisung24 erfordert mehr Einrichtungszeit' },
    ],
    benefits: [
      {
        icon: '🌍',
        title: 'Mehrsprachig — für gemischte Teams',
        desc: 'In vielen Betrieben sprechen nicht alle Mitarbeitenden fließend Deutsch. SafeMinds bietet Unterweisungen auf Deutsch, Polnisch, Türkisch, Rumänisch und weiteren Sprachen — ohne Aufpreis.',
      },
      {
        icon: '✅',
        title: 'Bestanden-Garantie',
        desc: 'Wer eine Frage falsch beantwortet, bekommt sofort die Erklärung und kann die Frage wiederholen. Das sorgt für echtes Verstehen — nicht nur für ein Abhaken.',
      },
      {
        icon: '📱',
        title: 'Entwickelt für Smartphones',
        desc: 'Wer auf einer Baustelle, im Lager oder im Schichtbetrieb arbeitet, hat selten einen Desktop. SafeMinds funktioniert vollständig auf jedem Smartphone — ohne App-Download.',
      },
      {
        icon: '⚡',
        title: 'Schneller Einstieg',
        desc: 'Konto erstellen, Mitarbeitenden einladen — erste Unterweisung noch am selben Tag. Kein IT-Projekt, keine Schulung für Administratoren.',
      },
      {
        icon: '🔔',
        title: 'Automatische Erinnerungen',
        desc: 'SafeMinds erinnert Ihre Mitarbeitenden selbstständig, wenn eine Unterweisung zur Wiederholung fällig ist. Kein manuelles Nachfassen nötig.',
      },
      {
        icon: '🏭',
        title: 'Branchenspezifisch aufgebaut',
        desc: 'Die Kurse sind nicht generisch — sie sind auf konkrete Gefährdungen in Bau, Pflege, Produktion, Logistik und Gastronomie zugeschnitten.',
      },
    ],
    differentiators: [
      'Besonders geeignet für Betriebe mit mehrsprachigen Mitarbeitenden',
      'Besonders geeignet für mobile Belegschaften ohne festen Büroarbeitsplatz',
      'Schnellerer Einstieg ohne Einrichtungsaufwand',
      'Automatisierte Erinnerungen reduzieren den Verwaltungsaufwand',
    ],
    metaTitle: 'SafeMinds vs. Unterweisung24 — ehrlicher Vergleich 2025',
    metaDescription: 'SafeMinds oder Unterweisung24? Beide erfüllen §12 ArbSchG. Wir zeigen, wo die echten Unterschiede liegen — bei Sprache, Mobilfähigkeit und Einstieg.',
  },
]

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug)
}
