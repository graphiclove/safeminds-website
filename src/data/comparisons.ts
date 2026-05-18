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
  // ── Unterweisung24 ──────────────────────────────────────────────────────────
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
      { label: 'Sofort startklar (< 5 Min.)', safeminds: true, competitor: 'Aufwändiger' },
    ],
    benefits: [
      { icon: '🌍', title: 'Mehrsprachig — für gemischte Teams', desc: 'SafeMinds bietet Unterweisungen auf Deutsch, Polnisch, Türkisch, Rumänisch und weiteren Sprachen — ohne Aufpreis.' },
      { icon: '✅', title: 'Bestanden-Garantie', desc: 'Wer eine Frage falsch beantwortet, bekommt die Erklärung und kann die Frage wiederholen. Echtes Verstehen statt Abhaken.' },
      { icon: '📱', title: 'Entwickelt für Smartphones', desc: 'Auf Baustellen, im Lager oder im Schichtbetrieb — SafeMinds läuft vollständig auf jedem Smartphone ohne App-Download.' },
      { icon: '⚡', title: 'Schneller Einstieg', desc: 'Konto erstellen, Mitarbeitenden einladen — erste Unterweisung noch am selben Tag. Kein IT-Projekt.' },
      { icon: '🔔', title: 'Automatische Erinnerungen', desc: 'SafeMinds erinnert Mitarbeitende selbstständig, wenn eine Unterweisung zur Wiederholung fällig ist.' },
      { icon: '🏭', title: 'Branchenspezifisch aufgebaut', desc: 'Kurse zugeschnitten auf konkrete Gefährdungen in Bau, Pflege, Produktion, Logistik und Gastronomie.' },
    ],
    differentiators: [
      'Betriebe mit mehrsprachigen Mitarbeitenden',
      'Mobile Belegschaften ohne festen Büroarbeitsplatz',
      'Betriebe, die sofort starten wollen ohne Einrichtungsaufwand',
      'Teams, bei denen Wiederholen und Verstehen wichtiger ist als reines Abhaken',
    ],
    metaTitle: 'SafeMinds vs. Unterweisung24 — ehrlicher Vergleich 2025',
    metaDescription: 'SafeMinds oder Unterweisung24? Beide erfüllen §12 ArbSchG. Wir zeigen, wo die echten Unterschiede liegen — bei Sprache, Mobilfähigkeit und Einstieg.',
  },

  // ── WEKA ────────────────────────────────────────────────────────────────────
  {
    slug: 'weka',
    competitor: 'WEKA Unterweisungen',
    competitorUrl: 'weka.de',
    headline: 'SafeMinds vs. WEKA',
    subline: 'Speziallösung vs. Komplett-Suite — was passt zu Ihrem Betrieb?',
    intro: 'WEKA ist seit Jahrzehnten eine feste Größe im deutschen Arbeitsschutz — als Fachverlag und Softwareanbieter. Wer umfangreiche Rechtsdatenbanken und integriertes Gefährdungsbeurteilungs-Management braucht, ist bei WEKA gut aufgehoben. Wer schnell und unkompliziert Mitarbeitende unterweisen will, findet bei SafeMinds den direkteren Weg.',
    competitorStrengths: [
      'Jahrzehntelange Erfahrung im deutschen Arbeitsschutzrecht',
      'Umfangreiche Rechtsdatenbanken und Fachinformationen',
      'Integriertes Gefährdungsbeurteilungs-Management',
      'Bekannte und vertrauenswürdige Marke in der Branche',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat nach Kursabschluss', safeminds: true, competitor: true },
      { label: 'DSGVO-konforme Datenhaltung', safeminds: true, competitor: true },
      { label: 'Made in Germany', safeminds: true, competitor: true },
      { label: 'Rechtsdatenbank / Fachinformationen', safeminds: false, competitor: true, note: 'WEKA bietet umfangreiche juristische Hintergrundinformationen' },
      { label: 'Gefährdungsbeurteilungs-Tool', safeminds: false, competitor: true, note: 'Teil der WEKA-Suite' },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: 'Eingeschränkt' },
      { label: 'Mehrsprachig (4+ Sprachen)', safeminds: true, competitor: false },
      { label: 'Bestanden-Garantie mit Wiederholung', safeminds: true, competitor: false },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: 'Optional' },
      { label: 'Sofort startklar (< 5 Min.)', safeminds: true, competitor: false, note: 'WEKA erfordert Einrichtung und Schulung' },
      { label: 'Preis für KMU geeignet', safeminds: true, competitor: 'Eher Enterprise' },
    ],
    benefits: [
      { icon: '🎯', title: 'Fokus auf das Wesentliche', desc: 'SafeMinds macht genau eine Sache — und die richtig: Mitarbeitende rechtssicher unterweisen. Keine überladene Suite, kein Einarbeitungsaufwand.' },
      { icon: '💶', title: 'Passend für KMU', desc: 'WEKA ist auf größere Unternehmen ausgerichtet. SafeMinds passt vom Preis und Aufwand her auch zu Betrieben mit 5 bis 200 Mitarbeitenden.' },
      { icon: '📱', title: 'Wirklich mobilfähig', desc: 'Auf Baustellen, im Lager oder unterwegs — SafeMinds läuft vollständig auf jedem Smartphone ohne App-Download.' },
      { icon: '🌍', title: 'Mehrsprachig', desc: 'Für Teams mit internationalen Mitarbeitenden bietet SafeMinds Unterweisungen in 4+ Sprachen — WEKA fokussiert sich auf Deutsch.' },
      { icon: '⚡', title: 'Einstieg in Minuten', desc: 'Kein Implementierungsprojekt, kein Schulungsaufwand für Admins. SafeMinds ist sofort nutzbar.' },
      { icon: '✅', title: 'Bestanden-Garantie', desc: 'Fehlerhafte Antworten werden erklärt und wiederholt — nahezu 100 % Abschlussquote, auch ohne Vorkenntnisse.' },
    ],
    differentiators: [
      'Kleinere und mittlere Betriebe ohne eigene Arbeitsschutzabteilung',
      'Betriebe, die schnell starten wollen ohne IT-Projekt',
      'Teams mit mehrsprachigen Mitarbeitenden',
      'Mobile Belegschaften (Baustelle, Logistik, Pflege)',
    ],
    metaTitle: 'SafeMinds vs. WEKA — Vergleich für KMU 2025',
    metaDescription: 'SafeMinds oder WEKA Unterweisungen? WEKA punktet mit Rechtsdatenbanken, SafeMinds mit schnellem Einstieg und Mehrsprachigkeit. Ehrlicher Vergleich.',
  },

  // ── Haufe ───────────────────────────────────────────────────────────────────
  {
    slug: 'haufe',
    competitor: 'Haufe Unterweisungen',
    competitorUrl: 'haufe.de',
    headline: 'SafeMinds vs. Haufe',
    subline: 'HR-Suite mit Unterweisungsmodul vs. spezialisierte Unterweisungsplattform',
    intro: 'Haufe ist eine der bekanntesten HR-Plattformen in Deutschland. Arbeitsschutz-Unterweisungen sind dort ein Modul unter vielen — ideal, wenn man ohnehin die Haufe-Suite nutzt. SafeMinds wurde dagegen ausschließlich für Arbeitsschutz-Unterweisungen entwickelt und ist für Betriebe gedacht, die genau das brauchen — ohne große HR-Suite drumherum.',
    competitorStrengths: [
      'Sehr bekannte und etablierte Marke in deutschen Unternehmen',
      'Breite HR-Suite: von Payroll über Recruiting bis Compliance',
      'Gut geeignet, wenn Haufe bereits im Unternehmen eingesetzt wird',
      'Umfangreicher Kundensupport und Schulungsangebote',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat nach Kursabschluss', safeminds: true, competitor: true },
      { label: 'DSGVO-konforme Datenhaltung', safeminds: true, competitor: true },
      { label: 'Made in Germany', safeminds: true, competitor: true },
      { label: 'Integriertes HR-Management', safeminds: false, competitor: true, note: 'Haufe punktet mit breiter HR-Suite' },
      { label: 'Spezialisiert auf Arbeitsschutz', safeminds: true, competitor: false, note: 'SafeMinds fokussiert ausschließlich auf Unterweisungen' },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: 'Eingeschränkt' },
      { label: 'Mehrsprachig (4+ Sprachen)', safeminds: true, competitor: false },
      { label: 'Bestanden-Garantie mit Wiederholung', safeminds: true, competitor: false },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: 'Im Enterprise-Paket' },
      { label: 'Sofort startklar (< 5 Min.)', safeminds: true, competitor: false },
      { label: 'Preis für KMU geeignet', safeminds: true, competitor: 'Eher Großunternehmen' },
    ],
    benefits: [
      { icon: '🎯', title: 'Spezialisierung zahlt sich aus', desc: 'Haufe deckt viel ab — Arbeitsschutz ist eines von vielen Modulen. SafeMinds macht nichts anderes als Unterweisungen und ist darin konsequent optimiert.' },
      { icon: '💶', title: 'Kalkulierbare Kosten für KMU', desc: 'Haufe-Lösungen sind auf Großunternehmen ausgelegt. SafeMinds ist transparent bepreist und für Betriebe ab 5 Mitarbeitenden gemacht.' },
      { icon: '🌍', title: 'Mehrsprachig ohne Aufpreis', desc: 'Für Teams mit internationalen Mitarbeitenden bietet SafeMinds Unterweisungen in Deutsch, Polnisch, Türkisch, Rumänisch und weiteren Sprachen.' },
      { icon: '📱', title: 'Mobil an jedem Arbeitsplatz', desc: 'SafeMinds funktioniert vollständig auf Smartphones — ideal für Mitarbeitende ohne Büroarbeitsplatz.' },
      { icon: '⚡', title: 'Kein Implementierungsprojekt', desc: 'Haufe erfordert Setup, Schulung und oft Beratungsleistungen. SafeMinds ist in unter 5 Minuten einsatzbereit.' },
      { icon: '✅', title: 'Bestanden-Garantie', desc: 'Fehler werden erklärt und Fragen wiederholt — nicht nur abgehakt. Nahezu 100 % Abschlussquote.' },
    ],
    differentiators: [
      'Betriebe, die nur Unterweisungen brauchen — ohne große HR-Suite',
      'Kleine und mittlere Unternehmen mit überschaubarem Budget',
      'Betriebe mit mehrsprachigen Mitarbeitenden',
      'Alle, die sofort loslegen wollen — ohne Implementierungsaufwand',
    ],
    metaTitle: 'SafeMinds vs. Haufe — Unterweisungen im Vergleich 2025',
    metaDescription: 'SafeMinds oder Haufe? Haufe ist stark als HR-Suite, SafeMinds spezialisiert auf Arbeitsschutz-Unterweisungen. Ehrlicher Vergleich für KMU.',
  },

  // ── Präsenzseminar ──────────────────────────────────────────────────────────
  {
    slug: 'praesenzseminar',
    competitor: 'Präsenzunterweisung',
    competitorUrl: '',
    headline: 'Online-Unterweisung vs. Präsenzseminar',
    subline: 'Was ist rechtssicherer — und was kostet wirklich weniger?',
    intro: 'Die klassische Präsenzunterweisung hat ihren Platz — für komplexe Maschinen, Erstunterweisungen mit praktischen Anteilen oder wenn der persönliche Kontakt gewünscht ist. Für die jährliche Pflichtunterweisung nach §12 ArbSchG ist die Online-Variante jedoch in vielen Betrieben die sinnvollere Wahl. Hier zeigen wir die ehrlichen Unterschiede.',
    competitorStrengths: [
      'Persönlicher Kontakt und direkte Rückfragemöglichkeit',
      'Praktische Übungen möglich (z. B. Feuerlöscher, Erste Hilfe)',
      'Gut geeignet für sehr erklärungsbedürftige Inhalte',
      'Teamgefühl — alle werden gleichzeitig geschult',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat / schriftlicher Nachweis', safeminds: true, competitor: 'Manuell', note: 'Bei Präsenz müssen Listen geführt und archiviert werden' },
      { label: 'DSGVO-konforme Ablage', safeminds: true, competitor: 'Eigenverantwortlich' },
      { label: 'Praktische Übungen', safeminds: false, competitor: true, note: 'Für manche Inhalte bleibt die Präsenz unersetzlich' },
      { label: 'Kein Produktionsausfall', safeminds: true, competitor: false, note: 'Präsenz erfordert das gleichzeitige Fehlen aller Teilnehmenden' },
      { label: 'Mehrsprachig', safeminds: true, competitor: 'Aufwändig', note: 'Dolmetscher verursachen Kosten und Planungsaufwand' },
      { label: 'Auf Smartphone / jederzeit nutzbar', safeminds: true, competitor: false },
      { label: 'Automatische Dokumentation', safeminds: true, competitor: false },
      { label: 'Wiederholung jederzeit möglich', safeminds: true, competitor: false },
      { label: 'Skalierbar für viele Standorte', safeminds: true, competitor: false },
      { label: 'Kosten pro Mitarbeitenden < 10 €', safeminds: true, competitor: false, note: 'Präsenz-Seminare kosten oft 50–200 € pro Person inkl. Ausfallzeit' },
    ],
    benefits: [
      { icon: '📋', title: 'Rechtssicher ohne Papierchaos', desc: 'Online-Unterweisungen dokumentieren sich automatisch. Kein Sammeln von Unterschriftslisten, keine Ablageordner — alles revisionssicher digital.' },
      { icon: '🕐', title: 'Kein Produktionsausfall', desc: 'Bei Präsenzseminaren fehlt das gesamte Team gleichzeitig. Mit SafeMinds unterweist jeder in seiner Pause oder Freischicht — ohne Betriebsunterbrechung.' },
      { icon: '💶', title: 'Deutlich geringere Kosten', desc: 'Ein Präsenzseminar kostet inklusive Ausfallzeit oft 50–200 € pro Person. SafeMinds liegt weit darunter — und skaliert ohne Mehrkosten auf viele Standorte.' },
      { icon: '🌍', title: 'Mehrsprachig ohne Dolmetscher', desc: 'Bei Präsenzschulungen mit gemischten Teams braucht es Dolmetscher oder separate Termine. SafeMinds übersetzt automatisch — in unter einer Sekunde.' },
      { icon: '📱', title: 'Jederzeit und überall', desc: 'Keine Terminkoordination, kein Seminarraum, kein Anfahrtsweg. SafeMinds läuft auf jedem Smartphone, wann es passt.' },
      { icon: '🔄', title: 'Wiederholung jederzeit möglich', desc: 'Wenn jemand eine Unterweisung erneut durchgehen möchte, ist das mit einem Klick möglich — ohne neuen Seminartermin buchen zu müssen.' },
    ],
    differentiators: [
      'Jährliche Pflichtunterweisungen nach §12 ArbSchG für alle Mitarbeitenden',
      'Betriebe mit mehrsprachigen oder mobilen Teams',
      'Standorte ohne zentrale Schulungsinfrastruktur',
      'Unternehmen, die Kosten und Dokumentationsaufwand reduzieren wollen',
    ],
    metaTitle: 'Online-Unterweisung vs. Präsenzseminar — Vergleich 2025',
    metaDescription: 'Online oder Präsenz? Beide Wege sind rechtssicher. Wir vergleichen Kosten, Aufwand und Eignung ehrlich — und zeigen, für wen welcher Weg besser passt.',
  },

  // ── Lernsite ─────────────────────────────────────────────────────────────────
  {
    slug: 'lms',
    competitor: 'Allgemeine LMS-Plattformen',
    competitorUrl: '',
    headline: 'SafeMinds vs. Allgemeines LMS',
    subline: 'Speziallösung vs. Generalisten-Lernplattform',
    intro: 'Lernmanagementsysteme (LMS) wie Moodle, TalentLMS oder ähnliche Plattformen können theoretisch auch für Arbeitsschutz-Unterweisungen genutzt werden. Sie sind jedoch für allgemeines E-Learning gebaut — nicht für den deutschen Arbeitsschutz. Das zeigt sich spätestens bei der Frage nach §12 ArbSchG-Konformität und revisionssicherer Dokumentation.',
    competitorStrengths: [
      'Sehr flexibel — für viele Lernzwecke nutzbar',
      'Oft Open Source oder günstig in der Basisversion',
      'Große Community und viele Integrationen',
      'Eigene Kursinhalte können erstellt und hochgeladen werden',
    ],
    features: [
      { label: '§12 ArbSchG-konform (out of the box)', safeminds: true, competitor: false, note: 'LMS-Systeme müssen erst konfiguriert und inhaltlich befüllt werden' },
      { label: 'Fertige Arbeitsschutz-Kursinhalte', safeminds: true, competitor: false, note: 'Inhalte müssen bei LMS selbst erstellt oder zugekauft werden' },
      { label: 'Revisionssichere Zertifikate', safeminds: true, competitor: 'Konfigurationsaufwand' },
      { label: 'DSGVO-konform für Deutschland', safeminds: true, competitor: 'Abhängig von Hosting' },
      { label: 'Sofort startklar', safeminds: true, competitor: false, note: 'LMS erfordern Einrichtung, oft IT-Beteiligung und Kurserstellung' },
      { label: 'Mehrsprachige Kursinhalte inklusive', safeminds: true, competitor: false },
      { label: 'Branchenspezifische Inhalte inklusive', safeminds: true, competitor: false },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: 'Je nach System' },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: 'Konfigurierbar' },
      { label: 'Eigene Kurse erstellen', safeminds: false, competitor: true, note: 'Für maßgeschneiderte Inhalte bleibt das LMS flexibler' },
      { label: 'Preis bei kleinen Teams', safeminds: true, competitor: 'Variiert stark' },
    ],
    benefits: [
      { icon: '🚀', title: 'Sofort einsatzbereit', desc: 'Ein LMS ist ein leeres System — Kursinhalte, Zertifikate und Compliance-Logik müssen erst aufgebaut werden. SafeMinds ist von Tag 1 funktionsfähig.' },
      { icon: '⚖️', title: '§12 ArbSchG — von Anfang an', desc: 'Die gesetzlichen Anforderungen an Arbeitsschutz-Unterweisungen sind in Deutschland spezifisch. SafeMinds wurde genau dafür entwickelt — nicht nachgerüstet.' },
      { icon: '📋', title: 'Inhalte inklusive', desc: 'Statt selbst Kurse erstellen zu müssen, haben Sie bei SafeMinds sofort Zugriff auf fertige, rechtssichere Unterweisungen für Ihre Branche.' },
      { icon: '🌍', title: 'Mehrsprachigkeit ohne Eigenaufwand', desc: 'Mehrsprachige Inhalte in einem LMS selbst zu erstellen ist aufwändig. Bei SafeMinds sind 4+ Sprachen bereits enthalten.' },
      { icon: '💶', title: 'Gesamtkosten im Blick', desc: 'LMS-Lizenzen wirken günstig — hinzu kommen Kursproduktion, IT-Einrichtung, Pflege und Aktualisierungen. SafeMinds ist all-inclusive.' },
      { icon: '🔄', title: 'Inhaltspflege inklusive', desc: 'Wenn sich Gesetze oder Normen ändern, aktualisiert SafeMinds die Kursinhalte automatisch. In einem LMS liegt das in Ihrer Verantwortung.' },
    ],
    differentiators: [
      'Betriebe ohne eigenes E-Learning-Team oder Instructional Designer',
      'Unternehmen, die sofort starten wollen — ohne Aufbauprojekt',
      'Betriebe, die ausschließlich Arbeitsschutz-Unterweisungen brauchen',
      'Alle, die die gesetzliche Konformität fertig geliefert bekommen wollen',
    ],
    metaTitle: 'SafeMinds vs. LMS — Arbeitsschutz-Unterweisung im Vergleich 2025',
    metaDescription: 'LMS-System oder SafeMinds? Allgemeine Lernplattformen sind flexibel, aber nicht auf §12 ArbSchG ausgelegt. Ehrlicher Vergleich der Ansätze.',
  },
]

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug)
}
