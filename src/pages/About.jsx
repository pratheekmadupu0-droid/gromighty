import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Cpu, Users, Award, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../data/websiteData';
import ContactForm from '../components/sections/ContactForm';
import Trust from '../components/sections/Trust';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 mb-20 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
          About GroMighty
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
          A Technology & Digital Partner Built for Business Impact.
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          GroMighty ({BRAND.legalName}) is a technology and digital growth agency. We partner with ambitious founders, business leaders, and clinics to build custom websites, e-commerce systems, AI chatbots, and software platforms.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0B1020] border border-white/[0.08] rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Business Goals First</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We never recommend tools or frameworks just because they are trendy. Every line of code and visual component is crafted to address specific customer acquisition and operational goals.
            </p>
          </div>

          <div className="bg-[#0B1020] border border-white/[0.08] rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Clean Engineering</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Under-the-hood technical excellence. Fast load times, responsive mobile UI, clean HTML markup, and modular architecture that grows seamlessly alongside your company.
            </p>
          </div>

          <div className="bg-[#0B1020] border border-white/[0.08] rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Direct Human Partnership</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              No account manager bureaucracy or support ticket delays. You collaborate directly with senior engineers and creative leads dedicated to your project's success.
            </p>
          </div>
        </div>
      </div>

      <Trust />
      <ContactForm />
    </motion.div>
  );
};

export default About;
