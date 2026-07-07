// src/components/sections/Testimonials.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaArrowLeft, 
  FaArrowRight, 
  FaCheckCircle,
  FaLinkedin,
  FaFacebook,
  FaGoogle,
  FaUserTie,
  FaBuilding,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  industry: string;
  date: string;
  type: 'political' | 'business';
}

interface TrustBadge {
  id: string;
  name: string;
  icon: React.ReactNode;
  rating: string;
  count: string;
  color: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'political' | 'business'>('political');

  const testimonials: Testimonial[] = [
    // ===== POLITICAL CLIENTS =====
    {
      id: 'p1',
      name: 'K.P. Vivekananda',
      position: 'WHIP BRS Leader',
      company: 'Political Party',
      content: 'Their strategic political campaign management helped us connect with voters like never before. The digital outreach and ground campaign coordination were exceptional.',
      rating: 5,
      image: '/kpvivek.jpg',
      industry: 'Politics',
      date: 'March 2024',
      type: 'political'
    },
    {
      id: 'p2',
      name: 'A. Maheswar Reddy',
      position: 'BJP Leader - Telangana',
      company: 'BJP',
      content: 'The team at Beyond Media understood our political landscape perfectly. Their data-driven approach and voter engagement strategies gave us a significant edge.',
      rating: 5,
      image: '/maheshwar.jpg',
      industry: 'Politics',
      date: 'February 2024',
      type: 'political'
    },
    {
      id: 'p3',
      name: 'Pulla Rao',
      position: 'Ex Minister',
      company: 'TDP MLA',
      content: 'Beyond Media\'s political branding and campaign management services are world-class. They helped us build a strong connect with our constituency.',
      rating: 5,
      image: '/pullarao.jpg',
      industry: 'Politics',
      date: 'January 2024',
      type: 'political'
    },
    {
      id: 'p4',
      name: 'Madhavaram Krishna Rao',
      position: 'MLA - Kukatpally',
      company: 'Political Party',
      content: 'Their understanding of grassroots politics combined with digital expertise is unmatched. Our campaign reached every corner of the constituency.',
      rating: 5,
      image: '/krishnarao.jpg',
      industry: 'Politics',
      date: 'December 2023',
      type: 'political'
    },
    {
      id: 'p5',
      name: 'Shambipur Raju',
      position: 'MLC - Telangana',
      company: 'Political Party',
      content: 'The social media strategy and personal branding done by Beyond Media transformed my public image. Highly recommended for political leaders.',
      rating: 5,
      image: '/raju.jpg',
      industry: 'Politics',
      date: 'November 2023',
      type: 'political'
    },
    {
      id: 'p6',
      name: 'Balka Suman',
      position: 'MLA',
      company: 'BRS',
      content: 'Beyond Media\'s team is exceptional. Their political campaign analytics and voter outreach strategies helped us achieve remarkable results.',
      rating: 5,
      image: '/suman.jpg',
      industry: 'Politics',
      date: 'October 2023',
      type: 'political'
    },
    {
      id: 'p7',
      name: 'Nandigam Suresh',
      position: 'Ex Minister - YCP',
      company: 'YCP',
      content: 'The digital campaign strategy and branding expertise of Beyond Media is outstanding. They helped us connect with voters across all demographics.',
      rating: 5,
      image: '/suresh.jpg',
      industry: 'Politics',
      date: 'September 2023',
      type: 'political'
    },
    {
      id: 'p8',
      name: 'Ambati Rambabu',
      position: 'Ex Minister - YCP',
      company: 'YCP',
      content: 'The team delivered exceptional results in our political campaign. Their strategic insights and execution were flawless from start to finish.',
      rating: 5,
      image: '/rambabu.jpg',
      industry: 'Politics',
      date: 'August 2023',
      type: 'political'
    },
    {
      id: 'p9',
      name: 'SV Satish Reddy',
      position: 'Ex MLC - YCP',
      company: 'YCP',
      content: 'Beyond Media transformed our political campaign with their innovative digital strategies and voter engagement techniques.',
      rating: 5,
      image: '/sathish.jpg',
      industry: 'Politics',
      date: 'July 2023',
      type: 'political'
    },
    {
      id: 'p10',
      name: 'Jyothula Nehru',
      position: 'TTD Board Member',
      company: 'Political Party',
      content: 'Their understanding of political dynamics and digital communication is unparalleled. We saw significant improvement in our public engagement.',
      rating: 5,
      image: '/nehru.jpg',
      industry: 'Politics',
      date: 'June 2023',
      type: 'political'
    },
    {
      id: 'p11',
      name: 'Palamuru VishnuVardhan Reddy',
      position: 'BJP Leader',
      company: 'BJP',
      content: 'The political branding and campaign management services provided were exceptional. Their team truly understands the political landscape.',
      rating: 5,
      image: '/vishnu.jpg',
      industry: 'Politics',
      date: 'May 2023',
      type: 'political'
    },

    // ===== BUSINESS CLIENTS =====
    {
      id: 'b1',
      name: 'Naresh Deepak Yalavarthy',
      position: 'Managing Director',
      company: 'Gothics',
      content: 'Beyond Media completely transformed our digital presence. Their innovative marketing strategies helped us achieve unprecedented growth in our industry.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face',
      industry: 'Business',
      date: 'March 2024',
      type: 'business'
    },
    {
      id: 'b2',
      name: 'Vijay',
      position: 'Managing Director',
      company: 'Flash Sylces',
      content: 'The team at Beyond Media delivered exceptional results for our brand. Their creative approach and technical expertise are truly world-class.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      industry: 'Business',
      date: 'February 2024',
      type: 'business'
    },
    {
      id: 'b3',
      name: 'Ravi Kumar',
      position: 'Managing Director',
      company: 'Tiara',
      content: 'Working with Beyond Media has been a game-changer for our business. Their digital marketing strategies and branding solutions are outstanding.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      industry: 'Business',
      date: 'January 2024',
      type: 'business'
    },
    {
      id: 'b4',
      name: 'Subba Reddy',
      position: 'Managing Director',
      company: 'Kennedy High The School',
      content: 'Beyond Media helped us establish a strong digital presence for our educational institution. Their innovative strategies significantly increased student enrollment.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      industry: 'Education',
      date: 'December 2023',
      type: 'business'
    },
    {
      id: 'b5',
      name: 'Sasidhar',
      position: 'Managing Director',
      company: 'Sindu Parcel',
      content: 'The digital solutions provided by Beyond Media streamlined our operations and improved our customer engagement significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face',
      industry: 'Logistics',
      date: 'November 2023',
      type: 'business'
    },
    {
      id: 'b6',
      name: 'Bharath',
      position: 'Managing Director',
      company: 'Sanjaya Hospital',
      content: 'Beyond Media\'s healthcare marketing solutions revolutionized our patient acquisition. Our brand visibility has increased significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      industry: 'Healthcare',
      date: 'October 2023',
      type: 'business'
    },
    {
      id: 'b7',
      name: 'Shiva Reddy',
      position: 'Managing Director',
      company: 'City Neuro Hospital',
      content: 'The marketing strategies and branding solutions from Beyond Media helped us establish a strong presence in the healthcare sector.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      industry: 'Healthcare',
      date: 'September 2023',
      type: 'business'
    },
    {
      id: 'b8',
      name: 'Ramachandra',
      position: 'Managing Director',
      company: 'Sri Sri Holistic',
      content: 'Beyond Media understands the nuances of the healthcare industry. Their digital marketing strategies have significantly boosted our patient engagement.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      industry: 'Healthcare',
      date: 'August 2023',
      type: 'business'
    }
  ];

