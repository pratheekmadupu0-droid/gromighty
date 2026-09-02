import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Quote, Award } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0B1020] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center space-y-6 relative overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary block">
            13 • Partner Success
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight max-w-2xl mx-auto">
            Your Success Story Could Be Next.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            We partner directly with ambitious founders, business owners, and healthcare leaders to engineer high-converting digital platforms. Let's build something exceptional together.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary hover:bg-primary-light text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-3"
            >
              Start Your Digital Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
