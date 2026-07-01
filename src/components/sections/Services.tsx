// src/components/sections/Services.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaGoogle, 
  FaFacebook, 
  FaBullhorn, 
  FaUsers, 
  FaYoutube, 
  FaVideo,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBuilding,
  FaFilm,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaTag
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import type { ServiceItem } from '../../types';

// Service Categories
type Category = 'all' | 'marketing' | 'political' | 'media' | 'development';

// Service Data
const servicesData: ServiceItem[] = [
  // Marketing Services
  {
    id: 'google-ads',
    title: 'Google Ads',
    description: 'Drive targeted traffic with Search, Shopping, Display, and Performance Max campaigns.',
    icon: <FaGoogle />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Search Ads', 'Shopping Ads', 'Display Ads', 'Performance Max', 'Lead Generation']
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description: 'Reach your audience effectively through Facebook and Instagram advertising platforms.',
    icon: <FaFacebook />,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Facebook Ads', 'Instagram Ads', 'Retargeting', 'Lookalike Audiences']
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build brand presence across Facebook, Instagram, Twitter, LinkedIn, and YouTube.',
    icon: <FaUsers />,
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Content Planning', 'Daily Posting', 'Creative Design', 'Community Management']
  },
  {
    id: 'youtube-seo',
    title: 'YouTube SEO',
    description: 'Optimize your YouTube channel for maximum visibility and subscriber growth.',
    icon: <FaYoutube />,
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Keyword Research', 'Thumbnail Optimization', 'Ranking', 'Channel Growth']
  },

  // Political Services
  {
    id: 'political-campaign',
    title: 'Political Campaign Management',
    description: 'Comprehensive campaign strategies for successful political elections.',
    icon: <FaBullhorn />,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Election Strategy', 'Booth Management', 'War Room', 'Campaign Analytics']
  },
  {
    id: 'political-branding',
    title: 'Political Branding',
    description: 'Build a powerful political brand identity that resonates with voters.',
    icon: <FaBuilding />,
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Candidate Branding', 'Visual Identity', 'Slogan Development', 'Media Management']
  },
  {
    id: 'public-relations',
    title: 'Public Relations',
    description: 'Strategic PR campaigns that build trust and enhance public image.',
    icon: <FaHandshake />,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Media Relations', 'Press Releases', 'Crisis Management', 'Reputation Building']
  },

  // Development Services
  {
    id: 'website-dev',
    title: 'Website Development',
    description: 'Custom websites that combine stunning design with powerful functionality.',
    icon: <FaCode />,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
    category: 'development',
    features: ['Corporate Websites', 'E-commerce', 'CRM/ERP', 'School Management']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    icon: <FaMobileAlt />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'development',
    features: ['Android', 'iOS', 'React Native', 'Flutter']
  },

  // Design Services
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging digital experiences.',
    icon: <FaPaintBrush />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    category: 'design',
    features: ['UI Design', 'UX Research', 'Prototyping', 'User Testing']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visual designs that communicate your brand message effectively.',
    icon: <FaPaintBrush />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    category: 'design',
    features: ['Logo Design', 'Brochures', 'Social Media Graphics', 'Print Materials']
  },
  {
    id: 'branding',
    title: 'Branding',
    description: 'Comprehensive branding solutions that establish your unique identity.',
    icon: <FaBuilding />,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    category: 'design',
    features: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Brand Voice']
  },

  // Media Services
  {
    id: 'live-coverage',
    title: 'Live Event Coverage',
    description: 'Professional live coverage for events, conferences, and celebrations.',
    icon: <FaVideo />,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    category: 'media',
    features: ['Multi Camera Setup', 'Drone Coverage', 'Live Streaming', 'Event Photography']
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Professional video editing and post-production services.',
    icon: <FaFilm />,
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&h=400&fit=crop',
    category: 'media',
    features: ['Color Grading', 'Sound Design', 'Motion Graphics', 'Visual Effects']
  },
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [visibleServices, setVisibleServices] = useState<number>(8);

  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Services', icon: <FaGlobe /> },
    { id: 'marketing', label: 'Marketing', icon: <FaChartLine /> },
    { id: 'political', label: 'Political', icon: <FaBullhorn /> },
    { id: 'media', label: 'Media', icon: <FaVideo /> },
    { id: 'development', label: 'Development', icon: <FaCode /> },
  ];

  // Filter services based on category
  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeCategory);

  // Get visible services
  const displayedServices = filteredServices.slice(0, visibleServices);
  const hasMore = visibleServices < filteredServices.length;

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const handleLoadMore = (): void => {
    setVisibleServices(prev => prev + 6);
  };

  return (
    <section 
      id="services" 
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Our services"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl"></div>

      {/* Glowing orb decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <Container>
        <SectionHeading
          badge="Our Services"
          title="What We Do Best"
          subtitle="From strategy to execution, we provide comprehensive digital solutions that drive real results."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
        />

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setVisibleServices(8);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-2xl shadow-purple-500/30'
                : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:text-white hover:bg-white/20 border border-white/10 hover:border-purple-400/50'
              }`}
              aria-label={`Filter ${category.label}`}
              aria-pressed={activeCategory === category.id}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {displayedServices.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-purple-500/30 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-purple-200 border border-purple-400/30 shadow-sm flex items-center gap-1">
                    <FaTag className="text-[10px]" />
                    {categories.find(c => c.id === service.category)?.label}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-purple-300 text-xl md:text-2xl group-hover:scale-110 group-hover:text-purple-200 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-poppins font-semibold text-base md:text-lg group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-purple-200/80 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span 
                          key={index}
                          className="text-[10px] px-2 py-1 bg-purple-500/20 text-purple-200 rounded border border-purple-400/20"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-[10px] px-2 py-1 bg-white/5 text-purple-300 rounded border border-white/10">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8 md:mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={handleLoadMore}
              className="min-w-[200px] border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
            >
              Load More Services
            </Button>
          </motion.div>
        )}

        {/* Count Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-4 text-sm text-purple-300"
        >
          Showing {displayedServices.length} of {filteredServices.length} services
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;