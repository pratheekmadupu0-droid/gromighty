import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';
import logo from '../../assets/logo.png';
import { BRAND } from '../../data/websiteData';

const Footer = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <footer className="bg-[#050810] border-t border-white/[0.08] text-slate-400 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" onClick={handleTop} className="flex items-center gap-3">
              <img src={logo} alt="GroMighty" className="h-10 w-auto object-contain" />
              <div>
                <span className="text-lg font-bold text-white block">GroMighty</span>
                <span className="text-[10px] uppercase font-semibold text-primary tracking-widest block">
                  {BRAND.legalName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Digital experiences, technology and growth solutions for modern businesses. We design and build websites, custom software, AI bots, and digital ecosystems that move businesses forward.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>{BRAND.phone1} / {BRAND.phone2}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>{BRAND.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{BRAND.address}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" onClick={handleTop} className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" onClick={handleTop} className="hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/solutions" onClick={handleTop} className="hover:text-primary transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/work" onClick={handleTop} className="hover:text-primary transition-colors">Featured Work</Link>
              </li>
              <li>
                <Link to="/process" onClick={handleTop} className="hover:text-primary transition-colors">How We Work</Link>
              </li>
              <li>
                <Link to="/about" onClick={handleTop} className="hover:text-primary transition-colors">About GroMighty</Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleTop} className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions & Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services#web" className="hover:text-primary transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services#commerce" className="hover:text-primary transition-colors">E-commerce Stores</Link>
              </li>
              <li>
                <Link to="/services#ai" className="hover:text-primary transition-colors">AI & Chatbot Bots</Link>
              </li>
              <li>
                <Link to="/services#technology" className="hover:text-primary transition-colors">Custom Web Software</Link>
              </li>
              <li>
                <Link to="/services#growth" className="hover:text-primary transition-colors">SEO & Maps Growth</Link>
              </li>
              <li>
                <Link to="/solutions#dental" className="hover:text-primary transition-colors">Clinic & Health Portals</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Quick Connect */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400">
              Ready to start your digital transformation? Connect with our senior tech team today.
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsappNumber}?text=Hi%20GroMighty,%20I'd%20like%20to%20discuss%20a%20digital%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-bold hover:bg-emerald-500/20 transition-all w-full justify-center"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              onClick={handleTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-slate-950 rounded-xl text-xs font-bold hover:bg-primary-light transition-all w-full justify-center"
            >
              Start Project Inquiry
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 GroMighty (Gromighty Online Agency Services). All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
