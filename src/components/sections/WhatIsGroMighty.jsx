import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Rocket, ShieldCheck, Zap, Layers, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../data/websiteData';

const tabs = [
  {
    id: 'what',
    label: 'What is GroMighty?',
    badge: 'Digital & Technology Partner',
    title: 'Not a Generic Agency. A Technology Growth Partner.',
    description: 'GroMighty (Gromighty Online Agency Services) is an executive digital and technology agency based in Hyderabad with global remote operations. We engineer high-converting websites, web software, e-commerce portals, and AI automation systems.',
    points: [
      'Custom React & Next.js web applications — zero slow templates',
      'Integrated AI chatbots & WhatsApp lead automation',
      'Complete client ownership of all source code & assets',
      'Direct access to senior engineering leads (no account managers)'
    ]
  },
  {
    id: 'how',
    label: 'How GroMighty Helps',
    badge: 'The 3-Stage Growth Engine',
    title: 'Transforming Frustrating Tech into Predictable Growth.',
    description: 'We turn outdated digital presences into high-converting customer acquisition systems. We analyze your customer journey, eliminate friction, and automate repetitive tasks.',
    points: [
      'Stage 1: Position your business as an undisputed market leader',
      'Stage 2: Capture 100% of inbound visitor interest automatically',
      'Stage 3: Automate customer FAQs & WhatsApp lead routing 24/7'
    ]
  },
  {
    id: 'why',
    label: 'Why Choose GroMighty',
    badge: 'Competitive Superiority',
    title: 'Why Top Businesses Choose Us Over Traditional Agencies.',
    description: 'Traditional agencies sell expensive static websites that load slowly and get forgotten. GroMighty builds interactive digital platforms engineered for conversion, speed, and long-term scale.',
    points: [
      'Sub-1.5 second page loading architecture guaranteed',
      'Transparent upfront project baseline pricing with zero hidden fees',
      'Battle-tested in real healthcare, e-commerce & corporate environments',
      'Continuous technical maintenance & performance optimization'
    ]
  }
];

const WhatIsGroMighty = () => {
  const [activeTab, setActiveTab] = useState('what');

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative overflow-hidden" id="about-gromighty">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full inline-flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>01 • Core Identity & Value</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            What is GroMighty & How Does It Help?
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Clear, honest answers about who we are, what we build, and why modern businesses trust us.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((t) => {
            const isActive = t.id === activeTab;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-6 py-3.5 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-slate-950 border-primary shadow-subtle-glow scale-105'
                    : 'bg-[#070B14] border-white/[0.08] text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#070B14] border border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 border border-primary/20 rounded-md inline-block">
                  {currentTab.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                  {currentTab.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentTab.description}
                </p>

                {/* Key Bullet Checklist */}
                <div className="space-y-3 pt-2">
                  {currentTab.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual Stats Card */}
              <div className="lg:col-span-5 bg-[#0B1020] border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    GroMighty Benchmark Standards
                  </span>
                  <Rocket className="w-4 h-4 text-primary" />
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#070B14] rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-semibold">Average Load Speed</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">0.8s - 1.2s</span>
                  </div>

                  <div className="p-4 bg-[#070B14] rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-semibold">Code Ownership</span>
                    <span className="text-sm font-bold text-primary font-mono">100% Full Rights</span>
                  </div>

                  <div className="p-4 bg-[#070B14] rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-semibold">AI & WhatsApp Routing</span>
                    <span className="text-sm font-bold text-white font-mono">24/7 Automated</span>
                  </div>

                  <div className="p-4 bg-[#070B14] rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-semibold">Client Satisfaction</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">Business First</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default WhatIsGroMighty;
