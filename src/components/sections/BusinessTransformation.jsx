import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { TRANSFORMATION_STEPS } from '../../data/websiteData';

const BusinessTransformation = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            02 • Transformation Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            From Digital Presence to Business Growth.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how GroMighty transforms your business at every step of the customer acquisition journey.
          </p>
        </div>

        {/* Step Tabs Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-12">
          {TRANSFORMATION_STEPS.map((item, index) => {
            const isActive = selectedStep === index;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedStep(index)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-primary/10 border-primary shadow-subtle-glow'
                    : 'bg-navy-900/60 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                    STAGE {item.id}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                </div>
                <h3 className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {item.stage}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Interactive Transformation Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#070B14] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono font-bold text-primary block">
                  STEP {TRANSFORMATION_STEPS[selectedStep].id} OF 05
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                  {TRANSFORMATION_STEPS[selectedStep].stage}
                </h3>
              </div>
              <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                {TRANSFORMATION_STEPS[selectedStep].impact}
              </div>
            </div>

            {/* Side by Side Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WITHOUT GROMIGHTY */}
              <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl space-y-4">
                <div className="flex items-center gap-3 text-red-400">
                  <XCircle className="w-6 h-6 shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">WITHOUT GROMIGHTY</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {TRANSFORMATION_STEPS[selectedStep].withoutText}
                </p>
              </div>

              {/* WITH GROMIGHTY */}
              <div className="p-6 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl space-y-4 shadow-subtle-glow">
                <div className="flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h4 className="text-base font-bold uppercase tracking-wider">WITH GROMIGHTY</h4>
                </div>
                <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
                  {TRANSFORMATION_STEPS[selectedStep].withText}
                </p>
              </div>
            </div>

            {/* Stage Progress Bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <button
                disabled={selectedStep === 0}
                onClick={() => setSelectedStep((prev) => Math.max(0, prev - 1))}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl border transition-all ${
                  selectedStep === 0
                    ? 'opacity-30 cursor-not-allowed border-white/5 text-slate-500'
                    : 'border-white/10 hover:border-primary text-slate-300 hover:text-white'
                }`}
              >
                ← Previous Stage
              </button>

              <div className="flex items-center gap-1.5">
                {TRANSFORMATION_STEPS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedStep(idx)}
                    className={`h-2 rounded-full transition-all ${
                      selectedStep === idx ? 'w-8 bg-primary' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={selectedStep === TRANSFORMATION_STEPS.length - 1}
                onClick={() => setSelectedStep((prev) => Math.min(TRANSFORMATION_STEPS.length - 1, prev + 1))}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl border transition-all ${
                  selectedStep === TRANSFORMATION_STEPS.length - 1
                    ? 'opacity-30 cursor-not-allowed border-white/5 text-slate-500'
                    : 'border-white/10 hover:border-primary text-slate-300 hover:text-white'
                }`}
              >
                Next Stage →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BusinessTransformation;
