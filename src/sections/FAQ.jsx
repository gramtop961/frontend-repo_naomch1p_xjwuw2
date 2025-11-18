import { useState } from 'react';

const faqs = [
  { q: 'How fast can we start?', a: 'Discovery can begin within a week. MVPs typically ship in 2–3 weeks.' },
  { q: 'What stacks do you support?', a: 'We integrate with modern SaaS and infra: Slack, HubSpot, Notion, Airtable, Zapier/Make, custom APIs, and more.' },
  { q: 'How do you ensure safety & compliance?', a: 'We implement guardrails, PII redaction, role-based access, audit logs, and deploy in private networks when required.' },
  { q: 'What about ongoing support?', a: 'We offer retainers with SLAs, monitoring, and continuous optimization.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">FAQs</h2>
          <p className="mt-3 text-slate-300">Answers to common questions.</p>
        </div>
        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <button key={f.q} className="w-full text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`faq-${i}`}>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">{f.q}</span>
                <span className="text-cyan-300">{open === i ? '−' : '+'}</span>
              </div>
              <div id={`faq-${i}`} className={`mt-2 text-sm text-slate-300 ${open === i ? 'block' : 'hidden'}`}>{f.a}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
