// src/components/sections/Portfolio.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaSearch, 
  FaTimes, 
  FaArrowRight, 
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaMobileAlt,
  FaVideo,
  FaGlobe,
  FaTag,
  FaLink,
  FaEye,
  FaStar,
  FaComments
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  date: string;
  client: string;
  result: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ReactNode;
  count: number;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const portfolioItems: PortfolioItem[] = [
    // Political Campaigns
    {
      id: '1',
      title: 'National Election Campaign 2024',
      category: 'political',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
      description: 'Comprehensive digital campaign strategy for national elections including social media, branding, and ground operations.',
      tags: ['Election Strategy', 'Social Media', 'Branding', 'Analytics'],
      date: '2024',
      client: 'National Political Party',
      result: '15% increase in voter engagement, 20% social media growth'
    },
    {
      id: '2',
      title: 'State Assembly Campaign',
      category: 'political',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=600&h=400&fit=crop',
      description: 'Successful state-level campaign with targeted messaging and community outreach programs.',
      tags: ['Campaign Management', 'Community Outreach', 'Media Relations'],
      date: '2023',
      client: 'State Political Leader',
      result: 'Won by 25,000 votes, 40% social media engagement'
    },
    {
      id: '3',
      title: 'Local Government Election',
      category: 'political',
      image: 'https://images.unsplash.com/photo-1589829540156-4478f750fcf4?w=600&h=400&fit=crop',
      description: 'Hyper-local campaign strategy focusing on grassroots engagement and digital presence.',
      tags: ['Grassroots Campaign', 'Digital Marketing', 'Booth Management'],
      date: '2023',
      client: 'Municipal Corporation Candidate',
      result: '85% recognition in target wards'
    },

    // Digital Marketing
    {
      id: '4',
      title: 'E-commerce Brand Launch',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Full-scale digital marketing campaign for e-commerce brand launch including Google Ads and social media.',
      tags: ['Google Ads', 'Social Media', 'Content Marketing', 'SEO'],
      date: '2024',
      client: 'Fashion Retail Brand',
      result: '500% ROAS, 50K+ new customers'
    },
    {
      id: '5',
      title: 'Real Estate Digital Campaign',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Integrated marketing campaign for luxury real estate project targeting high-net-worth individuals.',
      tags: ['Meta Ads', 'Content Marketing', 'Lead Generation'],
      date: '2023',
      client: 'Luxury Real Estate Developer',
      result: '150+ qualified leads, 80% conversion rate'
    },
    {
      id: '6',
      title: 'Healthcare Brand Awareness',
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      description: 'Comprehensive healthcare marketing campaign across multiple digital channels.',
      tags: ['Healthcare SEO', 'Content Marketing', 'Patient Acquisition'],
      date: '2024',
      client: 'Multi-specialty Hospital',
      result: '200% increase in patient inquiries'
    },

    // Web Development
    {
      id: '7',
      title: 'Corporate Banking Portal',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Enterprise banking portal with advanced security features and seamless user experience.',
      tags: ['React', 'Node.js', 'Security', 'Banking'],
      date: '2024',
      client: 'Leading National Bank',
      result: '10K+ daily active users, 99.9% uptime'
    },
    {
      id: '8',
      title: 'School Management Platform',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      description: 'Complete school management system with parent portal and mobile app integration.',
      tags: ['React', 'Node.js', 'Mobile App', 'Education'],
      date: '2023',
      client: 'International School Network',
      result: 'Streamlined operations for 50+ schools'
    },
    {
      id: '9',
      title: 'E-commerce Marketplace',
      category: 'development',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      description: 'Full-featured e-commerce marketplace with multi-vendor support and payment integration.',
      tags: ['Shopify', 'React', 'Stripe', 'Marketplace'],
      date: '2024',
      client: 'Online Retail Platform',
      result: '1M+ products listed, 100K+ monthly visitors'
    },

    // Mobile Apps
    {
      id: '10',
      title: 'Healthcare Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Comprehensive healthcare app with telemedicine, appointment booking, and patient records.',
      tags: ['React Native', 'Healthcare', 'Telemedicine'],
      date: '2024',
      client: 'Healthcare Network',
      result: '50K+ downloads, 4.8 star rating'
    },
    {
      id: '11',
      title: 'Restaurant Ordering App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      description: 'Mobile app for restaurant ordering, loyalty program, and real-time order tracking.',
      tags: ['Flutter', 'Firebase', 'Payment Integration'],
      date: '2023',
      client: 'Restaurant Chain',
      result: '300% increase in online orders'
    },

    // Media & Production
    {
      id: '12',
      title: 'Political Documentary Series',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
      description: 'High-quality documentary series covering political campaigns and social issues.',
      tags: ['Video Production', 'Documentary', 'Political Content'],
      date: '2024',
      client: 'Political Organization',
      result: '5M+ views across platforms'
    },
    {
      id: '13',
      title: 'Corporate Event Coverage',
      category: 'media',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
      description: 'Professional live coverage of major corporate event with multi-camera setup.',
      tags: ['Live Streaming', 'Multi-camera', 'Event Production'],
      date: '2023',
      client: 'Fortune 500 Company',
      result: '10K+ live viewers'
    },

    // Branding & Design
    {
      id: '14',
      title: 'Political Brand Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      description: 'Complete brand identity design for political candidate and campaign materials.',
      tags: ['Branding', 'Logo Design', 'Campaign Materials'],
      date: '2024',
      client: 'Political Leader',
      result: 'Strong brand recognition across constituencies'
    },
    {
      id: '15',
      title: 'Corporate Rebranding',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Comprehensive corporate rebranding including logo, guidelines, and marketing collateral.',
      tags: ['Rebranding', 'Visual Identity', 'Brand Guidelines'],
      date: '2023',
      client: 'Technology Company',
      result: 'Modern brand image, 40% increase in brand recall'
    },
  ];

  // Get unique categories
  const categories: Category[] = [
    { id: 'all', label: 'All Projects', icon: <FaGlobe />, count: portfolioItems.length },
    { id: 'political', label: 'Political', icon: <FaBullhorn />, count: portfolioItems.filter(item => item.category === 'political').length },
    { id: 'marketing', label: 'Marketing', icon: <FaChartLine />, count: portfolioItems.filter(item => item.category === 'marketing').length },
    { id: 'development', label: 'Development', icon: <FaCode />, count: portfolioItems.filter(item => item.category === 'development').length },
    { id: 'mobile', label: 'Mobile Apps', icon: <FaMobileAlt />, count: portfolioItems.filter(item => item.category === 'mobile').length },
    { id: 'media', label: 'Media', icon: <FaVideo />, count: portfolioItems.filter(item => item.category === 'media').length },
    { id: 'design', label: 'Design', icon: <FaPaintBrush />, count: portfolioItems.filter(item => item.category === 'design').length },
  ];

  // Filter items
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="portfolio" 
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Portfolio"
    >
      {/* Background Decorations */}
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
          badge="Our Portfolio"
          title="Projects That Define Excellence"
          subtitle="Explore our diverse portfolio of successful projects across industries and technologies."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
        />

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 mb-8 md:mb-12"
        >
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg"
              aria-label="Search portfolio"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300" />
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-2xl shadow-purple-500/30'
                  : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:text-white hover:bg-white/20 border border-white/10 hover:border-purple-400/50'
                }`}
                aria-label={`Filter ${category.label}`}
                aria-pressed={activeCategory === category.id}
              >
                <span className="text-sm">{category.icon}</span>
                {category.label}
                <span className={`text-[10px] ${
                  activeCategory === category.id ? 'text-purple-200' : 'text-purple-300'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid - Masonry Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover="hover"
                className="break-inside-avoid relative group cursor-pointer"
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && setSelectedItem(item)}
                aria-label={`View ${item.title}`}
              >
                <div className="relative rounded-xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-purple-500/30 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-purple-200 border border-purple-400/30 flex items-center gap-1 z-10 shadow-lg">
                    <FaTag className="text-[10px]" />
                    {categories.find(c => c.id === item.category)?.label}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    whileHover="visible"
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/80 to-transparent flex flex-col justify-end p-4 md:p-6"
                  >
                    <h3 className="text-white font-poppins font-semibold text-base md:text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-purple-200 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="text-[10px] px-2 py-1 bg-purple-500/20 text-purple-200 rounded border border-purple-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="text-[10px] px-2 py-1 bg-white/5 text-purple-300 rounded border border-white/10">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-purple-300">
                        {item.client} • {item.date}
                      </span>
                      <span className="text-purple-300 text-sm">
                        <FaEye />
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-purple-300 text-lg">
              No projects found matching your criteria
            </div>
          </motion.div>
        )}

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 text-sm text-purple-300"
        >
          Showing {filteredItems.length} of {portfolioItems.length} projects
        </motion.div>
      </Container>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-purple-900/95 backdrop-blur-glass rounded-2xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors duration-300 z-10"
                aria-label="Close modal"
              >
                <FaTimes size={24} />
              </button>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Image */}
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block px-3 py-1 bg-purple-500/30 backdrop-blur-sm rounded-lg text-xs font-medium text-purple-200 border border-purple-400/30">
                      {categories.find(c => c.id === selectedItem.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <h3 className="text-white font-poppins font-bold text-2xl md:text-3xl">
                    {selectedItem.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-purple-300">
                    <span className="flex items-center gap-1">
                      <FaStar className="text-purple-400" /> {selectedItem.client}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComments className="text-purple-400" /> {selectedItem.date}
                    </span>
                  </div>

                  <p className="text-purple-200 text-base md:text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold text-sm mb-2">Key Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs border border-purple-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h4 className="text-white font-semibold text-sm mb-1">Result</h4>
                    <p className="text-purple-200 text-sm">{selectedItem.result}</p>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 shadow-purple-lg"
                  >
                    <FaLink className="mr-2" /> View Full Case Study
                    <FaArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;