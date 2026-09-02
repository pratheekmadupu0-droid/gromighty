import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Clock, MessageSquare, Check, ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';
import { BRAND } from '../../data/websiteData';

const industriesList = [
  { id: 'dental', name: 'Dental / Clinic', baseDays: 5, basePrice: 10000 },
  { id: 'ecommerce', name: 'E-commerce Store', baseDays: 10, basePrice: 25000 },
  { id: 'realestate', name: 'Real Estate / PropTech', baseDays: 7, basePrice: 15000 },
  { id: 'restaurant', name: 'Restaurant / Cafe', baseDays: 5, basePrice: 10000 },
  { id: 'corporate', name: 'Corporate / Business', baseDays: 6, basePrice: 15000 },
  { id: 'custom', name: 'Custom Software / SaaS', baseDays: 14, basePrice: 35000 },
];

const featureOptions = [
  { id: 'website', label: 'High-Speed Web Platform', days: 0, price: 0, hoursSaved: 5 },
  { id: 'whatsapp', label: 'WhatsApp Instant Lead Routing', days: 1, price: 2000, hoursSaved: 8 },
  { id: 'ai', label: 'Custom AI Chatbot', days: 2, price: 5000, hoursSaved: 12 },
  { id: 'seo', label: 'Google Maps & Local SEO', days: 1, price: 3000, hoursSaved: 4 },
  { id: 'payments', label: 'Razorpay / UPI Payment Gateway', days: 2, price: 3000, hoursSaved: 6 },
  { id: 'mobile', label: 'Mobile App (iOS/Android)', days: 7, price: 15000, hoursSaved: 10 },
];

const ProjectCalculator = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesList[0]);
  const [selectedFeatures, setSelectedFeatures] = useState(['website', 'whatsapp', 'seo']);
  const [isExpress, setIsExpress] = useState(false);

  const toggleFeature = (fId) => {
    if (fId === 'website') return; // Always keep base website
    setSelectedFeatures((prev) =>
      prev.includes(fId) ? prev.filter((id) => id !== fId) : [...prev, fId]
    );
  };

  // Calculations
  const extraDays = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find((f) => f.id === fId);
    return acc + (feat ? feat.days : 0);
  }, 0);

  const totalDays = Math.max(3, Math.round((selectedIndustry.baseDays + extraDays) * (isExpress ? 0.6 : 1)));

  const extraPrice = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find((f) => f.id === fId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const totalPrice = selectedIndustry.basePrice + extraPrice;

  const totalHoursSaved = selectedFeatures.reduce((acc, fId) => {
    const feat = featureOptions.find((f) => f.id === fId);
    return acc + (feat ? feat.hoursSaved : 0);
  }, 0);

  const whatsappMessage = `Hi GroMighty, I calculated a project scope for my ${selectedIndustry.name} business! Estimated Budget: ₹${totalPrice.toLocaleString('en-IN')}, Timeline: ~${totalDays} days. Key features: ${selectedFeatures.join(', ')}. Let's connect!`;

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative overflow-hidden" id="calculator">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full inline-flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Estimator</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Calculate Your Project Scope & ROI.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Customize your business requirements below to receive an instant timeline and budget baseline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 bg-[#070B14] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Step 1: Industry */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                01 • Select Your Industry:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {industriesList.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-left ${
                      selectedIndustry.id === ind.id
                        ? 'bg-primary text-slate-950 border-primary shadow-subtle-glow'
                        : 'bg-[#0B1020] border-white/[0.08] text-slate-300 hover:text-white'
                    }`}
                  >
                    {ind.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Features Checklist */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                02 • Select Desired Digital Capabilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-primary/10 border-primary text-white'
                          : 'bg-[#0B1020] border-white/[0.08] text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{feat.label}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center ${
                        isChecked ? 'bg-primary text-slate-950' : 'bg-white/10'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Speed Delivery Priority */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Express Launch Priority</span>
                <span className="text-[11px] text-slate-400 block">Accelerated 40% faster development sprint</span>
              </div>
              <button
                onClick={() => setIsExpress(!isExpress)}
                className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                  isExpress ? 'bg-primary' : 'bg-white/20'
                }`}
              >
                <div className={`w-4 h-4 rounded-full bg-slate-950 transition-transform ${
                  isExpress ? 'translate-x-6' : 'translate-x-0'
                }`} />
              </button>
            </div>

          </div>

          {/* Right Calculated Output Panel */}
          <div className="lg:col-span-5 bg-[#070B14] border border-primary/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-subtle-glow relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="text-xs font-mono font-bold text-primary uppercase">
                Calculated Project Scope
              </span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>

            {/* Metric Displays */}
            <div className="space-y-4">
              <div className="p-4 bg-[#0B1020] rounded-2xl border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated Launch</span>
                  <span className="text-xl font-bold font-mono text-white">~{totalDays} Days</span>
                </div>
                <Clock className="w-6 h-6 text-primary shrink-0" />
              </div>

              <div className="p-4 bg-[#0B1020] rounded-2xl border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated Baseline</span>
                  <span className="text-2xl font-extrabold font-mono text-emerald-400">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Baseline Quote
                </span>
              </div>

              <div className="p-4 bg-[#0B1020] rounded-2xl border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Weekly Team Hours Saved</span>
                  <span className="text-lg font-bold font-mono text-primary">~{totalHoursSaved} Hours / Week</span>
                </div>
                <Cpu className="w-6 h-6 text-emerald-400 shrink-0" />
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Send Scope to WhatsApp
              </a>
              <span className="text-[11px] text-slate-400 text-center block mt-2">
                Instantly opens WhatsApp with pre-filled scope summary
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectCalculator;
