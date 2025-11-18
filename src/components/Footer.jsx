export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NOVA Automations. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <a href="https://x.com" aria-label="X / Twitter" className="hover:text-white">X</a>
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
          <a href="mailto:hello@nova.automation" aria-label="Email" className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
