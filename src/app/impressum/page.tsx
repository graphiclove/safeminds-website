import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | SafeMinds',
  description: 'Impressum und Anbieterkennzeichnung von SafeMinds.',
}

export default function ImpressumPage() {
  return (
    <main style={{ background: '#f8fafc' }} className="min-h-screen">
      <section className="bg-white border-b border-[#e8edf2] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-[#3b82f6] uppercase tracking-widest mb-4">Rechtliches</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-2">Impressum</h1>
          <p className="text-[#64748b]">Angaben gemäß § 5 TMG</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10">

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Anbieter</h2>
          <p className="text-[#334155] leading-relaxed">
            SAFEMINDS<br />
            Kemnitzer Heide 2<br />
            14548 Schwielowsee OT Ferch
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Vertreten durch</h2>
          <p className="text-[#334155]">Stefan Bechler</p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Kontakt</h2>
          <div className="space-y-2 text-[#334155]">
            <p>Telefon: <a href="tel:015159183590" className="text-[#1d4ed8] hover:underline">0151 59183590</a></p>
            <p>E-Mail: <a href="mailto:kontakt@safeminds.eu" className="text-[#1d4ed8] hover:underline">kontakt@safeminds.eu</a></p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Steuerliche Angaben</h2>
          <div className="space-y-2 text-[#334155]">
            <p>Steuernummer: 048/205/12648</p>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE322353253</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Bankverbindung</h2>
          <div className="space-y-2 text-[#334155]">
            <p>Bank: Deutsche Bank</p>
            <p>IBAN: DE45 1207 0000 0028 2038 01</p>
            <p>BIC: DEUTDEBB160</p>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Haftung für Inhalte</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
            entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Haftung für Links</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
            zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
            ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-[#e8edf2] p-8">
          <h2 className="text-lg font-extrabold text-[#0f172a] mb-5">Urheberrecht</h2>
          <p className="text-[#64748b] leading-relaxed text-sm">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
            von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

      </div>
    </main>
  )
}
