import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, ArrowRight, Building2, Tag } from 'lucide-react';
import { BRAND } from '../../data/websiteData';

const CaseStudyModal = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050810]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#0B1020] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B1020]/90 backdrop-blur-md border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                {project.category}
              </span>
              <span className="text-sm font-semibold text-slate-400 hidden sm:inline-block">
                {project.industry}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
            {/* Title & Image Banner */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                {project.summary}
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-navy-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-60" />
            </div>

            {/* Grid: Challenge & Approach & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-navy-900/60 border border-white/[0.06] rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">01 • Challenge</div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-6 bg-navy-900/60 border border-white/[0.06] rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">02 • Approach</div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.approach}</p>
              </div>

              <div className="p-6 bg-navy-900/60 border border-white/[0.06] rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">03 • Solution</div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="p-6 bg-navy-900/40 border border-white/[0.06] rounded-2xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mb-4">
                <Cpu className="w-4 h-4 text-primary" />
                Technology Stack Used
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-200 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Outcomes */}
            {project.outcomes && (
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Verified Business Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-navy-900/40 rounded-xl border border-white/[0.06]">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-normal">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Bottom CTAs */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all"
                  >
                    Visit Live Preview
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <button
                onClick={() => {
                  onClose();
                  if (onOpenContact) onOpenContact();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-primary hover:bg-primary-light rounded-xl shadow-lg transition-all"
              >
                Build Something Like This
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;