  // Filter testimonials based on active tab
  const filteredTestimonials = testimonials.filter(t => t.type === activeTab);

  const trustBadges: TrustBadge[] = [
    { id: '1', name: 'Google Reviews', icon: <FaGoogle />, rating: '4.9', count: '200+', color: 'from-purple-400 to-purple-600' },
    { id: '2', name: 'LinkedIn', icon: <FaLinkedin />, rating: '4.8', count: '150+', color: 'from-purple-500 to-purple-700' },
    { id: '3', name: 'Facebook', icon: <FaFacebook />, rating: '4.9', count: '100+', color: 'from-purple-400 to-purple-600' },
    { id: '4', name: 'Trustpilot', icon: <FaStar />, rating: '4.7', count: '80+', color: 'from-purple-500 to-purple-700' },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Reset index when tab changes
  const handleTabChange = (tab: 'political' | 'business') => {
    setActiveTab(tab);
    setCurrentIndex(0);
    setDirection(0);
  };

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

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: "easeIn" }
    })
  };

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Client testimonials"
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
      
      {/* Animated Quote Marks */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 text-9xl text-purple-400/10 font-serif"
      >
        ❝
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 text-9xl text-purple-400/10 font-serif"
      >
        ❞
      </motion.div>

      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real stories from real clients who have experienced the Beyond Media difference."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
        />

        {/* Trust Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12"
        >
          {trustBadges.map((badge) => (
            <motion.div
              key={badge.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20"
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center text-white text-sm shadow-lg`}>
                {badge.icon}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{badge.rating}</div>
                <div className="text-purple-200 text-xs">{badge.count} reviews</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8 md:mb-12"
        >
          <button
            onClick={() => handleTabChange('political')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'political'
              ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-2xl shadow-purple-500/30'
              : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:text-white hover:bg-white/20 border border-white/10 hover:border-purple-400/50'
              }`}
          >
            <FaUserTie className="text-base" />
            Political Clients
            <span className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              {testimonials.filter(t => t.type === 'political').length}
            </span>
          </button>
          <button
            onClick={() => handleTabChange('business')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'business'
              ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-2xl shadow-purple-500/30'
              : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:text-white hover:bg-white/20 border border-white/10 hover:border-purple-400/50'
              }`}
          >
            <FaBuilding className="text-base" />
            Business Clients
            <span className="ml-1 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              {testimonials.filter(t => t.type === 'business').length}
            </span>
          </button>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeTab + currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Client Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={filteredTestimonials[currentIndex]?.image}
                      alt={filteredTestimonials[currentIndex]?.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-purple-400/30"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full p-1 shadow-lg">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex text-purple-300 text-sm mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <FaQuoteLeft className="text-purple-400/20 text-2xl absolute -top-2 -left-2" />
                    <p className="text-purple-200 text-base md:text-lg leading-relaxed pl-6 mb-4">
                      {filteredTestimonials[currentIndex]?.content}
                    </p>
                    <FaQuoteRight className="text-purple-400/20 text-2xl absolute -bottom-2 -right-2" />
                  </div>

                  {/* Client Info */}
                  <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-white font-poppins font-semibold text-lg">
                        {filteredTestimonials[currentIndex]?.name}
                      </h4>
                      <p className="text-purple-200 text-sm">
                        {filteredTestimonials[currentIndex]?.position} • {filteredTestimonials[currentIndex]?.company}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-purple-300">
                          {filteredTestimonials[currentIndex]?.industry}
                        </span>
                        <span className="text-xs text-purple-300/50">•</span>
                        <span className="text-xs text-purple-300">
                          {filteredTestimonials[currentIndex]?.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300">
                      <span className="text-xs">{activeTab === 'political' ? '🤝' : '💼'}</span>
                      <span className="text-xs">{activeTab === 'political' ? 'Political Client' : 'Business Client'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-purple-200 hover:text-white shadow-lg hover:shadow-purple-500/20"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-400 to-purple-600'
                    : 'bg-purple-400/30 hover:bg-purple-400/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-purple-200 hover:text-white shadow-lg hover:shadow-purple-500/20"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Tab Info */}
          <div className="text-center mt-4">
            <p className="text-purple-300 text-sm">
              Showing {filteredTestimonials.length} {activeTab === 'political' ? 'Political' : 'Business'} client testimonials
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;