import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$4,900',
    subtitle: 'Scope → MVP in 3 weeks',
    features: ['Discovery workshop', 'System design', 'Prototype agent', '2 integrations'],
    highlight: false,
  },
  {
    name: 'Scale',
    price: '$9,900',
    subtitle: 'Production build in 6–8 weeks',
    features: ['Dedicated team', 'Orchestration & evals', '5–8 integrations', 'Monitoring & analytics'],
    highlight: true,
  },
  {
    name: 'Partner',
    price: 'Custom',
    subtitle: 'Embedded team + SLAs',
    features: ['Roadmap + PM', 'Security reviews', 'On-call support', 'Quarterly optimization'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Engagements</h2>
          <p className="mt-3 text-slate-300">Flexible models to match your velocity and ambition.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl border border-white/10 p-6 ${t.highlight ? 'bg-gradient-to-br from-fuchsia-600/20 via-violet-600/10 to-cyan-500/10 shadow-[0_0_40px_rgba(139,92,246,0.25)]' : 'bg-white/5'}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <span className="text-2xl font-bold text-white">{t.price}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{t.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-200">
                    <Check className="size-4 text-cyan-300" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-2 font-semibold text-slate-900">Get started</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
