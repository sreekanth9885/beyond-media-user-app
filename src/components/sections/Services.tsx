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
  // {
  //   id: 'content-marketing',
  //   title: 'Content Marketing',
  //   description: 'Create compelling content that engages your audience and drives conversions.',
  //   icon: <FaEnvelope />,
  //   image: 'https://images.unsplash.com/photo-1432889490241-7f0332774d30?w=600&h=400&fit=crop',
  //   category: 'marketing',
  //   features: ['Blog Posts', 'White Papers', 'Case Studies', 'Newsletters']
  // },

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

  // Industry-Specific
  // {
  //   id: 'healthcare',
  //   title: 'Healthcare Promotions',
  //   description: 'Specialized digital marketing for healthcare providers and organizations.',
  //   icon: <FaHeartbeat />,
  //   image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
  //   category: 'marketing',
  //   features: ['Patient Acquisition', 'Healthcare SEO', 'Medical Branding', 'Compliance']
  // },
  // {
  //   id: 'education',
  //   title: 'Educational Promotions',
  //   description: 'Digital strategies that connect students with educational opportunities.',
  //   icon: <FaUniversity />,
  //   image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
  //   category: 'marketing',
  //   features: ['Student Recruitment', 'Online Learning', 'School Branding', 'Admissions']
  // },
  // {
  //   id: 'entertainment',
  //   title: 'Entertainment Promotions',
  //   description: 'Creative marketing campaigns for entertainment and media brands.',
  //   icon: <FaTv />,
  //   image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
  //   category: 'marketing',
  //   features: ['Event Marketing', 'Ticket Sales', 'Social Media', 'Content Creation']
  // },
  // {
  //   id: 'real-estate',
  //   title: 'Real Estate Promotions',
  //   description: 'Digital marketing solutions for real estate agents and developers.',
  //   icon: <FaBuilding />,
  //   image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  //   category: 'marketing',
  //   features: ['Property Listings', 'Virtual Tours', 'Lead Generation', 'Open House Marketing']
  // },
  // {
  //   id: 'devotional',
  //   title: 'Devotional Promotions',
  //   description: 'Respectful and engaging digital strategies for spiritual organizations.',
  //   icon: <FaStar />,
  //   image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
  //   category: 'political',
  //   features: ['Event Promotion', 'Devotional Content', 'Community Engagement']
  // },
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
      className="py-16 md:py-20 lg:py-28 bg-gray-50"
      aria-label="Our services"
    >
      <Container>
        <SectionHeading
          badge="Our Services"
          title="What We Do Best"
          subtitle="From strategy to execution, we provide comprehensive digital solutions that drive real results."
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
                ? 'bg-blue-600 text-white shadow-blue'
                : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
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
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-blue transition-all duration-300"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-blue-600 border border-blue-200 shadow-sm flex items-center gap-1">
                    <FaTag className="text-[10px]" />
                    {categories.find(c => c.id === service.category)?.label}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-blue-600 text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-gray-900 font-poppins font-semibold text-base md:text-lg group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <span 
                          key={index}
                          className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 rounded border border-blue-100"
                        >
                          {feature}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-[10px] px-2 py-1 bg-gray-50 text-gray-500 rounded border border-gray-200">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-blue-600 hover:text-blue-700 group/btn"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button> */}
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
              className="min-w-[200px]"
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
          className="text-center mt-4 text-sm text-gray-500"
        >
          Showing {displayedServices.length} of {filteredServices.length} services
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;