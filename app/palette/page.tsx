import Header from "../components/Header";

const collections = [
  {
    name: "Classic Elegance",
    description: "Tonalità senza tempo per un look sofisticato",
    colors: [
      { name: "French White", hex: "#FFFFFF", tone: "Bianco puro" },
      { name: "Nude Beige", hex: "#E8D4C0", tone: "Beige naturale" },
      { name: "Soft Pink", hex: "#F5C7D4", tone: "Rosa delicato" },
      { name: "Ballet Slipper", hex: "#F0D9E1", tone: "Rosa ballet" },
    ],
  },
  {
    name: "Pastel Dreams",
    description: "Colori pastello per un tocco di dolcezza",
    colors: [
      { name: "Lavender Mist", hex: "#E6D8F0", tone: "Lavanda chiaro" },
      { name: "Mint Breeze", hex: "#D4F0E8", tone: "Menta pastello" },
      { name: "Peach Blush", hex: "#FFE5D9", tone: "Pesca delicato" },
      { name: "Baby Blue", hex: "#D6E8F5", tone: "Azzurro pastello" },
    ],
  },
  {
    name: "Bold & Beautiful",
    description: "Colori intensi per chi osa",
    colors: [
      { name: "Crimson Red", hex: "#C41E3A", tone: "Rosso cremisi" },
      { name: "Deep Berry", hex: "#8B3A62", tone: "Mora scuro" },
      { name: "Royal Purple", hex: "#6B3FA0", tone: "Viola regale" },
      { name: "Emerald Green", hex: "#0C6B4E", tone: "Verde smeraldo" },
    ],
  },
  {
    name: "Nude Couture",
    description: "Palette nude per ogni carnagione",
    colors: [
      { name: "Porcelain", hex: "#F5E6D3", tone: "Porcellana" },
      { name: "Caramel", hex: "#D4A574", tone: "Caramello" },
      { name: "Cocoa", hex: "#B88A6B", tone: "Cacao" },
      { name: "Mocha", hex: "#A67C5B", tone: "Moka" },
    ],
  },
  {
    name: "Metallic Luxe",
    description: "Finish metallici e cromati premium",
    colors: [
      { name: "Rose Gold", hex: "#E8C4B8", tone: "Oro rosa" },
      { name: "Silver Chrome", hex: "#C0C0C0", tone: "Argento cromato" },
      { name: "Gold Shimmer", hex: "#FFD700", tone: "Oro brillante" },
      { name: "Copper Glow", hex: "#D4926F", tone: "Rame luminoso" },
    ],
  },
  {
    name: "Dark Romance",
    description: "Tonalità scure e misteriose",
    colors: [
      { name: "Black Velvet", hex: "#1C1C1C", tone: "Nero vellutato" },
      { name: "Burgundy Wine", hex: "#6B1F3D", tone: "Bordeaux" },
      { name: "Midnight Blue", hex: "#1A1F4C", tone: "Blu notte" },
      { name: "Forest Green", hex: "#2C4A3A", tone: "Verde foresta" },
    ],
  },
];

const finishes = [
  {
    name: "Glossy",
    icon: "✨",
    description: "Finitura super lucida e brillante",
    effect: "Effetto specchio ad alta lucentezza",
  },
  {
    name: "Matte",
    icon: "🌙",
    description: "Finitura opaca elegante",
    effect: "Texture vellutata senza riflessi",
  },
  {
    name: "Chrome",
    icon: "💎",
    description: "Effetto specchio metallico",
    effect: "Riflesso cromato ultra-lucido",
  },
  {
    name: "Velvet",
    icon: "🎀",
    description: "Texture vellutata premium",
    effect: "Effetto pelliccia morbida al tatto",
  },
  {
    name: "Shimmer",
    icon: "⭐",
    description: "Finish perlato luminoso",
    effect: "Micro-glitter che catturano la luce",
  },
  {
    name: "Cat Eye",
    icon: "👁️",
    description: "Effetto magnetico 3D",
    effect: "Striscia magnetica che cambia con la luce",
  },
];

