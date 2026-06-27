// src/components/sections/DigitalMarketing.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaGoogle, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube,
  FaShoppingCart,
  FaAd,
  FaSearch,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaDollarSign,
  FaHashtag,
//   FaTarget,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface DigitalService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  stats: string;
  features: string[];
  platforms?: string[];
}

interface MarketingStat {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  change?: string;
}

const DigitalMarketing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('google-ads');

  const marketingStats: MarketingStat[] = [
    { id: '1', label: 'ROI Generated', value: '$50M+', icon: <FaDollarSign />, change: '+156%' },
    { id: '2', label: 'Leads Generated', value: '100K+', icon: <FaUsers />, change: '+89%' },
    { id: '3', label: 'Ad Spend Managed', value: '$25M+', icon: <FaShoppingCart />, change: '+200%' },
    { id: '4', label: 'Conversion Rate', value: '12.5%', icon: <FaUsers />, change: '+67%' },
  ];

  const digitalServices: DigitalService[] = [
    {
      id: 'google-ads',
      title: 'Google Ads',
      description: 'Drive targeted traffic and maximize ROI with comprehensive Google Ads campaigns across Search, Shopping, Display, and Performance Max.',
      icon: <FaGoogle />,
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      stats: 'Average ROI: 400%+',
      features: [
        'Search Ads - Target high-intent customers',
        'Shopping Ads - Showcase products directly',
        'Display Ads - Visual brand awareness',
        'Performance Max - AI-powered campaigns',
        'Lead Generation - Capture qualified leads',
        'Remarketing - Re-engage visitors'
      ]
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      description: 'Harness the power of Facebook and Instagram advertising to reach your target audience with precision and scale.',
      icon: <FaFacebook />,
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
      stats: 'Average ROAS: 5.2x',
      features: [
        'Facebook Ads - Massive audience reach',
        'Instagram Ads - Visual storytelling',
        'Retargeting - Re-engage warm prospects',
        'Lookalike Audiences - Find new customers',
        'Dynamic Ads - Personalized product ads',
        'Lead Ads - Capture leads natively'
      ],
      platforms: ['Facebook', 'Instagram', 'Messenger', 'Audience Network']
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      description: 'Build powerful brand presence across all major social platforms with strategic content and community engagement.',
      icon: <FaUsers />,
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop',
      stats: 'Engagement Rate: 8.7%',
      features: [
        'Content Strategy - Data-driven planning',
        'Creative Design - Professional visuals',
        'Daily Posting - Consistent engagement',
        'Community Management - Active engagement',
        'Campaign Management - Strategic promotions',
        'Social Listening - Brand monitoring'
      ],
      platforms: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube', 'Threads']
    },
    {
      id: 'youtube-seo',
      title: 'YouTube SEO',
      description: 'Optimize your YouTube channel for maximum visibility, subscriber growth, and engagement through strategic SEO techniques.',
      icon: <FaYoutube />,
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
      stats: 'Avg. Views Increase: 300%+',
      features: [
        'Keyword Research - Strategic targeting',
        'Thumbnail Optimization - Click-through design',
        'Video Optimization - SEO-friendly content',
        'Channel Growth - Subscriber acquisition',
        'Analytics Tracking - Performance monitoring',
        'Content Strategy - Engagement optimization'
      ]
    }
  ];

  const selectedService = digitalServices.find(s => s.id === activeTab) || digitalServices[0];

  // Social media platforms with their colors
  const socialPlatforms = [
    { name: 'Facebook', icon: <FaFacebook />, color: '#1877F2' },
    { name: 'Instagram', icon: <FaInstagram />, color: '#E4405F' },
    { name: 'Twitter', icon: <FaTwitter />, color: '#1DA1F2' },
    { name: 'LinkedIn', icon: <FaLinkedin />, color: '#0A66C2' },
    { name: 'YouTube', icon: <FaYoutube />, color: '#FF0000' },
    { name: 'Threads', icon: <FaHashtag />, color: '#000000' },
  ];

  // Google Ads specific sub-services
  const googleAdTypes = [
    { icon: <FaSearch />, title: 'Search Ads', description: 'Target users actively searching for your products' },
    { icon: <FaShoppingCart />, title: 'Shopping Ads', description: 'Showcase products with images and prices' },
    { icon: <FaAd />, title: 'Display Ads', description: 'Visual ads across Google Display Network' },
    { icon: <FaRocket />, title: 'Performance Max', description: 'AI-powered campaigns across all channels' },
    { icon: <FaUsers />, title: 'Lead Generation', description: 'Capture and convert qualified leads' },
    { icon: <FaChartLine />, title: 'ROI Optimization', description: 'Maximize return on advertising spend' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }satisfies Variants;

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  }satisfies Variants;

  return (
    <section 
      id="digital-marketing" 
      className="py-16 md:py-20 lg:py-28 bg-primary relative overflow-hidden"
      aria-label="Digital marketing services"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="Digital Marketing"
          title="Dominate Digital Landscape"
          subtitle="Strategic digital marketing solutions that drive growth, engagement, and measurable results across all channels."
        />

        {/* Marketing Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {marketingStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-4 md:p-6 bg-primary-light/50 backdrop-blur-sm rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="text-accent text-2xl md:text-3xl mb-2">
                {stat.icon}
              </div>
              <div className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
              {stat.change && (
                <div className="text-xs text-green-400 mt-1">
                  {stat.change} growth
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12"
        >
          {digitalServices.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === service.id
                  ? 'bg-gold-500 text-primary shadow-gold'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-gold-500/10'
              }`}
              aria-label={`View ${service.title}`}
              aria-pressed={activeTab === service.id}
            >
              <span className="text-lg">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-primary-light/50 backdrop-blur-sm rounded-2xl border border-gold-500/10 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Image & Stats */}
              <div className="relative h-64 md:h-80 lg:h-auto overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent lg:bg-gradient-to-r"></div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-primary/90 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg border border-gold-500/20">
                  <div className="text-gold-500 text-xs md:text-sm font-medium">Performance</div>
                  <div className="text-white font-bold text-base md:text-lg">{selectedService.stats}</div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="text-accent text-2xl md:text-3xl">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-white font-poppins font-bold text-xl md:text-2xl lg:text-3xl">
                    {selectedService.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
                  {selectedService.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4 md:mb-6">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-2 text-gray-300 text-sm md:text-base"
                    >
                      <FaCheckCircle className="text-accent text-xs md:text-sm flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Platforms (for Social Media) */}
                {selectedService.platforms && (
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-white font-poppins font-semibold text-sm md:text-base mb-2">
                      Platforms We Manage
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {socialPlatforms.map((platform) => (
                        <div
                          key={platform.name}
                          className="flex items-center gap-1 px-3 py-1 bg-white/5 rounded-full border border-gold-500/10"
                          style={{ color: platform.color }}
                        >
                          {platform.icon}
                          <span className="text-xs text-gray-300">{platform.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Google Ads Specific Types */}
                {activeTab === 'google-ads' && (
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-white font-poppins font-semibold text-sm md:text-base mb-2">
                      Ad Types We Specialize In
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {googleAdTypes.map((type, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-2 p-2 bg-white/5 rounded-lg border border-gold-500/5"
                        >
                          <div className="text-accent text-sm">{type.icon}</div>
                          <div>
                            <div className="text-white text-xs font-medium">{type.title}</div>
                            <div className="text-gray-400 text-[10px]">{type.description}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    Get Started with {selectedService.title}
                    <FaArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <FaChartLine className="mr-2" /> View Case Studies
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Service Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 md:mt-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {digitalServices.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm transition-all duration-300 ${
                  activeTab === service.id
                    ? 'bg-gold-500/20 text-gold-500 border border-gold-500/30'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-gold-500/10'
                }`}
              >
                {service.icon}
                {service.title}
              </button>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default DigitalMarketing;