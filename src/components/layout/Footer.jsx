import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="GroMighty" 
                className="h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Empowering startups and enterprises with cutting-edge technology and growth strategies that dominate markets.
            </p>
            <div className="flex space-x-4">
              {[Globe, Globe, Globe, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '')}`} className="text-white/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'App Development', 'UI/UX Design', 'AI Automation', 'SEO & Marketing'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Global Headquarters, Tech Hub District</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 7075209102</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@gromighty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} GroMighty. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
