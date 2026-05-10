import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import constructionImg from '../../assets/construction.png';
import travelImg from '../../assets/travel.png';

const projects = [
  {
    title: 'Real Estate',
    category: 'PropTech / Marketplace',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Marketplace', 'AR/VR'],
    link: 'https://jade-torte-2ebc5c.netlify.app/'
  },
  {
    title: 'Healthcare',
    category: 'MedTech / SaaS',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tags: ['Telemedicine', 'AI', 'Security'],
    link: 'https://thunderous-gingersnap-ea0906.netlify.app/'
  },
  {
    title: 'Construction',
    category: 'ConTech / Management',
    image: constructionImg,
    tags: ['BIM', 'IoT', 'Dashboard'],
    link: 'https://inquisitive-alpaca-67d475.netlify.app/'
  },
  {
    title: 'Education',
    category: 'EdTech / Learning',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    tags: ['Learning', 'Mobile', 'Video'],
    link: 'https://cheery-rolypoly-2f543d.netlify.app/'
  },
  {
    title: 'Legal Services',
    category: 'LexTech / Automation',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    tags: ['Automation', 'NLP', 'Cloud'],
    link: 'https://lighthearted-syrniki-0433cf.netlify.app/'
  },
  {
    title: 'Fitness and Wellness',
    category: 'Health / BioTech',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    tags: ['Wearables', 'Health', 'Swift'],
    link: 'https://incomparable-sprinkles-af3fb5.netlify.app/'
  },
  {
    title: 'Food and Beverage',
    category: 'Logistics / D2C',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800',
    tags: ['Logistics', 'Ecommerce', 'UI/UX'],
    link: 'https://splendid-sorbet-a6bf30.netlify.app/'
  },
  {
    title: 'Retail and E-commerce',
    category: 'Scale / Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tags: ['Scale', 'SEO', 'Conversion'],
    link: 'https://www.logi.company/'
  },
  {
    title: 'Travel and Hospitality',
    category: 'Travel / Booking',
    image: travelImg,
    tags: ['Booking', 'Mobile', 'Real-time'],
    link: 'https://poetic-tanuki-2ab09b.netlify.app/'
  },
  {
    title: 'Agricultural',
    category: 'AgriTech / Farming',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
    tags: ['Agriculture', 'Automation', 'IoT'],
    link: 'https://prinstan-agri-care.vercel.app/'
  }
];

const Portfolio = ({ limit }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="section-padding bg-surface" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold leading-tight"
            >
              Recent <span className="text-gradient">Case Studies</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex gap-4">
              {['All', 'Web', 'Mobile', 'AI'].map((filter) => (
                <button
                  key={filter}
                  className="px-6 py-2 rounded-full border border-white/10 hover:border-primary text-sm font-medium transition-all"
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {displayedProjects.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 bg-dark">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-all duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-dark/60 backdrop-blur-sm">
                  <div className="w-16 h-16 rounded-full bg-primary text-dark flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>

                <div className="absolute top-6 right-6">
                  <div className="px-4 py-1 rounded-full glass border-white/10 text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-white/30 text-xs uppercase tracking-widest font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link 
              to="/casestudies"
              className="inline-block px-10 py-5 rounded-2xl glass border-white/10 hover:border-primary transition-all font-bold group"
            >
              Explore All Case Studies
              <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
