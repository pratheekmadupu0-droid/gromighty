import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Zap, Cpu, TrendingUp, Users, Layers, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { WHY_GROMIGHTY_CARDS } from '../../data/websiteData';

const iconComponents = {
  Briefcase,
  Zap,
  Cpu,
  TrendingUp,
  Users,
  Layers
};

const WhyGroMighty = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            03 • Strategic Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Why GroMighty?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Technology should solve business problems — not create more of them.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_GROMIGHTY_CARDS.map((card) => {
            const IconComp = iconComponents[card.icon] || Briefcase;
            const isExpanded = expandedId === card.id;

            return (
              <motion.div
                key={card.id}
                layout
                onClick={() => toggleExpand(card.id)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#0B1020] border-primary shadow-subtle-glow ring-1 ring-primary/40'
                    : 'bg-[#0B1020]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#11182A]'
                }`}
              >
                <div>
                  {/* Top Bar: Step ID & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 bg-primary/10 rounded-lg border border-primary/20">
                      {card.id}
                    </span>
                    <div className={`p-3 rounded-2xl transition-colors ${isExpanded ? 'bg-primary text-slate-950' : 'bg-white/5 text-primary'}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    "{card.summary}"
                  </p>
                </div>

                {/* Collapsible Deep-Dive Details */}
                <div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 border-t border-white/10 space-y-4"
                      >
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {card.details}
                        </p>

                        <div className="space-y-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                            Key Execution Deliverables:
                          </span>
                          {card.serviceExamples.map((example, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{example}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand Toggle Button */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold text-primary">
                    <span>{isExpanded ? 'Show Less' : 'Click to Explore'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-primary' : 'text-slate-500'
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyGroMighty;
