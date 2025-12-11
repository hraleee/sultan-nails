"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Palette", href: "#palette" },
  { label: "Pacchetti", href: "#pacchetti" },
  { label: "Contatti", href: "#contatti" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[999] border-b border-white/10 bg-gradient-to-b from-black/80 via-black/90 to-black/95 backdrop-blur-xl shadow-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-400/90 to-sky-400/90 shadow-xl shadow-fuchsia-500/50" />
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-100">
                Sultan
              </div>
              <div className="text-sm font-bold text-white">Nails Studio</div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group rounded-full px-4 py-2.5 text-sm font-semibold text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white hover:-translate-y-0.5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/393401234567"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-fuchsia-500 to-rose-500 px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-fuchsia-500/40 hover:shadow-fuchsia-500/60 hover:-translate-y-1 transition-all duration-200"
            >
              Prenota
            </a>
          </nav>

          <button
            className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Apri menu"
          >
            <div className="flex flex-col gap-1.5 p-1">
              <span className="block h-[2px] w-6 rounded-full bg-white transition-all group-hover:w-5" />
              <span className="block h-[2px] w-5 rounded-full bg-white/80 transition-all group-hover:w-6" />
              <span className="block h-[2px] w-6 rounded-full bg-white transition-all group-hover:w-5" />
            </div>
          </button>
        </div>
      </header>

      {/* SIDEBAR MODALE - FUORI DALL'HEADER PER COPRIRE TUTTO LO SCHERMO */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-md md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-[1001] w-[75vw] max-w-sm border-r border-white/20 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.95)] backdrop-blur-xl md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0f0f18] to-[#080810] opacity-95" />
              <div className="absolute inset-0 bg-[#0c0c13]/98" />
              
              {/* Content */}
              <div className="relative z-10 h-full overflow-y-auto">
              {/* Profile Header */}
              <div className="p-8 pb-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-fuchsia-400/30 to-sky-400/30 border-4 border-white/20 shadow-2xl" />
                      <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-rose-400 shadow-xl animate-pulse" />
                    </div>
                    <div>
                      <div className="text-sm uppercase tracking-[0.3em] text-fuchsia-200 mb-1">
                        Studio
                      </div>
                      <h1 className="text-2xl font-black bg-gradient-to-r from-white via-fuchsia-100/90 to-white bg-clip-text text-transparent">
                        Sultan Nails
                      </h1>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 0.95 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={close}
                    className="p-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
                  >
                    <svg
                      className="h-6 w-6 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>
                <div className="space-y-1 text-sm text-white/70">
                  <div>Via Vittoria 18, Brescia</div>
                  <div className="text-xs uppercase tracking-wider text-fuchsia-200/80">
                    Mar-Sab 10-19
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="px-8 py-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group flex items-center gap-4 p-5 rounded-3xl text-lg font-bold text-white/90 bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white hover:shadow-xl hover:shadow-fuchsia-500/30 transition-all duration-300"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-fuchsia-400 to-sky-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div className="px-8 pb-10 pt-4 border-t border-white/10 space-y-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/393401234567"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 rounded-4xl bg-gradient-to-r from-fuchsia-500 via-rose-500 to-fuchsia-600 px-8 py-6 text-xl font-black text-white shadow-2xl shadow-fuchsia-500/50 hover:shadow-fuchsia-500/70 transition-all duration-300"
                >
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Prenota Ora
                </motion.a>
                <a
                  href="tel:+393401234567"
                  className="block w-full rounded-2xl border-2 border-white/30 bg-white/10 px-6 py-4 text-center font-bold text-white backdrop-blur-sm hover:border-white hover:bg-white/20 transition-all duration-200"
                >
                  📞 +39 340 123 4567
                </a>
              </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

