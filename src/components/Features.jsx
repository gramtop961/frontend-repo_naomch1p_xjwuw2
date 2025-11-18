import { motion } from 'framer-motion';
import { Bot, Workflow, Gauge, ShieldCheck } from 'lucide-react';

const cards = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    desc: 'Deploy specialized AI workers that execute tasks, learn from feedback, and escalate when needed.'
  },
  {
    icon: Workflow,
    title: 'Workflow Orchestration',
    desc: 'Integrate across your stack with robust triggers, branching logic, and human-in-the-loop approvals.'
  },
  {
    icon: Gauge,
    title: 'Real-time Analytics',
    desc: 'Observe KPIs, latency and cost in one command center with alerts and anomaly detection.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Security',
    desc: 'PII redaction, SOC2-ready audit trails, role-based controls, and private network execution.'
  }
];

export default function Features() {
  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we build</h2>
          <p className="mt-3 text-slate-300">From prototypes to production-grade systems, we ship outcomes — not experiments.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition group"
            >
              <c.icon className="size-6 text-fuchsia-400 group-hover:text-cyan-300 transition" />
              <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
