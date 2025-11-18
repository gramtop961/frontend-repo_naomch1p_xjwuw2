import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  { t: 'Discovery', d: 'Audit workflows, define success metrics, prioritize opportunities.' },
  { t: 'Design', d: 'System design, data flows, guardrails, and evaluation plan.' },
  { t: 'Build', d: 'Implement agents, tools, integrations, and orchestration.' },
  { t: 'Launch', d: 'Ship to production with monitoring, alerts, and playbooks.' },
  { t: 'Optimize', d: 'Iterate with evals, feedback loops, and performance tuning.' },
];

export default function Workflow() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-slate-300">A clear path from idea to impact.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {steps.map((s, i) => (
            <motion.div key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-cyan-300">Step {i + 1}</div>
              <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 size-8 text-white/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
