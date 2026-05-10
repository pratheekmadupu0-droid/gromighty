import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Let's Scale <br /> <span className="text-gradient">Together</span>
            </motion.h1>
            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@gromighty.com' },
                { icon: Phone, label: 'Call Us', value: '+91 7075209102' },
                { icon: MapPin, label: 'Global HQ', value: 'Tech District, Innovation Hub' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">{item.label}</p>
                    <p className="text-lg font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-16 border-t border-white/5">
              <p className="text-sm font-bold uppercase tracking-widest text-white/30 mb-6">Follow Our Journey</p>
              <div className="flex gap-4">
                {[Globe, Globe, Globe].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative z-10 py-20 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold">Message Sent!</h3>
                  <p className="text-white/60 text-lg">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Work Email</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Interested In</label>
                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option className="bg-dark">Web Development</option>
                      <option className="bg-dark">Mobile Apps</option>
                      <option className="bg-dark">AI Automation</option>
                      <option className="bg-dark">Strategy & Marketing</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Tell us about your goals..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-primary text-dark font-bold rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 neon-glow-primary"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>

                  <div className="text-center pt-6">
                    <p className="text-white/40 text-sm mb-4">— OR —</p>
                    <a 
                      href="https://wa.me/917075209102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-primary font-bold hover:underline mx-auto"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Quick Chat on WhatsApp
                    </a>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
