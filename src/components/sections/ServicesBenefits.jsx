import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_BENEFITS_PAIRS } from '../../data/websiteData';

const ServicesBenefits = () => {
  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            06 • Business Problem Solving
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            How Can Our Services Help You?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Real business challenges solved through custom digital engineering.
          </p>
        </div>

        {/* 4 Problem -> Solution -> Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_BENEFITS_PAIRS.map((item) => (
            <div
              key={item.id}
              className="bg-[#070B14] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-6 hover:border-primary/40 transition-all duration-300 shadow-xl"
            >
              {/* Problem */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>The Challenge</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {item.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 bg-navy-900/80 border border-white/[0.06] rounded-2xl space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-primary">
                  GroMighty Engineering Solution
                </div>
                <p className="text-sm font-semibold text-white">
                  {item.solution}
                </p>
              </div>

              {/* Result */}
              <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl space-y-1">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verified Business Outcome</span>
                </div>
                <p className="text-sm font-bold text-white">
                  {item.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBenefits;
