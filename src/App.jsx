import Hero from './components/Hero';
import Pillars from './components/Pillars';
import WaterTypes from './components/WaterTypes';
import TechnologyAndCTA from './components/TechnologyAndCTA';

function App() {
  return (
    <div className="min-h-screen w-full font-sans antialiased">
      {/* Hero Section with animated fluid background and premium title */}
      <Hero />

      {/* Section 2: Three Properties / Pillars */}
      <Pillars />

      {/* Section 3: 5 Types of Water & Uses */}
      <WaterTypes />

      {/* Section 4 + 5: Machine/Technology Overview + True Health CTA */}
      <TechnologyAndCTA />

      <footer className="bg-[#001f3f] py-8 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Enagic India — Premium Hydration, Modern Wellness.
      </footer>
    </div>
  );
}

export default App;
