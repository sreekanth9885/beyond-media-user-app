// src/components/sections/Pricing.tsx
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaCheckCircle, 
  FaTimesCircle, 
  FaArrowRight,
  FaStar,
  FaCrown,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
  FaCogs,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  features: {
    included: string[];
    excluded?: string[];
  };
  isPopular?: boolean;
  buttonText: string;
  icon: React.ReactNode;
  color: string;
  savings?: string;
}

interface FeatureHighlight {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups getting started with digital marketing.',
      price: billingCycle === 'monthly' ? 499 : 399,
      currency: '$',
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      icon: <FaRocket />,
      color: 'from-blue-500 to-blue-600',
      buttonText: 'Start Free Trial',
      savings: billingCycle === 'yearly' ? 'Save 20%' : undefined,
      features: {
        included: [
          'Website Development (5 pages)',
          'Basic SEO Package',
          'Social Media Setup (3 platforms)',
          'Google Ads Management (Small)',
          'Monthly Performance Reports',
          'Email Support (Business Hours)',
          '1 GB Cloud Storage',
          'Basic Analytics Dashboard',
          'Mobile Responsive Design',
          'SSL Certificate Included'
        ],
        excluded: [
          'Advanced SEO',
          'Video Production',
          'Custom Development',
          'Priority Support'
        ]
      }
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses looking for comprehensive digital solutions.',
      price: billingCycle === 'monthly' ? 999 : 799,
      currency: '$',
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      isPopular: true,
      icon: <FaStar />,
      color: 'from-yellow-500 to-gold-500',
      buttonText: 'Get Started Now',
      savings: billingCycle === 'yearly' ? 'Save 20%' : undefined,
      features: {
        included: [
          'Website Development (15 pages)',
          'Advanced SEO Package',
          'Social Media Management (6 platforms)',
          'Google & Meta Ads Management',
          'Content Marketing Strategy',
          'Email Marketing Automation',
          'Video Production (2 videos/month)',
          'Graphic Design Services',
          'Priority Support (24/7)',
          '10 GB Cloud Storage',
          'Advanced Analytics Dashboard',
          'A/B Testing & Optimization',
          'API Integrations',
          'Monthly Strategy Sessions'
        ],
        excluded: [
          'Custom Development',
          'Enterprise Security'
        ]
      }
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations with complex needs.',
      price: billingCycle === 'monthly' ? 2499 : 1999,
      currency: '$',
      period: billingCycle === 'monthly' ? '/month' : '/month (billed annually)',
      icon: <FaCrown />,
      color: 'from-purple-500 to-purple-600',
      buttonText: 'Contact Sales',
      savings: billingCycle === 'yearly' ? 'Save 20%' : undefined,
      features: {
        included: [
          'Custom Website Development',
          'Enterprise SEO Strategy',
          'Full Social Media Management',
          'Multi-channel Ad Management',
          'Content Strategy & Production',
          'Video Production (10 videos/month)',
          'Dedicated Design Team',
          '24/7 Priority Support',
          '50+ GB Cloud Storage',
          'Custom Analytics & Dashboards',
          'Advanced A/B Testing',
          'API & System Integrations',
          'Dedicated Project Manager',
          'Monthly Strategy & Review',
          'Security & Compliance'
        ]
      }
    }
  ];

  const featureHighlights: FeatureHighlight[] = [
    {
      id: '1',
      label: 'Dedicated Support',
      icon: <FaHeadset />,
      description: '24/7 expert support for all your needs'
    },
    {
      id: '2',
      label: 'Custom Solutions',
      icon: <FaCogs />,
      description: 'Tailored to your business requirements'
    },
    {
      id: '3',
      label: 'Scalable',
      icon: <FaChartLine />,
      description: 'Grow with our flexible plans'
    },
    {
      id: '4',
      label: 'Secure',
      icon: <FaShieldAlt />,
      description: 'Enterprise-grade security'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }satisfies Variants;

  const popularCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: -10,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -20,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  }satisfies Variants;

  const highlightVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }satisfies Variants;

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-20 lg:py-28 bg-primary-light relative overflow-hidden"
      aria-label="Pricing plans"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="Pricing Plans"
          title="Choose Your Perfect Plan"
          subtitle="Flexible pricing options designed to suit businesses of all sizes. Start with what you need and scale as you grow."
        />

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8 md:mb-12"
        >
          <span className={`text-sm font-medium transition-colors duration-300 ${
            billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'
          }`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-14 h-8 bg-gold-500/20 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
            role="switch"
            aria-checked={billingCycle === 'yearly'}
          >
            <motion.div
              className="absolute top-1 w-6 h-6 bg-gold-500 rounded-full shadow-md"
              animate={{
                x: billingCycle === 'yearly' ? 28 : 4
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
          <span className={`text-sm font-medium transition-colors duration-300 ${
            billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'
          }`}>
            Yearly
          </span>
          <span className="hidden md:inline-block text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
            Save 20%
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pricingPlans.map((plan) => {
            const CardComponent = plan.isPopular ? popularCardVariants : cardVariants;
            return (
              <motion.div
                key={plan.id}
                variants={CardComponent}
                className={`relative bg-primary/50 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-gold-500/50 shadow-gold-lg'
                    : 'border-gold-500/10 hover:border-gold-500/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-gold text-primary text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Savings Badge */}
                {plan.savings && (
                  <div className="absolute top-0 left-0">
                    <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-br-xl border border-green-500/20">
                      {plan.savings}
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Plan Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-xl`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-poppins font-bold text-xl">
                        {plan.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {plan.currency}{plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm mt-1">
                        Save 20% with annual billing
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {plan.features.included.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <FaCheckCircle className="text-accent text-xs flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                    {plan.features.excluded && plan.features.excluded.map((feature, index) => (
                      <motion.div
                        key={`excluded-${index}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (plan.features.included.length + index) * 0.05 }}
                        className="flex items-start gap-2 text-gray-500 text-sm"
                      >
                        <FaTimesCircle className="text-gray-500 text-xs flex-shrink-0 mt-0.5" />
                        <span className="line-through">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan.isPopular ? 'gold' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.buttonText}
                    <FaArrowRight className="ml-2" />
                  </Button>

                  {/* Extra Info */}
                  {plan.isPopular && (
                    <p className="text-center text-xs text-gray-400 mt-3">
                      🎯 Best value for growing businesses
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {featureHighlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={highlightVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300"
            >
              <div className="text-accent text-2xl md:text-3xl mb-2">
                {highlight.icon}
              </div>
              <h4 className="text-white font-semibold text-sm md:text-base mb-1">
                {highlight.label}
              </h4>
              <p className="text-gray-400 text-xs">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 md:mt-12"
        >
          <p className="text-gray-400 text-sm">
            Have questions about our pricing?{' '}
            <a href="#faq" className="text-accent hover:text-gold-400 transition-colors duration-300">
              Check our FAQ
            </a>
            {' '}or {' '}
            <a href="#contact" className="text-accent hover:text-gold-400 transition-colors duration-300">
              Contact our sales team
            </a>
          </p>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
            <span className="text-green-400 text-sm">🔒</span>
            <span className="text-gray-400 text-sm">30-day money-back guarantee</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-400 text-sm">No hidden fees</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Pricing;