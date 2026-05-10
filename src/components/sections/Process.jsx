import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, market trends, and target audience to build a solid foundation.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Developing a comprehensive roadmap tailored for growth, choosing the right tech and marketing mix.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Crafting premium, high-converting interfaces and brand identities that resonate with excellence.'
  },
  {
    number: '04',
    title: 'Development',
    description: 'Engineering high-performance solutions with clean code, scalability, and security at the core.'
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Launching and iterating with data-driven insights to dominate the market and maximize ROI.'
  }
];

const Process = () => {
  return (
    <section className="section-padding bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold"
          >
            Our Strategic <span className="text-gradient">Workflow</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="text-8xl font-display font-black text-white/[0.03] absolute -top-12 -left-4 group-hover:text-primary/[0.05] transition-colors duration-500">
                  {step.number}
                </div>
                <div className="mb-6 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary group-hover:text-dark transition-all duration-500 relative z-20">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
