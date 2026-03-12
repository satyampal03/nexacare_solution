import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Portfolio from '../sections/Portfolio';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import { revealAnimation, staggerReveal } from '../animations';

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (statsRef.current) {
      const items = statsRef.current.querySelectorAll('.stat-item');
      staggerReveal(Array.from(items) as HTMLElement[]);
    }
    if (ctaRef.current) {
      revealAnimation(ctaRef.current);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatItem number="250+" label="Projects Completed" />
            <StatItem number="120+" label="Happy Clients" />
            <StatItem number="10+" label="Years Experience" />
            <StatItem number="15+" label="Team Members" />
          </div>
        </div>
      </section>

      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      
      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Ready to Transform Your <br /> Digital Presence?
          </h2>
          <p className="text-white/60 text-lg mb-12">
            Join 100+ businesses that have scaled their operations with Nexacare Solution.
          </p>
          <button className="px-10 py-5 bg-white text-background rounded-full font-bold text-xl hover:bg-primary hover:text-white transition-all glow-primary">
            Get Started Today
          </button>
        </div>
      </section>

      <Contact />
    </motion.div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center stat-item">
      <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
        {number}
      </h3>
      <p className="text-white/50 text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
}
