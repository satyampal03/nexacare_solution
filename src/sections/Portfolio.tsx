import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PORTFOLIO_PROJECTS } from '../constants';
import { staggerReveal } from '../animations';

export default function Portfolio() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll('.project-card');
      staggerReveal(Array.from(items) as HTMLElement[]);
    }
  }, []);

  return (
    <section className="py-32 bg-white/5" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Selected Masterpieces
          </motion.h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <div key={project.title} className="project-card">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: any;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer"
      data-cursor-label="View"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-primary font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          {project.category}
        </span>
        <h3 className="text-2xl font-display font-bold mb-4">{project.title}</h3>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
