// src/components/sections/PoliticalCampaign.tsx
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaBullhorn, 
  FaUsers, 
  FaChartLine, 
  FaNewspaper,
  FaDesktop,
  FaStar,
  FaPhone,
  FaArrowRight,
  FaCheckCircle,
  FaBuilding,
  FaGlobe,
  FaTrophy,
  FaMicrophone,
  FaUsersCog,
  FaPoll,
  FaFileAlt,
  FaIdCard,
  FaPodcast
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface CampaignService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

interface CampaignStat {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

const PoliticalCampaign: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('strategy');

  const campaignStats: CampaignStat[] = [
    { id: '1', label: 'Campaigns Managed', value: '150+', icon: <FaBullhorn /> },
    { id: '2', label: 'Winning Rate', value: '92%', icon: <FaTrophy /> },
    { id: '3', label: 'Volunteers Trained', value: '10K+', icon: <FaUsers /> },
    { id: '4', label: 'Media Coverage', value: '500+', icon: <FaNewspaper /> },
  ];

  const campaignServices: CampaignService[] = [
    {
      id: 'strategy',
      title: 'Election Strategy',
      description: 'Data-driven campaign strategies that win elections through targeted messaging and smart resource allocation.',
      icon: <FaBullhorn />,
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
      features: ['Voter Analysis', 'Message Development', 'Resource Planning', 'Timeline Management']
    },
    {
      id: 'booth',
      title: 'Booth Management',
      description: 'Comprehensive booth management ensuring maximum voter turnout and efficient polling operations.',
      icon: <FaBuilding />,
      image: 'https://images.unsplash.com/photo-1589829540156-4478f750fcf4?w=600&h=400&fit=crop',
      features: ['Booth Setup', 'Volunteer Management', 'Voter Mobilization', 'Real-time Monitoring']
    },
    {
      id: 'war-room',
      title: 'War Room Operations',
      description: '24/7 campaign command center for real-time monitoring, rapid response, and strategic decision-making.',
      icon: <FaDesktop />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: ['Real-time Monitoring', 'Rapid Response', 'Media Tracking', 'Crisis Management']
    },
    {
      id: 'social',
      title: 'Social Media Campaigns',
      description: 'Strategic social media presence across all platforms to engage voters and build momentum.',
      icon: <FaUsers />,
      image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&h=400&fit=crop',
      features: ['Content Strategy', 'Daily Posting', 'Engagement Tracking', 'Crisis Management']
    },
    {
      id: 'branding',
      title: 'Political Branding',
      description: 'Creating powerful political brands that resonate with voters and build lasting trust.',
      icon: <FaIdCard />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      features: ['Visual Identity', 'Slogan Development', 'Brand Guidelines', 'Campaign Materials']
    },
    {
      id: 'pr',
      title: 'Public Relations',
      description: 'Strategic PR campaigns that build trust, manage reputation, and create positive media coverage.',
      icon: <FaNewspaper />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      features: ['Media Relations', 'Press Releases', 'Crisis Management', 'Reputation Building']
    },
    {
      id: 'analytics',
      title: 'Campaign Analytics',
      description: 'Advanced analytics and data insights for informed decision-making and campaign optimization.',
      icon: <FaChartLine />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: ['Voter Analysis', 'Performance Tracking', 'Real-time Dashboards', 'ROI Measurement']
    },
    {
      id: 'ground',
      title: 'Ground Campaign',
      description: 'Powerful on-ground operations including rallies, door-to-door, and community engagement.',
      icon: <FaUsersCog />,
      image: 'https://images.unsplash.com/photo-1589829540156-4478f750fcf4?w=600&h=400&fit=crop',
      features: ['Rally Planning', 'Door-to-Door', 'Community Events', 'Volunteer Coordination']
    },
    {
      id: 'digital',
      title: 'Digital Campaign',
      description: 'Comprehensive digital strategies including websites, apps, and online advertising.',
      icon: <FaGlobe />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      features: ['Campaign Website', 'Mobile App', 'Digital Advertising', 'Email Campaigns']
    },
    {
      id: 'volunteer',
      title: 'Volunteer Management',
      description: 'Recruit, train, and manage volunteers for effective campaign operations.',
      icon: <FaUsers />,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
      features: ['Recruitment', 'Training Programs', 'Task Assignment', 'Performance Tracking']
    },
    {
      id: 'opinion',
      title: 'Opinion Polls',
      description: 'Scientific opinion polling and survey research for informed decision-making.',
      icon: <FaPoll />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: ['Voter Surveys', 'Data Analysis', 'Trend Analysis', 'Predictive Modeling']
    },
    {
      id: 'manifesto',
      title: 'Manifesto Promotion',
      description: 'Strategic promotion of party manifesto and key policy positions.',
      icon: <FaFileAlt />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      features: ['Policy Development', 'Content Creation', 'Multi-platform Promotion', 'Public Engagement']
    },
    {
      id: 'speech',
      title: 'Speech Promotions',
      description: 'Professional speech writing and promotional strategies for maximum impact.',
      icon: <FaMicrophone />,
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
      features: ['Speech Writing', 'Rehearsal Support', 'Media Coverage', 'Social Sharing']
    },
    {
      id: 'candidate',
      title: 'Candidate Branding',
      description: 'Build a powerful personal brand for candidates that connects with voters.',
      icon: <FaStar />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
      features: ['Personal Branding', 'Media Training', 'Image Management', 'Public Relations']
    },
    {
      id: 'media',
      title: 'Media Management',
      description: 'Comprehensive media management across traditional and digital channels.',
      icon: <FaPodcast />,
      image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop',
      features: ['TV Coverage', 'Radio Spots', 'Print Media', 'Digital Media']
    },
  ];

