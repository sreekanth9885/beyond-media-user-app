// src/components/sections/FAQ.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaChevronDown, 
  FaChevronUp, 
  FaSearch,
  FaTimes,
  FaQuestionCircle,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaCode,
  FaShieldAlt,
  FaHeadset,
  FaDollarSign,
  FaClock,
  FaCalendarAlt,
  FaArrowRight
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

interface FAQCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  count: number;
}

const FAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    // General Questions
    {
      id: '1',
      question: 'What services does DigitalPro offer?',
      answer: 'DigitalPro offers a comprehensive range of digital services including Google Ads, Meta Ads, Political Campaign Management, Social Media Marketing, YouTube SEO, Live Event Coverage, Website Development, Mobile App Development, Software Development, Graphic Design, Branding, Video Editing, Content Marketing, and industry-specific promotions across Education, Healthcare, Politics, Entertainment, Real Estate, and more.',
      category: 'general',
      icon: <FaQuestionCircle />
    },
    {
      id: '2',
      question: 'How long does it take to see results?',
      answer: 'Results timeline varies depending on the service. For digital marketing campaigns, you can typically see initial results within 2-4 weeks, with significant improvements in 3-6 months. Website development projects usually take 4-8 weeks depending on complexity. We provide regular progress reports and work with you to achieve your goals as efficiently as possible.',
      category: 'general',
      icon: <FaClock />
    },
    {
      id: '3',
      question: 'Do you offer custom solutions?',
      answer: 'Absolutely! Every business is unique, and we pride ourselves on creating tailored solutions for our clients. Whether you need a custom website, specialized marketing campaign, or industry-specific digital solution, we work closely with you to understand your needs and develop a strategy that delivers results.',
      category: 'general',
      icon: <FaLightbulb />
    },

    // Pricing Questions
    {
      id: '4',
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the scope and complexity of the project. We offer flexible pricing models including fixed-price packages, monthly retainers, and custom enterprise solutions. Our Starter package begins at $499/month, Professional at $999/month, and Enterprise solutions start at $2499/month. Contact us for a customized quote.',
      category: 'pricing',
      icon: <FaDollarSign />
    },
    {
      id: '5',
      question: 'Do you require long-term contracts?',
      answer: 'No, we believe in earning your business every month. While we recommend a minimum engagement to see significant results, we offer flexible month-to-month arrangements. Annual contracts come with a 20% discount, but we never lock you into rigid long-term commitments.',
      category: 'pricing',
      icon: <FaCalendarAlt />
    },
    {
      id: '6',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and online payment platforms. For enterprise clients, we offer customized invoicing and payment terms. All transactions are secure and encrypted.',
      category: 'pricing',
      icon: <FaDollarSign />
    },

    // Political Campaign Questions
    {
      id: '7',
      question: 'How do you handle political campaign management?',
      answer: 'Our political campaign management services are comprehensive and data-driven. We offer election strategy, booth management, war room operations, social media campaigns, political branding, public relations, campaign analytics, ground operations, digital campaigns, volunteer management, opinion polls, manifesto promotion, speech promotions, candidate branding, and media management. We\'ve successfully managed 150+ campaigns with a 92% winning rate.',
      category: 'political',
      icon: <FaUsers />
    },
    {
      id: '8',
      question: 'What makes your political campaigns different?',
      answer: 'We combine traditional political wisdom with cutting-edge digital strategies. Our approach includes data-driven voter analysis, targeted messaging, real-time campaign monitoring, and multi-channel engagement. We provide a 360-degree approach that covers everything from grassroots organizing to digital dominance, ensuring maximum voter reach and engagement.',
      category: 'political',
      icon: <FaChartLine />
    },

    // Digital Marketing Questions
    {
      id: '9',
      question: 'How do you measure campaign success?',
      answer: 'We use comprehensive analytics to measure campaign success including ROI, conversion rates, engagement metrics, lead generation, and brand awareness. We provide detailed monthly reports with clear KPIs and actionable insights. Our dashboard gives you real-time visibility into campaign performance.',
      category: 'marketing',
      icon: <FaChartLine />
    },
    {
      id: '10',
      question: 'Which social media platforms do you manage?',
      answer: 'We manage all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, YouTube, and Threads. Our social media management includes content strategy, creative design, daily posting, community engagement, and performance analysis. We tailor our approach based on your target audience and business goals.',
      category: 'marketing',
      icon: <FaUsers />
    },
    {
      id: '11',
      question: 'What is your approach to SEO and content marketing?',
      answer: 'Our SEO and content marketing approach is holistic and data-driven. We conduct thorough keyword research, create high-quality content, optimize on-page elements, build quality backlinks, and continuously monitor performance. For YouTube SEO, we optimize thumbnails, tags, descriptions, and engagement metrics to maximize visibility and channel growth.',
      category: 'marketing',
      icon: <FaRocket />
    },

    // Technical Questions
    {
      id: '12',
      question: 'What technologies do you use?',
      answer: 'We work with a wide range of modern technologies including React, Next.js, Vue.js, Angular, Node.js, Python, Java, PHP, React Native, Flutter, Kotlin, Swift, AWS, Azure, GCP, Docker, Kubernetes, MongoDB, PostgreSQL, MySQL, and many more. We select the best technology stack based on your specific requirements.',
      category: 'technical',
      icon: <FaCode />
    },
    {
      id: '13',
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes! We offer comprehensive maintenance and support services including 24/7 monitoring, security updates, performance optimization, bug fixes, and regular updates. Our team is always available to ensure your digital solutions run smoothly and securely.',
      category: 'technical',
      icon: <FaHeadset />
    },
    {
      id: '14',
      question: 'How do you ensure data security?',
      answer: 'Data security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with GDPR and other data protection regulations. Our infrastructure is hosted on secure cloud platforms with robust disaster recovery and business continuity plans.',
      category: 'technical',
      icon: <FaShieldAlt />
    },

    // Process Questions
    {
      id: '15',
      question: 'What is your development process?',
      answer: 'Our development process follows a proven agile methodology: Research & Discovery → Strategic Planning → Design & Prototyping → Development & Testing → Marketing & Launch → Optimization & Growth → Support & Maintenance. We work in sprints with continuous feedback loops to ensure your project stays on track and meets all requirements.',
      category: 'process',
      icon: <FaRocket />
    },
    {
      id: '16',
      question: 'How involved will I be in the process?',
      answer: 'We believe in transparent collaboration. You\'ll have a dedicated project manager who will keep you updated throughout the process. We conduct regular meetings, provide progress reports, and seek your feedback at every stage. We use project management tools to ensure full visibility and seamless communication.',
      category: 'process',
      icon: <FaUsers />
    }
  ];

  const categories: FAQCategory[] = [
    { id: 'all', label: 'All Questions', icon: <FaQuestionCircle />, count: faqItems.length },
    { id: 'general', label: 'General', icon: <FaQuestionCircle />, count: faqItems.filter(item => item.category === 'general').length },
    { id: 'pricing', label: 'Pricing', icon: <FaDollarSign />, count: faqItems.filter(item => item.category === 'pricing').length },
    { id: 'political', label: 'Political', icon: <FaUsers />, count: faqItems.filter(item => item.category === 'political').length },
    { id: 'marketing', label: 'Marketing', icon: <FaChartLine />, count: faqItems.filter(item => item.category === 'marketing').length },
    { id: 'technical', label: 'Technical', icon: <FaCode />, count: faqItems.filter(item => item.category === 'technical').length },
    { id: 'process', label: 'Process', icon: <FaRocket />, count: faqItems.filter(item => item.category === 'process').length }
  ];

  // Filter items based on search and category
  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }satisfies Variants;

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  }satisfies Variants;

  return (
    <section 
      id="faq" 
      className="py-16 md:py-20 lg:py-28 bg-primary relative overflow-hidden"
      aria-label="Frequently asked questions"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, pricing, and process."
        />

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-4">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 bg-primary-light/50 backdrop-blur-sm rounded-lg border border-gold-500/10 text-white placeholder-gray-400 focus:border-gold-500/50 focus:outline-none transition-all duration-300"
              aria-label="Search FAQ"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Clear search"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gold-500 text-primary shadow-gold'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-gold-500/10'
                }`}
                aria-label={`Filter ${category.label}`}
                aria-pressed={activeCategory === category.id}
              >
                <span className="text-sm">{category.icon}</span>
                {category.label}
                <span className={`text-[10px] ${
                  activeCategory === category.id ? 'text-primary/70' : 'text-gray-500'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">
              No questions found matching your search.
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-3 md:space-y-4"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`bg-primary-light/50 backdrop-blur-sm rounded-xl border transition-all duration-300 ${
                  activeId === item.id
                    ? 'border-gold-500/50 shadow-gold'
                    : 'border-gold-500/10 hover:border-gold-500/30'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between gap-4 p-4 md:p-6 text-left focus:outline-none focus:ring-2 focus:ring-gold-500/50 rounded-xl"
                  aria-expanded={activeId === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-lg mt-1 flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-white font-poppins font-medium text-sm md:text-base">
                      {item.question}
                    </span>
                  </div>
                  <span className="text-accent flex-shrink-0 ml-4">
                    {activeId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6">
                        <div className="pt-4 border-t border-gold-500/10">
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {item.answer}
                          </p>
                          
                          {/* Category Tag */}
                          <div className="mt-3">
                            <span className="inline-block text-xs px-2 py-1 bg-white/5 text-gray-400 rounded border border-gold-500/10">
                              {categories.find(c => c.id === item.category)?.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gold-500/10 to-gold-500/5 rounded-2xl p-6 md:p-8 border border-gold-500/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <FaQuestionCircle className="text-accent text-2xl" />
              <h3 className="text-white font-poppins font-semibold text-xl">
                Still Have Questions?
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base mb-4">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="gold" size="lg">
                Contact Us
                <FaArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <FaHeadset className="mr-2" /> Live Chat
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500"
        >
          <span className="flex items-center gap-1">
            <span className="text-accent">●</span>
            {faqItems.length} Frequently Asked Questions
          </span>
          <span className="flex items-center gap-1">
            <span className="text-accent">●</span>
            {categories.length - 1} Categories
          </span>
          <span className="flex items-center gap-1">
            <span className="text-accent">●</span>
            Updated Weekly
          </span>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQ;