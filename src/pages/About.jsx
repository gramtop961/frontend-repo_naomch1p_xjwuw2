import { motion } from 'framer-motion';

const team = [
  { name: 'Ava Chen', role: 'Founder & CEO' },
  { name: 'Diego Martinez', role: 'Head of Engineering' },
  { name: 'Sofia Rossi', role: 'Product Lead' },
  { name: 'Ethan Cole', role: 'Solutions Architect' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 text-slate-300">We build AI systems that create real business leverage. Our team blends product, ML, and ops to ship outcomes quickly and safely.</p>
        </header>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">Make advanced automation usable for every team. Move from manual, fragmented workflows to resilient, agentic systems with measurable ROI.</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Team</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 opacity-80" />
                <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
                <p className="text-sm text-slate-300">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold">Timeline</h2>
          <ol className="mt-6 relative border-l border-white/10 pl-6 space-y-8">
            {[
              { t: '2023', d: 'Founded NOVA Automations' },
              { t: '2024 Q2', d: 'Launched agentic support stack' },
              { t: '2024 Q4', d: 'Scaled to multi-tenant orchestration' },
            ].map((e) => (
              <li key={e.t} className="relative">
                <span className="absolute -left-[9px] top-1.5 h-3 w-3 rounded-full bg-cyan-400" />
                <div className="text-sm text-slate-400">{e.t}</div>
                <div className="text-white">{e.d}</div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
