import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle starfield grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.35] [background-image:radial-gradient(1px_1px_at_20px_20px,rgba(148,163,184,.18),transparent)] [background-size:32px_32px]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NOVA Automations. All rights reserved.</p>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <a href="#about" className="hover:text-white">About</a>
            <span className="opacity-30">•</span>
            <a href="#services" className="hover:text-white">Services</a>
            <span className="opacity-30">•</span>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
