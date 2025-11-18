import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-12 backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_top_right,rgba(34,211,238,0.25),transparent),radial-gradient(400px_200px_at_bottom_left,rgba(217,70,239,0.25),transparent)]" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to automate your growth?</h3>
            <p className="mt-3 max-w-2xl text-slate-300">Tell us about your goals. We’ll audit your workflows, design a roadmap, and ship something valuable in the first 14 days.</p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input className="col-span-1 sm:col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Your name" />
              <input className="col-span-1 sm:col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Work email" />
              <button className="col-span-1 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900">Book a demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
