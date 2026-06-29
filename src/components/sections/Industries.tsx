// src/components/sections/Industries.tsx
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaHeartbeat, 
  FaBullhorn, 
  FaFilm, 
  FaBriefcase, 
  FaChartLine,
  FaStore, 
  FaUtensils, 
  FaHome, 
  FaCar, 
  FaChurch,
  FaHands, 
  FaLandmark, 
  FaGlobe,
  FaArrowRight,
  FaUniversity,
  FaIndustry,
  FaRocket,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface Industry {
  id: string;
  name: string;
  category:string;
  description: string;
  icon: React.ReactNode;
  image: string;
  color: string;
  services: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

interface IndustryCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Industries: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories: IndustryCategory[] = [
    { id: 'all', label: 'All Industries', icon: <FaGlobe /> },
    { id: 'business', label: 'Business & Finance', icon: <FaBriefcase /> },
    { id: 'public', label: 'Public Sector', icon: <FaLandmark /> },
    { id: 'social', label: 'Social & Community', icon: <FaHands /> },
    { id: 'technology', label: 'Technology & Innovation', icon: <FaRocket /> },
  ];

  const industries: Industry[] = [
    // Business & Finance
    {
      id: 'business',
      name: 'Business & Corporate',
      description: 'Comprehensive digital solutions for businesses of all sizes, from startups to enterprises.',
      icon: <FaBriefcase />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      color: 'from-blue-500 to-blue-600',
      category: 'business',
      services: ['Corporate Branding', 'Digital Marketing', 'Website Development', 'CRM/ERP Solutions'],
      stats: [
        { label: 'Clients Served', value: '200+' },
        { label: 'Satisfaction Rate', value: '98%' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      description: 'Secure, compliant digital solutions for the financial services industry.',
      icon: <FaChartLine />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      color: 'from-green-500 to-green-600',
      category: 'business',
      services: ['Fintech Solutions', 'Mobile Banking', 'Trading Platforms', 'Security Solutions'],
      stats: [
        { label: 'Transactions Secured', value: '10M+' },
        { label: 'Client Satisfaction', value: '97%' }
      ]
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      description: 'Transform your retail business with cutting-edge e-commerce and omnichannel solutions.',
      icon: <FaStore />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      color: 'from-purple-500 to-purple-600',
      category: 'business',
      services: ['E-commerce Stores', 'Omnichannel Marketing', 'POS Systems', 'Inventory Management'],
      stats: [
        { label: 'Revenue Generated', value: '$50M+' },
        { label: 'Active Stores', value: '500+' }
      ]
    },
    {
      id: 'restaurants',
      name: 'Restaurants & Hospitality',
      description: 'Digital solutions that enhance customer experience and streamline restaurant operations.',
      icon: <FaUtensils />,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      color: 'from-orange-500 to-orange-600',
      category: 'business',
      services: ['POS Systems', 'Online Ordering', 'Reservation Systems', 'Loyalty Programs'],
      stats: [
        { label: 'Restaurants Served', value: '300+' },
        { label: 'Orders Processed', value: '1M+' }
      ]
    },
    {
      id: 'real-estate',
      name: 'Real Estate & Construction',
      description: 'Innovative digital solutions for real estate developers, agents, and construction firms.',
      icon: <FaHome />,
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      color: 'from-amber-500 to-amber-600',
      category: 'business',
      services: ['Property Portals', 'Virtual Tours', 'CRM Solutions', 'Project Management'],
      stats: [
        { label: 'Properties Listed', value: '10K+' },
        { label: 'Agents Served', value: '500+' }
      ]
    },
    {
      id: 'automobile',
      name: 'Automobile Industry',
      description: 'Digital transformation solutions for automotive manufacturers, dealers, and service providers.',
      icon: <FaCar />,
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop',
      color: 'from-red-500 to-red-600',
      category: 'business',
      services: ['Inventory Management', 'Service Platforms', 'Customer Engagement', 'Analytics'],
      stats: [
        { label: 'Dealers Served', value: '100+' },
        { label: 'Vehicles Managed', value: '50K+' }
      ]
    },

    // Public Sector
    {
      id: 'government',
      name: 'Government & Public Sector',
      description: 'Digital solutions for government agencies to improve citizen services and operational efficiency.',
      icon: <FaLandmark />,
      image: 'https://images.unsplash.com/photo-1589829540156-4478f750fcf4?w=600&h=400&fit=crop',
      color: 'from-indigo-500 to-indigo-600',
      category: 'public',
      services: ['E-governance', 'Citizen Portals', 'Data Management', 'Security Solutions'],
      stats: [
        { label: 'Projects Delivered', value: '50+' },
        { label: 'Citizens Served', value: '1M+' }
      ]
    },
    {
      id: 'education',
      name: 'Education & E-learning',
      description: 'Transform education with innovative digital learning platforms and management systems.',
      icon: <FaGraduationCap />,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      color: 'from-sky-500 to-sky-600',
      category: 'public',
      services: ['LMS Platforms', 'School Management', 'Online Courses', 'Virtual Classrooms'],
      stats: [
        { label: 'Schools Served', value: '200+' },
        { label: 'Students Enrolled', value: '100K+' }
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      description: 'Secure, compliant digital solutions for hospitals, clinics, and healthcare providers.',
      icon: <FaHeartbeat />,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      color: 'from-rose-500 to-rose-600',
      category: 'public',
      services: ['HIS Systems', 'Telemedicine', 'Patient Portals', 'Appointment Management'],
      stats: [
        { label: 'Hospitals Served', value: '50+' },
        { label: 'Patients Managed', value: '500K+' }
      ]
    },
    {
      id: 'college',
      name: 'Colleges & Universities',
      description: 'Comprehensive digital solutions for higher education institutions and universities.',
      icon: <FaUniversity />,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop',
      color: 'from-violet-500 to-violet-600',
      category: 'public',
      services: ['Student Management', 'Examination Systems', 'Alumni Networks', 'Research Portals'],
      stats: [
        { label: 'Universities Served', value: '30+' },
        { label: 'Students Enrolled', value: '150K+' }
      ]
    },

    // Social & Community
    {
      id: 'political',
      name: 'Political Organizations',
      description: 'Strategic digital solutions for political parties, candidates, and advocacy groups.',
      icon: <FaBullhorn />,
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
      color: 'from-yellow-500 to-yellow-600',
      category: 'social',
      services: ['Campaign Management', 'Voter Engagement', 'Branding', 'Social Media Strategy'],
      stats: [
        { label: 'Campaigns Managed', value: '150+' },
        { label: 'Voters Engaged', value: '5M+' }
      ]
    },
    {
      id: 'entertainment',
      name: 'Entertainment & Media',
      description: 'Cutting-edge digital solutions for media production, distribution, and entertainment.',
      icon: <FaFilm />,
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
      color: 'from-pink-500 to-pink-600',
      category: 'social',
      services: ['Content Distribution', 'Live Streaming', 'Video Production', 'Social Media'],
      stats: [
        { label: 'Content Views', value: '100M+' },
        { label: 'Events Covered', value: '500+' }
      ]
    },
    {
      id: 'temples',
      name: 'Temples & Spiritual Organizations',
      description: 'Digital solutions for spiritual organizations to connect with their communities.',
      icon: <FaChurch />,
      image: 'https://images.unsplash.com/photo-1589829540156-4478f750fcf4?w=600&h=400&fit=crop',
      color: 'from-orange-400 to-orange-500',
      category: 'social',
      services: ['Event Management', 'Live Streaming', 'Community Engagement', 'Donation Platforms'],
      stats: [
        { label: 'Organizations Served', value: '100+' },
        { label: 'Community Members', value: '1M+' }
      ]
    },
    {
      id: 'ngos',
      name: 'NGOs & Non-profits',
      description: 'Digital solutions to help NGOs and non-profits amplify their impact and reach.',
      icon: <FaHands />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      color: 'from-teal-500 to-teal-600',
      category: 'social',
      services: ['Fundraising Platforms', 'Volunteer Management', 'Awareness Campaigns', 'Analytics'],
      stats: [
        { label: 'NGOs Served', value: '80+' },
        { label: 'Communities Reached', value: '2M+' }
      ]
    },

    // Technology & Innovation
    {
      id: 'technology',
      name: 'Technology & IT',
      description: 'Innovative technology solutions for IT companies, startups, and tech innovators.',
      icon: <FaIndustry />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      color: 'from-cyan-500 to-cyan-600',
      category: 'technology',
      services: ['Software Development', 'Cloud Solutions', 'IoT', 'AI/ML Solutions'],
      stats: [
        { label: 'Projects Delivered', value: '300+' },
        { label: 'Innovation Awards', value: '25+' }
      ]
    }
  ];

  const filteredIndustries = activeCategory === 'all' 
    ? industries 
    : industries.filter(i => i.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }satisfies Variants;

  return (
    <section 
      id="industries" 
      className="py-16 md:py-20 lg:py-28 bg-white-light relative overflow-hidden"
      aria-label="Industries we serve"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="Industries We Serve"
          title="Empowering Every Sector"
          subtitle="We deliver tailored digital solutions across diverse industries, driving transformation and growth."
        />

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-3 md:px-5 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-blue-600 text-primary shadow-blue'
                : 'bg-white/5 text-gray-400 hover:text-gray-900 hover:bg-white/10 border border-blue-500/10'
              }`}
              aria-label={`Filter ${category.label}`}
              aria-pressed={activeCategory === category.id}
            >
              <span className="text-sm md:text-base">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {filteredIndustries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-r ${industry.color} flex items-center justify-center text-gray-900 text-lg shadow-lg`}>
                  {industry.icon}
                </div>

                {/* Stats Badges */}
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {industry.stats.map((stat, index) => (
                    <div key={index} className="bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-blue-500/20">
                      <div className="text-gray-900 font-bold text-xs">{stat.value}</div>
                      <div className="text-gray-400 text-[8px] uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-gray-900 font-poppins font-semibold text-base md:text-lg group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {industry.name}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {industry.description}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {industry.services.map((service, index) => (
                    <span 
                      key={index}
                      className="text-[10px] px-2 py-1 bg-blue-600/10 text-blue-500 rounded border border-blue-500/10"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-blue-600 hover:text-blue-500 group/btn"
                >
                  Explore Solutions
                  <FaArrowRight className="ml-2 text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/10">
            <div className="flex justify-center mb-2">
              <div className="text-blue-600 text-3xl">🌍</div>
            </div>
            <div className="text-gray-900 font-bold text-lg md:text-xl">15+</div>
            <div className="text-gray-400 text-sm">Industries Served</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/10">
            <div className="flex justify-center mb-2">
              <div className="text-blue-600 text-3xl">🏢</div>
            </div>
            <div className="text-gray-900 font-bold text-lg md:text-xl">1000+</div>
            <div className="text-gray-400 text-sm">Businesses Transformed</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/10">
            <div className="flex justify-center mb-2">
              <div className="text-blue-600 text-3xl">⭐</div>
            </div>
            <div className="text-gray-900 font-bold text-lg md:text-xl">98%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-blue-500/10">
            <div className="flex justify-center mb-2">
              <div className="text-blue-600 text-3xl">🏆</div>
            </div>
            <div className="text-gray-900 font-bold text-lg md:text-xl">50+</div>
            <div className="text-gray-400 text-sm">Industry Awards</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 md:mt-12"
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-500/5 rounded-2xl p-6 md:p-8 border border-blue-500/20 max-w-3xl mx-auto">
            <h3 className="text-gray-900 font-poppins font-semibold text-xl md:text-2xl mb-3">
              Don't See Your Industry Listed?
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-4 max-w-2xl mx-auto">
              We work across all sectors. Contact us to discuss how we can help your industry.
            </p>
            <Button variant="gold" size="lg">
              Let's Talk
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Industries;