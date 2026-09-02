import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Zap, MessageSquare, Send, CheckCircle2, Sparkles, Smartphone, Shield, ArrowRight } from 'lucide-react';
import { BRAND } from '../../data/websiteData';

const aiPrompts = [
  {
    q: 'Do you build dental clinic & doctor websites?',
    a: 'Yes! GroMighty specializes in clinic & hospital platforms featuring online doctor appointment requests, treatment guides, patient reviews, and direct WhatsApp booking.'
  },
  {
    q: 'Can you integrate instant WhatsApp lead notifications?',
    a: 'Absolutely! Every form inquiry on your GroMighty website can automatically send formatted WhatsApp messages directly to your sales team within seconds.'
  },
  {
    q: 'What is your average project turnaround time?',
    a: 'Starter single-page sites take 3-5 days. Business & Standard 5-8 page sites take 7-12 days. E-commerce & custom software typically launch in 2-3 weeks.'
  },
  {
    q: 'Do I own 100% of my website code?',
    a: 'Yes. You receive full ownership of source code, design assets, and database credentials with zero vendor lock-in or recurring template fees.'
  }
];

const InteractiveDemos = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [selectedPrompt, setSelectedPrompt] = useState(aiPrompts[0]);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'user', text: aiPrompts[0].q },
    { sender: 'bot', text: aiPrompts[0].a }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Speed comparison state
  const [speedView, setSpeedView] = useState('gromighty');

  // WhatsApp demo state
  const [demoName, setDemoName] = useState('Rahul Sharma');
  const [demoService, setDemoService] = useState('Clinic Website & WhatsApp Chat');
  const [demoSent, setDemoSent] = useState(false);

  const handleSelectPrompt = (promptObj) => {
    setSelectedPrompt(promptObj);
    setIsTyping(true);
    setChatMessages((prev) => [...prev, { sender: 'user', text: promptObj.q }]);

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { sender: 'bot', text: promptObj.a }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#070B14] relative overflow-hidden" id="interactive-demos">
      {/* Background Accent Lines */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Interactive Playground</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Try GroMighty Features Live Right Here.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Interact with our simulated AI assistant, speed benchmark engine, and WhatsApp automation flow.
          </p>
        </div>

        {/* Feature Playground Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('ai')}
            className={`px-5 py-3 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'ai'
                ? 'bg-primary text-slate-950 border-primary shadow-subtle-glow'
                : 'bg-[#0B1020] border-white/[0.08] text-slate-300 hover:text-white'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>AI Bot Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('speed')}
            className={`px-5 py-3 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'speed'
                ? 'bg-primary text-slate-950 border-primary shadow-subtle-glow'
                : 'bg-[#0B1020] border-white/[0.08] text-slate-300 hover:text-white'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>Speed Benchmark</span>
          </button>

          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`px-5 py-3 rounded-2xl border text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === 'whatsapp'
                ? 'bg-primary text-slate-950 border-primary shadow-subtle-glow'
                : 'bg-[#0B1020] border-white/[0.08] text-slate-300 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Lead Flow</span>
          </button>
        </div>

        {/* Playground Container Card */}
        <div className="bg-[#0B1020] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl min-h-[460px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: AI Chatbot Simulator */}
            {activeTab === 'ai' && (
              <motion.div
                key="ai"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block uppercase">
                      GroMighty Intelligent AI Assistant Simulator
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      Interactive AI Knowledge Base Response
                    </h3>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Prompt Buttons */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Click a question to test the simulated AI:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {aiPrompts.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectPrompt(p)}
                        className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-primary/10 border border-white/[0.08] hover:border-primary text-xs font-semibold text-slate-200 transition-all text-left"
                      >
                        "{p.q}"
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chat Log Window */}
                <div className="bg-[#070B14] border border-white/[0.06] rounded-2xl p-4 sm:p-6 space-y-4 max-h-[260px] overflow-y-auto">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-lg p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                          msg.sender === 'user'
                            ? 'bg-primary text-slate-950 font-semibold rounded-br-none'
                            : 'bg-navy-900 border border-white/10 text-slate-200 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="p-3 bg-navy-900 border border-white/10 text-xs text-primary rounded-2xl rounded-bl-none flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce delay-100" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce delay-200" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* TAB 2: Speed & Performance Gauge */}
            {activeTab === 'speed' && (
              <motion.div
                key="speed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-primary block uppercase">
                      Architecture Performance Benchmark
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      Legacy Template Website vs GroMighty High-Performance Engineering
                    </h3>
                  </div>
                  
                  {/* View Selector Toggle */}
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
                    <button
                      onClick={() => setSpeedView('legacy')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        speedView === 'legacy' ? 'bg-rose-500 text-white' : 'text-slate-400'
                      }`}
                    >
                      Legacy Template
                    </button>
                    <button
                      onClick={() => setSpeedView('gromighty')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        speedView === 'gromighty' ? 'bg-primary text-slate-950' : 'text-slate-400'
                      }`}
                    >
                      GroMighty Architecture
                    </button>
                  </div>
                </div>

                {/* Benchmark Metrics Comparison */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 bg-[#070B14] border border-white/[0.08] rounded-2xl text-center space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase">Page Load Time</span>
                    <div className={`text-3xl font-mono font-extrabold ${speedView === 'gromighty' ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {speedView === 'gromighty' ? '0.7s' : '4.2s'}
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      {speedView === 'gromighty' ? '⚡ Ultra Fast (Passes Core Web Vitals)' : '⚠️ Slow (High Mobile Bounce Rate)'}
                    </span>
                  </div>

                  <div className="p-6 bg-[#070B14] border border-white/[0.08] rounded-2xl text-center space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase">Google PageSpeed Score</span>
                    <div className={`text-3xl font-mono font-extrabold ${speedView === 'gromighty' ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {speedView === 'gromighty' ? '98 / 100' : '42 / 100'}
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      {speedView === 'gromighty' ? '🏆 Top Search Engine Indexing' : '❌ Penalized in Local Maps Search'}
                    </span>
                  </div>

                  <div className="p-6 bg-[#070B14] border border-white/[0.08] rounded-2xl text-center space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase">Mobile Lead Conversion</span>
                    <div className={`text-3xl font-mono font-extrabold ${speedView === 'gromighty' ? 'text-primary' : 'text-slate-400'}`}>
                      {speedView === 'gromighty' ? '3.8x Higher' : 'Baseline'}
                    </div>
                    <span className="text-[11px] text-slate-400 block">
                      {speedView === 'gromighty' ? '🎯 Optimized Inbound Flow' : '📉 Unoptimized Bounce Rate'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: WhatsApp Automation Preview */}
            {activeTab === 'whatsapp' && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 block uppercase">
                      Instant WhatsApp Lead Delivery Simulator
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      See How Form Inquiries Are Instantly Routed to Your Phone
                    </h3>
                  </div>
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left: Input Simulator Form */}
                  <div className="space-y-4 bg-[#070B14] p-5 rounded-2xl border border-white/[0.06]">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Client Name</label>
                      <input
                        type="text"
                        value={demoName}
                        onChange={(e) => setDemoName(e.target.value)}
                        className="w-full bg-[#0B1020] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase">Service Interest</label>
                      <input
                        type="text"
                        value={demoService}
                        onChange={(e) => setDemoService(e.target.value)}
                        className="w-full bg-[#0B1020] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white"
                      />
                    </div>

                    <button
                      onClick={() => setDemoSent(true)}
                      className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      Simulate Instant Lead Trigger
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Right: Simulated Mobile Screen Notification */}
                  <div className="bg-[#070B14] border border-emerald-500/30 rounded-2xl p-5 space-y-3 relative shadow-subtle-glow">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase border-b border-white/[0.06] pb-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Notification Alert</span>
                    </div>

                    <div className="p-3 bg-emerald-950/40 border border-emerald-500/20 rounded-xl space-y-1 text-xs text-slate-200">
                      <span className="font-bold text-white block">🚨 NEW GROMIGHTY LEAD RECEIVED</span>
                      <p>👤 Name: {demoName || 'Client'}</p>
                      <p>💼 Service: {demoService}</p>
                      <p>⏰ Time: Just now</p>
                      <span className="text-[10px] text-emerald-400 block pt-1 font-mono">
                        Status: Auto-routed to sales desk WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default InteractiveDemos;
