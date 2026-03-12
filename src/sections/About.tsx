import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    'Experienced specialists',
    'Cost-effective outsourcing',
    'Advanced marketing strategies',
    '24/7 customer support',
    'Scalable solutions'
  ];

  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              About Nexacare
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              A Modern Agency Built for the <span className="text-gradient">Digital Era</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Nexacare Solution is a Dubai-based digital marketing and outsourcing company dedicated to helping businesses scale faster.
            </p>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Our team combines marketing expertise, advanced technology, and customer support solutions to deliver measurable results. We bridge the gap between creative vision and operational excellence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Our Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
