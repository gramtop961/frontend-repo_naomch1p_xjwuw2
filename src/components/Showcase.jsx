import { motion } from 'framer-motion';

const items = [
  {
    tag: 'Sales Ops',
    title: 'AI SDR that books meetings on autopilot',
    metric: '4.7x more qualified demos',
  },
  {
    tag: 'Support',
    title: 'Agent-first helpdesk with human escalation',
    metric: '52% ticket deflection',
  },
  {
    tag: 'Marketing',
    title: 'Content engine that plans, writes, and distributes',
    metric: '70% faster content velocity',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Recent work</h2>
          <p className="mt-3 text-slate-300">A snapshot of outcomes shipped for clients across GTM, ops, and product.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6"
            >
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_top,rgba(139,92,246,0.15),transparent)]" />
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">{it.tag}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-3 text-sm text-cyan-300">{it.metric}</p>

              <div className="mt-6 h-40 rounded-xl bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500 via-violet-500 to-cyan-400 opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
