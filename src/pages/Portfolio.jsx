import React from 'react';
import { motion } from 'framer-motion';
import PortfolioSection from '../components/sections/Portfolio';
import CTA from '../components/sections/CTA';

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
       <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
        >
          Success Stories
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-bold mb-8"
        >
          Selected <span className="text-gradient">Case Studies</span>
        </motion.h1>
      </div>

      <PortfolioSection />
      
      <div className="bg-dark py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-12">Clients We've Helped Dominate</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-20">
             {['Google', 'Meta', 'Netflix', 'Amazon', 'Apple', 'Tesla', 'SpaceX', 'Uber'].map(c => (
               <div key={c} className="text-2xl font-bold tracking-tighter py-8 border border-white/10 rounded-2xl">
                 {c}
               </div>
             ))}
          </div>
        </div>
      </div>

      <CTA />
    </motion.div>
  );
};

export default Portfolio;
