import { useState } from 'react';
import { Droplets, Shield, Sparkles, FlaskConical, Leaf } from 'lucide-react';

const NAVY = '#004D99';
const GOLD = '#CB9966';

const TYPES = [
  {
    key: 'strong-kangen',
    name: 'Strong Kangen Water (11.5 pH)',
    icon: FlaskConical,
    desc: 'High alkalinity for cleaning oils and emulsifying residues. Not for drinking.',
    accent: NAVY,
  },
  {
    key: 'kangen',
    name: 'Kangen Water (8.5 – 9.5 pH)',
    icon: Droplets,
    desc: 'Daily drinking water supporting balance and hydration with a smooth mouthfeel.',
    accent: GOLD,
  },
  {
    key: 'neutral',
    name: 'Neutral Water (7.0 pH)',
    icon: Leaf,
    desc: 'Gentle, mineral-neutral water ideal for medications and infant formula.',
    accent: '#6b7280',
  },
  {
    key: 'beauty',
    name: 'Beauty Water (6.0 pH)',
    icon: Sparkles,
    desc: 'Slightly acidic water ideal for skin and hair care routines (external use).',
    accent: '#8b5cf6',
  },
  {
    key: 'strong-acidic',
    name: 'Strong Acidic Water (2.5 pH)',
    icon: Shield,
    desc: 'Powerful sanitizing properties for surfaces and hygiene (not for drinking).',
    accent: '#ef4444',
  },
];

export default function WaterTypes() {
  const [active, setActive] = useState('kangen');

  return (
    <section className="relative bg-[#f8fbff] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide" style={{ color: NAVY }}>Types of Water & Uses</h2>
            <p className="mt-2 max-w-2xl text-slate-600">Explore the 5 water types with a clean, modern tabbed layout.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-2 shadow-sm ring-1 ring-slate-200">
            {TYPES.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                  active === t.key ? 'bg-slate-100 font-medium' : 'hover:bg-slate-50'
                }`}
                style={{ color: active === t.key ? t.accent : NAVY }}
              >
                <t.icon className="h-4 w-4" />
                {t.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
          {TYPES.map((t) => (
            <div
              key={t.key}
              className={`${active === t.key ? 'block' : 'hidden'} grid gap-10 p-8 md:grid-cols-2`}
            >
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <t.icon className="h-6 w-6" style={{ color: t.accent }} />
                  <h3 className="text-2xl font-semibold" style={{ color: NAVY }}>{t.name}</h3>
                </div>
                <p className="mt-4 text-slate-600">{t.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Modern Iconography</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Clean Use Cases</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">Premium Aesthetic</span>
                </div>
              </div>
              <div className="relative">
                <div className="h-64 w-full rounded-xl bg-gradient-to-br from-white to-slate-50 p-6 ring-1 ring-slate-200">
                  {/* Visual emphasis box */}
                  <div className="relative h-full w-full overflow-hidden rounded-lg" style={{ background: `linear-gradient(135deg, ${NAVY}10, #ffffff)` }}>
                    <div className="absolute inset-0 opacity-10" style={{ background: `repeating-linear-gradient(60deg, ${t.accent} 0, ${t.accent} 2px, transparent 2px, transparent 10px)` }} />
                    <div className="absolute inset-0" style={{ boxShadow: `inset 0 0 0 2px ${t.accent}20` }} />
                    <div className="absolute bottom-4 left-4 rounded-md px-3 py-1 text-sm font-medium" style={{ background: `${t.accent}20`, color: t.accent }}>
                      {t.name}
                    </div>
                  </div>
                </div>
                {t.key === 'strong-acidic' && (
                  <p className="mt-3 text-sm" style={{ color: '#ef4444' }}>
                    Note: Contrasting highlight emphasizes its specialty use.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
