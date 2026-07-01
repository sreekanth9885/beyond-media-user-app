// src/components/sections/WhyChooseUs.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaTrophy, 
  FaUsers, 
  FaShieldAlt,
  FaHeart, 
  FaLightbulb, 
  FaCheckCircle,
  FaCrown,
  FaArrowRight,
  FaChartLine,
  FaHeadset,
  FaSync,
  FaLock,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
  stat?: {
    label: string;
    value: string;
  };
}

const WhyChooseUs: React.FC = () => {
  const valuePropositions: ValueProposition[] = [
    {
      id: 'experience',
      title: '10+ Years of Excellence',
      description: 'A decade of digital innovation and proven success across industries and technologies.',
      icon: <FaTrophy />,
      color: 'from-purple-400 to-purple-600',
      benefits: [
        '500+ successful projects',
        '200+ satisfied clients',
        '50+ industry awards',
        '15+ industries served'
      ],
      stat: {
        label: 'Years of Experience',
        value: '10+'
      }
    },
    {
      id: 'expertise',
      title: 'Expert Team',
      description: 'Handpicked team of industry experts, developers, designers, and strategists.',
      icon: <FaUsers />,
      color: 'from-purple-500 to-purple-700',
      benefits: [
        '50+ specialized professionals',
        '3x certified developers',
        'Award-winning designers',
        'Industry-recognized strategists'
      ],
      stat: {
        label: 'Team Members',
        value: '50+'
      }
    },
    {
      id: 'innovation',
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies and creative thinking to deliver innovative solutions.',
      icon: <FaLightbulb />,
      color: 'from-purple-400 to-purple-600',
      benefits: [
        'AI/ML integration',
        'Blockchain solutions',
        'IoT capabilities',
        'AR/VR experiences'
      ],
      stat: {
        label: 'Innovation Awards',
        value: '15+'
      }
    },
    {
      id: 'quality',
      title: 'Uncompromising Quality',
      description: 'Rigorous quality assurance processes ensure flawless delivery every single time.',
      icon: <FaShieldAlt />,
      color: 'from-purple-500 to-purple-700',
      benefits: [
        '100% code coverage',
        'Zero critical bugs',
        '98% client satisfaction',
        'ISO certification'
      ],
      stat: {
        label: 'Quality Score',
        value: '98%'
      }
    },
    {
      id: 'client-centric',
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We build lasting relationships through trust and transparency.',
      icon: <FaHeart />,
      color: 'from-purple-400 to-purple-600',
      benefits: [
        'Dedicated account managers',
        '24/7 priority support',
        'Flexible engagement models',
        'Transparent communication'
      ],
      stat: {
        label: 'Client Retention',
        value: '98%'
      }
    },
    {
      id: 'results',
      title: 'Results-Driven',
      description: 'We deliver measurable results that drive business growth and maximize ROI.',
      icon: <FaChartLine />,
      color: 'from-purple-500 to-purple-700',
      benefits: [
        '500% average ROI',
        '2x revenue growth',
        '50% cost reduction',
        '3x user engagement'
      ],
      stat: {
        label: 'ROI Delivered',
        value: '500%+'
      }
    },
    {
      id: 'agile',
      title: 'Agile Methodology',
      description: 'Flexible development approach that adapts to your changing business needs.',
      icon: <FaSync />,
      color: 'from-purple-400 to-purple-600',
      benefits: [
        '2-week sprints',
        'Daily standups',
        'Continuous delivery',
        'Rapid iterations'
      ],
      stat: {
        label: 'Average Delivery',
        value: '4 Weeks'
      }
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your data and ensure compliance.',
      icon: <FaLock />,
      color: 'from-purple-500 to-purple-700',
      benefits: [
        'End-to-end encryption',
        'GDPR compliant',
        'ISO 27001 certified',
        'Regular security audits'
      ],
      stat: {
        label: 'Security Rating',
        value: 'A+'
      }
    }
  ];

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      id="why-choose-us" 
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Why choose us"
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
          badge="Why Choose Us"
          title="Your Trusted Digital Partner"
          subtitle="We combine technical excellence, creative innovation, and unwavering commitment to deliver exceptional results."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
        />

        {/* Value Propositions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          {valuePropositions.map((value) => (
            <motion.div
              key={value.id}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {value.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-poppins font-semibold text-base md:text-lg group-hover:text-purple-200 transition-colors duration-300 mb-2">
                {value.title}
              </h3>

              <p className="text-purple-200/80 text-sm leading-relaxed mb-3">
                {value.description}
              </p>

              {/* Stat */}
              {value.stat && (
                <div className="flex items-center gap-2 mb-3 bg-purple-500/20 rounded-lg px-3 py-1.5 border border-purple-400/20">
                  <span className="text-purple-300 font-bold text-lg">{value.stat.value}</span>
                  <span className="text-purple-200 text-xs">{value.stat.label}</span>
                </div>
              )}

              {/* Benefits */}
              <div className="space-y-1.5">
                {value.benefits.slice(0, 3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-purple-200 text-xs">
                    <FaCheckCircle className="text-purple-300 text-[10px] flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
        >
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20">
            <div className="text-purple-300 text-3xl md:text-4xl font-bold">500+</div>
            <div className="text-purple-200 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20">
            <div className="text-purple-300 text-3xl md:text-4xl font-bold">98%</div>
            <div className="text-purple-200 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20">
            <div className="text-purple-300 text-3xl md:text-4xl font-bold">15+</div>
            <div className="text-purple-200 text-sm">Industries Served</div>
          </div>
          <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:bg-white/20">
            <div className="text-purple-300 text-3xl md:text-4xl font-bold">50+</div>
            <div className="text-purple-200 text-sm">Awards Won</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaCrown className="text-purple-300 text-2xl md:text-3xl" />
              <h3 className="text-white font-poppins font-bold text-xl md:text-2xl lg:text-3xl">
                Ready to Experience the Difference?
              </h3>
            </div>
            <p className="text-purple-200 text-sm md:text-base mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
              >
                Start Your Journey
                <FaArrowRight className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
              >
                <FaHeadset className="mr-2" /> Contact Sales
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-purple-200">
              <span className="flex items-center gap-1">
                <FaCheckCircle className="text-purple-300" /> No obligation
              </span>
              <span className="flex items-center gap-1">
                <FaCheckCircle className="text-purple-300" /> Free consultation
              </span>
              <span className="flex items-center gap-1">
                <FaCheckCircle className="text-purple-300" /> 24/7 support
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;