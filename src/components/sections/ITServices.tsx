// src/components/sections/ITServices.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaCode, 
  FaMobileAlt, 
  FaLaptop,
  FaApple,
  FaAndroid,
  FaReact,
  FaArrowRight,
  FaCheckCircle,
  FaCog,
  FaCubes,
  FaGraduationCap,
  FaUniversity,
  FaUtensils,
  FaHospital,
  FaStore,
  FaFileInvoice,
  FaShieldAlt,
  FaSync,
  FaLock,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface ITService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  technologies: string[];
  features: string[];
  category: 'web' | 'app';
}

const ITServices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('web');

  const categories = [
    { id: 'web', label: 'Web Development', icon: <FaCode /> },
    { id: 'app', label: 'App Development', icon: <FaMobileAlt /> },
  ];

  const itServices: ITService[] = [
  // ===== Web Development =====
    {
      id: 'corporate-websites',
      title: 'Corporate Websites',
      description: 'Professional, responsive websites that establish your brand authority and drive business growth.',
      icon: <FaLaptop />,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Next.js', 'Tailwind', 'WordPress', 'PHP'],
      features: ['Custom Design', 'SEO Optimized', 'CMS Integration', 'Analytics Dashboard']
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Powerful online stores with seamless payment integration and exceptional user experience.',
      icon: <FaStore />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
      features: ['Product Management', 'Payment Gateway', 'Shopping Cart', 'Order Tracking']
    },
    {
      id: 'crm-erp',
      title: 'CRM & ERP Systems',
      description: 'Custom CRM and ERP solutions to streamline your business operations and boost productivity.',
      icon: <FaCog />,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Salesforce', 'Odoo', 'SAP', 'Microsoft Dynamics', 'Custom'],
      features: ['Lead Management', 'Sales Automation', 'Reporting', 'Integration']
    },
    {
      id: 'school-management',
      title: 'School Management System',
      description: 'Complete digital solution for educational institutions to manage students, staff, and operations.',
      icon: <FaGraduationCap />,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Python'],
      features: ['Student Records', 'Attendance', 'Grading', 'Parent Portal']
    },
    {
      id: 'hospital-management',
      title: 'Hospital Management System',
      description: 'Comprehensive healthcare management solutions for hospitals, clinics, and medical practices.',
      icon: <FaHospital />,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MySQL', 'FHIR', 'HL7'],
      features: ['Patient Records', 'Appointment Scheduling', 'Billing', 'Telemedicine']
    },
    {
      id: 'college-management',
      title: 'College Management System',
      description: 'End-to-end management solution for higher education institutions and universities.',
      icon: <FaUniversity />,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Angular', 'Python', 'Django', 'PostgreSQL', 'Docker'],
      features: ['Admissions', 'Fee Management', 'Exam Scheduling', 'Alumni Network']
    },
    {
      id: 'restaurant-pos',
      title: 'Restaurant POS System',
      description: 'Modern point-of-sale solutions for restaurants, cafes, and food service businesses.',
      icon: <FaUtensils />,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      features: ['Order Management', 'Inventory Tracking', 'Table Booking', 'Payment Integration']
    },
    {
      id: 'billing-software',
      title: 'Billing & Invoicing Software',
      description: 'Automated billing and invoicing solutions to streamline your financial operations.',
      icon: <FaFileInvoice />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Python', 'Django', 'PostgreSQL', 'REST API', 'React'],
      features: ['Invoice Generation', 'Payment Tracking', 'Tax Management', 'Analytics']
    },
    {
      id: 'inventory-management',
      title: 'Inventory Management System',
      description: 'Real-time inventory tracking and management solutions for retail and manufacturing.',
      icon: <FaCubes />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React', 'Docker'],
      features: ['Stock Tracking', 'Supply Chain', 'Order Fulfillment', 'Reporting']
    },

    // ===== App Development =====
    {
      id: 'android-apps',
      title: 'Android App Development',
      description: 'Native Android applications that deliver exceptional performance and user experience.',
      icon: <FaAndroid />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'app',
      technologies: ['Kotlin', 'Java', 'Android SDK', 'Firebase', 'Material Design'],
      features: ['Native Performance', 'Material Design', 'Play Store', 'Push Notifications']
    },
    {
      id: 'ios-apps',
      title: 'iOS App Development',
      description: 'Premium iOS applications built with Swift for the Apple ecosystem.',
      icon: <FaApple />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'app',
      technologies: ['Swift', 'iOS SDK', 'Core Data', 'CloudKit', 'TestFlight'],
      features: ['Native UI', 'App Store', 'Face/Touch ID', 'iCloud Integration']
    },
    {
      id: 'react-native',
      title: 'React Native Apps',
      description: 'Cross-platform mobile applications with native performance and code sharing.',
      icon: <FaReact />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'app',
      technologies: ['React Native', 'Redux', 'Node.js', 'Firebase', 'Expo'],
      features: ['Cross-Platform', 'Hot Reloading', 'Native Components', 'Code Sharing']
    },
    {
      id: 'flutter-apps',
      title: 'Flutter App Development',
      description: 'Beautiful, fast, and natively compiled applications using Google\'s Flutter framework.',
      icon: <FaMobileAlt />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'app',
      technologies: ['Dart', 'Flutter', 'Firebase', 'BLoC', 'GetX'],
      features: ['Single Codebase', 'Hot Reload', 'Custom Widgets', 'Faster Development']
    },
  ];

  const filteredServices = itServices.filter(s => s.category === activeCategory);
  const selectedCategory = categories.find(c => c.id === activeCategory);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="it-services" 
      className="py-16 md:py-20 lg:py-28 bg-gray-50 relative overflow-hidden"
      aria-label="IT services"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="IT Services"
          title="Technology Solutions for Modern Business"
          subtitle="End-to-end web and app development solutions designed to transform your digital operations."
        />

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-blue'
                : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
              }`}
              aria-label={`View ${category.label}`}
              aria-pressed={activeCategory === category.id}
            >
              <span className="text-base md:text-lg">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-blue transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
                  
                  {/* Tech Stack Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-medium text-blue-600 border border-blue-200 shadow-sm flex items-center gap-1">
                    <FaCode className="text-[10px]" />
                    {service.technologies.slice(0, 3).join(', ')}
                    {service.technologies.length > 3 && ' +'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-blue-600 text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-gray-900 font-poppins font-semibold text-base md:text-lg group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <span 
                        key={index}
                        className="text-[10px] px-2 py-1 bg-blue-50 text-blue-600 rounded border border-blue-100"
                      >
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-[10px] px-2 py-1 bg-gray-50 text-gray-500 rounded border border-gray-200">
                        +{service.features.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        className="text-[9px] px-2 py-0.5 bg-gray-50 text-gray-500 rounded border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="text-[9px] px-2 py-0.5 bg-gray-50 text-gray-500 rounded border border-gray-200">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-blue-600 hover:text-blue-700 group/btn"
                  >
                    Learn More 
                    <FaArrowRight className="ml-2 text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Category Description */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 md:mt-12 text-center"
          >
            <div className="inline-block bg-white/80 backdrop-blur-sm px-6 md:px-8 py-4 md:py-6 rounded-xl border border-blue-500/10 shadow-sm">
              <div className="text-blue-600 text-3xl md:text-4xl mb-2">
                {selectedCategory.icon}
              </div>
              <h3 className="text-gray-900 font-poppins font-semibold text-xl md:text-2xl mb-2">
                {selectedCategory.label}
              </h3>
              <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
                Explore our comprehensive {selectedCategory.label.toLowerCase()} solutions 
                designed to meet your specific business needs.
              </p>
            </div>
          </motion.div>
        )}

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaShieldAlt className="text-blue-600" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaCheckCircle className="text-blue-600" />
            <span>Quality Assured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaSync className="text-blue-600" />
            <span>Agile Development</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaLock className="text-blue-600" />
            <span>Data Privacy</span>
          </div>
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 md:mt-8 text-center"
        >
          <p className="text-xs text-gray-400 mb-3">Technologies We Work With</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">React</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">Node.js</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">Python</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">React Native</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">Flutter</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">Swift</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">Kotlin</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200 shadow-sm">Docker</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ITServices;