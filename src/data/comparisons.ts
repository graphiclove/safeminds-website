export interface ComparisonFeature {
  label: string
  safeminds: boolean | string
  competitor: boolean | string
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
  features: ComparisonFeature[]
  benefits: ComparisonBenefit[]
  switchReasons: string[]
  metaTitle: string
  metaDescription: string
}

export const comparisons: Comparison[] = [
  {
    slug: 'unterweisung24',
    competitor: 'Unterweisung24.de',
    competitorUrl: 'unterweisung24.de',
    headline: 'SafeMinds vs. Unterweisung24.de',
    subline: 'Welche Plattform ist besser für Ihren Betrieb?',
    intro: 'Beide Plattformen bieten digitale Arbeitsschutz-Unterweisungen. Wir zeigen Ihnen, wo SafeMinds klare Vorteile hat — und warum immer mehr Betriebe wechseln.',
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat direkt nach Abschluss', safeminds: true, competitor: true },
      { label: 'Mehrsprachig (4+ Sprachen)', safeminds: true, competitor: false },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: 'Eingeschränkt' },
      { label: 'Bestanden-Garantie / Wiederholung', safeminds: true, competitor: false },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: false },
      { label: 'DSGVO-konorme Ablage', safeminds: true, competitor: true },
      { label: 'Branchenspezifische Kurse', safeminds: true, competitor: 'Begrenzt' },
      { label: 'Keine IT-Installation nötig', safeminds: true, competitor: true },
      { label: 'In 3 Minuten startklar', safeminds: true, competitor: false },
      { label: 'Made in Germany', safeminds: true, competitor: true },
    ],
    benefits: [
      {
        icon: '🌍',
        title: 'Mehrsprachig ohne Aufpreis',
        desc: 'SafeMinds unterweist in Deutsch, Polnisch, Türkisch, Rumänisch und weiteren Sprachen. Kein Dolmetscher, keine Extra-Kosten — jeder Mitarbeiter versteht, was er tun muss.',
      },
      {
        icon: '✅',
        title: 'Bestanden-Garantie',
        desc: 'Bei falschen Antworten zeigt SafeMinds sofort die richtige Lösung und wiederholt die Frage. Nahezu 100 % Abschlussquote — auch bei Mitarbeitenden mit wenig Erfahrung.',
      },
      {
        icon: '📱',
        title: 'Wirklich mobilfähig',
        desc: 'SafeMinds wurde von Grund auf für Smartphones entwickelt. Kein Desktop nötig — ideal für Baustellen, Schichtbetrieb und Außendienst.',
      },
      {
        icon: '⚡',
        title: 'In 3 Minuten einsatzbereit',
        desc: 'Kein IT-Projekt, keine Schulung für Administratoren. Konto erstellen, Mitarbeitenden einladen — fertig. Erste Unterweisung noch am gleichen Tag.',
      },
      {
        icon: '🔔',
        title: 'Automatische Wiederholungs-Erinnerungen',
        desc: 'SafeMinds erinnert Ihre Mitarbeitenden automatisch, wenn eine Unterweisung zur Wiederholung fällig ist. Kein manuelles Nachfassen mehr.',
      },
      {
        icon: '🏭',
        title: 'Branchenspezifisch',
        desc: 'Kurse für Bau, Pflege, Produktion, Logistik, Gastronomie und Büro — zugeschnitten auf die tatsächlichen Gefährdungen in Ihrer Branche.',
      },
    ],
    switchReasons: [
      'Mehrsprachige Teams können endlich ohne Dolmetscher unterwiesen werden',
      'Mitarbeitende auf dem Smartphone unterweisen — ohne Desktop oder Büro',
      'Weniger Verwaltungsaufwand durch automatische Erinnerungen',
      'Günstigerer Einstieg für kleine und mittlere Betriebe',
      'Persönlicher Support statt anonymes Ticket-System',
    ],
    metaTitle: 'SafeMinds vs. Unterweisung24 — Vergleich 2025',
    metaDescription: 'SafeMinds oder Unterweisung24? Wir vergleichen Funktionen, Sprachen, Mobilfähigkeit und Preis. Finden Sie die bessere Lösung für Ihren Betrieb.',
  },
]

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug)
}
