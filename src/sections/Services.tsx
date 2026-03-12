import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

export default function Services() {
  return (
    <section className="py-32 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold"
            >
              Solutions Tailored for <br /> Modern Businesses
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/60 max-w-md"
          >
            From high-end creative design to professional call center outsourcing, we provide the tools you need to dominate your market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div key={service.id}>
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: any;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    gsap.to(cardRef.current, {
      rotateY: x * 20,
      rotateX: -y * 20,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative p-8 glass rounded-3xl hover:bg-white/10 transition-all duration-500 cursor-pointer overflow-hidden transform-style-3d"
        data-cursor-label="View"
      >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
              <div className="w-6 h-6 bg-white/20 rounded-lg" />
            </div>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-background transition-all"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </div>

          <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
          <p className="text-white/50 text-sm mb-8 leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-3">
            {service.items.map((item: string) => (
              <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
