import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { SERVICES } from '../constants';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasMegaMenu: true },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`relative flex items-center justify-between px-6 py-3 rounded-full border border-white/10 backdrop-blur-xl bg-background/40 transition-all duration-500 ${
            isScrolled ? 'shadow-2xl shadow-primary/10' : ''
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              NEXACARE<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setActiveMenu('services')}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    location.pathname === link.path ? 'text-primary' : 'text-white/70'
                  }`}
                >
                  {link.name}
                  {link.hasMegaMenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Mega Menu Trigger Area */}
                {link.hasMegaMenu && activeMenu === 'services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[900px]">
                    <MegaMenu />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary rounded-full text-sm font-bold hover:bg-primary/90 transition-all glow-primary"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-background pt-32 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>

                  {link.hasMegaMenu && (
                    <div className="mt-4 grid grid-cols-1 gap-4 pl-4 border-l border-white/10 bg-slate-900 p-4 rounded-lg">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="text-lg text-white/50 hover:text-primary transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="p-8 bg-slate-950 rounded-[2rem] border border-white/10 shadow-2xl"
    >
      <div className="grid grid-cols-4 gap-8">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} mb-4 flex items-center justify-center`}>
              <div className="w-5 h-5 bg-white/20 rounded-md" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
              {service.title}
            </h4>
            <p className="text-xs text-white/40 mb-4 line-clamp-2">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-xs text-white/60 hover:text-white flex items-center gap-1 group/link"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover/link:bg-primary transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 pt-8 border-top border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-bold">Need a custom solution?</p>
            <p className="text-xs text-white/40">Our experts are ready to help you scale.</p>
          </div>
        </div>
        <Link
          to="/contact"
          className="px-6 py-2 bg-white text-background rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-all"
        >
          Book a Consultation
        </Link>
      </div>
    </motion.div>
  );
}
