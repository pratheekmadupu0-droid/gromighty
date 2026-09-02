// GroMighty Official Digital & Technology Solutions Data Store

import constructionImg from '../assets/construction.png';
import travelImg from '../assets/travel.png';

export const BRAND = {
  name: "GroMighty",
  legalName: "Gromighty Online Agency Services",
  tagline: "Digital Experiences Built to Move Your Business Forward.",
  subtitle: "We design and build websites, software, AI solutions and digital experiences that help businesses attract customers, operate smarter and grow.",
  phone1: "+91 91216 11200",
  phone2: "+91 93901 02334",
  email: "gromighty@gmail.com",
  whatsappNumber: "919121611200",
  address: "Hyderabad & Global Remote Operations",
};

// Section 4: Interactive Hero Nodes Visual
export const HERO_ECOSYSTEM_NODES = [
  {
    id: "business",
    label: "Business",
    icon: "Building2",
    description: "Your core business strategy, goals & vision.",
    color: "from-blue-500 to-cyan-400",
    pos: { x: 8, y: 50 },
    stats: "Foundation"
  },
  {
    id: "website",
    label: "Digital Platform",
    icon: "Globe",
    description: "High-performance web & mobile architecture.",
    color: "from-cyan-400 to-emerald-400",
    pos: { x: 26, y: 22 },
    stats: "Fast & Responsive"
  },
  {
    id: "leads",
    label: "Lead Capture",
    icon: "Target",
    description: "Smart forms, landing pages & direct inbound flow.",
    color: "from-emerald-400 to-amber-400",
    pos: { x: 48, y: 68 },
    stats: "High Conversion"
  },
  {
    id: "whatsapp",
    label: "WhatsApp CRM",
    icon: "MessageSquare",
    description: "Automated instant messaging & enquiry routing.",
    color: "from-amber-400 to-green-500",
    pos: { x: 68, y: 28 },
    stats: "Instant Response"
  },
  {
    id: "customers",
    label: "Customers",
    icon: "Users",
    description: "Delighted clients engaged with automated support.",
    color: "from-green-500 to-blue-400",
    pos: { x: 84, y: 60 },
    stats: "Seamless UX"
  },
  {
    id: "growth",
    label: "Scalable Growth",
    icon: "TrendingUp",
    description: "Measurable impact, data insights & business scaling.",
    color: "from-blue-400 to-cyan-300",
    pos: { x: 94, y: 25 },
    stats: "Long-term ROI"
  }
];

// Section 5: Transformation Journey
export const TRANSFORMATION_STEPS = [
  {
    id: "01",
    stage: "Your Business",
    withoutText: "Scattered online details, outdated branding, difficult to find on search engines.",
    withText: "Clear positioning, modern digital presence, highly visible on search & maps.",
    impact: "First Impression Excellence"
  },
  {
    id: "02",
    stage: "Digital Experience",
    withoutText: "Slow loading pages, broken mobile view, visitors bounce before inquiring.",
    withText: "Lightning-fast speed, mobile-first design, fluid user journey designed to convert.",
    impact: "Higher Visitor Retention"
  },
  {
    id: "03",
    stage: "Customer Interaction",
    withoutText: "Manual phone calls only, delayed replies, lost weekend or after-hours leads.",
    withText: "Instant WhatsApp routing, 24/7 interactive chat, instant enquiry collection.",
    impact: "Zero Missed Opportunities"
  },
  {
    id: "04",
    stage: "Automation",
    withoutText: "Team spends hours manually copying lead info and answering repetitive FAQs.",
    withText: "Automated CRM capture, smart AI chatbots, automated follow-up workflows.",
    impact: "70% Less Manual Workload"
  },
  {
    id: "05",
    stage: "Growth",
    withoutText: "Stagnant customer count, unpredictable revenue, reliance on word-of-mouth.",
    withText: "Continuous digital lead engine, scalable infrastructure ready for business expansion.",
    impact: "Predictable Business Scale"
  }
];

