import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  BarChart, 
  Cpu, 
  ArrowLeft,
  CheckCircle2,
  Zap,
  Shield,
  Layers
} from 'lucide-react';
import CTA from '../components/sections/CTA';

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
      { title: 'Lightning Fast', desc: 'Optimized for Core Web Vitals to ensure sub-second load times.', icon: Zap },
      { title: 'Secure by Design', desc: 'Enterprise-grade security protocols to protect your data.', icon: Shield },
      { title: 'Scalable', desc: 'Architecture that grows alongside your user base.', icon: Layers }
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
      { title: 'Smooth Performance', desc: 'Fluid 60fps animations and responsive interactions.', icon: Zap },
      { title: 'Offline Ready', desc: 'Capabilities that work even without an active connection.', icon: Shield },
      { title: 'Device Integration', desc: 'Full access to camera, GPS, and biometric hardware.', icon: Layers }
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
      { title: 'User Centric', desc: 'Every pixel is placed with user intent in mind.', icon: Zap },
      { title: 'Consistent', desc: 'Comprehensive design systems for multi-platform unity.', icon: Shield },
      { title: 'Modern', desc: 'Cutting-edge aesthetics that stay ahead of trends.', icon: Layers }
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
      { title: 'Data Driven', desc: 'Decisions based on hard data, not intuition.', icon: Zap },
      { title: 'High ROI', desc: 'Focused on acquiring users that actually convert.', icon: Shield },
      { title: 'Transparent', desc: 'Clear reporting on every dollar spent.', icon: Layers }
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
      { title: 'Efficient', desc: 'Save thousands of man-hours through smart automation.', icon: Zap },
      { title: 'Predictive', desc: 'Identify market trends before they happen.', icon: Shield },
      { title: 'Innovative', desc: 'Offer features your competitors haven\'t thought of.', icon: Layers }
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
      { title: 'Actionable', desc: 'No fluff strategies you can implement today.', icon: Zap },
      { title: 'Global View', desc: 'Insights from top-tier markets across the globe.', icon: Shield },
      { title: 'Sustainable', desc: 'Built for long-term dominance, not short-term spikes.', icon: Layers }
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8`}
            >
              <Icon className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 leading-relaxed max-w-xl"
            >
              {service.description}
            </motion.p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-[3rem] glass border-white/10 flex items-center justify-center p-12 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 blur-[100px]`} />
              <Icon className="w-full h-full text-white/10 relative z-10" />
            </motion.div>
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-12">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 p-6 glass border-white/5 rounded-2xl group hover:border-primary/20 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium text-white/80 group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-12">Why GroMighty</h2>
            <div className="space-y-8">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </motion.div>
  );
};

export default ServiceDetail;
