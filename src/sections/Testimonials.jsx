import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/testimonials`);
        const data = await res.json();
        setItems(data);
      } catch (e) {
        setItems([
          { name: 'Maya Patel', role: 'COO, Horizon', quote: 'They automated our onboarding and support. NPS up, costs down.' },
          { name: 'James Turner', role: 'Head of Sales, Northbeam', quote: 'AI SDR added pipeline from day one. 4.7x more demos.' },
          { name: 'Lena Fischer', role: 'CX Lead, Lumos', quote: '52% ticket deflection with seamless escalation.' },
        ]);
      }
    }
    load();
  }, []);

  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [items]);

  if (!items.length) return null;

  return (
    <section aria-labelledby="testimonials-heading" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-white">Loved by operators</h2>
          <p className="mt-3 text-slate-300">Results that speak for themselves.</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl" role="region" aria-roledescription="carousel" aria-label="Testimonials">
          <AnimatePresence mode="wait">
            <motion.figure key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="text-center">
              <blockquote className="text-xl sm:text-2xl text-white">“{items[index].quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-300">— {items[index].name}, {items[index].role}</figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