// Section 6: Why GroMighty?
export const WHY_GROMIGHTY_CARDS = [
  {
    id: "01",
    title: "Business First",
    summary: "We start with your business goals, customers and challenges — then build the right digital solution.",
    details: "We don't write code until we understand your exact customer journey, unit economics, and operational friction. Technology should accelerate your revenue, not just sit there looking pretty.",
    serviceExamples: ["Strategic Product Blueprinting", "User Journey Mapping", "Conversion Rate Optimization"],
    icon: "Briefcase"
  },
  {
    id: "02",
    title: "Built for Performance",
    summary: "Fast, responsive and optimized digital experiences designed for real users.",
    details: "Every website and application we craft scores top tier performance metrics. Under 1.5-second load times, fluid mobile UI, clean HTML code, and zero bloated frameworks.",
    serviceExamples: ["Custom Frontend Development", "Core Web Vitals Tuning", "Asset & Image Optimization"],
    icon: "Zap"
  },
  {
    id: "03",
    title: "AI Ready",
    summary: "Use AI and automation to reduce repetitive work and create smarter customer experiences.",
    details: "Integrate custom AI chatbots trained on your business knowledge base, automated email flows, and intelligent enquiry routing so your team works smarter.",
    serviceExamples: ["Custom AI Chatbots", "WhatsApp Business Bots", "Workflow Automation"],
    icon: "Cpu"
  },
  {
    id: "04",
    title: "Built to Grow",
    summary: "Your digital platform should evolve with your business.",
    details: "Architected modularly from day one. As your catalog grows, services expand, or team scales, your system seamlessly adapts without requiring a complete rebuild.",
    serviceExamples: ["Scalable Cloud Backend", "Modular API Integrations", "Database Architecture"],
    icon: "TrendingUp"
  },
  {
    id: "05",
    title: "Human Support",
    summary: "Work directly with a team that understands your goals.",
    details: "No middle managers or ticket queues. You gain direct access to senior developers, designers, and growth experts who care deeply about your project's success.",
    serviceExamples: ["Dedicated Project Manager", "24/7 Technical SLA", "Quarterly Growth Reviews"],
    icon: "Users"
  },
  {
    id: "06",
    title: "One Digital Partner",
    summary: "From websites and branding to software, AI and growth — build your digital ecosystem in one place.",
    details: "Eliminate vendor fragmentation. We unify design, engineering, automation, and search marketing under a single cohesive execution team.",
    serviceExamples: ["End-to-End Execution", "Brand & Tech Alignment", "Unified Digital Strategy"],
    icon: "Layers"
  }
];

// Section 7: "What Does Your Business Need?" (Solution Finder Configurator)
export const SOLUTION_FINDER_OPTIONS = [
  {
    id: "website",
    label: "I need a website",
    subtitle: "High-converting corporate or brand website",
    recommendedServices: ["Website Development", "UI/UX Design", "SEO Optimization", "Mobile Responsiveness"],
    benefits: "Establishes immediate authority, communicates value, and converts visitors into active business leads.",
    exampleUseCase: "A medical clinic or law firm needing a sleek modern website with direct appointment booking.",
    cta: "Build My Professional Website"
  },
  {
    id: "ecommerce",
    label: "I want to sell online",
    subtitle: "E-commerce store with seamless checkout",
    recommendedServices: ["E-commerce Development", "Payment Gateway", "Product Catalog", "Order & Inventory Management"],
    benefits: "Direct D2C sales channel operating 24/7 with instant UPI, card payments, and automated invoice delivery.",
    exampleUseCase: "Glyminoh Rice or artisan brand launching an online store with custom subscriptions & pan-India delivery.",
    cta: "Build My E-commerce Store"
  },
  {
    id: "customers",
    label: "I want more customers",
    subtitle: "Lead generation engine & digital visibility",
    recommendedServices: ["Landing Pages", "Google Business Optimization", "SEO", "WhatsApp Lead Capture"],
    benefits: "Higher search ranking, direct local maps calls, and instant WhatsApp inquiry routing for sales teams.",
    exampleUseCase: "A real estate agency capturing high-intent property buyer inquiries automatically.",
    cta: "Build My Growth System"
  },
  {
    id: "automation",
    label: "I want to automate my business",
    subtitle: "Reduce repetitive tasks & speed up response",
    recommendedServices: ["AI Chatbots", "WhatsApp Automation", "Workflow Automation", "CRM Integration"],
    benefits: "Zero manual data entry, instant response to customer questions, automated lead follow-up.",
    exampleUseCase: "A service business saving 15+ hours weekly by letting an AI bot answer FAQs and schedule consultations.",
    cta: "Automate My Operations"
  },
  {
    id: "app",
    label: "I need a mobile app",
    subtitle: "Cross-platform iOS and Android mobile app",
    recommendedServices: ["Mobile Applications", "API Integration", "UI/UX Design", "Push Notifications"],
    benefits: "Direct access to customer home screens, seamless push notifications, and fast offline-capable UX.",
    exampleUseCase: "A healthcare provider offering patients direct lab report downloads and appointment tracking.",
    cta: "Launch My Mobile App"
  },
  {
    id: "software",
    label: "I need custom software",
    subtitle: "Web app, SaaS, or internal business portal",
    recommendedServices: ["Custom Software", "Web Applications", "Cloud Solutions", "API Architecture"],
    benefits: "Custom tools tailored strictly to your proprietary business workflows without monthly per-user fees.",
    exampleUseCase: "A logistics or construction company managing projects, inventory, and site updates in real time.",
    cta: "Develop Custom Software"
  },
  {
    id: "ai",
    label: "I want AI solutions",
    subtitle: "Intelligent chatbots & business AI models",
    recommendedServices: ["AI Assistants", "Customer Support Bots", "Lead Scoring AI", "Knowledge-base Integration"],
    benefits: "Provides human-quality answers based exclusively on your company's documents and catalog 24/7.",
    exampleUseCase: "A customer service portal that resolves 80% of common customer tickets instantly.",
    cta: "Integrate AI Solutions"
  },
  {
    id: "branding",
    label: "I need better branding",
    subtitle: "Visual identity, logo design & UI design",
    recommendedServices: ["Brand Identity", "Logo Design", "Design Systems", "Marketing Assets"],
    benefits: "Transforms your visual identity to look like an established market leader and command premium pricing.",
    exampleUseCase: "A growing corporate business rebranding to pitch international corporate clients.",
    cta: "Elevate My Brand"
  }
];

