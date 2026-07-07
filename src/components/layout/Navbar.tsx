// src/components/layout/Navbar.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
} from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

interface NavbarProps {
  className?: string;
}

interface NavLink {
  name: string;
  path: string;
  hasDropdown?: boolean;
}

interface NavbarServiceItem {
  id: string;
  name: string;
  category: string;
  path: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setScrolled(window.scrollY > 50);
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceDropdownItems: NavbarServiceItem[] = [
    // ===== RESEARCH & ADVISORY =====
    { id: 'policy-research', name: 'Policy Research & Analytics', category: 'Research & Advisory', path: '/services#policy-research' },
    { id: 'governance-research', name: 'Governance & Social Development', category: 'Research & Advisory', path: '/services#governance-research' },
    { id: 'opinion-analytics', name: 'Political & Public Opinion Analytics', category: 'Research & Advisory', path: '/services#opinion-analytics' },
    { id: 'strategic-advisory', name: 'Strategic Advisory Services', category: 'Research & Advisory', path: '/services#strategic-advisory' },

    // ===== POLITICAL SERVICES =====
    { id: 'political-campaign', name: 'Political Campaign Management', category: 'Political Services', path: '/services#political-campaign' },
    { id: 'candidate-grooming', name: 'Candidate Personality Development', category: 'Political Services', path: '/services#candidate-grooming' },
    { id: 'media-training', name: 'Media Training & Body Language', category: 'Political Services', path: '/services#media-training' },
    { id: 'personal-branding', name: 'Social Media Visibility & Branding', category: 'Political Services', path: '/services#personal-branding' },
    { id: 'political-social-branding', name: 'Political Branding & Image Building', category: 'Political Services', path: '/services#political-social-branding' },

    // ===== DIGITAL MARKETING =====
    { id: 'digital-strategy', name: 'Digital Campaign Strategy', category: 'Digital Marketing', path: '/services#digital-strategy' },
    { id: 'google-ads', name: 'Google Ads & Digital Advertising', category: 'Digital Marketing', path: '/services#google-ads' },
    { id: 'social-media-management', name: 'Complete Social Media Management', category: 'Digital Marketing', path: '/services#social-media-management' },
    { id: 'content-creation', name: 'Content Creation & Publishing', category: 'Digital Marketing', path: '/services#content-creation' },
    { id: 'social-advertising', name: 'Social Media Advertising & Outreach', category: 'Digital Marketing', path: '/services#social-advertising' },
    { id: 'social-listening', name: 'Social Listening & Sentiment Analysis', category: 'Digital Marketing', path: '/services#social-listening' },
    { id: 'social-reporting', name: 'Reporting, Analytics & Growth Strategy', category: 'Digital Marketing', path: '/services#social-reporting' },
    { id: 'email-sms-campaigns', name: 'Email, SMS & Digital Outreach', category: 'Digital Marketing', path: '/services#email-sms-campaigns' },
    { id: 'analytics-tracking', name: 'Digital Analytics & Performance Tracking', category: 'Digital Marketing', path: '/services#analytics-tracking' },
    { id: 'reputation-management', name: 'Online Reputation & Perception Management', category: 'Digital Marketing', path: '/services#reputation-management' },

    // ===== CREATIVE & MEDIA =====
    { id: 'creative-design', name: 'Creative Design & Promotions', category: 'Creative & Media', path: '/services#creative-design' },
    { id: 'video-production', name: 'Video Production & Campaign Films', category: 'Creative & Media', path: '/services#video-production' },

    // ===== DEVELOPMENT =====
    { id: 'website-development', name: 'Website & Campaign Landing Pages', category: 'Development', path: '/services#website-development' },
    { id: 'mobile-apps', name: 'Mobile App Development', category: 'Development', path: '/services#mobile-apps' },

    // ===== CAPACITY BUILDING =====
    { id: 'training-programs', name: 'Training Programs for Students', category: 'Capacity Building', path: '/services#training-programs' },
    { id: 'grassroots-research', name: 'Grassroots Research & Engagement', category: 'Capacity Building', path: '/services#grassroots-research' },
  ];

