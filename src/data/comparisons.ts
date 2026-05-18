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

// Legend for competitor feature values:
// true      = confirmed available
// false     = confirmed NOT available (only use when verifiable from their own public materials)
// '—'       = not publicly confirmed / unclear
// string    = nuanced description where a boolean doesn't fit

export const comparisons: Comparison[] = [
  // ── Unterweisung24 ──────────────────────────────────────────────────────────
  {
    slug: 'unterweisung24',
    competitor: 'Unterweisung24.de',
    competitorUrl: 'unterweisung24.de',
    headline: 'SafeMinds vs. Unterweisung24',
    subline: 'Ein sachlicher Vergleich zweier Unterweisungsplattformen',
    intro: 'Unterweisung24.de ist eine Plattform für digitale Arbeitsschutz-Unterweisungen im deutschsprachigen Markt. Beide Anbieter verfolgen dasselbe Ziel: rechtssichere Unterweisungen nach §12 ArbSchG. Wo genau die Unterschiede liegen, zeigt der folgende Vergleich — soweit die Informationen öffentlich zugänglich sind.',
    competitorStrengths: [
      'Fokussiert auf den deutschen Arbeitsschutzmarkt',
      'Digitale Unterweisungen mit Zertifikat',
      'Keine Software-Installation erforderlich',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat nach Kursabschluss', safeminds: true, competitor: true },
      { label: 'DSGVO-konforme Datenhaltung', safeminds: true, competitor: true },
      { label: 'Keine IT-Installation nötig', safeminds: true, competitor: true },
      { label: 'Mehrsprachig (4+ Sprachen)', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt' },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt' },
      { label: 'Bestanden-Garantie mit Wiederholung', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt' },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt' },
      { label: 'Branchenspezifische Kurse', safeminds: true, competitor: '—', note: 'Umfang nicht öffentlich bekannt' },
    ],
    benefits: [
      { icon: '🌍', title: 'Mehrsprachig — für gemischte Teams', desc: 'SafeMinds bietet Unterweisungen auf Deutsch, Polnisch, Türkisch, Rumänisch und weiteren Sprachen — ohne Aufpreis. Für Betriebe mit internationalen Mitarbeitenden ein entscheidender Unterschied.' },
      { icon: '✅', title: 'Bestanden-Garantie', desc: 'Wer eine Frage falsch beantwortet, bekommt die Erklärung und kann die Frage wiederholen. Echtes Verstehen statt reines Abhaken.' },
      { icon: '📱', title: 'Entwickelt für Smartphones', desc: 'SafeMinds läuft vollständig auf jedem Smartphone ohne App-Download — ideal für Mitarbeitende ohne festen Büroarbeitsplatz.' },
      { icon: '⚡', title: 'Schneller Einstieg', desc: 'Konto erstellen, Mitarbeitende einladen — erste Unterweisung noch am selben Tag. Kein IT-Projekt, keine Einrichtungszeit.' },
      { icon: '🔔', title: 'Automatische Erinnerungen', desc: 'SafeMinds erinnert Mitarbeitende selbstständig, wenn eine Unterweisung zur Wiederholung fällig ist.' },
      { icon: '🏭', title: 'Branchenspezifisch', desc: 'Kurse zugeschnitten auf konkrete Gefährdungen in Bau, Pflege, Produktion, Logistik und Gastronomie.' },
    ],
    differentiators: [
      'Betriebe mit mehrsprachigen Mitarbeitenden (4+ Sprachen inklusive)',
      'Mobile Belegschaften ohne festen Büroarbeitsplatz',
      'Teams, bei denen Verstehen wichtiger ist als reines Abhaken',
      'Betriebe, die automatische Erinnerungsfunktionen benötigen',
    ],
    metaTitle: 'SafeMinds vs. Unterweisung24 — Vergleich 2025',
    metaDescription: 'SafeMinds oder Unterweisung24? Beide erfüllen §12 ArbSchG. Wir zeigen die öffentlich verifizierbaren Unterschiede bei Sprache, Mobilfähigkeit und Funktionen.',
  },

  // ── WEKA ────────────────────────────────────────────────────────────────────
  {
    slug: 'weka',
    competitor: 'WEKA E-Learning',
    competitorUrl: 'weka-elearning.de',
    headline: 'SafeMinds vs. WEKA E-Learning',
    subline: 'Speziallösung vs. etablierter Arbeitsschutz-Verlag',
    intro: 'WEKA ist eine der bekanntesten Adressen im deutschen Arbeitsschutz — als Fachverlag und Softwareanbieter mit jahrzehntelanger Erfahrung. Ihr E-Learning-Angebot für Unterweisungen ist solide und rechtssicher. SafeMinds setzt auf einen anderen Ansatz: kompakter, mobiler und mit Fokus auf mehrsprachige Betriebe.',
    competitorStrengths: [
      'Jahrzehntelange Erfahrung im deutschen Arbeitsschutzmarkt',
      'Breites Kursangebot auf Deutsch und Englisch',
      'iOS und Android offiziell unterstützt (Tablet empfohlen)',
      'Integrierbar als SCORM-Paket in eigene LMS-Systeme',
      'Umfangreiche Rechtsdatenbanken und Fachinhalte im Gesamtportfolio',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat nach Kursabschluss', safeminds: true, competitor: true },
      { label: 'DSGVO-konforme Datenhaltung', safeminds: true, competitor: true },
      { label: 'Made in Germany', safeminds: true, competitor: true },
      { label: 'Auf Smartphone / Tablet nutzbar', safeminds: true, competitor: true, note: 'WEKA: iOS & Android unterstützt, Tablet empfohlen' },
      { label: 'Kurse auf Deutsch', safeminds: true, competitor: true },
      { label: 'Kurse auf Englisch', safeminds: true, competitor: true, note: 'WEKA: Großteil der Kurse auf Englisch verfügbar' },
      { label: 'Weitere Sprachen (PL, TR, RO …)', safeminds: true, competitor: '—', note: 'WEKA: weitere Sprachen laut Website auf Anfrage' },
      { label: 'Bestanden-Garantie mit Wiederholung', safeminds: true, competitor: '—', note: 'WEKA: Verständniskontrolle vorhanden, Wiederholung nicht bestätigt' },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt' },
      { label: 'Sofort startklar ohne Einrichtung', safeminds: true, competitor: '—', note: 'WEKA bietet SaaS und SCORM — Aufwand je nach Modell unterschiedlich' },
      { label: 'Preis öffentlich einsehbar', safeminds: true, competitor: false, note: 'WEKA: nur individuelle Angebote auf Anfrage' },
    ],
    benefits: [
      { icon: '🎯', title: 'Klarer Fokus', desc: 'SafeMinds macht genau eine Sache und ist darin optimiert: Mitarbeitende in Deutschland rechtssicher unterweisen. Kein Verlag-Gesamtportfolio, das man durchsuchen muss.' },
      { icon: '💶', title: 'Transparente Preise', desc: 'WEKA arbeitet mit individuellen Jahreslizenzen auf Anfrage. Bei SafeMinds sind die Konditionen von Anfang an klar — kein Angebotsprozess nötig.' },
      { icon: '🌍', title: 'Mehr Sprachen ohne Aufpreis', desc: 'WEKA bietet DE + EN, weitere auf Anfrage. SafeMinds enthält Polnisch, Türkisch, Rumänisch und mehr standardmäßig — ohne Mehrkosten.' },
      { icon: '⚡', title: 'Direkt loslegen', desc: 'Kein SCORM-Export, kein LMS nötig. SafeMinds ist sofort als SaaS nutzbar — Konto erstellen, Mitarbeitende einladen, fertig.' },
      { icon: '✅', title: 'Bestanden-Garantie', desc: 'Fehlerhafte Antworten werden erklärt und Fragen wiederholt. Nahezu 100 % Abschlussquote — auch bei Mitarbeitenden ohne Vorkenntnisse.' },
      { icon: '🔔', title: 'Automatische Erinnerungen', desc: 'SafeMinds erinnert Mitarbeitende selbstständig bei fälligen Wiederholungsunterweisungen.' },
    ],
    differentiators: [
      'Betriebe, die mehr als Deutsch und Englisch benötigen',
      'Teams, die ohne LMS-Eigeninfrastruktur starten wollen',
      'Betriebe, die transparente Preise ohne Angebotsprozess möchten',
      'Alle, die automatische Erinnerungen als Standard-Feature brauchen',
    ],
    metaTitle: 'SafeMinds vs. WEKA E-Learning — Vergleich 2025',
    metaDescription: 'WEKA E-Learning oder SafeMinds? WEKA ist ein etablierter Anbieter mit DE+EN-Kursen. SafeMinds punktet mit mehr Sprachen, transparenten Preisen und schnellem Einstieg.',
  },

  // ── Haufe ───────────────────────────────────────────────────────────────────
  {
    slug: 'haufe',
    competitor: 'Haufe',
    competitorUrl: 'haufe.de',
    headline: 'SafeMinds vs. Haufe',
    subline: 'Speziallösung für Unterweisungen vs. breite HR-Plattform',
    intro: 'Haufe ist eine der bekanntesten HR-Plattformen in Deutschland mit einem breiten Portfolio aus Software, Weiterbildung und Fachinhalten. Arbeitsschutz-Unterweisungen sind dabei ein Themenbereich unter vielen. SafeMinds wurde ausschließlich für diesen Zweck entwickelt — für Betriebe, die genau das suchen, ohne große Suite drumherum.',
    competitorStrengths: [
      'Sehr bekannte und etablierte Marke in deutschen Unternehmen',
      'Breites HR-Portfolio: von Payroll über Recruiting bis Compliance',
      'Gut geeignet, wenn Haufe bereits im Unternehmen eingesetzt wird',
      'Umfangreiche Fachinhalte und rechtliche Hintergrundinformationen',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat nach Kursabschluss', safeminds: true, competitor: '—', note: 'Haufe bietet viele Unterweisungsformate — softwaregestütztes E-Learning-Zertifikat nicht eindeutig belegt' },
      { label: 'DSGVO-konforme Datenhaltung', safeminds: true, competitor: true },
      { label: 'Made in Germany', safeminds: true, competitor: true },
      { label: 'Integriertes HR-Management', safeminds: false, competitor: true, note: 'Haufe bietet eine vollständige HR-Suite' },
      { label: 'Spezialisiert auf Arbeitsschutz-Unterweisungen', safeminds: true, competitor: false, note: 'Haufe ist eine breite HR-Plattform, Arbeitsschutz ist ein Thema von vielen' },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt für Unterweisungsmodule' },
      { label: 'Mehrsprachig (4+ Sprachen)', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt' },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: '—', note: 'Nicht öffentlich bestätigt' },
      { label: 'Sofort startklar (< 5 Min.)', safeminds: true, competitor: '—', note: 'Setup-Aufwand nicht öffentlich beschrieben' },
      { label: 'Preis öffentlich einsehbar', safeminds: true, competitor: false, note: 'Haufe arbeitet mit individuellen Angeboten' },
    ],
    benefits: [
      { icon: '🎯', title: 'Fokus auf das Wesentliche', desc: 'Haufe deckt viel ab — Arbeitsschutz ist eines von vielen Modulen. SafeMinds ist ausschließlich für Unterweisungen entwickelt und darin konsequent optimiert.' },
      { icon: '💶', title: 'Transparente Preisgestaltung', desc: 'Haufe arbeitet mit individuellen Angeboten. SafeMinds ist klar bepreist — passend für Betriebe, die ohne langen Angebotsprozess starten wollen.' },
      { icon: '🌍', title: 'Mehrsprachig ohne Aufpreis', desc: 'Für Teams mit internationalen Mitarbeitenden bietet SafeMinds Unterweisungen in 4+ Sprachen standardmäßig — ohne Mehrkosten.' },
      { icon: '📱', title: 'Mobil an jedem Arbeitsplatz', desc: 'SafeMinds funktioniert vollständig auf Smartphones — ideal für Mitarbeitende ohne Büroarbeitsplatz.' },
      { icon: '⚡', title: 'Schnell startklar', desc: 'Kein Implementierungsprojekt. SafeMinds ist in unter 5 Minuten einsatzbereit — Konto erstellen, Mitarbeitende einladen, fertig.' },
      { icon: '✅', title: 'Bestanden-Garantie', desc: 'Fehler werden erklärt und Fragen wiederholt — nahezu 100 % Abschlussquote, auch ohne Vorkenntnisse.' },
    ],
    differentiators: [
      'Betriebe, die nur Unterweisungen brauchen — ohne große HR-Suite',
      'Kleine und mittlere Betriebe mit klar kalkulierbarem Budget',
      'Teams mit mehrsprachigen Mitarbeitenden',
      'Alle, die sofort loslegen wollen ohne Einrichtungsaufwand',
    ],
    metaTitle: 'SafeMinds vs. Haufe — Unterweisungen im Vergleich 2025',
    metaDescription: 'SafeMinds oder Haufe? Haufe punktet als breite HR-Plattform, SafeMinds ist spezialisiert auf Arbeitsschutz-Unterweisungen. Sachlicher Vergleich für KMU.',
  },

  // ── Präsenzseminar ──────────────────────────────────────────────────────────
  {
    slug: 'praesenzseminar',
    competitor: 'Präsenzunterweisung',
    competitorUrl: '',
    headline: 'Online-Unterweisung vs. Präsenzseminar',
    subline: 'Was ist rechtssicherer — und was kostet wirklich weniger?',
    intro: 'Die klassische Präsenzunterweisung hat ihren Platz — für komplexe Maschinen, Erstunterweisungen mit praktischen Anteilen oder wenn persönlicher Kontakt gewünscht ist. Für die jährliche Pflichtunterweisung nach §12 ArbSchG ist die Online-Variante in vielen Betrieben jedoch die praktischere Wahl. Hier die ehrlichen Unterschiede.',
    competitorStrengths: [
      'Persönlicher Kontakt und direkte Rückfragemöglichkeit',
      'Praktische Übungen möglich (z. B. Feuerlöscher, Erste Hilfe)',
      'Gut geeignet für sehr erklärungsbedürftige oder sicherheitskritische Inhalte',
      'Teamgefühl — alle werden gemeinsam geschult',
    ],
    features: [
      { label: '§12 ArbSchG-konform', safeminds: true, competitor: true },
      { label: 'Zertifikat / schriftlicher Nachweis', safeminds: true, competitor: 'Manuell', note: 'Bei Präsenz müssen Listen geführt und archiviert werden' },
      { label: 'Automatische Dokumentation', safeminds: true, competitor: false },
      { label: 'Praktische Übungen möglich', safeminds: false, competitor: true, note: 'Für manche Inhalte bleibt die Präsenz unersetzlich' },
      { label: 'Kein Produktionsausfall nötig', safeminds: true, competitor: false, note: 'Präsenz erfordert gleichzeitiges Fehlen aller Teilnehmenden' },
      { label: 'Mehrsprachig', safeminds: true, competitor: 'Aufwändig', note: 'Dolmetscher verursachen Kosten und Planungsaufwand' },
      { label: 'Auf Smartphone / jederzeit nutzbar', safeminds: true, competitor: false },
      { label: 'Wiederholung jederzeit möglich', safeminds: true, competitor: false },
      { label: 'Skalierbar für viele Standorte', safeminds: true, competitor: false },
      { label: 'Kosten pro Person', safeminds: 'Ab ~5 €', competitor: '50–200 €', note: 'Präsenz inkl. Ausfallzeit; Kosten variieren stark' },
    ],
    benefits: [
      { icon: '📋', title: 'Rechtssicher ohne Papierchaos', desc: 'Online-Unterweisungen dokumentieren sich automatisch. Kein Sammeln von Unterschriftslisten, keine Ablageordner — alles revisionssicher digital.' },
      { icon: '🕐', title: 'Kein Produktionsausfall', desc: 'Bei Präsenzseminaren fehlt das gesamte Team gleichzeitig. Mit SafeMinds unterweist jeder in seiner Pause oder Freischicht — ohne Betriebsunterbrechung.' },
      { icon: '💶', title: 'Deutlich geringere Gesamtkosten', desc: 'Ein Präsenzseminar kostet inklusive Ausfallzeit oft 50–200 € pro Person. SafeMinds liegt weit darunter — und skaliert ohne Mehrkosten auf viele Standorte.' },
      { icon: '🌍', title: 'Mehrsprachig ohne Dolmetscher', desc: 'Bei gemischten Teams braucht die Präsenzschulung Dolmetscher oder separate Termine. SafeMinds übersetzt automatisch.' },
      { icon: '📱', title: 'Jederzeit und überall', desc: 'Keine Terminkoordination, kein Seminarraum. SafeMinds läuft auf jedem Smartphone, wann es passt.' },
      { icon: '🔄', title: 'Wiederholung jederzeit möglich', desc: 'Wenn jemand eine Unterweisung erneut durchgehen möchte, ist das mit einem Klick möglich — kein neuer Seminartermin nötig.' },
    ],
    differentiators: [
      'Jährliche Pflichtunterweisungen nach §12 ArbSchG für alle Mitarbeitenden',
      'Betriebe mit mehrsprachigen oder mobilen Teams',
      'Standorte ohne zentrale Schulungsinfrastruktur',
      'Unternehmen, die Kosten und Dokumentationsaufwand reduzieren wollen',
    ],
    metaTitle: 'Online-Unterweisung vs. Präsenzseminar — Vergleich 2025',
    metaDescription: 'Online oder Präsenz? Beide Wege sind rechtssicher. Wir vergleichen Kosten, Aufwand und Eignung sachlich — für wen welcher Weg besser passt.',
  },

  // ── LMS ─────────────────────────────────────────────────────────────────────
  {
    slug: 'lms',
    competitor: 'Allgemeine LMS-Plattformen',
    competitorUrl: '',
    headline: 'SafeMinds vs. allgemeines LMS',
    subline: 'Fertige Unterweisungslösung vs. flexibles Lernmanagementsystem',
    intro: 'Lernmanagementsysteme (LMS) wie Moodle, TalentLMS oder ähnliche Plattformen können für viele Lernzwecke eingesetzt werden — auch für Arbeitsschutz. Sie sind jedoch generalistisch gebaut, nicht auf §12 ArbSchG optimiert. Wer schnell und rechtssicher unterweisen will, ohne selbst Kursinhalte erstellen zu müssen, findet in SafeMinds den direkteren Weg.',
    competitorStrengths: [
      'Sehr flexibel — für nahezu jeden Lernzweck nutzbar',
      'Eigene Kursinhalte können erstellt und hochgeladen werden',
      'Oft Open Source oder günstig in der Basisversion',
      'Breite Community, viele Integrationen und Add-ons',
    ],
    features: [
      { label: '§12 ArbSchG-konform (out of the box)', safeminds: true, competitor: false, note: 'LMS-Systeme müssen erst konfiguriert und inhaltlich befüllt werden' },
      { label: 'Fertige Arbeitsschutz-Kursinhalte', safeminds: true, competitor: false, note: 'Inhalte müssen bei LMS selbst erstellt oder zugekauft werden' },
      { label: 'Revisionssichere Zertifikate', safeminds: true, competitor: 'Konfigurationsaufwand' },
      { label: 'Eigene Kurse erstellen', safeminds: false, competitor: true, note: 'Für individuelle Inhalte bleibt das LMS flexibler' },
      { label: 'Sofort startklar ohne Aufbau', safeminds: true, competitor: false },
      { label: 'Mehrsprachige Kursinhalte inklusive', safeminds: true, competitor: false },
      { label: 'Branchenspezifische Inhalte inklusive', safeminds: true, competitor: false },
      { label: 'Inhaltspflege bei Gesetzesänderungen', safeminds: true, competitor: false, note: 'Bei LMS liegt die Aktualisierung beim Betrieb selbst' },
      { label: 'Auf Smartphone nutzbar', safeminds: true, competitor: 'Je nach System' },
      { label: 'Automatische Erinnerungen', safeminds: true, competitor: 'Konfigurierbar' },
    ],
    benefits: [
      { icon: '🚀', title: 'Sofort einsatzbereit', desc: 'Ein LMS ist ein leeres System — Kursinhalte, Zertifikate und Compliance-Logik müssen erst aufgebaut werden. SafeMinds ist von Tag 1 vollständig funktionsfähig.' },
      { icon: '⚖️', title: '§12 ArbSchG — von Anfang an', desc: 'Die Anforderungen an Arbeitsschutz-Unterweisungen in Deutschland sind spezifisch. SafeMinds wurde genau dafür entwickelt — nicht nachgerüstet.' },
      { icon: '📋', title: 'Inhalte inklusive', desc: 'Statt selbst Kurse erstellen zu müssen, haben Sie bei SafeMinds sofort Zugriff auf fertige, rechtssichere Unterweisungen für Ihre Branche.' },
      { icon: '🌍', title: 'Mehrsprachigkeit ohne Eigenaufwand', desc: 'Mehrsprachige Inhalte in einem LMS selbst zu erstellen ist aufwändig. Bei SafeMinds sind 4+ Sprachen bereits enthalten.' },
      { icon: '💶', title: 'Gesamtkosten im Blick', desc: 'LMS-Lizenzen wirken günstig — hinzu kommen Kursproduktion, IT-Einrichtung, Pflege und Aktualisierungen. SafeMinds ist all-inclusive.' },
      { icon: '🔄', title: 'Inhaltspflege inklusive', desc: 'Wenn sich Gesetze oder Normen ändern, aktualisiert SafeMinds die Kursinhalte. In einem LMS liegt das in Ihrer Verantwortung.' },
    ],
    differentiators: [
      'Betriebe ohne eigenes E-Learning-Team oder Instructional Designer',
      'Unternehmen, die sofort starten wollen ohne Aufbauprojekt',
      'Betriebe, die ausschließlich Arbeitsschutz-Unterweisungen benötigen',
      'Alle, die die gesetzliche Konformität fertig geliefert bekommen wollen',
    ],
    metaTitle: 'SafeMinds vs. LMS — Arbeitsschutz-Unterweisung im Vergleich 2025',
    metaDescription: 'LMS oder SafeMinds? Allgemeine Lernplattformen sind flexibel, aber nicht auf §12 ArbSchG ausgelegt. Sachlicher Vergleich der Ansätze für Betriebe.',
  },
]

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug)
}