// Section 8: Services Categorized
export const CATEGORIZED_SERVICES = [
  {
    id: "web",
    category: "CATEGORY 01",
    title: "Web Experiences",
    description: "Custom, ultra-fast websites designed to position your brand as an industry leader.",
    icon: "Globe",
    items: [
      "Website Development",
      "Business Websites",
      "Corporate Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Clinic & Healthcare Websites",
      "Restaurant & Hospitality Websites",
      "Real Estate Websites"
    ],
    tech: ["React / Vite", "Next.js", "Tailwind CSS", "SEO Schema"],
    outcome: "High conversion, sub-1.5s load times, perfect mobile UX."
  },
  {
    id: "commerce",
    category: "CATEGORY 02",
    title: "Commerce",
    description: "Robust e-commerce stores engineered for frictionless sales, subscriptions, and security.",
    icon: "ShoppingCart",
    items: [
      "E-commerce Development",
      "Custom Online Stores",
      "Payment Gateway Integration",
      "Product & Inventory Systems",
      "Order Management",
      "Subscription Billing",
      "Membership Platforms"
    ],
    tech: ["Shopify / Custom React", "Razorpay / Stripe", "Node.js", "Database Sync"],
    outcome: "Higher average order value, fast checkout, 99.9% uptime."
  },
  {
    id: "technology",
    category: "CATEGORY 03",
    title: "Technology",
    description: "Scalable web apps, custom software, and API integrations tailored to your workflows.",
    icon: "Code2",
    items: [
      "Custom Software Development",
      "Web Applications (SaaS)",
      "Mobile Applications (iOS/Android)",
      "REST & GraphQL API Integration",
      "Cloud Infrastructure & Vercel",
      "Technology Architecture Consulting"
    ],
    tech: ["TypeScript", "Node.js / Express", "PostgreSQL / Firebase", "REST / Webhooks"],
    outcome: "Streamlined operational efficiency, zero tech debt."
  },
  {
    id: "ai",
    category: "CATEGORY 04",
    title: "AI & Automation",
    description: "Intelligent chatbots and automated business workflows that operate around the clock.",
    icon: "Bot",
    items: [
      "Custom AI Chatbots",
      "WhatsApp Business Automation",
      "Workflow & Lead Automation",
      "Customer Support AI",
      "Document & Data Processing",
      "Custom LLM & OpenAI Integration"
    ],
    tech: ["OpenAI API", "WhatsApp Cloud API", "n8n / Webhooks", "Python / Vector DB"],
    outcome: "Instant client response, 70%+ decrease in manual support effort."
  },
  {
    id: "growth",
    category: "CATEGORY 05",
    title: "Growth",
    description: "Strategic search optimization, Google Maps authority, and lead conversion systems.",
    icon: "BarChart3",
    items: [
      "Search Engine Optimization (SEO)",
      "Google Business Profile Optimization",
      "High-Intent Lead Generation",
      "Conversion Rate Optimization (CRO)",
      "Analytics & Funnel Tracking",
      "Local Map Visibility"
    ],
    tech: ["Google Analytics 4", "Search Console", "Local Schema", "Heatmaps"],
    outcome: "Consistent organic lead flow and prominent search rankings."
  },
  {
    id: "creative",
    category: "CATEGORY 06",
    title: "Creative",
    description: "Memorable brand identities, UI/UX designs, and visual graphics built to captivate.",
    icon: "Palette",
    items: [
      "Brand Identity & Style Guides",
      "Logo Design & Typography",
      "UI/UX Design Systems",
      "Graphic Design & Collateral",
      "Video Editing & Production",
      "Pitch Deck & Presentation Design"
    ],
    tech: ["Figma", "Adobe Creative Suite", "Design Systems", "Motion Graphics"],
    outcome: "Cohesive aesthetic authority that builds immediate trust."
  }
];

