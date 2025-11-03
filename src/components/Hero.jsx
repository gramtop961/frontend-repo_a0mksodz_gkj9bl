import { motion } from 'framer-motion';

const NAVY = '#004D99';
const GOLD = '#CB9966';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" style={{ background: NAVY }}>
      {/* Animated fluid gradient background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background: `radial-gradient(1200px 800px at 20% 20%, rgba(255,255,255,0.10), transparent 60%),
                      radial-gradient(900px 600px at 80% 30%, rgba(203,153,102,0.15), transparent 50%),
                      linear-gradient(140deg, ${NAVY} 0%, #0a64c7 50%, #8fe7ff 100%)`,
          filter: 'saturate(1.05) contrast(1.05)'
        }}
      />

      {/* Slow liquid ripple overlay */}
      <motion.svg
        className="absolute inset-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: 40 }}
        animate={{ y: [40, 20, 40] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        style={{ mixBlendMode: 'overlay', opacity: 0.35 }}
      >
        <defs>
          <linearGradient id="wave" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8fe7ff" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          fill="url(#wave)"
          d="M0,96L60,112C120,128,240,160,360,181.3C480,203,600,213,720,197.3C840,181,960,139,1080,112C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </motion.svg>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-wide"
          style={{ color: GOLD, textShadow: '0 4px 20px rgba(0,0,0,0.35)' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          Kangen Water Demo Presentation
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl text-base md:text-lg/relaxed text-white/85"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Premium, health-forward hydration. A modern, fluid experience inspired by Enagic India.
        </motion.p>
      </div>

      {/* Aqua gradient overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(255,255,255,0) 40%, rgba(0,0,0,0.25))'
        }}
      />
    </section>
  );
}