  // Group services by category for better organization
  const groupedServices = serviceDropdownItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, NavbarServiceItem[]>);

  const dropdownVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const handleLinkClick = useCallback((): void => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  }, []);

  const handleServiceClick = (path: string): void => {
    // Close mobile menu first
    setIsOpen(false);
    setShowServicesDropdown(false);

    // Navigate to the path
    navigate(path);
  };

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Check if current path matches service path
  const isServiceActive = (path: string): boolean => {
    const hash = path.split('#')[1];
    if (!hash) return false;
    // Check if we're on the services page and the hash matches
    return location.pathname === '/services' && location.hash === `#${hash}`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled 
            ? 'bg-purple-900/95 backdrop-blur-glass shadow-lg border-b border-white/10'
            : 'bg-purple-900/80 backdrop-blur-glass border-b border-white/5'
          } ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center flex-shrink-0"
            >
              <RouterLink
                to="/"
                className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              >
                {/* Logo Image - Mobile Optimized */}
                <div className="bg-white backdrop-blur-sm rounded-lg p-1.5 sm:p-2 shadow-purple-lg flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center border border-white/10">
                  <img
                    src="/logo.svg"
                    alt="Beyond Media"
                    className="h-6 w-auto sm:h-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-lg sm:text-2xl font-poppins font-bold leading-tight">
                    <span className="text-white">Beyond</span>
                    <span className="text-yellow-300"> I</span>
                    <span className="text-white"> Media</span>
                  </span>
                </div>
              </RouterLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setShowServicesDropdown(true)}
                  onMouseLeave={() => link.hasDropdown && setShowServicesDropdown(false)}
                >
                  <RouterLink
                    to={link.path}
                    className={`relative flex items-center px-4 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer group ${isActive(link.path)
                      ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]'
                      : 'text-white hover:text-purple-200'
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${showServicesDropdown ? 'rotate-180' : ''
                        }`} />
                    )}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-300 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </RouterLink>

                  {/* Services Dropdown - Grouped by Category */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 w-80 bg-purple-900/95 backdrop-blur-glass rounded-xl shadow-2xl border border-white/10 p-3 max-h-[70vh] overflow-y-auto"
                        >
                          {Object.entries(groupedServices).map(([category, items]) => (
                            <div key={category} className="mb-3 last:mb-0">
                              <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1.5 px-2">
                                {category}
                              </div>
                              <div className="grid grid-cols-1 gap-0.5">
                                {items.map((item) => (
                                  <button
                                    key={item.id}
                                    onClick={() => handleServiceClick(item.path)}
                                    className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-left ${isServiceActive(item.path)
                                      ? 'bg-purple-500/30 text-white'
                                      : 'text-white hover:text-purple-200 hover:bg-white/10'
                                      }`}
                                  >
                                    {item.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}

              <Button
                variant="primary"
                size="md"
                className="ml-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 shadow-purple-lg"
                onClick={() => window.open('https://wa.me/+919010079111', '_blank')}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-purple-300 transition-colors duration-300 p-2 z-50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Grouped by Category */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 top-16 bg-purple-900/98 backdrop-blur-glass overflow-y-auto z-40"
          >
            <div className="container mx-auto px-4 py-6 min-h-screen">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <RouterLink
                    key={link.name}
                    to={link.path}
                    className={`relative flex items-center px-4 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer group ${isActive(link.path)
                      ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] bg-white/5 rounded-lg'
                      : 'text-white hover:text-purple-200 hover:bg-white/5 rounded-lg'
                      }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </RouterLink>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <span className="text-sm font-semibold text-white/60 mb-3 block">Our Services</span>
                  {Object.entries(groupedServices).map(([category, items]) => (
                    <div key={category} className="mb-4 last:mb-0">
                      <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2 px-2">
                        {category}
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {items.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => handleServiceClick(item.path)}
                            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 text-left ${isServiceActive(item.path)
                              ? 'bg-purple-500/30 text-white'
                              : 'text-white hover:text-purple-200 hover:bg-white/10'
                              }`}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 shadow-purple-lg"
                    onClick={() => window.open('https://wa.me/+919010079111', '_blank')}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;