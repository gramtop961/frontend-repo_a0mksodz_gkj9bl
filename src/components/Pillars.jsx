import { motion } from 'framer-motion';

const NAVY = '#004D99';
const GOLD = '#CB9966';

function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl ${className}`}
      style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}
    >
      {children}
    </div>
  );
}

export default function Pillars() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" style={{ color: NAVY }}>
            The Three Pillars of Kangen Water
          </h2>
          <p className="mt-3 text-slate-600">Antioxidant power, optimal alkalinity, and superior hydration.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* ORP */}
          <Card className="p-6" >
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold" style={{ color: NAVY }}>Antioxidant (ORP)</h3>
              <span className="rounded-full bg-[#0b5fbf]/10 px-3 py-1 text-xs font-medium" style={{ color: NAVY }}>Electron Exchange</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">High negative ORP helps neutralize free radicals for cellular support.</p>
            <div className="mt-6">
              <div className="relative h-40 w-full rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 p-4">
                <div className="absolute inset-0 rounded-xl border border-slate-200" />
                <div className="flex h-full w-full items-end gap-2">
                  {/* Positive ORP drinks (greyed) */}
                  {[20, 30, 24, 36].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-slate-300/70" style={{ height: `${h}%` }} />
                  ))}
                  {/* Kangen negative ORP bar */}
                  <motion.div
                    className="flex-1 rounded-t"
                    style={{ background: GOLD }}
                    initial={{ height: '10%' }}
                    animate={{ height: '90%' }}
                    transition={{ duration: 1.6, delay: 0.2, ease: 'easeOut' }}
                  />
                </div>
                <div className="absolute right-4 top-4 rounded-md bg-black/70 px-2 py-1 text-xs text-white">
                  ORP −750 mV
                </div>
              </div>
            </div>
          </Card>

          {/* pH */}
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold" style={{ color: NAVY }}>Alkalinity (pH)</h3>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">Core Metric</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">A gentle alkaline range supports balance. Highlighting 8.5–9.5 pH.</p>

            <PHInteractive />
          </Card>

          {/* Micro-clustering */}
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold" style={{ color: NAVY }}>Micro‑clustering</h3>
              <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-700">Hydration</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Smaller clusters are absorbed more efficiently, aiding deep hydration.</p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {/* Tight cluster entering cell */}
              <motion.div
                className="relative h-36 rounded-xl bg-gradient-to-br from-sky-50 to-white"
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border-2 border-sky-300/70" />
                </div>
                <motion.div
                  className="absolute left-4 top-1/2 flex -translate-y-1/2 gap-1"
                  initial={{ x: 0 }}
                  animate={{ x: 120 }}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-2 w-2 rounded-full bg-sky-500" />
                  ))}
                </motion.div>
              </motion.div>
              {/* Large clusters difficulty */}
              <div className="relative h-36 rounded-xl bg-gradient-to-br from-slate-50 to-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full border-2 border-slate-300/70" />
                </div>
                <div className="absolute left-4 top-1/2 flex -translate-y-1/2 flex-wrap gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-3 w-3 rounded-full bg-slate-400" />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* bottom wave divider */}
      <svg className="mt-16 h-16 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill={NAVY} d="M0,64L60,90.7C120,117,240,171,360,181.3C480,192,600,160,720,160C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
    </section>
  );
}

function PHInteractive() {
  const scale = [2,3,4,5,6,7,8,9,10,11,12,13,14];
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid grid-cols-13 gap-1">
        {scale.map((pH) => (
          <div key={pH} className="flex flex-col items-center gap-2">
            <div
              className="h-16 w-full rounded"
              style={{
                background: `linear-gradient(180deg, ${pH < 7 ? '#ff9052' : pH === 7 ? '#cbd5e1' : '#6b8cff'} 0%, #ffffff 100%)`,
                border: pH >= 9 && pH <= 10 ? `2px solid ${GOLD}` : '1px solid #e2e8f0'
              }}
            />
            <span className="text-[10px] text-slate-500">{pH}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <span>Acidic</span>
        <span>Neutral</span>
        <span>Alkaline</span>
      </div>
      <div className="mt-4 rounded-md bg-amber-50 p-3 text-sm" style={{ borderLeft: `3px solid ${GOLD}` }}>
        <span className="font-medium" style={{ color: GOLD }}>Kangen Range Highlighted:</span> 8.5 – 9.5 pH
      </div>
    </div>
  );
}
