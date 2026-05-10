import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'TechFlow', url: 'https://cdn.worldvectorlogo.com/logos/techflow.svg' },
  { name: 'Growthly', url: 'https://cdn.worldvectorlogo.com/logos/growthly.svg' },
  { name: 'Nova', url: 'https://cdn.worldvectorlogo.com/logos/nova-1.svg' },
  { name: 'Apex', url: 'https://cdn.worldvectorlogo.com/logos/apex-3.svg' },
  { name: 'Zenith', url: 'https://cdn.worldvectorlogo.com/logos/zenith-1.svg' },
];

const metrics = [
  { label: 'Projects Completed', value: '100+' },
  { label: 'Industries Served', value: '20+' },
  { label: 'Client Satisfaction', value: '95%' },
  { label: 'Growth Generated', value: '$50M+' },
];

const TrustedBy = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/30 mb-8">
            Trusted by Forward-Thinking Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Using placeholders/icons since I don't have real logos */}
            {['Meta', 'Google', 'Amazon', 'Microsoft', 'Netflix'].map((brand) => (
              <span key={brand} className="text-2xl font-bold font-display tracking-widest text-white/80">{brand}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-2xl glass-dark border-white/5"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {metric.value}
              </h3>
              <p className="text-white/50 text-sm font-medium uppercase tracking-wider">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
