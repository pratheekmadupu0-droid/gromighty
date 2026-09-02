import React from 'react';
import { motion } from 'framer-motion';
import SolutionFinder from '../components/sections/SolutionFinder';
import IndustrySolutions from '../components/sections/IndustrySolutions';
import ContactForm from '../components/sections/ContactForm';

const Solutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 mb-16 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
          Industry & Business Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Tailored Digital Systems.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          Explore specialized solution bundles designed for clinics, real estate, restaurants, retail, and corporate enterprises.
        </p>
      </div>

      <SolutionFinder />
      <IndustrySolutions />
      <ContactForm />
    </motion.div>
  );
};

export default Solutions;
