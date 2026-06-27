// src/components/sections/Testimonials.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaStar, 
  FaStarHalf, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaArrowLeft, 
  FaArrowRight, 
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaGraduationCap,
  FaHeartbeat,
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaVideo,
  FaCheckCircle,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGoogle,
  FaYelp,
  FaAmazon,
  FaApple,
  FaMicrosoft
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  companyLogo?: string;
  content: string;
  rating: number;
  image: string;
  industry: string;
  date: string;
  platform?: string;
  platformIcon?: React.ReactNode;
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

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'TechCorp Solutions',
      content: 'DigitalPro transformed our business completely. Their innovative approach to digital marketing and technical expertise is unmatched. We saw a 300% increase in leads within the first three months.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      industry: 'Technology',
      date: 'January 2024',
      platform: 'Google',
      platformIcon: <FaGoogle />
    },
    {
      id: '2',
      name: 'Priya Sharma',
      position: 'Marketing Director',
      company: 'GrowthHub Inc.',
      content: 'The best decision we made was partnering with DigitalPro. Our digital presence has never been stronger. Their social media strategy and content marketing delivered exceptional results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108372-be9c29b29330?w=200&h=200&fit=crop',
      industry: 'Marketing',
      date: 'December 2023',
      platform: 'LinkedIn',
      platformIcon: <FaLinkedin />
    },
    {
      id: '3',
      name: 'Amit Patel',
      position: 'Campaign Manager',
      company: 'Political Strategy Group',
      content: 'Their political campaign expertise is extraordinary. They helped us win by a significant margin. The digital strategy, branding, and ground campaign coordination were flawless.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      industry: 'Politics',
      date: 'November 2023',
      platform: 'Twitter',
      platformIcon: <FaTwitter />
    },
    {
      id: '4',
      name: 'Dr. Ananya Reddy',
      position: 'Hospital Administrator',
      company: 'City General Hospital',
      content: 'The healthcare marketing solutions provided by DigitalPro revolutionized our patient acquisition strategy. We\'ve seen a 45% increase in patient inquiries and excellent brand recognition.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      industry: 'Healthcare',
      date: 'October 2023',
      platform: 'Google',
      platformIcon: <FaGoogle />
    },
    {
      id: '5',
      name: 'Vikram Singh',
      position: 'Director',
      company: 'EduTech Innovations',
      content: 'DigitalPro developed our entire e-learning platform from scratch. The user experience is exceptional, and student engagement has increased by 200%. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      industry: 'Education',
      date: 'September 2023',
      platform: 'Facebook',
      platformIcon: <FaFacebook />
    },
    {
      id: '6',
      name: 'Meera Joshi',
      position: 'Founder',
      company: 'Wellness Retreats',
      content: 'From branding to digital marketing, DigitalPro handled everything with professionalism and creativity. Our brand visibility has increased tenfold, and bookings are at an all-time high.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop',
      industry: 'Wellness',
      date: 'August 2023',
      platform: 'LinkedIn',
      platformIcon: <FaLinkedin />
    }
  ];

  const trustBadges: TrustBadge[] = [
    { id: '1', name: 'Google Reviews', icon: <FaGoogle />, rating: '4.9', count: '200+', color: 'from-red-500 to-yellow-500' },
    { id: '2', name: 'LinkedIn', icon: <FaLinkedin />, rating: '4.8', count: '150+', color: 'from-blue-500 to-blue-600' },
    { id: '3', name: 'Facebook', icon: <FaFacebook />, rating: '4.9', count: '100+', color: 'from-blue-600 to-blue-700' },
    { id: '4', name: 'Trustpilot', icon: <FaStar />, rating: '4.7', count: '80+', color: 'from-green-500 to-green-600' },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

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

  const slideVariants = {
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
  }satisfies Variants;

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-20 lg:py-28 bg-primary relative overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      
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
        className="absolute top-20 right-20 text-9xl text-gold-500/5 font-serif"
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
        className="absolute bottom-20 left-20 text-9xl text-gold-500/5 font-serif"
      >
        ❞
      </motion.div>

      <Container>
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real stories from real clients who have experienced the DigitalPro difference."
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
              className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${badge.color} flex items-center justify-center text-white text-sm`}>
                {badge.icon}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{badge.rating}</div>
                <div className="text-gray-400 text-xs">{badge.count} reviews</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-primary-light/50 backdrop-blur-sm rounded-2xl border border-gold-500/10 p-6 md:p-8 lg:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Client Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-gold-500/20"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gold-500 rounded-full p-1">
                      <FaCheckCircle className="text-primary text-xs" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Rating */}
                  <div className="flex text-accent text-sm mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <FaQuoteLeft className="text-gold-500/20 text-2xl absolute -top-2 -left-2" />
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed pl-6 mb-4">
                      {testimonials[currentIndex].content}
                    </p>
                    <FaQuoteRight className="text-gold-500/20 text-2xl absolute -bottom-2 -right-2" />
                  </div>

                  {/* Client Info */}
                  <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-gold-500/10">
                    <div>
                      <h4 className="text-white font-poppins font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].position} • {testimonials[currentIndex].company}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">
                          {testimonials[currentIndex].industry}
                        </span>
                        <span className="text-xs text-gray-600">•</span>
                        <span className="text-xs text-gray-500">
                          {testimonials[currentIndex].date}
                        </span>
                      </div>
                    </div>
                    {testimonials[currentIndex].platformIcon && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-xs">Review on</span>
                        <span className="text-accent text-lg">
                          {testimonials[currentIndex].platformIcon}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-gold-500/20 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 text-gray-400 hover:text-accent"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gold-500'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/5 hover:bg-gold-500/20 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 text-gray-400 hover:text-accent"
              aria-label="Next testimonial"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Client Logos / Brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gold-500/10"
        >
          <p className="text-center text-gray-500 text-sm mb-6 tracking-wider uppercase">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="text-white/50 font-bold text-xl">Google</div>
            <div className="text-white/50 font-bold text-xl">Microsoft</div>
            <div className="text-white/50 font-bold text-xl">Amazon</div>
            <div className="text-white/50 font-bold text-xl">Apple</div>
            <div className="text-white/50 font-bold text-xl">Meta</div>
            <div className="text-white/50 font-bold text-xl">Tesla</div>
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-gold-500/10">
            <span className="text-gray-400 text-sm">⭐ Join our</span>
            <span className="text-gold-500 font-semibold text-sm">100+</span>
            <span className="text-gray-400 text-sm">happy clients</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;