// Section 9: Services -> Business Benefits
export const BUSINESS_BENEFITS_PAIRS = [
  {
    id: 1,
    problem: "Customers can't easily find your business online or trust your outdated website.",
    solution: "Custom high-performance website + Google Business & local SEO optimization.",
    result: "Instant visual credibility, top search visibility, and easier customer discovery."
  },
  {
    id: 2,
    problem: "Your team spends hours answering repetitive customer questions and manual lead forms.",
    solution: "AI chatbot + automated WhatsApp routing & lead capture integration.",
    result: "24/7 instant customer response, zero lead delay, and drastically less manual work."
  },
  {
    id: 3,
    problem: "Website visitors leave without taking action or inquiring about your services.",
    solution: "Conversion-focused landing page architecture + clear CTA pathways & instant WhatsApp button.",
    result: "A frictionless path from visitor interest to direct WhatsApp enquiry."
  },
  {
    id: 4,
    problem: "Using multiple disconnected software tools that don't talk to each other.",
    solution: "Unified custom web software or cloud API bridge connecting your core tools.",
    result: "A single, synchronized operational system eliminating double data entry."
  }
];

// Section 10: Industry Solutions
export const INDUSTRY_SOLUTIONS = [
  {
    id: "dental",
    name: "Dental Clinics",
    icon: "Stethoscope",
    summary: "Modern clinic websites built to attract local patients and streamline appointment requests.",
    recommendedFeatures: [
      "Clinic Overview & Infrastructure Showcase",
      "Doctor Profiles & Specializations",
      "Interactive Treatment Pages",
      "Online Appointment Request Form",
      "WhatsApp Direct Patient Chat",
      "Google Maps & Review Integration",
      "Patient FAQ & Pre-appointment Instructions"
    ],
    cta: "Build a Dental Website"
  },
  {
    id: "healthcare",
    name: "Hospitals & Healthcare",
    icon: "Activity",
    summary: "Trustworthy healthcare portals for multispecialty hospitals and diagnostic centers.",
    recommendedFeatures: [
      "Department & Specialty Directory",
      "Doctor Schedule & Booking Integration",
      "Diagnostic Test Information Pages",
      "Patient Enquiry & Emergency Hotline",
      "Health Blogs & Educational Hub",
      "Multi-location Maps Support"
    ],
    cta: "Build a Healthcare Portal"
  },
  {
    id: "restaurants",
    name: "Restaurants & Cafes",
    icon: "Utensils",
    summary: "Visual food menus, table reservation requests, and direct digital ordering.",
    recommendedFeatures: [
      "Interactive Digital Food Menu with Photos",
      "WhatsApp Table Booking & Inquiries",
      "Direct Online Ordering System",
      "Location, Directions & Operating Hours",
      "Special Events & Catering Forms",
      "Customer Review Highlights"
    ],
    cta: "Build a Restaurant Website"
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: "Building",
    summary: "Property showcase platforms designed for high-value buyer lead generation.",
    recommendedFeatures: [
      "Interactive Property Listings with Filters",
      "High-Resolution Photo & Video Galleries",
      "Site Visit Booking & WhatsApp Chat",
      "Property Floor Plans & Price Breakdowns",
      "Agent Contact Profiles & Enquiry Forms",
      "Map Integration & Nearby Amenities"
    ],
    cta: "Build a Real Estate Website"
  },
  {
    id: "education",
    name: "Education & Institutes",
    icon: "GraduationCap",
    summary: "Engaging portals for schools, academies, and online training providers.",
    recommendedFeatures: [
      "Course Directory & Curriculum Breakdown",
      "Student Admission Inquiry Forms",
      "Faculty Profiles & Campus Gallery",
      "Student Testimonials & Placement Highlights",
      "Downloadable Prospectus & Syllabus",
      "Upcoming Batch Notifications"
    ],
    cta: "Build an Education Portal"
  },
  {
    id: "retail",
    name: "Retail & Shops",
    icon: "Store",
    summary: "Digital store fronts to showcase products and drive both online sales and store visits.",
    recommendedFeatures: [
      "Product Catalog with Category Filters",
      "WhatsApp Product Inquiry & Orders",
      "In-store Location & Directions",
      "Seasonal Discounts & Offer Banners",
      "Customer Review Ratings",
      "UPI & Payment Link Integration"
    ],
    cta: "Build a Retail Platform"
  },
  {
    id: "corporate",
    name: "Corporate Businesses",
    icon: "Briefcase",
    summary: "Executive-level websites that build B2B credibility and attract corporate clients.",
    recommendedFeatures: [
      "Corporate Overview & Leadership Team",
      "Service Line Breakdowns & Solutions",
      "Client Logos & Strategic Case Studies",
      "RFP & B2B Inquiry Form",
      "Compliance, Quality & Standard Badges",
      "Investor & Career Opportunities Section"
    ],
    cta: "Build a Corporate Website"
  },
  {
    id: "services",
    name: "Professional Services",
    icon: "Award",
    summary: "Authority platforms for legal, financial, accounting, and consulting firms.",
    recommendedFeatures: [
      "Practice Area Detailed Pages",
      "Partner & Consultant Biographies",
      "Initial Consultation Booking Form",
      "Client Knowledge Hub & Articles",
      "Trust Badges & Accreditations",
      "Secure Contact & Document Upload"
    ],
    cta: "Build a Consulting Platform"
  },
  {
    id: "ecommerce",
    name: "E-commerce Brands",
    icon: "ShoppingBag",
    summary: "D2C online store systems built to scale catalog size and maximize repeat orders.",
    recommendedFeatures: [
      "Frictionless Mobile-First Shopping Cart",
      "Razorpay, Stripe & UPI Instant Checkout",
      "Automated Order Tracking & SMS/WhatsApp Updates",
      "Product Variant & Inventory Management",
      "Discount Codes & Promotional Engines",
      "Customer Account & Order History Portal"
    ],
    cta: "Build an E-commerce Store"
  }
];

