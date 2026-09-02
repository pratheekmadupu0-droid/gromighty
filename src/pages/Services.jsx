import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/Services';
import ServicesBenefits from '../components/sections/ServicesBenefits';
import Pricing from '../components/sections/Pricing';
import ContactForm from '../components/sections/ContactForm';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
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
          Capabilities Stack
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          Services Designed for Business Scale.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
          From high-performance websites and e-commerce platforms to custom AI chatbots and web applications.
        </p>
      </div>

      <ServicesSection />
      <ServicesBenefits />
      <Pricing />
      <ContactForm />
    </motion.div>
  );
};

export default Services;
