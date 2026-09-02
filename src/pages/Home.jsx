import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import WhatIsGroMighty from '../components/sections/WhatIsGroMighty';
import BusinessTransformation from '../components/sections/BusinessTransformation';
import WhyGroMighty from '../components/sections/WhyGroMighty';
import InteractiveDemos from '../components/sections/InteractiveDemos';
import ProjectCalculator from '../components/sections/ProjectCalculator';
import SolutionFinder from '../components/sections/SolutionFinder';
import Services from '../components/sections/Services';
import ServicesBenefits from '../components/sections/ServicesBenefits';
import IndustrySolutions from '../components/sections/IndustrySolutions';
import CaseStudies from '../components/sections/CaseStudies';
import Process from '../components/sections/Process';
import Technology from '../components/sections/Technology';
import Pricing from '../components/sections/Pricing';
import Trust from '../components/sections/Trust';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';
import ContactForm from '../components/sections/ContactForm';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <WhatIsGroMighty />
      <BusinessTransformation />
      <WhyGroMighty />
      <InteractiveDemos />
      <ProjectCalculator />
      <SolutionFinder />
      <Services />
      <ServicesBenefits />
      <IndustrySolutions />
      <CaseStudies limit={4} />
      <Process />
      <Technology />
      <Pricing />
      <Trust />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ContactForm />
    </motion.div>
  );
};

export default Home;
