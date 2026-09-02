import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND } from '../../data/websiteData';

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${BRAND.whatsappNumber}?text=Hi%20GroMighty,%20I'd%20like%20to%20discuss%20a%20digital%20project%20for%20my%20business.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 bg-[#0B1020]/90 hover:bg-[#11182A] text-white border border-emerald-500/40 hover:border-emerald-400 rounded-full shadow-2xl backdrop-blur-md group transition-all duration-300 hover:scale-105"
    >
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-bold">
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
      </div>
      <span className="hidden sm:inline-block text-xs font-semibold tracking-wide pr-1 text-slate-200 group-hover:text-white">
        Quick Chat
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
