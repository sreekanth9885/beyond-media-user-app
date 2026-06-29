// src/components/sections/About.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaBullseye, 
  FaEye, 
  FaHeart, 
  FaTrophy,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface AboutStat {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const stats: AboutStat[] = [
    { id: '1', label: 'Years Experience', value: '10+', icon: <FaCalendarAlt /> },
    { id: '2', label: 'Projects Delivered', value: '500+', icon: <FaCheckCircle /> },
    { id: '3', label: 'Happy Clients', value: '200+', icon: <FaUsers /> },
    { id: '4', label: 'Awards Won', value: '50+', icon: <FaAward /> },
  ];

  const values = [
    { icon: <FaBullseye className="text-blue-600 text-2xl" />, title: 'Mission', description: 'To empower businesses with innovative digital solutions that drive growth and create lasting impact.' },
    { icon: <FaEye className="text-blue-600 text-2xl" />, title: 'Vision', description: 'To be the global leader in digital transformation, setting new standards of excellence.' },
    { icon: <FaHeart className="text-blue-600 text-2xl" />, title: 'Values', description: 'Integrity, innovation, excellence, and client-centric approach in everything we do.' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="about" 
      className="py-16 md:py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
      aria-label="About us section"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-blue-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Our team working together"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-blue rounded-xl p-3 sm:p-4 md:p-5 shadow-blue-lg"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">10+</div>
                  <div className="text-xs sm:text-sm text-white/80 font-medium">Years Experience</div>
                </div>
              </motion.div>

              {/* Floating Achievement Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-glass rounded-xl p-3 sm:p-4 md:p-5 border border-blue-500/20 shadow-blue"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaTrophy className="text-blue-600 text-xl sm:text-2xl" />
                  <div>
                    <div className="text-gray-900 font-bold text-sm sm:text-base">Award Winning</div>
                    <div className="text-gray-500 text-xs">Top Digital Agency</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Row - Mobile */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 lg:hidden"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 shadow-sm"
                >
                  <div className="text-blue-600 text-xl mb-1">{stat.icon}</div>
                  <div className="text-gray-900 font-bold text-lg">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              badge="About Us"
              title="We Build Digital Excellence"
              subtitle="Discover how our expertise, innovation, and dedication drive success for businesses worldwide."
              centered={false}
              className="text-left mb-6 md:mb-8"
            />

            {/* Company Story */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-sm sm:text-base mb-4 md:mb-6 leading-relaxed"
            >
              Founded in 2015, we've grown from a small team of digital enthusiasts to a 
              full-service agency with expertise across the entire digital spectrum. Our 
              journey has been defined by innovation, excellence, and an unwavering 
              commitment to client success.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-sm sm:text-base mb-6 md:mb-8 leading-relaxed"
            >
              We combine strategic thinking with creative excellence and technical 
              expertise to deliver digital experiences that transform businesses and 
              drive meaningful results.
            </motion.p>

            {/* Values Grid */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group shadow-sm"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-gray-900 font-semibold text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row - Desktop */}
            <motion.div
              variants={containerVariants}
              className="hidden lg:grid grid-cols-4 gap-4 mb-6 md:mb-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 shadow-sm"
                >
                  <div className="text-blue-600 text-2xl mb-2">{stat.icon}</div>
                  <div className="text-gray-900 font-bold text-2xl">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;