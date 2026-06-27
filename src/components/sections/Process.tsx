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
      color: 'from-blue-500 to-blue-600',
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
      color: 'from-purple-500 to-purple-600',
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
      color: 'from-pink-500 to-pink-600',
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
      color: 'from-green-500 to-green-600',
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
      color: 'from-orange-500 to-orange-600',
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
      color: 'from-red-500 to-red-600',
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
      color: 'from-teal-500 to-teal-600',
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }satisfies Variants;

  const cardVariants = {
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
  }satisfies Variants;

  return (
    <section 
      id="process" 
      className="py-16 md:py-20 lg:py-28 bg-primary-light relative overflow-hidden"
      aria-label="Our process"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="Our Process"
          title="How We Bring Ideas to Life"
          subtitle="A proven methodology that ensures successful delivery from concept to completion."
        />

        {/* Process Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {processStats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-4 md:p-6 bg-primary/50 backdrop-blur-sm rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="text-accent text-2xl md:text-3xl mb-2">
                {stat.icon}
              </div>
              <div className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500/30 via-gold-500/50 to-gold-500/30 transform -translate-x-1/2 hidden md:block"></div>
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500/30 via-gold-500/50 to-gold-500/30 md:hidden"></div>

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
              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg`}
              >
                {step.number}
              </motion.div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover="hover"
                  className="bg-primary/50 backdrop-blur-sm rounded-xl border border-gold-500/10 hover:border-gold-500/30 p-4 md:p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`text-accent text-2xl md:text-3xl ${
                      index % 2 === 0 ? 'md:order-2' : ''
                    }`}>
                      {step.icon}
                    </div>
                    <h3 className={`text-white font-poppins font-semibold text-lg md:text-xl ${
                      index % 2 === 0 ? 'md:order-1' : ''
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-1.5">
                    {step.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`flex items-center gap-2 text-gray-300 text-sm ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}
                      >
                        <FaCheckCircle className="text-accent text-xs flex-shrink-0" />
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty spacer for alternating layout */}
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
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-500/5 rounded-2xl p-6 md:p-8 border border-gold-500/20 max-w-3xl mx-auto">
            <h3 className="text-white font-poppins font-semibold text-xl md:text-2xl mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-4 max-w-2xl mx-auto">
              Let's discuss how our proven process can bring your vision to life.
            </p>
            <Button variant="gold" size="lg">
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
          className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
            <FaShieldAlt className="text-accent" />
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
            <FaClock className="text-accent" />
            <span>On-time Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
            <FaHandshake className="text-accent" />
            <span>100% Transparency</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
            <FaRegLightbulb className="text-accent" />
            <span>Innovation Focus</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Process;