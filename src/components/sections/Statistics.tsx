// src/components/sections/Statistics.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { 
  FaProjectDiagram, 
  FaUsers, 
  FaBullhorn, 
  FaDollarSign,
  FaClock, 
  FaUserTie, 
  FaTrophy, 
  FaRocket,
  FaHandshake,
  FaStar,
  FaGlobe,
  FaBuilding,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: React.ReactNode;
  color: string;
  description?: string;
}

interface Achievement {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const Statistics: React.FC = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const statistics: Statistic[] = [
    {
      id: 'projects',
      label: 'Projects Delivered',
      value: 500,
      suffix: '+',
      icon: <FaProjectDiagram />,
      color: 'from-blue-500 to-blue-600',
      description: 'Across 15+ industries'
    },
    {
      id: 'clients',
      label: 'Happy Clients',
      value: 200,
      suffix: '+',
      icon: <FaUsers />,
      color: 'from-green-500 to-green-600',
      description: '98% satisfaction rate'
    },
    {
      id: 'campaigns',
      label: 'Campaigns Managed',
      value: 150,
      suffix: '+',
      icon: <FaBullhorn />,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Political & marketing'
    },
    {
      id: 'revenue',
      label: 'Revenue Generated',
      value: 50,
      prefix: '$',
      suffix: 'M+',
      icon: <FaDollarSign />,
      color: 'from-purple-500 to-purple-600',
      description: 'For our clients'
    },
    {
      id: 'experience',
      label: 'Years Experience',
      value: 10,
      suffix: '+',
      icon: <FaClock />,
      color: 'from-red-500 to-red-600',
      description: 'Industry expertise'
    },
    {
      id: 'team',
      label: 'Team Members',
      value: 50,
      suffix: '+',
      icon: <FaUserTie />,
      color: 'from-pink-500 to-pink-600',
      description: 'Experts & specialists'
    },
    {
      id: 'awards',
      label: 'Awards Won',
      value: 50,
      suffix: '+',
      icon: <FaTrophy />,
      color: 'from-amber-500 to-amber-600',
      description: 'Industry recognition'
    },
    {
      id: 'satisfaction',
      label: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      icon: <FaStar />,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Excellence in service'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: '1',
      label: 'Countries Served',
      value: '50+',
      icon: <FaGlobe />,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      id: '2',
      label: 'Partners Worldwide',
      value: '500+',
      icon: <FaHandshake />,
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: '3',
      label: 'Industry Leaders',
      value: '100+',
      icon: <FaBuilding />,
      color: 'from-violet-500 to-violet-600'
    },
    {
      id: '4',
      label: 'Digital Transformations',
      value: '300+',
      icon: <FaRocket />,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  // Animated counter effect
  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const updateCounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newCounts: Record<string, number> = {};
      statistics.forEach(stat => {
        newCounts[stat.id] = Math.floor(stat.value * easeOutQuart);
      });
      
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        // Set final values
        const finalCounts: Record<string, number> = {};
        statistics.forEach(stat => {
          finalCounts[stat.id] = stat.value;
        });
        setCounts(finalCounts);
      }
    };

    updateCounts();
  }, [isInView, statistics]);

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }satisfies Variants;

  const achievementVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }satisfies Variants;

  return (
    <section 
      id="statistics" 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-primary-light relative overflow-hidden"
      aria-label="Our statistics"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      
      {/* Animated Background Elements */}
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
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl"
      />

      <Container>
        <SectionHeading
          badge="Our Impact"
          title="Numbers That Speak Volumes"
          subtitle="Our track record of success is reflected in the metrics that matter most to our clients."
        />

        {/* Main Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {statistics.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-primary/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-white font-poppins font-bold text-2xl md:text-3xl lg:text-4xl mb-1">
                {stat.prefix || ''}
                {counts[stat.id] !== undefined ? counts[stat.id].toLocaleString() : '0'}
                {stat.suffix || ''}
              </div>

              {/* Label */}
              <div className="text-gray-300 font-medium text-sm md:text-base">
                {stat.label}
              </div>

              {/* Description */}
              {stat.description && (
                <div className="text-gray-500 text-xs mt-1">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={achievementVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white text-lg flex-shrink-0`}>
                {achievement.icon}
              </div>
              <div>
                <div className="text-white font-bold text-sm md:text-base">
                  {achievement.value}
                </div>
                <div className="text-gray-400 text-xs">
                  {achievement.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Trust Badge 1 */}
          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10">
            <div className="text-accent text-3xl">🏆</div>
            <div>
              <div className="text-white font-semibold text-sm">Best Digital Agency</div>
              <div className="text-gray-400 text-xs">Awarded 2023-2024</div>
            </div>
          </div>

          {/* Trust Badge 2 */}
          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10">
            <div className="text-accent text-3xl">⭐</div>
            <div>
              <div className="text-white font-semibold text-sm">4.9/5 Rating</div>
              <div className="text-gray-400 text-xs">Based on 500+ reviews</div>
            </div>
          </div>

          {/* Trust Badge 3 */}
          <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10">
            <div className="text-accent text-3xl">🔒</div>
            <div>
              <div className="text-white font-semibold text-sm">ISO 27001 Certified</div>
              <div className="text-gray-400 text-xs">Enterprise security standard</div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 rounded-full border border-gold-500/20">
            <span className="text-gold-500 text-sm font-medium">✨</span>
            <span className="text-gray-400 text-sm">Trusted by industry leaders worldwide</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Statistics;