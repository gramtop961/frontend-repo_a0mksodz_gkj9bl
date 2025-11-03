import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const NAVY = '#004D99';
const GOLD = '#CB9966';

export default function TechnologyAndCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0b3b73] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{
        background: `radial-gradient(800px 400px at 85% 20%, rgba(203,153,102,0.3), transparent), radial-gradient(800px 400px at 15% 80%, rgba(255,255,255,0.15), transparent)`
      }} />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Device visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto h-80 w-64 rounded-3xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/20">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white/30 to-white/10 p-4">
                {/* Exploded plates */}
                <div className="relative h-full w-full rounded-xl bg-[#0f4f99] p-3">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 h-6 w-40 -translate-x-1/2 rounded-md"
                      style={{ background: GOLD, boxShadow: '0 6px 20px rgba(203,153,102,0.35)' }}
                      initial={{ y: 20 * i, opacity: 0 }}
                      whileInView={{ y: 8 * i + 10, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                    />
                  ))}
                  {/* Filter path */}
                  <div className="absolute right-3 top-3 h-20 w-1 rounded-full bg-cyan-300/70" />
                  <div className="absolute right-3 top-24 h-24 w-1 rounded-full bg-cyan-200/60" />
                </div>
              </div>
              <div className="absolute -left-8 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur sm:block">
                Platinum‑dipped Titanium Plates
              </div>
            </div>
          </motion.div>

          {/* Copy + CTA */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" style={{ color: GOLD }}>Technology & True Health</h2>
            <p className="mt-4 text-white/85">A sophisticated electrolysis system with premium materials and meticulous filtration, designed to deliver versatile water for lifestyle, wellness, and home care.</p>

            <ul className="mt-6 space-y-3 text-white/90">
              {['Physical Wellness', 'Financial Opportunity', 'Mental Clarity'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5" style={{ color: GOLD }} />
                  <span className="text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0b3b73]"
                style={{ background: GOLD }}
              >
                Learn More About Enagic India
                <span className="absolute inset-x-4 bottom-1 block h-0.5 rounded-full opacity-70 transition group-hover:opacity-100" style={{ background: '#0b3b73' }} />
              </button>
              <p className="mt-3 text-xs text-white/70">Subtle pulse draws attention to the next step.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
