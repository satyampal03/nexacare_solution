import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your brand, goals, and audience to build a solid foundation.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Crafting a data-driven roadmap designed for maximum impact and scalability.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Creating stunning, user-centric visual experiences that tell your story.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Building high-performance, robust digital solutions with modern tech.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploying your digital product with precision and strategic oversight.',
  },
  {
    number: '06',
    title: 'Growth',
    description: 'Continuous optimization and scaling to ensure long-term digital success.',
  },
];

  const Process: React.FC = () => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: '-200vw',
          ease: 'none',
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top top',
            end: '2000 top',
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
      return () => pin.kill();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={triggerRef} className="overflow-hidden bg-black/40">
      <div ref={sectionRef} className="h-screen w-[300vw] flex flex-row relative">
        {/* Intro Section */}
        <div className="h-screen w-screen flex items-center justify-center px-20">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full glass border border-white/10 mb-6"
            >
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-400">Our Workflow</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A systematic approach to digital excellence. Scroll to see how we bring your vision to life.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="h-screen w-[200vw] flex items-center px-20 gap-20">
          {steps.map((step, i) => (
            <div key={i} className="w-[400px] flex-shrink-0">
              <div className="relative mb-12">
                <span className="text-8xl font-display font-black text-white/5 absolute -top-12 -left-8">
                  {step.number}
                </span>
                <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-indigo-500/20 relative z-10">
                  {step.number}
                </div>
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-6">{step.title}</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {step.description}
              </p>
              
              {i < steps.length - 1 && (
                <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-indigo-500 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Process