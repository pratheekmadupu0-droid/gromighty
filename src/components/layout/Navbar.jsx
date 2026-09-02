import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import logo from '../../assets/logo.png';
import { BRAND } from '../../data/websiteData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Work', path: '/work' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
];

const Navbar = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B14]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-xl'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" onClick={handleNavClick} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="GroMighty"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-base font-bold tracking-tight text-white leading-none">
              GroMighty
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-primary/80 leading-none mt-1">
              Digital & Technology
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive ? 'text-primary font-semibold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="px-5 py-2.5 bg-primary hover:bg-primary-light text-slate-950 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:shadow-subtle-glow"
          >
            Start a Project
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Fullscreen Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#070B14]/98 border-b border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col space-y-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleNavClick();
                    }}
                    className={`text-xl font-display font-semibold transition-colors flex items-center justify-between py-2 border-b border-white/[0.05] ${
                      location.pathname === link.path ? 'text-primary' : 'text-slate-200'
                    }`}
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </Link>
                ))}
              </div>

              <div className="pt-4 space-y-3">
                <Link
                  to="/contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick();
                  }}
                  className="w-full py-4 bg-primary text-slate-950 rounded-xl font-bold text-center block text-sm uppercase tracking-wider shadow-lg"
                >
                  Start a Project
                </Link>

                <a
                  href={`https://wa.me/${BRAND.whatsappNumber}?text=Hi%20GroMighty,%20I'd%20like%20to%20discuss%20a%20digital%20project%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl font-semibold text-center flex items-center justify-center gap-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Quick Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
