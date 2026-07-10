// src/components/sections/Process.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaSearch, 
  FaClipboardList, 
  FaPencilRuler, 
  FaCode, 
  FaBullhorn, 
  FaChartLine, 
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaClock,
  FaHandshake,
  FaShieldAlt,
  FaRegLightbulb
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  color: string;
}

interface ProcessStat {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

const Process: React.FC = () => {
  const processStats: ProcessStat[] = [
    { id: '1', label: 'Projects Delivered', value: '500+', icon: <FaRocket /> },
    { id: '2', label: 'Client Satisfaction', value: '98%', icon: <FaUsers /> },
    { id: '3', label: 'Average Project Time', value: '4 Weeks', icon: <FaClock /> },
    { id: '4', label: 'Long-term Partners', value: '85%', icon: <FaHandshake /> },
  ];

  const processSteps: ProcessStep[] = [
    {
      id: 'research',
      number: 1,
      title: 'Research & Discovery',
      description: 'Deep dive into your business, goals, and market to create a data-driven strategy.',
      icon: <FaSearch />,
      color: 'from-purple-400 to-purple-600',
      details: [
        'Business requirements gathering',
        'Market research & analysis',
        'Competitor benchmarking',
        'User persona development',
        'Goal setting & KPIs'
      ]
    },
    {
      id: 'planning',
      number: 2,
      title: 'Strategic Planning',
      description: 'Develop comprehensive roadmap with clear milestones and measurable objectives.',
      icon: <FaClipboardList />,
      color: 'from-purple-500 to-purple-700',
      details: [
        'Project roadmap creation',
        'Resource allocation',
        'Timeline development',
        'Risk assessment',
        'Budget planning'
      ]
    },
    {
      id: 'design',
      number: 3,
      title: 'Design & Prototyping',
      description: 'Create stunning designs and interactive prototypes that bring ideas to life.',
      icon: <FaPencilRuler />,
      color: 'from-purple-400 to-purple-600',
      details: [
        'User experience (UX) design',
        'User interface (UI) design',
        'Interactive prototyping',
        'Design system creation',
        'User testing & feedback'
      ]
    },
    {
      id: 'development',
      number: 4,
      title: 'Development & Testing',
      description: 'Build robust solutions with clean code, comprehensive testing, and quality assurance.',
      icon: <FaCode />,
      color: 'from-purple-500 to-purple-700',
      details: [
        'Frontend development',
        'Backend development',
        'API integration',
        'Quality assurance testing',
        'Performance optimization'
      ]
    },
    {
      id: 'marketing',
      number: 5,
      title: 'Marketing & Launch',
      description: 'Execute strategic marketing campaigns to ensure successful product launch.',
      icon: <FaBullhorn />,
      color: 'from-purple-400 to-purple-600',
      details: [
        'Go-to-market strategy',
        'Digital marketing campaigns',
        'Content creation',
        'Social media promotion',
        'Launch event planning'
      ]
    },
    {
      id: 'optimization',
      number: 6,
      title: 'Optimization & Growth',
      description: 'Continuous improvement through data analysis, user feedback, and performance monitoring.',
      icon: <FaChartLine />,
      color: 'from-purple-500 to-purple-700',
      details: [
        'Performance analytics',
        'User behavior analysis',
        'A/B testing',
        'Conversion optimization',
        'Scale & growth planning'
      ]
    },
    {
      id: 'support',
      number: 7,
      title: 'Support & Maintenance',
      description: 'Dedicated support and regular maintenance to keep your solutions running smoothly.',
      icon: <FaHeadset />,
      color: 'from-purple-400 to-purple-600',
      details: [
        '24/7 technical support',
        'Regular updates & patches',
        'Security monitoring',
        'Performance tuning',
        'Continuous improvement'
      ]
    }
  ];

  // Animation variants
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="process" 
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Our process"
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
          badge="Our Process"
          title="How We Bring Ideas to Life"
          subtitle="A proven methodology that ensures successful delivery from concept to completion."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
        />

        {/* Process Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-16"
        >
          {processStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-3 md:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20"
            >
              <div className="text-white text-xl md:text-3xl mb-1 md:mb-2">
                {stat.icon}
              </div>
              <div className="text-white font-bold text-base md:text-2xl lg:text-3xl">
                {stat.value}
              </div>
              <div className="text-purple-300 text-xs md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on md and up */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400/30 via-purple-400/50 to-purple-400/30 transform -translate-x-1/2 hidden md:block"></div>

          {/* Steps */}
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-8 md:mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot - Mobile: positioned on left with proper spacing */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-xs md:text-sm z-10 shadow-2xl shadow-purple-500/30`}
              >
                {step.number}
              </motion.div>

              {/* Content - Mobile: full width with left padding for dot */}
              <div className={`pl-10 md:pl-0 w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover="hover"
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/50 p-4 md:p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20 overflow-hidden"
                >
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'
                    }`}>
                    <div className={`text-purple-300 text-xl md:text-3xl flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <h3 className={`text-white font-poppins font-semibold text-base md:text-xl flex-1 ${index % 2 === 0 ? 'md:text-right' : 'text-left'
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  <p className={`text-purple-200 text-sm md:text-base leading-relaxed mb-4 ${index % 2 === 0 ? 'md:text-right' : 'text-left'
                    }`}>
                    {step.description}
                  </p>

                  <div className={`space-y-1.5 ${index % 2 === 0 ? 'md:text-right' : 'text-left'
                    }`}>
                    {step.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`flex items-center gap-2 text-purple-200 text-xs md:text-sm ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <FaCheckCircle className={`text-purple-300 text-xs flex-shrink-0 ${index % 2 === 0 ? 'md:order-2' : ''
                          }`} />
                        <span className={index % 2 === 0 ? 'md:order-1' : ''}>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty spacer for alternating layout - hidden on mobile */}
              <div className="hidden md:block md:w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Process CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg max-w-3xl mx-auto hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <h3 className="text-white font-poppins font-semibold text-xl md:text-2xl mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-purple-200 text-sm md:text-base mb-4 max-w-2xl mx-auto">
              Let's discuss how our proven process can bring your vision to life.
            </p>
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Journey
              <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
        >
          <div className="flex items-center gap-1.5 md:gap-2 text-purple-300 text-[10px] md:text-sm">
            <FaShieldAlt className="text-purple-400 text-xs md:text-base flex-shrink-0" />
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-purple-300 text-[10px] md:text-sm">
            <FaClock className="text-purple-400 text-xs md:text-base flex-shrink-0" />
            <span>On-time Delivery</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-purple-300 text-[10px] md:text-sm">
            <FaHandshake className="text-purple-400 text-xs md:text-base flex-shrink-0" />
            <span>100% Transparency</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 text-purple-300 text-[10px] md:text-sm">
            <FaRegLightbulb className="text-purple-400 text-xs md:text-base flex-shrink-0" />
            <span>Innovation Focus</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;