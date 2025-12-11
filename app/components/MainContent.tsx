const services = [
  {
    title: "Signature Gel",
    description: "Copertura in gel ultra-sottile, equilibrio perfetto tra resistenza e luce.",
    price: "da 60€",
    highlight: "Durata 3+ settimane",
  },
  {
    title: "Luxe Manicure Spa",
    description: "Esfoliazione, maschera idratante, massaggio e smalto long-wear.",
    price: "da 55€",
    highlight: "Effetto pelle di seta",
  },
  {
    title: "Pedicure Glow",
    description: "Pedicure estetica + trattamento screpolature e finish luminoso.",
    price: "da 65€",
    highlight: "Relax totale",
  },
  {
    title: "Nail Art Couture",
    description: "Design su misura, micro-dettagli, foil e pigmenti specchio premium.",
    price: "su richiesta",
    highlight: "Solo su appuntamento",
  },
];

const packages = [
  {
    name: "Reset Express",
    info: "Shape + cuticole + smalto long-wear",
    price: "45€",
  },
  {
    name: "Spa Ritual",
    info: "Manicure spa + massaggio + trattamento nutriente",
    price: "70€",
  },
  {
    name: "Iconic Set",
    info: "Copertura gel + nail art personalizzata premium",
    price: "95€",
  },
];

const gallery = [
  "Iridescent chrome con finish latteo",
  "French inversa soft beige",
  "Micro french colorata pastel",
  "Velvet nails effetto velluto",
  "Baby boomer set bridal",
  "Pigmenti specchio rosé",
];

export default function MainContent() {
  return (
    <main className="relative isolate overflow-hidden text-white pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,232,255,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(171,226,255,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#0f1018]/80 to-[#080810]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-8 sm:px-10 lg:px-14">
        <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-100">
              Sultan Nails Studio
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Unghie couture, rituali spa e design su misura
            </h1>
            <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
              Esperienza privata con luce soffusa, pigmenti premium e protocolli
              skincare per mani e piedi. Ogni appuntamento è ritagliato sul tuo
              stile, con finiture impeccabili che durano.
            </p>
          </div>
          <div className="flex flex-col gap-3 self-start rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 shadow-lg backdrop-blur">
            <span className="text-xs uppercase tracking-[0.18em] text-fuchsia-100">
              Contatti rapidi
            </span>
            <a
              className="rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:shadow-fuchsia-500/50"
              href="https://wa.me/393401234567"
              target="_blank"
              rel="noreferrer"
            >
              Prenota su WhatsApp
            </a>
            <a
              className="text-sm font-medium text-white hover:text-fuchsia-200"
              href="tel:+393401234567"
            >
              +39 340 123 4567
            </a>
            <span className="text-xs text-white/60">
              Via Vittoria 18, Brescia · Mar-Sab 10-19
            </span>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur lg:grid-cols-[2fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/15 px-3 py-1 text-xs font-medium text-fuchsia-100">
              Beauty tech · Design sartoriale
            </div>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Un rituale per mani e piedi, oltre la semplice manicure
            </h2>
            <p className="text-white/80">
              Postazioni private, lampade a spettro controllato, strumenti
              sterilizzati a caldo e pigmenti certificati EU. Protocollo di
              analisi pelle e unghie per creare texture, colori e finish che
              rispecchiano la tua energia.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Clienti felici", value: "950+" },
                { label: "Durata media", value: "3-4 sett." },
                { label: "Pigmenti selezionati", value: "120+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm"
                >
                  <div className="text-lg font-semibold text-fuchsia-100">
                    {item.value}
                  </div>
                  <div className="text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-white/5 to-sky-400/20 p-6 shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,182,239,0.3),transparent_35%)]" />
            <div className="relative flex flex-col gap-3 text-sm text-white/85">
              <span className="text-xs uppercase tracking-[0.2em] text-fuchsia-100">
                Micro-momenti
              </span>
              <p className="text-base font-medium">
                Mani calde, oli botanici, playlist curata. Ogni fase è lenta,
                mirata e ripetibile.
              </p>
              <ul className="space-y-2 text-white/75">
                <li>• Consulto iniziale con prova finish</li>
                <li>• Cuticole "waterless" + vapori alle essenze</li>
                <li>• Lampada controllata per colore stabile</li>
                <li>• Rifinitura con lime diamond-touch</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6" id="servizi">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold sm:text-3xl">Servizi</h3>
            <p className="max-w-2xl text-white/75">
              Combinazioni pensate per mani e piedi impeccabili, con texture
              morbide e finish a lunga durata.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-fuchsia-500/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-semibold text-fuchsia-100">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-white/75">{service.description}</p>
                  <span className="text-sm font-medium text-fuchsia-100">
                    {service.highlight}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 lg:grid-cols-2"
          id="palette"
        >
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Texture, tonalità e finish curati con luce naturale
            </h3>
            <p className="text-white/75">
              Scegli tra finish latteo, mirror chrome, velvet nails o french
              micro. Palette cromatica aggiornata mensilmente con pigmenti
              certificati, per garantire fedeltà di colore e cura della lamina.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Latte", "Rosé", "Nude Couture", "Velvet", "Mirror", "Pastel"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {gallery.map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-[#1a1825] to-[#0c0b15] p-4 text-sm text-white/85"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_40%)]" />
                <span className="relative block font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6" id="pacchetti">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Pacchetti curati per te
            </h3>
            <p className="max-w-2xl text-white/75">
              Slot limitati ogni giorno per mantenere tempi distesi e cura
              sartoriale.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex h-full flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 shadow transition hover:-translate-y-1 hover:border-fuchsia-400/40"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{pkg.name}</h4>
                  <span className="text-sm font-semibold text-fuchsia-100">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-sm text-white/75">{pkg.info}</p>
                <button className="mt-auto w-full rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-500 hover:text-black">
                  Prenota ora
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-white/5 to-sky-400/20 p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <h3 className="text-2xl font-semibold sm:text-3xl">
                Pronta per il tuo prossimo set?
              </h3>
              <p className="text-white/80">
                Inviami una foto del look che desideri o lascia che creiamo un
                design su misura. Rispondo entro poche ore con proposta, tempi e
                preventivo.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/393401234567"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 transition hover:-translate-y-0.5"
                >
                  Prenota via WhatsApp
                </a>
                <a
                  href="mailto:info@sultannails.it"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Scrivimi una mail
                </a>
              </div>
            </div>
            <div
              id="contatti"
              className="w-full max-w-xs rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-white/80"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-fuchsia-100">
                Studio
              </div>
              <div className="mt-2 font-semibold text-white">Sultan Nails</div>
              <div>Via Vittoria 18, Brescia</div>
              <div className="mt-2 text-white/60">Mar - Sab · 10:00 - 19:00</div>
              <a
                className="mt-3 block font-semibold text-white hover:text-fuchsia-200"
                href="tel:+393401234567"
              >
                +39 340 123 4567
              </a>
              <a
                className="text-white/80 hover:text-fuchsia-200"
                href="mailto:info@sultannails.it"
              >
                info@sultannails.it
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

