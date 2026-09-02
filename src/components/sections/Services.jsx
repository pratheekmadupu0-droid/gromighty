import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, Code2, Bot, BarChart3, Palette, Check, ArrowRight, Cpu, Sparkles } from 'lucide-react';
import { CATEGORIZED_SERVICES } from '../../data/websiteData';

const iconMap = {
  Globe,
  ShoppingCart,
  Code2,
  Bot,
  BarChart3,
  Palette
};

const Services = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(CATEGORIZED_SERVICES[0].id);

  const activeCategory = CATEGORIZED_SERVICES.find((cat) => cat.id === activeCategoryId) || CATEGORIZED_SERVICES[0];

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            05 • Full Capability Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Everything You Need to Build Your Digital Business.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            End-to-end digital capabilities grouped into specialized execution categories.
          </p>
        </div>

        {/* Categories Tab Selector Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          {CATEGORIZED_SERVICES.map((cat) => {
            const IconComp = iconMap[cat.icon] || Globe;
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-5 py-3 rounded-2xl border text-xs font-bold uppercase tracking-wider shrink-0 transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-primary text-slate-950 border-primary shadow-subtle-glow'
                    : 'bg-[#0B1020] border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Feature Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0B1020] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Details Column */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-primary block mb-1">
                    {activeCategory.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {activeCategory.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] text-slate-200 text-xs font-mono rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Outcome Banner */}
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    Business Impact Guarantee
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    {activeCategory.outcome}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                >
                  Request {activeCategory.title} Scope
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Services List Grid */}
              <div className="lg:col-span-7 bg-[#070B14] border border-white/[0.08] rounded-2xl p-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                  Included Specializations
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCategory.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 bg-[#0B1020]/60 border border-white/[0.05] rounded-xl flex items-center gap-3 hover:border-primary/40 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-slate-950 transition-colors">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
