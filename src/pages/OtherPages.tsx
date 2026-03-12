import React from 'react';
import { motion } from 'framer-motion';

const PagePlaceholder = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pt-40 pb-20 px-6 max-w-7xl mx-auto min-h-screen"
  >
    <h1 className="text-6xl md:text-8xl font-display font-bold mb-8">{title}</h1>
    <div className="w-20 h-2 bg-primary mb-12" />
    <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
      We are currently crafting a premium experience for this page. Nexacare Solution is dedicated to providing the highest quality digital and BPO services in Dubai.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
      <div className="glass p-12 rounded-[2.5rem]">
        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-white/50">To be the global leader in integrated digital marketing and BPO solutions, driving innovation from the heart of Dubai.</p>
      </div>
      <div className="glass p-12 rounded-[2.5rem]">
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-white/50">Empowering businesses through cutting-edge technology, creative excellence, and scalable outsourcing strategies.</p>
      </div>
    </div>
  </motion.div>
);

export const About = () => <PagePlaceholder title="About Us" />;
export const Services = () => <PagePlaceholder title="Our Services" />;
export const Portfolio = () => <PagePlaceholder title="Portfolio" />;
export const Contact = () => <PagePlaceholder title="Contact" />;
export const Careers = () => <PagePlaceholder title="Careers" />;

export const DigitalMarketing = () => <PagePlaceholder title="Digital Marketing" />;
export const WebDesign = () => <PagePlaceholder title="Web Design" />;
export const Branding = () => <PagePlaceholder title="Branding" />;
export const BPOServices = () => <PagePlaceholder title="BPO Services" />;
