import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/Services';
import CTA from '../components/sections/CTA';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-bold mb-8"
        >
          Our <span className="text-gradient">Capabilities</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/60 max-w-3xl mx-auto"
        >
          We provide a full spectrum of digital services designed to scale your business. 
          From first-line code to high-level market strategy.
        </motion.p>
      </div>
      
      <ServicesSection />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Why GroMighty?</h2>
            <div className="space-y-8">
              {[
                { t: 'Expert-Only Team', d: 'No juniors. You work directly with industry veterans who understand the high stakes of enterprise growth.' },
                { t: 'Speed to Market', d: 'Our agile methodology ensures fast shipping without compromising on code quality or security.' },
                { t: 'Results Focused', d: 'We don\'t just track metrics; we track the ones that impact your bottom line: revenue and ROI.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.t}</h4>
                    <p className="text-white/40">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass border-white/10 rounded-3xl p-12">
            <h3 className="text-2xl font-bold mb-6">Custom Solutions?</h3>
            <p className="text-white/60 mb-8">
              Every business is unique. We offer tailored packages that fit your specific growth stage and industry requirements.
            </p>
            <ul className="space-y-4 mb-10">
              {['Dedicated Engineering Teams', 'Strategic Growth Audits', 'Custom AI Model Training', 'Global Scaling Infrastructure'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-primary text-dark font-bold rounded-xl hover:scale-105 transition-transform">
              Request a Custom Quote
            </button>
          </div>
        </div>
      </div>

      <CTA />
    </motion.div>
  );
};

export default Services;
