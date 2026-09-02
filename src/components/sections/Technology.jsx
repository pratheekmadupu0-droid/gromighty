import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck } from 'lucide-react';
import { TECH_CATEGORIES } from '../../data/websiteData';

const Technology = () => {
  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            10 • Engineering Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Technology That Works Behind the Experience.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            We use modern, battle-tested frameworks to guarantee speed, security, and long-term scalability.
          </p>
        </div>

        {/* Tech Stack Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-[#070B14] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-6 hover:border-primary/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cat.techs.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3.5 py-2 bg-navy-900 border border-white/[0.08] text-slate-200 text-xs font-mono rounded-xl font-semibold hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Full source code ownership, zero proprietary lock-in, modern security standards.</span>
        </div>
      </div>
    </section>
  );
};

export default Technology;
