// src/components/sections/Hero.tsx
import React, { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { 
  FaPlay, 
  FaChartLine, 
  FaUsers, 
  FaTrophy,
  FaArrowRight,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const rotatingWords = [
    'Digital Marketing',
    'Political Campaigns',
    'Brand Identity',
    'Web Development',
    'Social Media',
    'SEO & Analytics'
  ];

  // Rotate words every 3 seconds with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin].map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
            className="absolute text-gray-300/20"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              fontSize: `${20 + Math.random() * 40}px`
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Badge with Slide In */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 mb-4 md:mb-6 bg-blue-600/10 border border-blue-500/20 rounded-full"
          >
            <motion.span
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-blue-600 rounded-full"
            />
            <span className="text-xs md:text-sm text-blue-600 font-medium tracking-wider uppercase">
              Leading Digital Agency
            </span>
          </motion.div>

          {/* Main Heading with Fade In/Out */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <motion.h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Transform Your</span>
              <br className="hidden sm:block" />
              <span className="text-blue-600 relative inline-block">
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5 }}
                  className="absolute right-[-4px] top-0 w-[3px] h-full bg-blue-600"
                />
              </span>
              <span className="text-gray-900"> Today</span>
            </motion.h1>

            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-2 max-w-xs"
            />
          </motion.div>

          {/* Animated Description with Fade */}
          <motion.p
            variants={itemVariants}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4 sm:px-0"
          >
            We craft data-driven digital strategies that elevate brands, 
            drive engagement, and deliver measurable results across all platforms.
          </motion.p>

          {/* Animated Buttons with Hover Effects */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-w-[160px] text-sm md:text-base relative group overflow-hidden"
              >
                <motion.span
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                Get Started <FaArrowRight className="ml-2 text-xs md:text-sm group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[160px] text-sm md:text-base"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="mr-2"
                >
                  <FaPlay className="text-xs md:text-sm" />
                </motion.div>
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats with Stagger and Hover */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {[
              { icon: FaChartLine, value: '500+', label: 'Projects', delay: 0 },
              { icon: FaUsers, value: '200+', label: 'Happy Clients', delay: 0.1 },
              { icon: FaTrophy, value: '50+', label: 'Awards', delay: 0.2 },
              { icon: FaUsers, value: '10+', label: 'Years Experience', delay: 0.3 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                whileHover="hover"
                className="text-center p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 shadow-sm hover:shadow-blue/20 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className="text-blue-600 text-2xl md:text-3xl mx-auto mb-2" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-400 text-xs"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1"
            >
              <span className="text-green-500">●</span> Trusted by 200+ companies
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="flex items-center gap-1"
            >
              <span className="text-yellow-500">★</span> 4.9/5 average rating
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="flex items-center gap-1"
            >
              <span className="text-blue-500">✓</span> 100% satisfaction rate
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center gap-1 text-gray-400 text-xs"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 5, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-4 h-6 border-2 border-gray-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{
                y: [2, 10, 2],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-1 bg-gray-400 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;