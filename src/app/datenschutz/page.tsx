import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | SafeMinds',
  description: 'Datenschutzerklärung von SafeMinds gemäß DSGVO.',
}

export default function DatenschutzPage() {
  return (
    <main style={{ background: '#f8fafc' }} className="min-h-screen">
      <section className="bg-white border-b border-[#e8edf2] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-4">Rechtliches</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-2">Datenschutzerklärung</h1>
          <p className="text-[#64748b]">Gemäß DSGVO und BDSG</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">1. Verantwortlicher</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <div className="mt-4 text-[#334155] text-sm leading-relaxed">
            <p>SAFEMINDS</p>
            <p>Kemnitzer Heide 2, 14548 Schwielowsee OT Ferch</p>
            <p>Telefon: 0151 59183590</p>
            <p>E-Mail: <a href="mailto:kontakt@safeminds.eu" className="text-[#1d4ed8] hover:underline">kontakt@safeminds.eu</a></p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Wir erheben personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienstleistungen
              erforderlich ist oder Sie uns diese freiwillig mitgeteilt haben. Dies umfasst insbesondere:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Name und Kontaktdaten (E-Mail-Adresse, Telefonnummer)</li>
              <li>Unternehmensdaten (Firmenname, Adresse)</li>
              <li>Nutzungsdaten (Kurszugriffe, Abschlussnachweise)</li>
              <li>Technische Daten (IP-Adresse, Browser-Informationen)</li>
            </ul>
            <p>
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung),
              Art. 6 Abs. 1 lit. c DSGVO (gesetzliche Verpflichtung) sowie Art. 6 Abs. 1 lit. f DSGVO
              (berechtigte Interessen) oder Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">3. Weitergabe von Daten</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung
            notwendig ist, Sie eingewilligt haben oder eine gesetzliche Verpflichtung besteht. Wir setzen
            Auftragsverarbeiter ein, die vertraglich zur Einhaltung der Datenschutzanforderungen verpflichtet sind.
            Eine Übermittlung in Drittländer außerhalb der EU/EWR erfolgt nur auf Basis geeigneter Garantien
            (z. B. EU-Standardvertragsklauseln).
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">4. Cookies</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät
            gespeichert werden. Technisch notwendige Cookies ermöglichen die Grundfunktionen der Website und werden
            auf Basis unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) gesetzt. Für nicht notwendige
            Cookies (z. B. Analyse) holen wir Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO ein. Sie können
            Cookies in Ihren Browser-Einstellungen jederzeit deaktivieren.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">5. Analyse-Tools</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Wir setzen Analyse-Tools ein, um die Nutzung unserer Website zu verstehen und zu verbessern.
            Sofern hierfür Ihre Einwilligung erforderlich ist, werden diese Tools nur nach Ihrer Zustimmung
            aktiviert. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            Nähere Informationen zu den eingesetzten Diensten erhalten Sie auf Anfrage.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">6. Kontaktformular und E-Mail-Kontakt</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden die von Ihnen angegebenen Daten
            (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist
            Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
            (berechtigte Interessen). Diese Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">7. Newsletter</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Wenn Sie unseren Newsletter abonnieren, verarbeiten wir Ihre E-Mail-Adresse auf Grundlage Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen,
            indem Sie den Abmeldelink im Newsletter nutzen oder uns direkt kontaktieren. Die bis zum Widerruf
            erfolgte Verarbeitung bleibt rechtmäßig.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">8. Nutzerkonto und Unterweisungsplattform</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Für die Nutzung unserer Unterweisungsplattform verarbeiten wir die bei der Registrierung angegebenen
            Daten sowie Nutzungsdaten (Kurszugriffe, Testergebnisse, Abschlussnachweise). Diese Daten sind für
            die Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO) und zur Erfüllung gesetzlicher Dokumentationspflichten
            gemäß §12 ArbSchG (Art. 6 Abs. 1 lit. c DSGVO) erforderlich.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">9. Speicherdauer</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist
            oder gesetzliche Aufbewahrungspflichten bestehen. Unterweisungsnachweise werden entsprechend den
            gesetzlichen Anforderungen (in der Regel mindestens 2 Jahre) aufbewahrt. Vertragsbezogene Daten
            werden nach Ablauf der gesetzlichen Aufbewahrungsfristen (i. d. R. 6–10 Jahre) gelöscht.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">10. Ihre Rechte</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{' '}
              <a href="mailto:kontakt@safeminds.eu" className="text-[#1d4ed8] hover:underline">
                kontakt@safeminds.eu
              </a>
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">11. Beschwerderecht</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
            personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Brandenburg ist
            die Landesbeauftragte für den Datenschutz und für das Recht auf Akteneinsicht Brandenburg,
            Stahnsdorfer Damm 77, 14532 Kleinmachnow.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">12. Datensicherheit</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Manipulation
            und unberechtigten Zugriff zu schützen. Unsere Website wird über eine verschlüsselte SSL/TLS-Verbindung
            übertragen. Unsere Sicherheitsmaßnahmen werden entsprechend dem technischen Fortschritt kontinuierlich
            angepasst.
          </p>
        </section>

        <p className="text-xs text-[#94a3b8] text-center pb-4">Stand: Mai 2025</p>

      </div>
    </main>
  )
}
