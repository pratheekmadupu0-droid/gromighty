import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles, Phone, Mail } from 'lucide-react';
import { BRAND } from '../../data/websiteData';

const FinalCTA = () => {
  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative overflow-hidden">
      {/* Dynamic Background Motion Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8 bg-[#0B1020]/90 border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>15 • Take Action</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Your Next Digital Experience Starts Here.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us what you're building, what you're trying to improve, or where your business is getting stuck. We'll help you find the right digital solution.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 bg-primary hover:bg-primary-light text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-subtle-glow flex items-center gap-3"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=Hi%20GroMighty,%20I'd%20like%20to%20talk%20about%20a%20digital%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            Talk to GroMighty
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
