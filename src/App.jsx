import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import ScrollToTop from './components/ui/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Portfolio from './pages/Portfolio';
import ProcessPage from './pages/ProcessPage';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#070B14] text-white selection:bg-primary/20 selection:text-primary font-sans antialiased overflow-x-hidden">
        {/* Global Floating Accessories */}
        <CustomCursor />
        <FloatingWhatsApp />
        <ScrollToTop />

        {/* Global Sticky Navigation Header */}
        <Navbar />

        {/* Main Route Content */}
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/work" element={<Portfolio />} />
              <Route path="/casestudies" element={<Portfolio />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
