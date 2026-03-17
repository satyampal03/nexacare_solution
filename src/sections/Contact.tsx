import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Contact Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold mb-8"
            >
              Let's Build Something <span className="text-gradient">Extraordinary</span>
            </motion.h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Have a project in mind? Or just want to say hello? We'd love to hear from you. Our team in Dubai is ready to help you scale.
            </p>

            <div className="space-y-8">
              <ContactInfoItem
                icon={<Mail className="w-6 h-6" />}
                label="Email Us"
                value="Info@nexacaresolution.com"
              />
              <ContactInfoItem
                icon={<Phone className="w-6 h-6" />}
                label="Call Us"
                value="+971 5 430 43213"
              />
              <ContactInfoItem
                icon={<MapPin className="w-6 h-6" />}
                label="Visit Us"
                value="Business Bay, Dubai, UAE"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass p-10 rounded-[3rem] border border-white/10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Service Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option>Digital Marketing</option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>BPO Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button className="w-full py-5 bg-primary rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all glow-primary">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{label}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
