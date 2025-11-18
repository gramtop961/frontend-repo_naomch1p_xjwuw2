import { motion } from 'framer-motion';
import { Bot, Headphones, Workflow, Wrench } from 'lucide-react';

const services = [
  { key: 'sales', title: 'AI Sales Automation', icon: Bot, bullets: ['Lead sourcing & enrichment', 'Multi-channel outreach', 'Qualification & booking', 'CRM sync & reporting'] },
  { key: 'support', title: 'AI Customer Support', icon: Headphones, bullets: ['Agent-first helpdesk', 'Escalation to human', 'Knowledge base grounding', 'CSAT & deflection analytics'] },
  { key: 'ops', title: 'Workflow Optimization', icon: Workflow, bullets: ['SOP mapping', 'Orchestration & evals', 'Integrations across stack', 'Human-in-the-loop approvals'] },
  { key: 'agents', title: 'Custom Agent Development', icon: Wrench, bullets: ['Specialized workers', 'Tool use & memory', 'Guardrails & compliance', 'Observability dashboard'] },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Services</h1>
          <p className="mt-4 text-slate-300">Battle-tested playbooks to ship value fast, integrated with your stack.</p>
        </header>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.key} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <s.icon className="size-6 text-cyan-300" />
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 text-sm list-disc list-inside">
                {s.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
            </motion.div>
          ))}
        </section>

        {services.map((s, i) => (
          <section key={`detail-${s.key}`} className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            <p className="mt-3 text-slate-300">We design, implement, and maintain {s.title.toLowerCase()} tailored to your workflows, with security and observability from day one.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1,2,3].map((n) => (
                <div key={n} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-300">Outcome #{n}: measurable impact, shipped within weeks.</div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
