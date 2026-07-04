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
  FaCheckCircle,
  FaBuilding,
  FaGlobe,
  FaTrophy,
  FaMicrophone,
  FaUsersCog,
  FaPoll,
  FaFileAlt,
  FaIdCard,
  FaPodcast,
  FaCalendarAlt
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

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
      image: '/modi.jpg',
      features: ['Voter Analysis', 'Message Development', 'Resource Planning', 'Timeline Management']
    },
    {
      id: 'events',
      title: 'Political Events',
      description: 'Strategic planning and execution of campaign events to engage voters and build momentum.',
      icon: <FaCalendarAlt />,
      image: '/modi.jpg',
      features: ['Event Planning', 'Venue Selection', 'Speaker Coordination', 'Attendee Engagement']
    },
    {
      id: 'booth',
      title: 'Booth Management',
      description: 'Comprehensive booth management ensuring maximum voter turnout and efficient polling operations.',
      icon: <FaBuilding />,
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&h=400&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const serviceItemVariants: Variants = {
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
  };

  return (
    <section 
      id="political-campaign" 
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Political campaign services"
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
          badge="Political Campaign"
          title="Win Elections with Digital Excellence"
          subtitle="Comprehensive campaign management solutions that combine traditional political wisdom with cutting-edge digital strategies."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
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
              className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20"
            >
              <div className="text-white text-2xl md:text-3xl mb-2">
                {stat.icon}
              </div>
              <div className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                {stat.value}
              </div>
              <div className="text-purple-300 text-sm md:text-base">
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
            <div className="sticky top-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-4 max-h-[600px] overflow-y-auto shadow-lg">
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
                      ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium shadow-2xl shadow-purple-500/30'
                      : 'text-purple-200 hover:text-white hover:bg-white/10'
                    }`}
                    aria-label={`View ${service.title} details`}
                    aria-pressed={activeService === service.id}
                  >
                    <span className={`text-base ${activeService === service.id ? 'text-white' : 'text-purple-300'}`}>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              {/* Service Image */}
              <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <div className="flex items-center gap-3">
                    <div className="text-purple-300 text-3xl md:text-4xl bg-purple-500/30 backdrop-blur-sm p-2 rounded-lg border border-purple-400/30">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-white font-poppins font-bold text-xl md:text-2xl lg:text-3xl drop-shadow-lg">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-4 md:p-6 lg:p-8">
                <p className="text-purple-200 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
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
                        className="flex items-center gap-2 text-purple-200 text-sm bg-purple-500/20 p-2 rounded-lg border border-purple-400/20"
                      >
                        <FaCheckCircle className="text-purple-300 text-xs flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {/* <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    Learn More About {selectedService.title}
                    <FaArrowRight className="ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
                  >
                    <FaPhone className="mr-2" /> Contact Campaign Team
                  </Button>
                </div> */}
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
                    ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-2xl shadow-purple-500/30'
                    : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:text-white hover:bg-white/20 border border-white/10 hover:border-purple-400/50'
                  }`}
                >
                  <span className={activeService === service.id ? 'text-white' : 'text-purple-300'}>
                    {service.icon}
                  </span>
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