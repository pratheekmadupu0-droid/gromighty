import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Hammer, 
  HeartPulse, 
  GraduationCap, 
  Scale, 
  Dumbbell, 
  Utensils, 
  ShoppingBag, 
  Plane, 
  Sprout 
} from 'lucide-react';

const industries = [
  { icon: Building2, name: 'Real Estate', link: 'https://jade-torte-2ebc5c.netlify.app/' },
  { icon: HeartPulse, name: 'Healthcare', link: 'https://thunderous-gingersnap-ea0906.netlify.app/' },
  { icon: Hammer, name: 'Construction', link: 'https://inquisitive-alpaca-67d475.netlify.app/' },
  { icon: GraduationCap, name: 'Education', link: 'https://cheery-rolypoly-2f543d.netlify.app/' },
  { icon: Scale, name: 'Legal Services', link: 'https://lighthearted-syrniki-0433cf.netlify.app/' },
  { icon: Dumbbell, name: 'Fitness and Wellness', link: 'https://incomparable-sprinkles-af3fb5.netlify.app/' },
  { icon: Utensils, name: 'Food and Beverage', link: 'https://splendid-sorbet-a6bf30.netlify.app/' },
  { icon: ShoppingBag, name: 'Retail and E-commerce', link: 'https://www.logi.company/' },
  { icon: Plane, name: 'Travel and Hospitality', link: 'https://poetic-tanuki-2ab09b.netlify.app/' },
  { icon: Sprout, name: 'Agricultural', link: 'https://prinstan-agri-care.vercel.app/' }
];

const Industries = () => {
  return (
    <section className="section-padding bg-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold"
          >
            Industries <span className="text-gradient">We Serve</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {industries.map((industry, idx) => (
            <motion.a
              key={idx}
              href={industry.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl glass-dark border-white/5 hover:border-primary/20 transition-all group cursor-pointer"
            >
              <industry.icon className="w-10 h-10 text-white/30 group-hover:text-primary transition-colors mb-4" />
              <span className="text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-center text-center">
                {industry.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