  const selectedService = campaignServices.find(s => s.id === activeService) || campaignServices[0];

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

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    hover: {
      scale: 1.02,
      x: 5,
      transition: { duration: 0.2 }
    }
  }satisfies Variants;

  return (
    <section 
      id="political-campaign" 
      className="py-16 md:py-20 lg:py-28 bg-primary-light relative overflow-hidden"
      aria-label="Political campaign services"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="Political Campaign"
          title="Win Elections with Digital Excellence"
          subtitle="Comprehensive campaign management solutions that combine traditional political wisdom with cutting-edge digital strategies."
        />

        {/* Campaign Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {campaignStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
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
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
          {/* Service Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 bg-primary/50 backdrop-blur-sm rounded-xl border border-gold-500/10 p-4 max-h-[600px] overflow-y-auto custom-scrollbar">
              <h3 className="text-white font-poppins font-semibold text-sm md:text-base mb-4 px-2">
                Our Campaign Services
              </h3>
              <div className="space-y-1.5">
                {campaignServices.slice(0, 8).map((service) => (
                  <motion.button
                    key={service.id}
                    variants={serviceItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    onClick={() => setActiveService(service.id)}
                    className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                      activeService === service.id
                        ? 'bg-gold-500 text-primary font-medium shadow-gold'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    aria-label={`View ${service.title} details`}
                    aria-pressed={activeService === service.id}
                  >
                    <span className={`text-base ${activeService === service.id ? 'text-primary' : 'text-accent'}`}>
                      {service.icon}
                    </span>
                    <span className="truncate">{service.title}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service Details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-primary/50 backdrop-blur-sm rounded-xl border border-gold-500/10 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <div className="flex items-center gap-3">
                    <div className="text-accent text-3xl md:text-4xl">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-white font-poppins font-bold text-xl md:text-2xl lg:text-3xl">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-4 md:p-6 lg:p-8">
                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-poppins font-semibold text-sm md:text-base mb-3">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <FaCheckCircle className="text-accent text-xs flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    Learn More About {selectedService.title}
                    <FaArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <FaPhone className="mr-2" /> Contact Campaign Team
                  </Button>
                </div>
              </div>
            </div>

            {/* Additional Services Quick Links */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {campaignServices.slice(8, 15).map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-gold-500 text-primary'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-accent">{service.icon}</span>
                  <span className="truncate">{service.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default PoliticalCampaign;