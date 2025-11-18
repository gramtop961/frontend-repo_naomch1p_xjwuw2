import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/2 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-16 left-1/2 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              AI Automations for Ambitious Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-5 text-lg text-slate-300 max-w-xl"
            >
              We design, build and maintain bespoke AI systems that streamline your ops, 10x productivity, and unlock new revenue — without changing your stack.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                Book a discovery call
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur">
                Explore services
              </a>
            </motion.div>

            {/* Logos */}
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-80">
              {['Notion','Slack','Zapier','HubSpot','Airtable','Make'].map((l) => (
                <div key={l} className="text-center text-xs text-slate-400">{l}</div>
              ))}
            </div>
          </div>

          {/* Spline 3D */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[560px] rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
