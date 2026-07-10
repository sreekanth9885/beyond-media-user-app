// src/components/sections/About.tsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, type Variants, useInView } from 'framer-motion';
import { 
  FaTrophy,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaHome,
  FaHospital,
  FaGraduationCap,
  FaTruck,
  FaUtensils,
  FaStore,
  FaBuilding,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface AboutStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // changed to false for re-trigger
  const [hasAnimated, setHasAnimated] = useState(false);

  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0
  });

  // Animated counter effect - triggers on scroll
  useEffect(() => {
    if (!isInView) {
      // Reset counts when out of view (optional)
      // setCounts({ experience: 0, projects: 0, clients: 0, awards: 0 });
      // setHasAnimated(false);
      return;
    }

    if (hasAnimated) return; // Prevent re-animation if already done

    const targets = {
      experience: 10,
      projects: 500,
      clients: 200,
      awards: 50
    };

    const duration = 2500;
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        experience: Math.floor(targets.experience * easeOutQuart),
        projects: Math.floor(targets.projects * easeOutQuart),
        clients: Math.floor(targets.clients * easeOutQuart),
        awards: Math.floor(targets.awards * easeOutQuart)
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        setCounts({
          experience: targets.experience,
          projects: targets.projects,
          clients: targets.clients,
          awards: targets.awards
        });
        setHasAnimated(true);
      }
    };

    updateCounts();
  }, [isInView, hasAnimated]);

  // Reset animation when scrolling away and back (optional)
  useEffect(() => {
    if (!isInView) {
      setHasAnimated(false);
    }
  }, [isInView]);

  const stats: AboutStat[] = [
    { id: '1', label: 'Years Experience', value: counts.experience, suffix: '+', icon: <FaCalendarAlt /> },
    { id: '2', label: 'Projects Delivered', value: counts.projects, suffix: '+', icon: <FaCheckCircle /> },
    { id: '3', label: 'Happy Clients', value: counts.clients, suffix: '+', icon: <FaUsers /> },
    { id: '4', label: 'Awards Won', value: counts.awards, suffix: '+', icon: <FaAward /> },
  ];

  const industries: Industry[] = [
    {
      id: 'real-estate',
      name: 'Real Estate',
      icon: <FaHome />,
      description: 'Digital solutions for property listings, virtual tours, and lead generation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: <FaHospital />,
      description: 'Patient acquisition, healthcare marketing, and medical branding solutions.',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'education',
      name: 'Educational Institutions',
      icon: <FaGraduationCap />,
      description: 'Student recruitment, online learning platforms, and school branding.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'logistics',
      name: 'Logistics',
      icon: <FaTruck />,
      description: 'Supply chain solutions, fleet management, and logistics optimization.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'restaurants',
      name: 'Restaurants',
      icon: <FaUtensils />,
      description: 'POS systems, online ordering, reservation management, and loyalty programs.',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'local-business',
      name: 'Local Business',
      icon: <FaStore />,
      description: 'Local SEO, Google My Business optimization, and community engagement.',
      color: 'from-purple-500 to-purple-600'
    },
  ];

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
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="About us section"
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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image with Purple Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-purple-400/30">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Our team working together"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/20 to-transparent"></div>
              </div>

              {/* Floating Experience Badge - Purple Gradient */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl p-3 sm:p-4 md:p-5 shadow-2xl ring-1 ring-purple-300/30"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">10+</div>
                  <div className="text-xs sm:text-sm text-purple-200 font-medium">Years Experience</div>
                </div>
              </motion.div>

              {/* Floating Achievement Badge - Glass Effect */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/10 backdrop-blur-glass rounded-xl p-3 sm:p-4 md:p-5 border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaTrophy className="text-white text-xl sm:text-2xl" />
                  <div>
                    <div className="text-white font-bold text-sm sm:text-base">Award Winning</div>
                    <div className="text-purple-300 text-xs">Top Digital Agency</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Row - Mobile - Animated on Scroll */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 lg:hidden"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:border-purple-400/50 transition-all duration-300 hover:bg-white/20"
                >
                  <div className="text-white text-xl mb-1">{stat.icon}</div>
                  <div className="text-white font-bold text-lg">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-purple-300 text-xs">{stat.label}</div>
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
              title="Beyond I Media"
              subtitle="India-based organization dedicated to advancing public policy research, political analysis, governance research, and multi-sector social development initiatives."
              centered={false}
              className="text-left mb-6 md:mb-8"
              badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
              titleClassName="text-white"
              subtitleClassName="text-purple-200"
            />

            {/* Company Story */}
            <motion.p
              variants={itemVariants}
              className="text-purple-100 text-sm sm:text-base mb-4 md:mb-6 leading-relaxed"
            >
              B I M (Beyond I Media) is an India-based organization dedicated to advancing public policy research, political analysis, governance research, and multi-sector social development initiatives. The organization's focus is to create a strong team of young analysts, researchers, and practitioners who leverage data, evidence, and field-based insights to support better governance and informed public decision-making in the country.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-purple-200/80 text-sm sm:text-base mb-6 md:mb-8 leading-relaxed"
            >
              Operating at the intersection of public policy research, governance analysis, and community engagement, B I M integrates analytical rigor with field-level understanding to address real-world challenges. Through research, training, and grassroots initiatives, we contribute to building stronger democratic systems and sustainable development pathways.
            </motion.p>

            {/* Industries We Work With */}
            <motion.div
              variants={containerVariants}
              className="mb-6 md:mb-8"
            >
              <motion.h3
                variants={itemVariants}
                className="text-white font-poppins font-semibold text-lg mb-4 flex items-center gap-2"
              >
                <FaBuilding className="text-purple-400" />
                Industries We Work With
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                {industries.map((industry) => (
                  <motion.div
                    key={industry.id}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:bg-white/20 text-center"
                  >
                    <div className={`w-18 h-18 mx-auto rounded-lg
                       flex items-center justify-center text-white text-4xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">
                      {industry.name}
                    </h4>
                    <p className="text-purple-300 text-[10px] leading-relaxed hidden sm:block">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Stats Row - Desktop - Animated on Scroll */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="hidden lg:grid grid-cols-4 gap-4 mb-6 md:mb-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:bg-white/20"
                >
                  <div className="text-white text-2xl mb-2">{stat.icon}</div>
                  <div className="text-white font-bold text-2xl">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-purple-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;