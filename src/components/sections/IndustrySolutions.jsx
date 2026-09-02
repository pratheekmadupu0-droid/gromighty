import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Utensils, Building, GraduationCap, Store, Briefcase, Award, ShoppingBag, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { INDUSTRY_SOLUTIONS } from '../../data/websiteData';

const iconMap = {
  Stethoscope,
  Activity,
  Utensils,
  Building,
  GraduationCap,
  Store,
  Briefcase,
  Award,
  ShoppingBag
};

const IndustrySolutions = () => {
  const [selectedIndustryId, setSelectedIndustryId] = useState(INDUSTRY_SOLUTIONS[0].id);

  const activeIndustry = INDUSTRY_SOLUTIONS.find((ind) => ind.id === selectedIndustryId) || INDUSTRY_SOLUTIONS[0];

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative" id="industries">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            07 • Industry Tailored Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Built for Real Businesses.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tailored digital platforms designed around specific industry workflows and customer expectations.
          </p>
        </div>

        {/* Industry Pill Selector Grid */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {INDUSTRY_SOLUTIONS.map((ind) => {
            const IconComp = iconMap[ind.icon] || Briefcase;
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-primary text-slate-950 border-primary shadow-subtle-glow scale-105'
                    : 'bg-[#0B1020] border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0B1020] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div>
                <span className="text-xs font-mono font-bold text-primary block uppercase">
                  Industry Specialization
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  {activeIndustry.name}
                </h3>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto"
              >
                {activeIndustry.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {activeIndustry.summary}
            </p>

            {/* Recommended Features List */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Recommended Solution Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeIndustry.recommendedFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#070B14] border border-white/[0.06] rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustrySolutions;
