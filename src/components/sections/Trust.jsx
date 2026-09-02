import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Code2, Sparkles, Users2, Zap } from 'lucide-react';
import { TRUST_POINTS } from '../../data/websiteData';

const Trust = () => {
  return (
    <section className="py-20 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            12 • Trust & Risk Reversal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Why Businesses Choose a Digital Partner.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Clear commitments, total code ownership, and direct accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#070B14] border border-white/[0.08] rounded-3xl p-6 space-y-4 hover:border-primary/40 transition-all duration-300 shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