export default function PalettePage() {
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
              Palette Colori
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Oltre 120 tonalità selezionate
            </h1>
            <p className="max-w-3xl text-lg text-white/80 sm:text-xl">
              Pigmenti premium certificati EU, aggiornati ogni stagione. Ogni
              colore è testato per garantire fedeltà cromatica e durata
              eccezionale.
            </p>
          </section>

          {/* Finishes Section */}
          <section className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold mb-2">
                Finiture disponibili
              </h2>
              <p className="text-white/70">
                Scegli l'effetto perfetto per il tuo stile
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {finishes.map((finish) => (
                <div
                  key={finish.name}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:bg-white/8"
                >
                  <div className="text-4xl mb-3">{finish.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{finish.name}</h3>
                  <p className="text-white/75 text-sm mb-2">
                    {finish.description}
                  </p>
                  <p className="text-xs text-fuchsia-200">{finish.effect}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Color Collections */}
          <section className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold mb-2">
                Le nostre collezioni
              </h2>
              <p className="text-white/70">
                Palette cromatiche curate per ogni occasione
              </p>
            </div>

            {collections.map((collection) => (
              <div
                key={collection.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white/70">{collection.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {collection.colors.map((color) => (
                    <div
                      key={color.name}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-fuchsia-400/40"
                    >
                      <div
                        className="w-full h-24 rounded-xl mb-4 border-2 border-white/20 shadow-lg"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="space-y-1">
                        <div className="font-semibold text-white">
                          {color.name}
                        </div>
                        <div className="text-sm text-white/60">
                          {color.tone}
                        </div>
                        <div className="text-xs font-mono text-white/40">
                          {color.hex}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Seasonal Updates */}
          <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-white/5 to-sky-400/20 p-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-fuchsia-100">
                Novità
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Collezioni stagionali
              </h3>
              <p className="text-white/80 max-w-2xl">
                Ogni stagione introduciamo nuove tonalità ispirate alle tendenze
                della moda e del design internazionale. Seguici su Instagram per
                scoprire in anteprima le novità!
              </p>
              <div className="grid gap-4 sm:grid-cols-3 pt-4">
                {[
                  { season: "Primavera 2024", colors: "12 nuove tonalità" },
                  { season: "Estate 2024", colors: "15 colori vibranti" },
                  { season: "Autunno 2024", colors: "10 sfumature calde" },
                ].map((item) => (
                  <div
                    key={item.season}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4"
                  >
                    <div className="font-semibold text-white mb-1">
                      {item.season}
                    </div>
                    <div className="text-sm text-white/70">{item.colors}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Custom Color Mixing */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                Non trovi il colore perfetto?
              </h3>
              <p className="text-white/80 max-w-2xl">
                Possiamo creare miscele personalizzate per te! Porta una foto o
                un campione del colore desiderato e lo riprodurremo con i nostri
                pigmenti premium.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Mix Personalizzato",
                  desc: "Creiamo il tuo colore unico",
                  icon: "🎨",
                },
                {
                  title: "Match Perfetto",
                  desc: "Abbiniamo colori da foto o tessuti",
                  icon: "📸",
                },
                {
                  title: "Consulenza Colore",
                  desc: "Ti aiutiamo a scegliere la tonalità ideale",
                  icon: "💡",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-white/70">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Final */}
          <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-white/5 to-sky-400/20 p-8 text-center">
            <h3 className="text-3xl font-semibold mb-4">
              Vuoi vedere i colori dal vivo?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Prenota un appuntamento per una consulenza colore gratuita. Ti
              mostreremo la palette completa e ti aiuteremo a scegliere!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/393401234567"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-fuchsia-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/40 transition hover:-translate-y-1 hover:shadow-fuchsia-500/60"
              >
                Prenota consulenza
              </a>
              <a
                href="/servizi"
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/20"
              >
                Vedi i servizi
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
