import Header from "../components/Header";

const services = [
  {
    title: "Signature Gel",
    description:
      "Copertura in gel ultra-sottile, equilibrio perfetto tra resistenza e luce.",
    price: "da 60€",
    highlight: "Durata 3+ settimane",
    details: [
      "Preparazione completa della lamina ungueale",
      "Applicazione gel premium ultra-sottile",
      "Finiture con lampada UV/LED professionale",
      "Finitura con olio curativo alle vitamine",
    ],
  },
  {
    title: "Luxe Manicure Spa",
    description:
      "Esfoliazione, maschera idratante, massaggio e smalto long-wear.",
    price: "da 55€",
    highlight: "Effetto pelle di seta",
    details: [
      "Bagno termale con oli essenziali",
      "Esfoliazione delicata con scrub naturale",
      "Maschera nutriente e idratante",
      "Massaggio rilassante mani e avambracci",
      "Applicazione smalto long-lasting",
    ],
  },
  {
    title: "Pedicure Glow",
    description:
      "Pedicure estetica + trattamento screpolature e finish luminoso.",
    price: "da 65€",
    highlight: "Relax totale",
    details: [
      "Pediluvio termale con sali marini",
      "Rimozione cuticole e callus professionale",
      "Trattamento intensivo anti-screpolature",
      "Massaggio piedi e polpacci",
      "Smalto gel o long-wear",
    ],
  },
  {
    title: "Nail Art Couture",
    description:
      "Design su misura, micro-dettagli, foil e pigmenti specchio premium.",
    price: "su richiesta",
    highlight: "Solo su appuntamento",
    details: [
      "Consulenza personalizzata per il design",
      "Tecniche avanzate: chrome, cat-eye, foil",
      "Decorazioni 3D e cristalli Swarovski",
      "Pigmenti speciali effetto specchio",
      "Finiture durature premium",
    ],
  },
  {
    title: "Refill & Ritocco",
    description: "Mantenimento unghie gel con ritocco della ricrescita.",
    price: "da 45€",
    highlight: "Ogni 3-4 settimane",
    details: [
      "Limatura e preparazione della ricrescita",
      "Applicazione gel per uniformare",
      "Rimodellamento della forma",
      "Lucidatura e sigillatura",
    ],
  },
  {
    title: "Rimozione Gel Completa",
    description:
      "Rimozione sicura e delicata del gel con trattamento rigenerante.",
    price: "da 25€",
    highlight: "Con cura della lamina",
    details: [
      "Rimozione professionale senza danni",
      "Trattamento rigenerante per unghie",
      "Massaggio con olio nutriente",
      "Lucidatura naturale",
    ],
  },
];

export default function ServiziPage() {
  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden text-white pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,232,255,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(171,226,255,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#0f1018]/80 to-[#080810]" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-8 sm:px-10 lg:px-14">
          {/* Hero Section */}
          <section className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-100 w-fit">
              Servizi Premium
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              I nostri trattamenti esclusivi
            </h1>
            <p className="max-w-3xl text-lg text-white/80 sm:text-xl">
              Ogni servizio è pensato per offrirti un'esperienza unica, con
              prodotti di alta qualità, tecniche all'avanguardia e l'attenzione
              ai dettagli che ci contraddistingue.
            </p>
          </section>

          {/* Services Grid */}
          <section className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/8 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-fuchsia-500/10 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <h2 className="text-2xl font-semibold">
                        {service.title}
                      </h2>
                      <span className="rounded-full bg-fuchsia-500/20 px-4 py-2 text-sm font-semibold text-fuchsia-100 whitespace-nowrap">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-white/75 text-base">
                      {service.description}
                    </p>
                    <span className="text-sm font-medium text-fuchsia-200">
                      ✨ {service.highlight}
                    </span>

                    <div className="mt-2 space-y-2">
                      <div className="text-sm font-semibold text-white/90">
                        Include:
                      </div>
                      <ul className="space-y-1.5 text-sm text-white/70">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-fuchsia-400 mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="https://wa.me/393401234567"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:shadow-fuchsia-500/50"
                    >
                      Prenota questo servizio
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Info Section */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Perché scegliere Sultan Nails?
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: "💎",
                    title: "Prodotti Premium",
                    desc: "Solo prodotti certificati e di alta qualità",
                  },
                  {
                    icon: "🎨",
                    title: "Design Personalizzato",
                    desc: "Ogni set è unico e creato su misura per te",
                  },
                  {
                    icon: "⏱️",
                    title: "Durata Garantita",
                    desc: "Fino a 4 settimane senza sbeccature",
                  },
                  {
                    icon: "🧼",
                    title: "Igiene Totale",
                    desc: "Sterilizzazione professionale di tutti gli strumenti",
                  },
                  {
                    icon: "🌿",
                    title: "Trattamenti Naturali",
                    desc: "Oli essenziali e ingredienti botanici",
                  },
                  {
                    icon: "✨",
                    title: "Esperienza Luxury",
                    desc: "Ambiente privato e rilassante",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-white mb-1">
                      {item.title}
                    </div>
                    <div className="text-sm text-white/70">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-white/5 to-sky-400/20 p-8 text-center">
            <h3 className="text-3xl font-semibold mb-4">
              Pronta per il tuo prossimo appuntamento?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Contattaci per prenotare il tuo servizio o per ricevere una
              consulenza personalizzata. Rispondiamo entro poche ore!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/393401234567"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/40 transition hover:-translate-y-1 hover:shadow-fuchsia-500/60"
              >
                Prenota su WhatsApp
              </a>
              <a
                href="tel:+393401234567"
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Chiamaci ora
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
