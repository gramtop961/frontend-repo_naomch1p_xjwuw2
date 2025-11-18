import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassy nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="group inline-flex items-center gap-2">
              <div className="relative grid place-items-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="size-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                />
                <Sparkles className="absolute size-4 text-white/80" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                NOVA <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">Automations</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:opacity-95 transition"
              >
                Book a demo
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-slate-200"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <Menu className="size-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  className="rounded-lg px-3 py-2 text-slate-900 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-center font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Book a demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
