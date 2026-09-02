import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/websiteData';
import CaseStudyModal from '../ui/CaseStudyModal';

const CaseStudies = ({ limit }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const displayedProjects = limit
    ? FEATURED_PROJECTS.slice(0, limit)
    : filter === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section className="py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#0B1020] border-y border-white/[0.08] relative" id="work">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 border border-primary/20 rounded-full inline-block">
              08 • Selected Client Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
              Built. Designed. Delivered.
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Explore real digital experiences and platform architectures built by GroMighty.
            </p>
          </div>

          {/* Filter Pills */}
          {!limit && (
            <div className="flex flex-wrap gap-2">
              {['All', 'E-commerce', 'PropTech', 'MedTech', 'ConTech', 'EdTech'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    filter === f
                      ? 'bg-primary text-slate-950 shadow-subtle-glow'
                      : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              data-cursor="View Project →"
              className="group cursor-pointer bg-[#070B14] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Project Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-80" />

                {/* Top Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#070B14]/80 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Trigger Icon */}
                <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-primary text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg scale-90 group-hover:scale-100">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-slate-400 block mb-1">
                    {project.industry} • {project.client}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                {/* Tags & Click Prompt */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/[0.04] text-[11px] font-mono text-slate-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Case Study →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Deep Case Study */}
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
