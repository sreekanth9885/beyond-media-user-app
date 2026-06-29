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
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <Container className="relative z-10 py-20 md:py-28 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 mb-4 md:mb-6 bg-blue-600/10 border border-blue-500/20 rounded-full"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            <span className="text-xs md:text-sm text-blue-600 font-medium tracking-wider uppercase">
              Leading Digital Agency
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6"
          >
            <span className="text-gray-900">Transform Your</span>
            <br className="hidden sm:block" />
            <span className="text-blue-600">Digital Presence</span>
            <span className="text-gray-900"> Today</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4 sm:px-0"
          >
            We craft data-driven digital strategies that elevate brands, 
            drive engagement, and deliver measurable results across all platforms.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 sm:px-0"
          >
            <Button
              variant="primary"
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

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <div className="text-center p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 shadow-sm hover:shadow-blue/10 transition-all duration-300">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaChartLine className="text-blue-600 text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">500+</div>
              <div className="text-xs md:text-sm text-gray-500">Projects</div>
            </div>
            
            <div className="text-center p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 shadow-sm hover:shadow-blue/10 transition-all duration-300">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <FaUsers className="text-blue-600 text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">200+</div>
              <div className="text-xs md:text-sm text-gray-500">Happy Clients</div>
            </div>
            
            <div className="text-center p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 shadow-sm hover:shadow-blue/10 transition-all duration-300">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <FaTrophy className="text-blue-600 text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">50+</div>
              <div className="text-xs md:text-sm text-gray-500">Awards</div>
            </div>

            <div className="text-center p-3 md:p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 shadow-sm hover:shadow-blue/10 transition-all duration-300">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                <FaUsers className="text-blue-600 text-2xl md:text-3xl mx-auto mb-2" />
              </motion.div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">10+</div>
              <div className="text-xs md:text-sm text-gray-500">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;