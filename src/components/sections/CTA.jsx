import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10 glass border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
        {/* Background Noise/Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Ready to <span className="text-gradient">Dominate</span> Your Market?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Book a 30-minute strategy session with our growth experts. 
            No fluff, just actionable insights for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-dark font-bold rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Book Discovery Call
            </Link>
            <a 
              href="https://wa.me/917075209102"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 glass border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 opacity-40">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-surface overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">Join 500+ successful founders</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
