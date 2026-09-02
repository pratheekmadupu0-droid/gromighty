import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, Globe, Target, MessageSquare, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { HERO_ECOSYSTEM_NODES } from '../../data/websiteData';

const iconMap = {
  Building2,
  Globe,
  Target,
  MessageSquare,
  Users,
  TrendingUp,
};

const Hero = () => {
  const [activeNode, setActiveNode] = useState(HERO_ECOSYSTEM_NODES[1]); // Default to Website/Platform

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070B14]">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Label above headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-primary text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>GROMIGHTY • DIGITAL & TECHNOLOGY SOLUTIONS</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-display font-extrabold text-white leading-[1.08] tracking-tight"
            >
              Digital Experiences Built to Move Your Business Forward.
            </motion.h1>

            {/* Supporting line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              We design and build websites, software, AI solutions and digital experiences that help businesses attract customers, operate smarter and grow.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary-light text-slate-950 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-subtle-glow flex items-center gap-3 group"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/work"
                className="px-7 py-4 bg-white/[0.05] hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Explore Our Work
              </Link>
            </motion.div>

            {/* Key Assurance Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4 text-left"
            >
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Focus</span>
                <span className="text-sm font-bold text-white">Business First</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Tech</span>
                <span className="text-sm font-bold text-white">AI & Automation</span>
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block">Quality</span>
                <span className="text-sm font-bold text-white">Custom Engineering</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Ecosystem Diagram Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative bg-[#0B1020]/90 border border-white/[0.08] rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden min-h-[440px] flex flex-col justify-between">
              
              {/* Diagram Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-primary block">
                    Interactive Architecture
                  </span>
                  <h3 className="text-base font-bold text-white">
                    The GroMighty Digital Transformation
                  </h3>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Connected Visual Nodes Canvas */}
              <div className="relative w-full h-[240px] bg-navy-950/60 rounded-2xl border border-white/[0.05] p-4 flex flex-col justify-center">
                
                {/* SVG Animated Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 40 120 Q 120 50 200 160 T 360 80"
                    fill="none"
                    stroke="rgba(0, 240, 255, 0.2)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 40 120 Q 120 50 200 160 T 360 80"
                    fill="none"
                    stroke="rgba(0, 240, 255, 0.7)"
                    strokeWidth="2"
                    className="animate-flow-line"
                  />
                </svg>

                {/* Nodes Grid */}
                <div className="grid grid-cols-3 gap-3 relative z-10">
                  {HERO_ECOSYSTEM_NODES.map((node) => {
                    const IconComp = iconMap[node.icon] || Globe;
                    const isSelected = activeNode.id === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveNode(node)}
                        onMouseEnter={() => setActiveNode(node)}
                        className={`p-3 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                          isSelected
                            ? 'bg-primary/10 border-primary shadow-subtle-glow translate-y-[-2px]'
                            : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-primary text-slate-950' : 'bg-white/5 text-primary'}`}>
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono font-semibold text-slate-400">
                            {node.stats}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-white block truncate">
                          {node.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selected Node Details Active Inspector Panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">
                        {activeNode.label} Node
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-primary/20 text-primary font-mono font-bold">
                        {activeNode.stats}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {activeNode.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                </motion.div>
              </AnimatePresence>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-slate-400 italic">
                  Hover or tap nodes to inspect GroMighty's transformation path
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
