import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  BarChart, 
  Cpu, 
  ArrowRight,
  X,
  CheckCircle2,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const serviceData = {
  'web-development': {
    title: 'Web Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-400',
    description: 'We build high-performance, scalable web applications that serve as the backbone of your digital presence. Our websites are optimized for speed, security, and conversion.',
    features: [
      'Custom React & Next.js Development',
      'E-commerce Solutions (Shopify, Custom)',
      'Progressive Web Apps (PWA)',
      'API Integration & Development',
      'Performance Optimization'
    ],
    benefits: [
      { title: 'Lightning Fast', desc: 'Optimized for Core Web Vitals.', icon: Zap },
      { title: 'Secure', desc: 'Enterprise-grade security.', icon: Shield },
      { title: 'Scalable', desc: 'Grows with your user base.', icon: Layers }
    ]
  },
  'mobile-apps': {
    title: 'Mobile App Development',
    icon: Smartphone,
    color: 'from-purple-500 to-pink-400',
    description: 'Create seamless mobile experiences that engage users on the go. From native iOS and Android to cross-platform Flutter/React Native solutions.',
    features: [
      'Native iOS & Android Apps',
      'Cross-Platform Development',
      'Mobile UI/UX Design',
      'App Store Optimization',
      'Push Notification Systems'
    ],
    benefits: [
      { title: 'Smooth', desc: 'Fluid 60fps animations.', icon: Zap },
      { title: 'Offline', desc: 'Works without connection.', icon: Shield },
      { title: 'Native', desc: 'Full hardware access.', icon: Layers }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    icon: Palette,
    color: 'from-orange-500 to-yellow-400',
    description: 'We blend aesthetics with psychology to create intuitive interfaces that reduce friction and maximize user delight.',
    features: [
      'User Research & Discovery',
      'Wireframing & Prototyping',
      'Design Systems Creation',
      'Accessibility Audits',
      'Interactive Prototypes'
    ],
    benefits: [
      { title: 'User Centric', desc: 'Built with user intent.', icon: Zap },
      { title: 'Consistent', desc: 'Unified design systems.', icon: Shield },
      { title: 'Modern', desc: 'Ahead of trends.', icon: Layers }
    ]
  },
  'seo-marketing': {
    title: 'SEO & Performance Marketing',
    icon: Search,
    color: 'from-green-500 to-emerald-400',
    description: 'Data-driven marketing strategies designed to increase visibility, capture high-intent leads, and drive sustainable growth.',
    features: [
      'Technical SEO Audits',
      'Content Strategy & Optimization',
      'PPC Campaign Management',
      'Conversion Rate Optimization',
      'Analytics & ROI Tracking'
    ],
    benefits: [
      { title: 'Data Driven', desc: 'Hard data decisions.', icon: Zap },
      { title: 'High ROI', desc: 'Focused on conversion.', icon: Shield },
      { title: 'Transparent', desc: 'Clear reporting.', icon: Layers }
    ]
  },
  'ai-automation': {
    title: 'AI & Automation',
    icon: Cpu,
    color: 'from-red-500 to-orange-400',
    description: 'Leverage the power of Artificial Intelligence to automate repetitive tasks, gain deep insights, and build futuristic products.',
    features: [
      'Custom LLM Integration',
      'Workflow Automation',
      'Predictive Analytics',
      'AI Chatbots & Assistants',
      'Automated Content Generation'
    ],
    benefits: [
      { title: 'Efficient', desc: 'Save man-hours.', icon: Zap },
      { title: 'Predictive', desc: 'Identify trends early.', icon: Shield },
      { title: 'Innovative', desc: 'Futuristic features.', icon: Layers }
    ]
  },
  'business-strategy': {
    title: 'Business Strategy',
    icon: BarChart,
    color: 'from-indigo-500 to-blue-400',
    description: 'Navigate complex market landscapes with expert guidance. We help you define your value proposition and scale your operations globally.',
    features: [
      'Market Entry Strategy',
      'Growth Hacking Frameworks',
      'Product-Market Fit Analysis',
      'Operational Optimization',
      'Digital Transformation'
    ],
    benefits: [
      { title: 'Actionable', desc: 'No fluff strategies.', icon: Zap },
      { title: 'Global', desc: 'Market insights.', icon: Shield },
      { title: 'Sustainable', desc: 'Long-term dominance.', icon: Layers }
    ]
  }
};

const servicesList = Object.keys(serviceData).map(key => ({
  slug: key,
  ...serviceData[key]
}));

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="section-padding bg-dark relative overflow-hidden" id="services">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              Solutions Engineered <br /> for <span className="text-gradient">Exponential Growth</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(service)}
              className="group p-10 rounded-3xl glass border-white/5 hover:border-primary/20 transition-all duration-500 relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-8 line-clamp-2">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-white/30 group-hover:text-primary transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-dark/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass border-white/10 rounded-[2.5rem] p-8 md:p-12 scrollbar-hide"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center mb-8`}>
                    <selectedService.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-display font-bold mb-6">{selectedService.title}</h2>
                  <p className="text-lg text-white/60 leading-relaxed mb-10">
                    {selectedService.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Core Features</h4>
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8 bg-white/5 rounded-3xl p-8 border border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/40">Why Choose Us</h4>
                  {selectedService.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <benefit.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-bold mb-1">{benefit.title}</h5>
                        <p className="text-xs text-white/40 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-4 bg-primary text-dark font-bold rounded-xl hover:scale-[1.02] transition-transform mt-4">
                    Get Started with {selectedService.title}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
