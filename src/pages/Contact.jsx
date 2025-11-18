import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      budget: form.get('budget'),
      description: form.get('description'),
    };
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSent(true);
    } catch (err) {
      alert('There was an issue submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact</h1>
          <p className="mt-4 text-slate-300">Tell us about your project. We’ll respond within 24 hours.</p>
        </header>

        <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_top_right,rgba(34,211,238,0.25),transparent),radial-gradient(400px_200px_at_bottom_left,rgba(217,70,239,0.25),transparent)]" />

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative">
                <h2 className="text-2xl font-bold">Thanks! 🎉</h2>
                <p className="mt-2 text-slate-300">We’ve received your message and just sent a confirmation email. Our team will be in touch shortly.</p>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="relative grid grid-cols-1 gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-300">Name</label>
                    <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-300">Email</label>
                    <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="jane@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="block text-sm text-slate-300">Budget</label>
                    <select id="budget" name="budget" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
                      <option value=":" className="bg-slate-900">Select budget range</option>
                      {['<$5k', '$5k–$15k', '$15k–$50k', '$50k+'].map(b => <option className="bg-slate-900" key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm text-slate-300">Project description</label>
                  <textarea id="description" name="description" required rows="5" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="What are you trying to automate?" />
                </div>
                <div>
                  <button disabled={loading} className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-slate-900 disabled:opacity-60">
                    {loading ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