// Section 11 & 12: Featured Projects & Detailed Case Studies
export const FEATURED_PROJECTS = [
  {
    id: "glyminoh-rice",
    title: "Glyminoh Rice",
    client: "Glyminoh Agri & Food Products",
    industry: "AgriTech / Premium D2C Food",
    category: "E-commerce & Brand Platform",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=1200",
    tags: ["E-commerce", "D2C Brand", "Nutritional Tech", "Razorpay"],
    summary: "A premium digital brand experience and e-commerce portal for Glyminoh — highlighting low-glycemic health benefits, nutritional science, and direct-to-consumer order fulfillment.",
    challenge: "The brand needed to communicate the unique low-GI health science of their specialized rice varieties while offering a seamless e-commerce ordering experience for health-conscious consumers across India.",
    approach: "GroMighty designed an editorial health-first digital experience with interactive nutritional comparison guides, customer reviews, clear subscription options, and instant UPI checkout.",
    solution: "Built a responsive, lightning-fast web storefront featuring visual product highlights, custom meal usage recipes, automated order confirmations via WhatsApp, and Razorpay payment integration.",
    technology: ["React", "Tailwind CSS", "Razorpay Gateway", "WhatsApp API", "Vercel"],
    outcomes: [
      "Unified online presence positioning Glyminoh as a premium health rice pioneer",
      "Frictionless order placement path reducing cart abandonment",
      "Automated customer enquiry capture via integrated WhatsApp"
    ],
    liveUrl: "https://prinstan-agri-care.vercel.app/"
  },
  {
    id: "real-estate-apex",
    title: "Apex Urban Properties",
    client: "Apex Real Estate Developers",
    industry: "Real Estate & PropTech",
    category: "PropTech Portal",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    tags: ["Real Estate", "Lead Capture", "Interactive Maps"],
    summary: "High-end property showcase portal featuring interactive floor plans, neighborhood location maps, site visit scheduling, and automated buyer lead routing.",
    challenge: "Traditional PDF brochures were failing to engage prospective luxury apartment buyers, resulting in slow lead inquiries.",
    approach: "Developed an immersive web experience with interactive project filters, virtual walkthrough embeds, and instant WhatsApp site visit booking.",
    solution: "Integrated a custom property search database with dynamic lead scoring, routing inquiries straight to sales executives.",
    technology: ["Next.js", "Tailwind CSS", "Mapbox API", "Framer Motion"],
    outcomes: [
      "Significantly improved property inquiry quality",
      "Instant WhatsApp booking for site visits",
      "Higher engagement on luxury project detail pages"
    ],
    liveUrl: "https://jade-torte-2ebc5c.netlify.app/"
  },
  {
    id: "carepulse-health",
    title: "CarePulse Health Platform",
    client: "CarePulse Multispecialty",
    industry: "Hospitals & Healthcare",
    category: "MedTech Platform",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    tags: ["MedTech", "Doctor Booking", "Patient Portal"],
    summary: "Patient-first medical portal with doctor specialization directories, online appointment requests, treatment information, and direct clinic map routing.",
    challenge: "Patients found it frustrating to inquire about doctor availability and booking slots via phone calls.",
    approach: "Designed a clean, accessible healthcare interface prioritizing search by medical specialty, doctor profiles, and emergency hotline access.",
    solution: "Implemented an intuitive step-by-step appointment request system with automated SMS/WhatsApp reminders.",
    technology: ["React", "Node.js", "Tailwind CSS", "REST API"],
    outcomes: [
      "Streamlined patient appointment requests",
      "Clear, accessible doctor availability schedule",
      "Higher online visibility for clinic specialties"
    ],
    liveUrl: "https://thunderous-gingersnap-ea0906.netlify.app/"
  },
  {
    id: "constructiq-management",
    title: "ConstructIQ Systems",
    client: "ConstructIQ Engineering",
    industry: "Construction & ConTech",
    category: "Custom Web Application",
    image: constructionImg,
    tags: ["ConTech", "Custom Dashboard", "Project Tracking"],
    summary: "Custom construction project tracking platform enabling site managers to upload daily progress, equipment status, and milestone approvals.",
    challenge: "Managing multiple active construction sites using disconnected Excel sheets led to communication delays.",
    approach: "Built a centralized web app dashboard where project managers, site engineers, and clients track live site updates.",
    solution: "Crafted a responsive web portal with role-based access, image progress logs, and automated project status reporting.",
    technology: ["React", "Tailwind CSS", "Cloudflare", "Chart.js"],
    outcomes: [
      "Centralized project visibility across construction sites",
      "Faster client approval workflow for completed phases",
      "Clear visual tracking of equipment and materials"
    ],
    liveUrl: "https://inquisitive-alpaca-67d475.netlify.app/"
  },
  {
    id: "horizon-travel",
    title: "Horizon Travel & Retreats",
    client: "Horizon Hospitality Group",
    industry: "Travel & Hospitality",
    category: "Booking & Experience Portal",
    image: travelImg,
    tags: ["Travel", "Hospitality", "Booking Engine"],
    summary: "Visually rich travel destination portal featuring custom tour package inquiries, itinerary explorer, customer reviews, and direct WhatsApp reservation.",
    challenge: "Needed to showcase luxury travel packages with vivid photography and instant customization options.",
    approach: "Designed an editorial travel experience with dynamic package filter tags, itinerary timelines, and instant quote requesting.",
    solution: "Delivered a lightweight, image-optimized platform that loads rapidly even on mobile networks during travel.",
    technology: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    outcomes: [
      "Elevated brand presentation for high-end tour packages",
      "Direct WhatsApp itinerary inquiry flow",
      "Fast page load speed on mobile networks"
    ],
    liveUrl: "https://poetic-tanuki-2ab09b.netlify.app/"
  },
  {
    id: "edupulse-learning",
    title: "EduPulse Academy",
    client: "EduPulse Education",
    industry: "Education & EdTech",
    category: "Learning & Student Portal",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200",
    tags: ["EdTech", "Course Hub", "Admissions"],
    summary: "Course directory and admission portal designed to guide students through curriculum details, faculty credentials, and online registration.",
    challenge: "Navigating complex course options on legacy university templates confused prospective students.",
    approach: "Created a modern course discovery system with clear path recommendations, downloadable syllabi, and direct inquiry forms.",
    solution: "Structured course pages with video previews, career outcome metrics, and automated counselor callback scheduling.",
    technology: ["React", "Tailwind CSS", "Vercel"],
    outcomes: [
      "Clear student guidance across all course paths",
      "Higher conversion on admission inquiry forms",
      "Streamlined counselor follow-up"
    ],
    liveUrl: "https://cheery-rolypoly-2f543d.netlify.app/"
  }
];

