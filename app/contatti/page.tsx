import Header from "../components/Header";

const contactMethods = [
  {
    icon: "📱",
    title: "WhatsApp",
    description: "Il modo più veloce per prenotare",
    value: "+39 339 186 2999",
    link: "https://wa.me/393391862999",
    cta: "Scrivici ora",
  },
  {
    icon: "📞",
    title: "Telefono",
    description: "Chiamaci direttamente",
    value: "+39 340 123 4567",
    link: "tel:+393391862999",
    cta: "Chiama ora",
  },
  {
    icon: "✉️",
    title: "Email",
    description: "Per informazioni generali",
    value: "info@sultannails.it",
    link: "mailto:sultan.nailstudio@gmail.com",
    cta: "Invia email",
  },
  {
    icon: "📍",
    title: "Indirizzo",
    description: "Vieni a trovarci",
    value: "Via Corso Umberto I 52, Casalnuovo di Napoli",
    link: "https://maps.google.com/?q=Via+Corso+Umberto+I+52+Casalnuovo+di+Napoli",
    cta: "Apri in Maps",
  },
];

const openingHours = [
  { day: "Lunedì", hours: "Chiuso", closed: true },
  { day: "Martedì", hours: "10:00 - 19:00", closed: false },
  { day: "Mercoledì", hours: "10:00 - 19:00", closed: false },
  { day: "Giovedì", hours: "10:00 - 19:00", closed: false },
  { day: "Venerdì", hours: "10:00 - 19:00", closed: false },
  { day: "Sabato", hours: "10:00 - 19:00", closed: false },
  { day: "Domenica", hours: "Chiuso", closed: true },
];

const faq = [
  {
    question: "Come posso prenotare un appuntamento?",
    answer:
      "Puoi prenotare tramite WhatsApp, telefono o compilando il form online. Ti risponderemo entro poche ore per confermare data e orario.",
  },
  {
    question: "Quanto tempo prima devo prenotare?",
    answer:
      "Consigliamo di prenotare con almeno 3-5 giorni di anticipo, specialmente per i weekend. Per servizi specifici o eventi speciali, contattaci con più anticipo.",
  },
  {
    question: "Quali metodi di pagamento accettate?",
    answer:
      "Accettiamo contanti, carte di credito/debito, bancomat e pagamenti digitali (Satispay, PayPal). Per gli abbonamenti mensili è possibile impostare il bonifico automatico.",
  },
  {
    question: "Posso cancellare o spostare l'appuntamento?",
    answer:
      "Certo! Ti chiediamo cortesemente di avvisarci almeno 24 ore prima per permetterci di gestire al meglio gli appuntamenti.",
  },
  {
    question: "Offrite servizi a domicilio?",
    answer:
      "Sì, offriamo servizi a domicilio per occasioni speciali come matrimoni o eventi. Contattaci per maggiori informazioni e preventivi personalizzati.",
  },
  {
    question: "I prodotti sono sicuri e certificati?",
    answer:
      "Assolutamente sì! Utilizziamo solo prodotti certificati EU, testati dermatologicamente e di alta qualità. Tutti gli strumenti sono sterilizzati professionalmente.",
  },
];

const socialMedia = [
  {
    name: "Instagram",
    handle: "@sultanyan__",
    icon: "📸",
    link: "https://instagram.com/sultanyan__",
  },
  {
    name: "Facebook",
    handle: "Sultan Nails Brescia",
    icon: "👍",
    link: "https://facebook.com/sultannails",
  },
  {
    name: "TikTok",
    handle: "@sultannails",
    icon: "🎵",
    link: "https://tiktok.com/@sultannails",
  },
];

export default function ContattiPage() {
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
              Contattaci
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Siamo qui per te
            </h1>
            <p className="max-w-3xl text-lg text-white/80 sm:text-xl">
              Hai domande o vuoi prenotare un appuntamento? Contattaci con il
              metodo che preferisci. Rispondiamo sempre entro poche ore!
            </p>
          </section>

          {/* Contact Methods */}
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/8"
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-white/70 mb-3">
                  {method.description}
                </p>
                <div className="font-medium text-white mb-4">
                  {method.value}
                </div>
                <a
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.link.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="inline-block rounded-full bg-fuchsia-500/20 px-4 py-2 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-500 hover:text-white"
                >
                  {method.cta}
                </a>
              </div>
            ))}
          </section>

          {/* Opening Hours */}
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Orari</h2>
                <p className="text-white/70">
                  Siamo aperti dal martedì al sabato
                </p>
              </div>
              <div className="space-y-3">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-3 ${
                      item.closed ? "opacity-50" : ""
                    }`}
                  >
                    <span className="font-medium">{item.day}</span>
                    <span
                      className={
                        item.closed ? "text-white/60" : "text-fuchsia-100"
                      }
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm text-white/70">
                  💡 Appuntamenti su prenotazione. Chiuso festivi nazionali.
                </div>
              </div>
            </div>

            {/* Location Info */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/15 via-white/5 to-sky-400/20 p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-semibold mb-2">Dove siamo</h2>
                <p className="text-white/70">
                  Nel cuore di Casalnuovo, facilmente raggiungibile
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <div className="font-semibold text-white mb-1">
                      Indirizzo
                    </div>
                    <div className="text-white/80">
                      Via Corso Umberto I 52
                      <br />
                      80013 Casalnuovo di Napoli (NA)
                      <br />
                      Italia
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <div className="font-semibold text-white mb-1">
                      Parcheggio
                    </div>
                    <div className="text-white/80">
                      Parcheggio pubblico a 2 minuti a piedi
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/t3w1A8m83u4dVyVW8"
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-full bg-white/10 border-2 border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/20 hover:border-white"
              >
                Apri su Google Maps
              </a>
            </div>
          </section>

          {/* Social Media */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-semibold mb-2">
                Seguici sui social
              </h2>
              <p className="text-white/70">
                Scopri le nostre ultime creazioni e le novità del momento
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/8"
                >
                  <span className="text-3xl">{social.icon}</span>
                  <div>
                    <div className="font-semibold text-white">
                      {social.name}
                    </div>
                    <div className="text-sm text-white/70">{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold mb-2">Domande frequenti</h2>
              <p className="text-white/70">
                Le risposte alle domande più comuni
              </p>
            </div>
            <div className="space-y-4">
              {faq.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/8"
                >
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {item.question}
                  </h3>
                  <p className="text-white/75">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Emergency Info */}
          <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-white/5 to-sky-400/20 p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl">⚡</span>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Appuntamenti urgenti?
                </h3>
              </div>
              <p className="text-white/80 max-w-2xl">
                Se hai bisogno di un appuntamento urgente o dell'ultimo minuto,
                contattaci direttamente su WhatsApp. Faremo del nostro meglio
                per trovare una soluzione!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/393401234567"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/40 transition hover:-translate-y-1 hover:shadow-fuchsia-500/60"
                >
                  Contattaci su WhatsApp
                </a>
                <a
                  href="tel:+393401234567"
                  className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
                >
                  Chiamaci ora
                </a>
              </div>
            </div>
          </section>

          {/* Privacy Note */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-sm text-white/70">
              🔒 La tua privacy è importante per noi. Tutti i dati personali
              sono trattati secondo il GDPR e utilizzati esclusivamente per la
              gestione degli appuntamenti.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
