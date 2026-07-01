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
      color: 'from-purple-400 to-purple-600',
      description: 'Across 15+ industries'
    },
    {
      id: 'clients',
      label: 'Happy Clients',
      value: 200,
      suffix: '+',
      icon: <FaUsers />,
      color: 'from-purple-500 to-purple-700',
      description: '98% satisfaction rate'
    },
    {
      id: 'campaigns',
      label: 'Campaigns Managed',
      value: 150,
      suffix: '+',
      icon: <FaBullhorn />,
      color: 'from-purple-400 to-purple-600',
      description: 'Political & marketing'
    },
    {
      id: 'revenue',
      label: 'Revenue Generated',
      value: 50,
      prefix: '$',
      suffix: 'M+',
      icon: <FaDollarSign />,
      color: 'from-purple-500 to-purple-700',
      description: 'For our clients'
    },
    {
      id: 'experience',
      label: 'Years Experience',
      value: 10,
      suffix: '+',
      icon: <FaClock />,
      color: 'from-purple-400 to-purple-600',
      description: 'Industry expertise'
    },
    {
      id: 'team',
      label: 'Team Members',
      value: 50,
      suffix: '+',
      icon: <FaUserTie />,
      color: 'from-purple-500 to-purple-700',
      description: 'Experts & specialists'
    },
    {
      id: 'awards',
      label: 'Awards Won',
      value: 50,
      suffix: '+',
      icon: <FaTrophy />,
      color: 'from-purple-400 to-purple-600',
      description: 'Industry recognition'
    },
    {
      id: 'satisfaction',
      label: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      icon: <FaStar />,
      color: 'from-purple-500 to-purple-700',
      description: 'Excellence in service'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: '1',
      label: 'Countries Served',
      value: '50+',
      icon: <FaGlobe />,
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: '2',
      label: 'Partners Worldwide',
      value: '500+',
      icon: <FaHandshake />,
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: '3',
      label: 'Industry Leaders',
      value: '100+',
      icon: <FaBuilding />,
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: '4',
      label: 'Digital Transformations',
      value: '300+',
      icon: <FaRocket />,
      color: 'from-purple-500 to-purple-700'
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const achievementVariants: Variants = {
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
  };

  return (
    <section 
      id="statistics" 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Our statistics"
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

      <Container>
        <SectionHeading
          badge="Our Impact"
          title="Numbers That Speak Volumes"
          subtitle="Our track record of success is reflected in the metrics that matter most to our clients."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
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
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 text-center hover:bg-white/20"
            >
              {/* Icon */}
              <div className={`w-12 h-12 mx-auto rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-white font-poppins font-bold text-2xl md:text-3xl lg:text-4xl mb-1">
                {stat.prefix || ''}
                {counts[stat.id] !== undefined ? counts[stat.id].toLocaleString() : '0'}
                {stat.suffix || ''}
              </div>

              {/* Label */}
              <div className="text-purple-200 font-medium text-sm md:text-base">
                {stat.label}
              </div>

              {/* Description */}
              {stat.description && (
                <div className="text-purple-300/60 text-xs mt-1">
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
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white text-lg flex-shrink-0 shadow-lg`}>
                {achievement.icon}
              </div>
              <div>
                <div className="text-white font-bold text-sm md:text-base">
                  {achievement.value}
                </div>
                <div className="text-purple-200 text-xs">
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
          <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20">
            <div className="text-purple-300 text-3xl">🏆</div>
            <div>
              <div className="text-white font-semibold text-sm">Best Digital Agency</div>
              <div className="text-purple-200 text-xs">Awarded 2023-2024</div>
            </div>
          </div>

          {/* Trust Badge 2 */}
          <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20">
            <div className="text-purple-300 text-3xl">⭐</div>
            <div>
              <div className="text-white font-semibold text-sm">4.9/5 Rating</div>
              <div className="text-purple-200 text-xs">Based on 500+ reviews</div>
            </div>
          </div>

          {/* Trust Badge 3 */}
          <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20">
            <div className="text-purple-300 text-3xl">🔒</div>
            <div>
              <div className="text-white font-semibold text-sm">ISO 27001 Certified</div>
              <div className="text-purple-200 text-xs">Enterprise security standard</div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm">
            <span className="text-purple-300 text-sm font-medium">✨</span>
            <span className="text-purple-200 text-sm">Trusted by industry leaders worldwide</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Statistics;