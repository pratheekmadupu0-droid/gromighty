import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles, Layers, Sliders, ArrowUpRight } from 'lucide-react';
import { SOLUTION_FINDER_OPTIONS } from '../../data/websiteData';

const SolutionFinder = ({ onOpenContact }) => {
  const [selectedId, setSelectedId] = useState(SOLUTION_FINDER_OPTIONS[0].id);

  const activeOption = SOLUTION_FINDER_OPTIONS.find((opt) => opt.id === selectedId) || SOLUTION_FINDER_OPTIONS[0];

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative overflow-hidden" id="solutions">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            04 • Interactive Solution Finder
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            What Does Your Business Need?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Choose what you want to improve. We'll show you how GroMighty can help.
          </p>
        </div>

        {/* Configurator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1 mb-2">
              Select Your Business Goal:
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {SOLUTION_FINDER_OPTIONS.map((opt) => {
                const isSelected = opt.id === selectedId;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedId(opt.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-primary/10 border-primary shadow-subtle-glow translate-x-1'
                        : 'bg-[#070B14] border-white/[0.08] hover:border-white/20 hover:bg-navy-900/80'
                    }`}
                  >
                    <div>
                      <h3 className={`text-sm font-bold ${isSelected ? 'text-primary' : 'text-white group-hover:text-slate-200'}`}>
                        {opt.label}
                      </h3>
                      <span className="text-xs text-slate-400 block mt-0.5 truncate">
                        {opt.subtitle}
                      </span>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-primary text-slate-950' : 'bg-white/5 text-slate-500'
                    }`}>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Recommendation Display Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeOption.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#070B14] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8"
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block uppercase">
                      GroMighty Recommended Architecture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                      {activeOption.label}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Sliders className="w-5 h-5" />
                  </div>
                </div>

                {/* Recommended Services List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Recommended Core Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeOption.recommendedServices.map((service, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-2 bg-navy-900 border border-white/10 rounded-xl text-xs font-semibold text-white flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expected Business Benefits */}
                <div className="p-5 bg-navy-900/60 border border-white/[0.06] rounded-2xl space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                    Expected Business Impact
                  </span>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                    {activeOption.benefits}
                  </p>
                </div>

                {/* Real-World Example Use Case */}
                <div className="p-5 bg-navy-900/30 border border-white/[0.04] rounded-2xl space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Example Implementation
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{activeOption.exampleUseCase}"
                  </p>
                </div>

                {/* Dynamic CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
                  <span className="text-xs text-slate-400">
                    Custom scope available for your specific business requirements.
                  </span>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-6 py-3.5 bg-primary hover:bg-primary-light text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                  >
                    {activeOption.cta}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionFinder;
