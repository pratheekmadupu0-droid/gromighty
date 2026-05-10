import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To empower businesses with disruptive technology and strategic growth that defines the future.'
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'To be the global benchmark for digital excellence and innovation-led business scaling.'
  },
  {
    icon: Heart,
    title: 'Values',
    text: 'Integrity, radical transparency, and a relentless pursuit of perfection in every pixel and line of code.'
  },
  {
    icon: Users,
    title: 'Community',
    text: 'Building a collaborative ecosystem where startups and enterprises thrive together.'
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8"
            >
              Engineering the <br /> <span className="text-gradient">Next Generation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 leading-relaxed mb-8"
            >
              Founded in 2024, GroMighty was born from a simple observation: most agencies focus either on code or marketing, but rarely both at an elite level.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white/40 leading-relaxed"
            >
              We bridged that gap. By combining world-class engineering with data-driven growth hacking, we help our clients not just participate in the market, but dominate it. Our team consists of former FAANG engineers, Awwwards-winning designers, and growth experts who have scaled companies from zero to $100M+.
            </motion.p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden glass border-white/10 p-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-full object-cover rounded-[2.5rem]"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-10 -left-10 glass border-white/10 p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-bold text-primary mb-1">50+</p>
              <p className="text-xs uppercase tracking-widest text-white/40">Elite Specialists</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl glass border-white/5 hover:border-primary/20 transition-all"
            >
              <v.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
