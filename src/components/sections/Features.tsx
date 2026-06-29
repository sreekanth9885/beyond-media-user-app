// src/components/sections/Features.tsx
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaRocket, 
  FaShieldAlt, 
  FaUsers, 
  FaChartLine, 
  FaCloud, 
  FaLock, 
  FaSync, 
  FaHeadset, 
  FaBrain,
  FaCode,
  FaGlobe,
  FaPlug,
  FaCogs,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaMedal,
  FaAward,
  FaHandshake,
  FaRegLightbulb
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  benefits: string[];
  category: 'core' | 'technical' | 'support';
}

interface FeatureCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Features: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('core');

  const categories: FeatureCategory[] = [
    { id: 'core', label: 'Core Features', icon: <FaStar /> },
    { id: 'technical', label: 'Technical Excellence', icon: <FaCode /> },
    { id: 'support', label: 'Support & Services', icon: <FaHeadset /> },
  ];

  const features: Feature[] = [
    // Core Features
    {
      id: 'innovation',
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and creative thinking to deliver innovative solutions.',
      icon: <FaRocket />,
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      category: 'core',
      benefits: [
        'AI-powered solutions',
        'Blockchain integration',
        'IoT capabilities',
        'Machine learning applications',
        'AR/VR experiences'
      ]
    },
    {
      id: 'quality',
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes ensure flawless delivery every time.',
      icon: <FaShieldAlt />,
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'core',
      benefits: [
        'Automated testing',
        'Manual QA processes',
        'Performance testing',
        'Security audits',
        'User acceptance testing'
      ]
    },
    {
      id: 'agile',
      title: 'Agile Methodology',
      description: 'Flexible, iterative development approach that adapts to changing requirements.',
      icon: <FaSync />,
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      category: 'core',
      benefits: [
        'Sprint-based delivery',
        'Daily standups',
        'Continuous feedback',
        'Rapid iterations',
        'Transparent process'
      ]
    },
    {
      id: 'user-centric',
      title: 'User-Centric Design',
      description: 'Every solution is crafted with the end-user in mind for maximum engagement.',
      icon: <FaUsers />,
      color: 'from-pink-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      category: 'core',
      benefits: [
        'User research',
        'Usability testing',
        'Accessibility standards',
        'Personalized experiences',
        'User journey mapping'
      ]
    },

    // Technical Excellence
    {
      id: 'cloud-native',
      title: 'Cloud-Native Architecture',
      description: 'Scalable, resilient, and cost-effective cloud solutions for modern businesses.',
      icon: <FaCloud />,
      color: 'from-cyan-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      category: 'technical',
      benefits: [
        'AWS/Azure/GCP expertise',
        'Serverless architecture',
        'Containerization (Docker)',
        'Kubernetes orchestration',
        'Auto-scaling capabilities'
      ]
    },
    {
      id: 'security',
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security protocols to protect your data and ensure compliance.',
      icon: <FaLock />,
      color: 'from-red-500 to-red-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'technical',
      benefits: [
        'End-to-end encryption',
        'Multi-factor authentication',
        'Regular security audits',
        'GDPR compliance',
        'Zero-trust architecture'
      ]
    },
    {
      id: 'scalability',
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, handling increased demand seamlessly.',
      icon: <FaChartLine />,
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'technical',
      benefits: [
        'Microservices architecture',
        'Load balancing',
        'Caching strategies',
        'Database optimization',
        'CDN integration'
      ]
    },
    {
      id: 'integration',
      title: 'Seamless Integration',
      description: 'Connect and integrate with your existing systems and third-party services.',
      icon: <FaPlug />,
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      category: 'technical',
      benefits: [
        'API-first approach',
        'Third-party integrations',
        'Legacy system migration',
        'Custom connectors',
        'Real-time data sync'
      ]
    },

    // Support & Services
    {
      id: 'support247',
      title: '24/7 Technical Support',
      description: 'Round-the-clock support to ensure your systems run smoothly at all times.',
      icon: <FaHeadset />,
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
      category: 'support',
      benefits: [
        '24/7 monitoring',
        'Rapid response times',
        'Dedicated account manager',
        'Emergency support',
        'Proactive maintenance'
      ]
    },
    {
      id: 'consulting',
      title: 'Expert Consulting',
      description: 'Strategic guidance from industry experts to drive your digital transformation.',
      icon: <FaBrain />,
      color: 'from-yellow-500 to-yellow-600',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      category: 'support',
      benefits: [
        'Digital strategy',
        'Technology roadmap',
        'Architecture review',
        'Performance optimization',
        'Cost optimization'
      ]
    },
    {
      id: 'training',
      title: 'Training & Enablement',
      description: 'Comprehensive training programs to ensure your team can leverage our solutions.',
      icon: <FaRegLightbulb />,
      color: 'from-green-400 to-green-500',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      category: 'support',
      benefits: [
        'Customized training',
        'Documentation',
        'Workshops',
        'Knowledge transfer',
        'Ongoing enablement'
      ]
    },
    {
      id: 'transformation',
      title: 'Digital Transformation',
      description: 'Holistic approach to transforming your business operations and customer experience.',
      icon: <FaCogs />,
      color: 'from-rose-500 to-rose-600',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      category: 'support',
      benefits: [
        'Process automation',
        'Digital maturity assessment',
        'Change management',
        'Continuous improvement',
        'Innovation culture'
      ]
    }
  ];

  const filteredFeatures = features.filter(f => f.category === activeCategory);
  const selectedCategory = categories.find(c => c.id === activeCategory);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  }satisfies Variants;

  return (
    <section 
      id="features" 
      className="py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden"
      aria-label="Features"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Built for Excellence, Driven by Innovation"
          subtitle="Discover the features and capabilities that make us the preferred partner for digital transformation."
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
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-blue-600 text-primary shadow-blue'
                : 'bg-white/5 text-gray-400 hover:text-gray-900 hover:bg-white/10 border border-blue-500/10'
              }`}
              aria-label={`View ${category.label}`}
              aria-pressed={activeCategory === category.id}
            >
              <span className="text-base md:text-lg">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {filteredFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white-light/50 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Feature Image */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-gray-900 text-lg shadow-lg`}>
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <h3 className="text-gray-900 font-poppins font-semibold text-base md:text-lg group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-1.5 mb-4">
                  {feature.benefits.slice(0, 4).map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 text-gray-600 text-xs md:text-sm"
                    >
                      <FaCheckCircle className="text-blue-600 text-xs flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-500 group/btn"
                >
                  Learn More
                  <FaArrowRight className="ml-2 text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Description */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 md:mt-12 text-center"
          >
            <div className="inline-block bg-white/50 backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 rounded-xl border border-blue-500/10">
              <div className="text-blue-600 text-2xl md:text-3xl mb-2">
                {selectedCategory.icon}
              </div>
              <h3 className="text-gray-900 font-poppins font-semibold text-lg md:text-xl mb-2">
                {selectedCategory.label}
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                Our {selectedCategory.label.toLowerCase()} features are designed to deliver 
                exceptional value and drive your business forward.
              </p>
            </div>
          </motion.div>
        )}

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          <div className="flex flex-col items-center p-3 md:p-4 bg-white/5 rounded-lg border border-blue-500/10">
            <FaMedal className="text-blue-600 text-2xl md:text-3xl mb-2" />
            <span className="text-gray-900 font-semibold text-sm md:text-base">100+</span>
            <span className="text-gray-400 text-xs md:text-sm">Industry Awards</span>
          </div>
          <div className="flex flex-col items-center p-3 md:p-4 bg-white/5 rounded-lg border border-blue-500/10">
            <FaAward className="text-blue-600 text-2xl md:text-3xl mb-2" />
            <span className="text-gray-900 font-semibold text-sm md:text-base">98%</span>
            <span className="text-gray-400 text-xs md:text-sm">Client Retention</span>
          </div>
          <div className="flex flex-col items-center p-3 md:p-4 bg-white/5 rounded-lg border border-blue-500/10">
            <FaHandshake className="text-blue-600 text-2xl md:text-3xl mb-2" />
            <span className="text-gray-900 font-semibold text-sm md:text-base">500+</span>
            <span className="text-gray-400 text-xs md:text-sm">Partners Worldwide</span>
          </div>
          <div className="flex flex-col items-center p-3 md:p-4 bg-white/5 rounded-lg border border-blue-500/10">
            <FaGlobe className="text-blue-600 text-2xl md:text-3xl mb-2" />
            <span className="text-gray-900 font-semibold text-sm md:text-base">50+</span>
            <span className="text-gray-400 text-xs md:text-sm">Countries Served</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;