// Section 13: How We Work (Process)
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understanding your business goals, target audience, and existing friction points.",
    deliverables: ["Strategy session", "Competitor analysis", "Requirements blueprint"]
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Defining system architecture, user journeys, content hierarchy, and tech stack.",
    deliverables: ["Wireframe prototypes", "Technical roadmap", "Feature scope definition"]
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Crafting modern, high-converting visual interfaces tailored to your brand identity.",
    deliverables: ["UI/UX design mocks", "Design system", "Interactive click-through preview"]
  },
  {
    number: "04",
    title: "Build",
    subtitle: "Developing clean, lightning-fast code with modular architecture and integrations.",
    deliverables: ["Frontend & Backend code", "Database setup", "API & WhatsApp integration"]
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "Rigorous cross-browser testing, SEO audits, speed optimization, and domain launch.",
    deliverables: ["Core Web Vitals check", "Security audit", "Live production deployment"]
  },
  {
    number: "06",
    title: "Grow",
    subtitle: "Ongoing performance monitoring, feature upgrades, and digital optimization support.",
    deliverables: ["Quarterly reviews", "Technical maintenance", "Scale recommendations"]
  }
];

// Section 14: Technology Categories
export const TECH_CATEGORIES = [
  {
    title: "Frontend Development",
    techs: ["React", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend & Cloud",
    techs: ["Node.js", "Express", "Python", "Vercel", "AWS Cloud", "Serverless"]
  },
  {
    title: "Database & APIs",
    techs: ["PostgreSQL", "MongoDB", "Firebase", "REST APIs", "GraphQL", "Webhooks"]
  },
  {
    title: "AI & Business Automation",
    techs: ["OpenAI API", "Custom AI Chatbots", "WhatsApp Cloud API", "n8n Automation", "Zapier Integration"]
  },
  {
    title: "Analytics & Payments",
    techs: ["Razorpay", "Stripe", "Google Analytics 4", "Google Search Console", "Hotjar"]
  }
];

// Section 15: Pricing / Packages
export const PRICING_PACKAGES = [
  {
    name: "Starter",
    price: "₹7,000",
    description: "Ideal for small businesses needing a clean, professional single-page web presence.",
    features: [
      "High-Performance Single Page Website",
      "Mobile Responsive Layout",
      "Basic SEO Setup & Google Indexing",
      "Contact Form & WhatsApp Chat Button",
      "Fast 3-5 Day Delivery"
    ],
    popular: false,
    cta: "Start Starter Project"
  },
  {
    name: "Business",
    price: "₹10,000",
    description: "Multi-page website designed for growing businesses seeking lead generation.",
    features: [
      "Up to 5 Custom Pages (Home, About, Services, etc.)",
      "Custom UI/UX & Brand Colors",
      "Google Business Profile Optimization",
      "Lead Capture Form & Email Alerts",
      "Mobile & Speed Optimization"
    ],
    popular: false,
    cta: "Start Business Project"
  },
  {
    name: "Standard",
    price: "₹15,000",
    description: "Comprehensive digital presence with advanced service breakdowns & lead capture.",
    features: [
      "Up to 8 Custom Pages",
      "Detailed Service / Industry Breakdowns",
      "WhatsApp Business Routing Automation",
      "Advanced On-Page SEO & Schema",
      "CMS / Content Management Integration"
    ],
    popular: true,
    cta: "Start Standard Project"
  },
  {
    name: "Professional",
    price: "₹20,000",
    description: "For established companies needing AI chatbot integration & custom features.",
    features: [
      "Up to 12 Custom Pages",
      "Custom AI Chatbot Integration",
      "Interactive Product / Service Configurator",
      "Speed Score Guarantee (>90+ score)",
      "Priority Developer Support"
    ],
    popular: false,
    cta: "Start Professional Project"
  },
  {
    name: "E-commerce",
    price: "₹25,000+",
    description: "Complete online store system with payment gateways and order management.",
    features: [
      "Full E-commerce Storefront",
      "Razorpay / Stripe UPI Payment Gateway",
      "Product Catalog & Category Filtering",
      "Automated Order Confirmation Messages",
      "Inventory & Customer Management Portal"
    ],
    popular: false,
    cta: "Start E-commerce Project"
  },
  {
    name: "Enterprise",
    price: "₹35,000+",
    description: "Custom Web Software, SaaS Platforms, Mobile Apps, or Complex Automation.",
    features: [
      "Custom React / Next.js Web Application",
      "Tailored API & Database Architecture",
      "Custom Business Automation Workflows",
      "Full Source Code & System Ownership",
      "Dedicated Technical SLA & Maintenance"
    ],
    popular: false,
    cta: "Talk Enterprise Solutions"
  }
];

// Section 16: Trust Points
export const TRUST_POINTS = [
  {
    title: "100% Code & Asset Ownership",
    description: "You own full rights to your code, design assets, and domain. Zero lock-in contracts."
  },
  {
    title: "No Hidden Costs or Surprise Fees",
    description: "Clear, upfront project pricing agreed upon before work begins. What you see is what you pay."
  },
  {
    title: "Direct Access to Engineers",
    description: "Communicate directly with the designers and engineers building your system."
  },
  {
    title: "Performance & Mobile Guarantee",
    description: "Every build undergoes rigorous speed optimization and mobile responsiveness testing."
  }
];

// Section 18: FAQ Accordion Data
export const FAQS = [
  {
    q: "Why does my business need a website?",
    a: "A modern website acts as your 24/7 digital storefront. It builds immediate credibility when potential customers search for your services, explains your unique value proposition clearly, captures inbound leads automatically, and ensures you don't lose business to competitors who are visible online."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes! We specialize in modernizing outdated, slow, or low-converting websites. We migrate your existing content, elevate the visual design to a premium standard, optimize mobile responsiveness, speed up load times, and integrate modern lead capture forms."
  },
  {
    q: "Can you build custom software or web applications?",
    a: "Absolutely. Beyond websites, GroMighty develops custom web applications, SaaS tools, internal admin dashboards, customer portals, and mobile app interfaces tailored strictly to your proprietary business workflows."
  },
  {
    q: "Do you provide AI solutions and chatbots?",
    a: "Yes. We design custom AI chatbots and automated support assistants trained specifically on your company's services, catalog, and FAQs. These bots operate 24/7 on your website or WhatsApp to answer visitor questions and collect qualified sales leads."
  },
  {
    q: "Can you integrate WhatsApp directly into my website?",
    a: "Yes! We implement one-click WhatsApp chat triggers, pre-filled inquiry buttons, and automated WhatsApp lead notifications so potential clients can connect with your team instantly."
  },
  {
    q: "Can you build e-commerce stores with payment gateways?",
    a: "Yes. We build high-converting e-commerce stores equipped with secure online payment gateways (Razorpay, Stripe, UPI, credit cards, net banking), automated order confirmation emails, inventory tracking, and discount coupon engines."
  },
  {
    q: "Do you provide Search Engine Optimization (SEO)?",
    a: "Every GroMighty website is built with SEO best practices from the ground up — including clean semantic HTML, schema structured data, Meta tags, fast loading speeds, and Google Search Console indexing."
  },
  {
    q: "How long does a typical project take to complete?",
    a: "Timeline depends on project scope. A Starter website typically takes 3–5 business days. Standard business websites take 7–14 days. Custom e-commerce platforms or complex web applications take 2–4 weeks. We establish clear milestone dates before starting."
  },
  {
    q: "How does your pricing work?",
    a: "We offer transparent baseline packages starting from ₹7,000 for single-page sites up to ₹35,000+ for enterprise software. We provide a detailed written scope of work with fixed pricing so there are never hidden costs."
  },
  {
    q: "Do you provide ongoing maintenance and support after launch?",
    a: "Yes. We offer post-launch technical support, maintenance, security updates, and performance monitoring to ensure your digital ecosystem runs smoothly as your business scales."
  },
  {
    q: "Can you work with businesses outside Hyderabad?",
    a: "Yes! GroMighty serves clients across India and internationally. We communicate seamlessly via video calls, WhatsApp, email, and collaborative tools throughout the project lifecycle."
  }
];
