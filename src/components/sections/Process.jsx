import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/websiteData';

const Process = () => {
  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative" id="process">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            09 • Proven Delivery Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            From Idea to Launch.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A disciplined 6-stage engineering process ensuring zero scope creep and rapid launch times.
          </p>
        </div>

        {/* 6 Steps Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#0B1020] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-6 relative hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-display font-black text-primary/30 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono font-bold text-slate-400">
                    STAGE {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {step.subtitle}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                  Key Deliverables:
                </span>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
