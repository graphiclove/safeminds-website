import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | SafeMinds',
  description: 'Allgemeine Geschäftsbedingungen von SafeMinds für die Nutzung der Online-Unterweisungsplattform.',
}

export default function AgbPage() {
  return (
    <main style={{ background: '#f8fafc' }} className="min-h-screen">
      <section className="bg-white border-b border-[#e8edf2] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-4">Rechtliches</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-2">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-[#64748b]">Stand: Mai 2025</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 1 Geltungsbereich</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen SAFEMINDS,
              Kemnitzer Heide 2, 14548 Schwielowsee OT Ferch (nachfolgend „SafeMinds" oder „wir") und
              gewerblichen Kunden (nachfolgend „Kunde") über die Nutzung der SafeMinds-Plattform für
              digitale Arbeitsschutz-Unterweisungen.
            </p>
            <p>
              Entgegenstehende oder abweichende Bedingungen des Kunden haben keine Geltung, es sei denn,
              SafeMinds hat ihrer Anwendung ausdrücklich schriftlich zugestimmt.
            </p>
            <p>
              SafeMinds richtet sich ausschließlich an Unternehmer im Sinne von § 14 BGB.
              Verbraucher im Sinne von § 13 BGB sind von der Nutzung ausgeschlossen.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 2 Vertragsgegenstand</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              SafeMinds stellt dem Kunden eine webbasierte Plattform zur Durchführung, Verwaltung und
              Dokumentation digitaler Arbeitsschutz-Unterweisungen gemäß § 12 ArbSchG als Software-as-a-Service
              (SaaS) zur Verfügung.
            </p>
            <p>Der Leistungsumfang umfasst insbesondere:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Zugang zu den im gebuchten Tarif enthaltenen Unterweisungskursen</li>
              <li>Verwaltung von Mitarbeiterzugängen und Unterweisungsgruppen</li>
              <li>Automatische Dokumentation abgeschlossener Unterweisungen</li>
              <li>Revisionssichere Abschlussnachweise (PDF)</li>
              <li>Automatische Erinnerungsfunktion für fällige Unterweisungen</li>
            </ul>
            <p>
              Optionale Zusatzleistungen (insbesondere die Produktion individueller Onboarding-Videos)
              werden gesondert vereinbart und unterliegen zusätzlich den jeweils gültigen Leistungsbeschreibungen.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 3 Registrierung und Testphase</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Der Kunde kann die Plattform zunächst kostenlos für einen Zeitraum von 14 Tagen testen
              (Testphase). Zur Registrierung sind vollständige und wahrheitsgemäße Angaben erforderlich.
            </p>
            <p>
              Nach Ablauf der 14-tägigen Testphase wird das Konto automatisch in ein kostenpflichtiges
              Abonnement (Mindestlaufzeit 12 Monate) umgewandelt, sofern der Kunde das Konto nicht
              vor Ablauf der Testphase über die Kontoeinstellungen oder schriftlich gegenüber SafeMinds
              kündigt.
            </p>
            <p>
              SafeMinds weist den Kunden per E-Mail mindestens 3 Tage vor Ablauf der Testphase auf die
              bevorstehende Umwandlung in ein kostenpflichtiges Abonnement hin.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 4 Vertragsschluss</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Der Vertrag kommt zustande durch (a) Ablauf der Testphase ohne Widerruf gemäß § 3 oder
              (b) ausdrückliche Buchung eines Abonnements durch den Kunden über die Plattform oder
              durch schriftliche Vereinbarung.
            </p>
            <p>
              SafeMinds bestätigt den Vertragsschluss per E-Mail. Die E-Mail enthält eine Zusammenfassung
              der gebuchten Leistungen sowie einen Link zu diesen AGB.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 5 Laufzeit und Kündigung</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Abonnements haben eine Mindestlaufzeit von 12 Monaten ab Vertragsschluss. Nach Ablauf der
              Mindestlaufzeit verlängert sich der Vertrag automatisch um jeweils weitere 12 Monate,
              sofern er nicht mit einer Frist von 30 Tagen zum Ende der jeweiligen Laufzeit gekündigt wird.
            </p>
            <p>
              Die Kündigung kann schriftlich per E-Mail an{' '}
              <a href="mailto:kontakt@safeminds.eu" className="text-[#1d4ed8] hover:underline">
                kontakt@safeminds.eu
              </a>{' '}
              oder über die Kontoeinstellungen erfolgen.
            </p>
            <p>
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. Ein wichtiger
              Grund liegt für SafeMinds insbesondere vor, wenn der Kunde mit fälligen Zahlungen in Verzug
              gerät oder gegen wesentliche Vertragspflichten verstößt.
            </p>
            <p>
              Mit Wirksamwerden der Kündigung werden sämtliche Nutzerzugänge deaktiviert. Der Kunde kann
              bis zu diesem Zeitpunkt seine Daten und Nachweise exportieren. SafeMinds ist nicht
              verpflichtet, Daten nach Vertragsende aufzubewahren.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 6 Preise und Zahlung</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Die Abrechnung erfolgt jährlich im Voraus. Es gelten die zum Zeitpunkt des Vertragsschlusses
              auf der Website ausgewiesenen Preise, zuzüglich der gesetzlichen Mehrwertsteuer.
            </p>
            <p>
              Die Jahresrechnung wird zu Beginn der jeweiligen Vertragslaufzeit per E-Mail zugestellt.
              Die Zahlung ist innerhalb von 14 Tagen nach Rechnungsstellung fällig.
            </p>
            <p>
              Bei Zahlungsverzug ist SafeMinds berechtigt, den Zugang zur Plattform bis zum Eingang der
              ausstehenden Zahlung zu sperren. Gesetzliche Verzugszinsen bleiben vorbehalten.
            </p>
            <p>
              SafeMinds behält sich das Recht vor, Preise mit einer Ankündigungsfrist von 6 Wochen
              zu ändern. Preisänderungen gelten ab der nächsten Verlängerungsperiode. Der Kunde hat
              in diesem Fall ein Sonderkündigungsrecht zum Ende der laufenden Vertragsperiode.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 7 Pflichten des Kunden</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>Der Kunde verpflichtet sich:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Zugangsdaten vertraulich zu behandeln und nicht an Dritte weiterzugeben</li>
              <li>SafeMinds unverzüglich zu benachrichtigen, wenn ein Missbrauch von Zugangsdaten vermutet wird</li>
              <li>Nur Mitarbeitende des eigenen Unternehmens auf der Plattform anzumelden</li>
              <li>Die Plattform nicht für rechtswidrige Zwecke zu nutzen</li>
              <li>Keine automatisierten Zugriffe oder Scraping-Maßnahmen durchzuführen</li>
            </ul>
            <p>
              Der Kunde trägt die Verantwortung dafür, dass die im Rahmen der Unterweisungen dokumentierten
              Nachweise den betrieblichen und rechtlichen Anforderungen entsprechen. SafeMinds stellt
              die technische Infrastruktur bereit, ersetzt jedoch keine rechtliche Beratung.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 8 Verfügbarkeit und Wartung</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              SafeMinds strebt eine Verfügbarkeit der Plattform von 99 % im Jahresmittel an (gemessen
              ohne geplante Wartungsfenster). Geplante Wartungsarbeiten werden nach Möglichkeit in
              verkehrsschwachen Zeiten durchgeführt und im Voraus angekündigt.
            </p>
            <p>
              SafeMinds ist berechtigt, die Plattform weiterzuentwickeln und einzelne Funktionen zu ändern
              oder einzustellen, sofern der vertraglich vereinbarte Leistungsumfang dadurch nicht
              wesentlich beeinträchtigt wird.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 9 Datenschutz und Auftragsverarbeitung</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Im Rahmen der Vertragserfüllung verarbeitet SafeMinds personenbezogene Daten der Mitarbeitenden
              des Kunden. Soweit SafeMinds dabei als Auftragsverarbeiter im Sinne von Art. 28 DSGVO tätig
              wird, schließen die Parteien einen gesonderten Auftragsverarbeitungsvertrag (AVV) ab.
            </p>
            <p>
              Weitere Informationen zur Datenverarbeitung finden sich in der{' '}
              <a href="/datenschutz" className="text-[#1d4ed8] hover:underline">
                Datenschutzerklärung
              </a>{' '}
              von SafeMinds.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 10 Geistiges Eigentum</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Sämtliche Inhalte der Plattform (Kursinhalte, Texte, Grafiken, Softwarecode) sind
              urheberrechtlich geschützt und verbleiben im Eigentum von SafeMinds oder den jeweiligen
              Lizenzgebern. Dem Kunden wird für die Dauer des Vertrages ein nicht übertragbares,
              nicht unterlizenzierbares Nutzungsrecht eingeräumt.
            </p>
            <p>
              Der Kunde ist nicht berechtigt, Kursinhalte herunterzuladen, zu vervielfältigen,
              weiterzugeben oder außerhalb der Plattform zu verwenden.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 11 Haftung</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              SafeMinds haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder
              der Gesundheit, für vorsätzlich oder grob fahrlässig verursachte Schäden sowie nach
              dem Produkthaftungsgesetz.
            </p>
            <p>
              Für leicht fahrlässig verursachte Schäden haftet SafeMinds nur bei Verletzung wesentlicher
              Vertragspflichten (Kardinalpflichten), und zwar begrenzt auf den vorhersehbaren,
              vertragstypischen Schaden. Die Haftung ist auf den Jahresbetrag des Abonnements begrenzt.
            </p>
            <p>
              SafeMinds übernimmt keine Haftung dafür, dass die über die Plattform ausgestellten
              Unterweisungsnachweise in allen Fällen die betrieblichen oder behördlichen Anforderungen
              des Kunden erfüllen. Die rechtliche Verantwortung für die ordnungsgemäße Durchführung
              von Unterweisungen verbleibt beim Arbeitgeber (Kunden).
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 12 Änderungen der AGB</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              SafeMinds behält sich das Recht vor, diese AGB mit einer Ankündigungsfrist von 6 Wochen
              zu ändern. Änderungen werden dem Kunden per E-Mail mitgeteilt. Widerspricht der Kunde
              nicht innerhalb von 4 Wochen nach Zugang der Mitteilung, gelten die geänderten AGB
              als angenommen.
            </p>
            <p>
              SafeMinds wird in der Mitteilung auf das Widerspruchsrecht, die Frist und die Folgen
              des Schweigens ausdrücklich hinweisen. Im Falle eines fristgerechten Widerspruchs hat
              SafeMinds das Recht zur außerordentlichen Kündigung zum Ende der laufenden Vertragsperiode.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">§ 13 Schlussbestimmungen</h2>
          <div className="text-[#64748b] leading-relaxed text-sm space-y-3">
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG).
            </p>
            <p>
              Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem
              Vertrag ist, soweit gesetzlich zulässig, der Sitz von SafeMinds.
            </p>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit
              der übrigen Bestimmungen davon unberührt. Die Parteien verpflichten sich, die unwirksame
              Bestimmung durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen
              Bestimmung möglichst nahekommt.
            </p>
            <p>
              Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform. Dies gilt auch für
              die Aufhebung des Schriftformerfordernisses.
            </p>
          </div>
        </section>

        <p className="text-xs text-[#94a3b8] text-center pb-4">Stand: Mai 2025 · SAFEMINDS, Kemnitzer Heide 2, 14548 Schwielowsee OT Ferch</p>

      </div>
    </main>
  )
}
