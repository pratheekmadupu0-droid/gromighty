import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import { PRICING_PACKAGES } from '../../data/websiteData';

const Pricing = () => {
  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
            11 • Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Choose the Right Starting Point.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Clear, transparent project baselines tailored to your business scale.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-[#0B1020] border-primary shadow-subtle-glow ring-1 ring-primary/40'
                  : 'bg-[#0B1020]/70 border-white/[0.08] hover:border-white/20 hover:bg-[#11182A]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 bg-primary text-slate-950 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular Baseline
                </div>
              )}

              <div>
                {/* Name & Price */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-white">
                    {pkg.name}
                  </h3>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-primary">
                    {pkg.price}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-white/[0.08] mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  to="/contact"
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center block transition-all ${
                    pkg.popular
                      ? 'bg-primary text-slate-950 hover:bg-primary-light shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Scope Banner & Note */}
        <div className="bg-[#0B1020] border border-white/[0.08] rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              Need something custom or unique?
            </h3>
            <p className="text-xs text-slate-300">
              *Final pricing depends on specific requirements, custom feature scope, and third-party integrations.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3.5 bg-primary hover:bg-primary-light text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shrink-0 flex items-center gap-2"
          >
            Talk to GroMighty
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
