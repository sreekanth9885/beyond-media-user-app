// src/components/sections/Hero.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaPlay, 
  FaChartLine, 
  FaUsers, 
  FaTrophy,
  FaArrowRight,
} from 'react-icons/fa';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }satisfies Variants;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
      aria-label="Hero section"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920")',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Animated Particles/Glow Effects */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 mb-4 md:mb-6 bg-gold-500/10 border border-gold-500/20 rounded-full"
          >
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
            <span className="text-xs md:text-sm text-gold-500 font-medium tracking-wider uppercase">
              Leading Digital Agency
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6"
          >
            <span className="text-white">Transform Your</span>
            <br className="hidden sm:block" />
            <span className="text-accent">Digital Presence</span>
            <span className="text-white"> Today</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 px-4 sm:px-0"
          >
            We craft data-driven digital strategies that elevate brands, 
            drive engagement, and deliver measurable results across all platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 sm:px-0"
          >
            <Button
              variant="gold"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] text-sm md:text-base"
            >
              Get Started <FaArrowRight className="ml-2 text-xs md:text-sm" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-w-[160px] text-sm md:text-base"
            >
              <FaPlay className="mr-2 text-xs md:text-sm" /> Watch Demo
            </Button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <div className="text-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaChartLine className="text-accent text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">500+</div>
              <div className="text-xs md:text-sm text-gray-400">Projects</div>
            </div>
            
            <div className="text-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <FaUsers className="text-accent text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">200+</div>
              <div className="text-xs md:text-sm text-gray-400">Happy Clients</div>
            </div>
            
            <div className="text-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <FaTrophy className="text-accent text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Awards</div>
            </div>

            <div className="text-center p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                <FaUsers className="text-accent text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">10+</div>
              <div className="text-xs md:text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>

          {/* Trusted Brands */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gold-500/10 pt-6 md:pt-8"
          >
            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 tracking-wider uppercase">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="text-white/50 text-lg md:text-xl lg:text-2xl font-bold">Google</div>
              <div className="text-white/50 text-lg md:text-xl lg:text-2xl font-bold">Microsoft</div>
              <div className="text-white/50 text-lg md:text-xl lg:text-2xl font-bold">Amazon</div>
              <div className="text-white/50 text-lg md:text-xl lg:text-2xl font-bold">Apple</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-xs text-gray-400 tracking-wider uppercase hidden sm:block">Scroll</span>
          <div className="w-5 h-8 border-2 border-gold-500/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gold-500 rounded-full mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;