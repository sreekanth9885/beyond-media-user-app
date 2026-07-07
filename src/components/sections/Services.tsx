// src/components/sections/Services.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaGoogle, 
  FaBullhorn, 
  FaUsers, 
  FaVideo,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaTag,
  FaComments,
  FaSearch,
  FaLightbulb,
  FaGraduationCap,
  FaFileAlt,
  FaUserTie,
  FaMicrophone,
  FaPlay,
  FaAd,
  FaEnvelope,
  FaPoll,
  FaStar,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import type { ServiceItem } from '../../types';

// Service Categories
type Category = 'all' | 'marketing' | 'political' | 'media' | 'development' | 'advisory' | 'capacity';

// Service Data
const servicesData: ServiceItem[] = [
  // ===== POLICY RESEARCH & ANALYTICS =====
  {
    id: 'policy-research',
    title: 'Policy Research & Analytics',
    description: 'Public policy research and analysis, data-driven governance studies, election and political analysis, policy briefs, reports, and publications.',
    icon: <FaFileAlt />,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    category: 'advisory',
    features: ['Public Policy Research', 'Data-driven Governance', 'Election Analysis', 'Policy Briefs & Reports']
  },
  {
    id: 'governance-research',
    title: 'Governance & Social Development',
    description: 'Research on public systems and service delivery, social impact program design and evaluation, community-driven development initiatives.',
    icon: <FaBuilding />,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    category: 'advisory',
    features: ['Public Systems Research', 'Social Impact Design', 'Community Development', 'Program Evaluation']
  },
  {
    id: 'opinion-analytics',
    title: 'Political & Public Opinion Analytics',
    description: 'Political campaign research, public opinion and perception studies, data-driven insights for strategic political engagement.',
    icon: <FaPoll />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'advisory',
    features: ['Campaign Research', 'Public Opinion Studies', 'Perception Analysis', 'Strategic Insights']
  },

  // ===== CANDIDATE DEVELOPMENT =====
  {
    id: 'candidate-grooming',
    title: 'Candidate Personality & Leadership Development',
    description: 'End-to-end grooming for election candidates, personalized speech script development, training on public speaking and message delivery.',
    icon: <FaUserTie />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Candidate Grooming', 'Speech Writing', 'Public Speaking Training', 'Message Delivery']
  },
  {
    id: 'media-training',
    title: 'Media Training & Body Language',
    description: 'Training on interacting with people during political meetings, body language and stage presence coaching, holistic public engagement preparation.',
    icon: <FaMicrophone />,
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Body Language Coaching', 'Stage Presence', 'Public Interaction', 'Media Readiness']
  },
  {
    id: 'personal-branding',
    title: 'Social Media Visibility & Personal Branding',
    description: 'Social media visibility and personal branding for candidates, holistic preparation for public and political engagement.',
    icon: <FaStar />,
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Social Media Visibility', 'Personal Branding', 'Public Engagement', 'Candidate Image Building']
  },

  // ===== DIGITAL MEDIA SERVICES =====
  {
    id: 'digital-strategy',
    title: 'Digital Campaign Strategy',
    description: 'Political campaign digital strategy planning, website development and campaign landing pages, digital advertising campaigns.',
    icon: <FaRocket />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Digital Strategy Planning', 'Campaign Landing Pages', 'Digital Advertising', 'Website Development']
  },
  {
    id: 'google-ads',
    title: 'Google Ads & Digital Advertising',
    description: 'Digital advertising campaigns across Google, YouTube, OTT & Display Ads for maximum reach and engagement.',
    icon: <FaGoogle />,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Google Ads', 'YouTube Ads', 'OTT Advertising', 'Display Ads', 'Performance Tracking']
  },
  {
    id: 'creative-design',
    title: 'Creative Design & Promotions',
    description: 'Creative design for political promotions and awareness campaigns, infographics, manifesto creatives, and presentation materials.',
    icon: <FaPaintBrush />,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    category: 'media',
    features: ['Political Promotions', 'Awareness Campaigns', 'Infographics', 'Manifesto Creatives', 'Presentations']
  },
  {
    id: 'video-production',
    title: 'Video Production & Campaign Films',
    description: 'Video production, campaign films, promotional content, and engaging visual storytelling for political campaigns.',
    icon: <FaPlay />,
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
    category: 'media',
    features: ['Campaign Films', 'Promotional Content', 'Video Production', 'Visual Storytelling']
  },
  {
    id: 'reputation-management',
    title: 'Online Reputation & Perception Management',
    description: 'Online reputation and perception management, digital voter outreach campaigns, and targeted communication strategies.',
    icon: <FaShieldAlt />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Reputation Management', 'Perception Management', 'Voter Outreach', 'Targeted Communication']
  },
  {
    id: 'email-sms-campaigns',
    title: 'Email, SMS & Digital Voter Outreach',
    description: 'Email, SMS, and digital voter outreach campaigns, constituency-focused targeted communication for maximum impact.',
    icon: <FaEnvelope />,
    image: 'https://images.unsplash.com/photo-1432889490241-7f0332774d30?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Email Campaigns', 'SMS Marketing', 'Voter Outreach', 'Targeted Communication']
  },
  {
    id: 'analytics-tracking',
    title: 'Digital Analytics & Performance Tracking',
    description: 'Digital analytics, audience insights, campaign performance tracking, and constituency-focused targeted communication campaigns.',
    icon: <FaChartLine />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Performance Analytics', 'Audience Insights', 'Campaign Tracking', 'Data-driven Optimization']
  },

  // ===== SOCIAL MEDIA MANAGEMENT =====
  {
    id: 'social-media-management',
    title: 'Complete Social Media Management',
    description: 'Complete management of Facebook, Instagram, X (Twitter), YouTube, WhatsApp & Telegram platforms with daily content creation.',
    icon: <FaUsers />,
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Facebook', 'Instagram', 'X (Twitter)', 'YouTube', 'WhatsApp', 'Telegram']
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Publishing',
    description: 'Daily social media content creation and publishing, Reels, shorts, and engagement-driven content production for maximum reach.',
    icon: <FaComments />,
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Daily Content Creation', 'Reels & Shorts', 'Engagement Content', 'Content Publishing']
  },
  {
    id: 'political-social-branding',
    title: 'Political Branding & Image Building',
    description: 'Political branding and leader image building, hashtag campaigns and trend-based political communication for brand recognition.',
    icon: <FaBuilding />,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Leader Image Building', 'Hashtag Campaigns', 'Trend-based Communication', 'Political Branding']
  },
  {
    id: 'social-advertising',
    title: 'Social Media Advertising & Outreach',
    description: 'Social media advertising and voter outreach campaigns, community management and public engagement handling for political campaigns.',
    icon: <FaAd />,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Social Media Ads', 'Voter Outreach', 'Community Management', 'Public Engagement']
  },
  {
    id: 'social-listening',
    title: 'Social Listening & Sentiment Analysis',
    description: 'Social listening, sentiment analysis, opposition monitoring, crisis communication and rapid response management for campaigns.',
    icon: <FaSearch />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Social Listening', 'Sentiment Analysis', 'Opposition Monitoring', 'Crisis Communication', 'Rapid Response']
  },
  {
    id: 'social-reporting',
    title: 'Reporting, Analytics & Growth Strategy',
    description: 'Monthly reporting, analytics, and growth strategy support for continuous improvement and campaign optimization.',
    icon: <FaChartLine />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'marketing',
    features: ['Monthly Reporting', 'Performance Analytics', 'Growth Strategy', 'Continuous Improvement']
  },

  // ===== POLITICAL CAMPAIGN MANAGEMENT =====
  {
    id: 'political-campaign',
    title: 'Political Campaign Management',
    description: 'Comprehensive campaign strategies for successful political elections including election strategy, booth management, and war room operations.',
    icon: <FaBullhorn />,
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
    category: 'political',
    features: ['Election Strategy', 'Booth Management', 'War Room Operations', 'Campaign Analytics', 'Ground Operations']
  },

  // ===== CAPACITY BUILDING =====
  {
    id: 'training-programs',
    title: 'Training Programs for Students',
    description: 'Training programs for students and early-career professionals, policy workshops and knowledge sessions for capacity building.',
    icon: <FaGraduationCap />,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop',
    category: 'capacity',
    features: ['Student Training', 'Early-career Programs', 'Policy Workshops', 'Knowledge Sessions']
  },
  {
    id: 'grassroots-research',
    title: 'Grassroots Research & Engagement',
    description: 'Grassroots research and field engagement initiatives, community-driven development approaches for sustainable impact.',
    icon: <FaHandshake />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
    category: 'capacity',
    features: ['Grassroots Research', 'Field Engagement', 'Community Development', 'Sustainable Impact']
  },

  // ===== STRATEGIC ADVISORY =====
  {
    id: 'strategic-advisory',
    title: 'Strategic Advisory Services',
    description: 'Evidence-based policy recommendations, governance improvement strategies, stakeholder and community insights for informed decision-making.',
    icon: <FaLightbulb />,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    category: 'advisory',
    features: ['Policy Recommendations', 'Governance Strategies', 'Stakeholder Insights', 'Community Insights']
  },
  {
    id: 'website-development',
    title: 'Website & Campaign Landing Pages',
    description: 'Custom website development and campaign landing pages that combine stunning design with powerful functionality for political campaigns.',
    icon: <FaCode />,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
    category: 'development',
    features: ['Custom Websites', 'Campaign Landing Pages', 'SEO Optimization', 'Responsive Design']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences for campaigns and voter engagement.',
    icon: <FaMobileAlt />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'development',
    features: ['Android Apps', 'iOS Apps', 'React Native', 'Flutter', 'Voter Engagement']
  },
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [visibleServices, setVisibleServices] = useState<number>(25);

  const categories: { id: Category; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Services', icon: <FaGlobe /> },
    { id: 'marketing', label: 'Digital Media', icon: <FaRocket /> },
    { id: 'political', label: 'Political Services', icon: <FaBullhorn /> },
    { id: 'media', label: 'Creative & Media', icon: <FaVideo /> },
    { id: 'development', label: 'Development', icon: <FaCode /> },
    { id: 'advisory', label: 'Research & Advisory', icon: <FaFileAlt /> },
    { id: 'capacity', label: 'Capacity Building', icon: <FaGraduationCap /> },
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
          subtitle="From strategy to execution, we provide comprehensive solutions for governance, political campaigns, and social development."
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
                id={service.id}
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
                    <div className="text-white text-xl md:text-2xl group-hover:scale-110 group-hover:text-purple-200 transition-all duration-300">
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