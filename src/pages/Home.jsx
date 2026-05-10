import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import TrustedBy from '../components/sections/TrustedBy';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Industries from '../components/sections/Industries';
import CTA from '../components/sections/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio limit={2} />
      <Process />
      <Industries />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;
