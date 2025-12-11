export default function MainContent() {
  return (
    <main className="relative isolate overflow-hidden text-white pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,232,255,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(171,226,255,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-[#0f1018]/80 to-[#080810]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-8 sm:px-10 lg:px-14">
        {/* Hero Section */}
        <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-fuchsia-100">
              Sultan Nails Studio
            </div>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Unghie couture, rituali spa e design su misura
            </h1>
            <p className="mt-3 max-w-2xl text-base text-white/80 sm:text-lg">
              Esperienza privata con luce soffusa, pigmenti premium e protocolli
              skincare per mani e piedi. Ogni appuntamento è ritagliato sul tuo
              stile, con finiture impeccabili che durano.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/40 transition hover:-translate-y-1 hover:shadow-fuchsia-500/60"
                href="https://wa.me/3391862999"
                target="_blank"
                rel="noreferrer"
              >
                Prenota su WhatsApp
              </a>
              <a
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
                href="/servizi"
              >
                Scopri i servizi
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 self-start rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80 shadow-lg backdrop-blur">
            <span className="text-xs uppercase tracking-[0.18em] text-fuchsia-100">
              Contatti rapidi
            </span>
            <a
              className="text-sm font-medium text-white hover:text-fuchsia-200"
              href="tel:+393391862999"
            >
              📞 +39 339 186 2999
            </a>
            <span className="text-xs text-white/60">
              Via Corso Umberto I 52, Casalnuovo di Napoli
            </span>
            <span className="text-xs text-white/60">Mar-Sab 10-19</span>
          </div>
        </section>

        {/* About Section */}
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

        {/* Quick Links to Pages */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Esplora il nostro mondo
            </h2>
            <p className="mt-2 text-white/70">
              Scopri tutto ciò che abbiamo da offrirti
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Servizi",
                desc: "Trattamenti esclusivi per mani e piedi",
                icon: "💅",
                link: "/servizi",
              },
              {
                title: "Palette",
                desc: "Oltre 120 tonalità selezionate",
                icon: "🎨",
                link: "/palette",
              },
              {
                title: "Pacchetti",
                desc: "Offerte e abbonamenti convenienti",
                icon: "✨",
                link: "/pacchetti",
              },
              {
                title: "Contatti",
                desc: "Prenota il tuo appuntamento",
                icon: "📞",
                link: "/contatti",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-fuchsia-500/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-3">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/75">{item.desc}</p>
                  <span className="text-sm font-medium text-fuchsia-200">
                    Scopri di più →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Services Preview */}
        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              I nostri servizi più richiesti
            </h3>
            <p className="max-w-2xl text-white/75">
              Dal classico al couture, ogni servizio è pensato per unghie
              perfette
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Signature Gel",
                price: "da 60€",
                desc: "Copertura gel ultra-sottile con durata 3+ settimane",
              },
              {
                title: "Luxe Manicure Spa",
                price: "da 55€",
                desc: "Esfoliazione, massaggio e smalto long-wear",
              },
              {
                title: "Nail Art Couture",
                price: "su richiesta",
                desc: "Design su misura con pigmenti specchio premium",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/8"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <span className="rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-semibold text-fuchsia-100">
                    {service.price}
                  </span>
                </div>
                <p className="text-sm text-white/75">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <a
              href="/servizi"
              className="rounded-full border-2 border-fuchsia-400 bg-fuchsia-400/10 px-6 py-3 font-semibold text-white transition hover:bg-fuchsia-400/20"
            >
              Vedi tutti i servizi
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Cosa dicono di noi
            </h3>
            <p className="mt-2 text-white/70">
              Le recensioni delle nostre clienti
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Laura M.",
                text: "La migliore nail artist di Brescia! Professionalità e gentilezza ai massimi livelli.",
                rating: 5,
              },
              {
                name: "Sofia R.",
                text: "Le mie unghie durano settimane senza scheggiarsi. Prodotti top e ambiente rilassante.",
                rating: 5,
              },
              {
                name: "Chiara B.",
                text: "Nail art spettacolare! Ha realizzato esattamente quello che volevo. Super consigliato!",
                rating: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-3 text-lg text-fuchsia-200">
                  {"⭐".repeat(review.rating)}
                </div>
                <p className="mb-4 text-white/80">{review.text}</p>
                <div className="font-semibold text-white">{review.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-white/5 to-sky-400/20 p-8">
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
                  className="rounded-full bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/40 transition hover:-translate-y-0.5"
                >
                  Prenota via WhatsApp
                </a>
                <a
                  href="/contatti"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Tutti i contatti
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
