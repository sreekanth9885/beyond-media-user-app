// src/components/sections/Hero.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, type Variants, useInView } from 'framer-motion';
import { 
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
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    experience: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // Changed to false for re-trigger

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
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animated counter effect - triggers on scroll
  useEffect(() => {
    if (!isInView) {
      // Reset counts and animation flag when out of view
      setCounts({
        projects: 0,
        clients: 0,
        awards: 0,
        experience: 0
      });
      setHasAnimated(false);
      return;
    }

    if (hasAnimated) return; // Prevent re-animation if already done

    const targets = {
      projects: 500,
      clients: 200,
      awards: 50,
      experience: 10
    };

    const duration = 2500; // 2.5 seconds
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        projects: Math.floor(targets.projects * easeOutQuart),
        clients: Math.floor(targets.clients * easeOutQuart),
        awards: Math.floor(targets.awards * easeOutQuart),
        experience: Math.floor(targets.experience * easeOutQuart)
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        // Set final values
        setCounts({
          projects: targets.projects,
          clients: targets.clients,
          awards: targets.awards,
          experience: targets.experience
        });
        setHasAnimated(true);
      }
    };

    updateCounts();
  }, [isInView, hasAnimated]);

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
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-purple-900"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
        >
          <source
            src="/videos/bgvideo.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-purple-900/90"></div>

        {/* Animated overlay gradients for depth */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl"
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
            className="absolute text-white/5"
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
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 mb-4 md:mb-6 bg-purple-500/20 border border-purple-400/30 rounded-full backdrop-blur-sm"
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
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
            <span className="text-xs md:text-sm text-purple-200 font-medium tracking-wider uppercase">
              Leading Digital Agency
            </span>
          </motion.div>

          {/* Main Heading with Gradient Highlight */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <motion.h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Transform Your</span>
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="inline-block bg-gradient-to-r from-purple-300 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5 }}
                  className="absolute right-[-4px] top-0 w-[3px] h-full bg-gradient-to-b from-purple-400 to-blue-400"
                />
              </span>
              <span className="text-white"> Today</span>
            </motion.h1>

            {/* Animated Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 rounded-full mx-auto mt-2 max-w-xs"
            />
          </motion.div>

          {/* Animated Description */}
          <motion.p
            variants={itemVariants}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 max-w-2xl mx-auto mb-6 md:mb-8 px-4 sm:px-0"
          >
            We craft data-driven digital strategies that elevate brands, 
            drive engagement, and deliver measurable results across all platforms.
          </motion.p>

          {/* Animated Buttons with Hover Effects - Removed Watch Demo */}
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
                className="w-full sm:w-auto min-w-[160px] text-sm md:text-base bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 relative group overflow-hidden"
                onClick={() => window.open('https://wa.me/+919010079111', '_blank')}
              >
                <motion.span
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                Get Started <FaArrowRight className="ml-2 text-xs md:text-sm group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Stats with Counters - Animated on Scroll */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-12 md:mb-16"
          >
            {[
              {
                icon: FaChartLine,
                value: counts.projects,
                label: 'Projects',
                suffix: '+',
                delay: 0
              },
              {
                icon: FaUsers,
                value: counts.clients,
                label: 'Happy Clients',
                suffix: '+',
                delay: 0.1
              },
              {
                icon: FaTrophy,
                value: counts.awards,
                label: 'Awards',
                suffix: '+',
                delay: 0.2
              },
              {
                icon: FaUsers,
                value: counts.experience,
                label: 'Years Experience',
                suffix: '+',
                delay: 0.3
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                whileHover="hover"
                className="text-center p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:border-purple-400/50 transition-all duration-300 hover:bg-white/20"
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
                  <stat.icon className="text-white text-2xl md:text-3xl mx-auto mb-2" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-white"
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="text-xs md:text-sm text-purple-300">{stat.label}</div>
              </motion.div>
            ))}
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
          className="flex flex-col items-center gap-1 text-purple-300 text-xs"
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
            className="w-4 h-6 border-2 border-purple-400/50 rounded-full flex justify-center"
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
              className="w-1 h-1 bg-purple-400 rounded-full mt-1"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;