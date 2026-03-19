import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "../constants";

import logo from "../images/logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Nexacare"
                className="h-auto w-auto object-contain"
              />
            </Link>

            <p className="text-white/50 leading-relaxed">
              Transforming businesses through innovative digital marketing,
              stunning design, and scalable BPO solutions.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <FooterLink to="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink to="/portfolio">Our Portfolio</FooterLink>
              </li>
              <li>
                <FooterLink to="/blog">Latest Blog</FooterLink>
              </li>
              <li>
                <FooterLink to="/careers">Careers</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact Us</FooterLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <FooterLink to={`/services/${service.id}`}>
                    {service.title}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-8">Newsletter</h4>
            <p className="text-white/50 text-sm mb-6">
              Subscribe to get the latest digital trends and agency news.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-primary rounded-full hover:bg-primary/90 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/30">
          <p>© {currentYear} Nexacare Solution. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="text-white/50 hover:text-primary transition-colors flex items-center gap-2 group"
    >
      <div className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
      {children}
    </Link>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
    >
      {icon}
    </a>
  );
}
