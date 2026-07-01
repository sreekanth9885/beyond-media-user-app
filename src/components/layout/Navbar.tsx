// src/components/layout/Navbar.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaGoogle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaVideo,
  FaBullhorn,
  FaUsers,
  FaBuilding,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaBriefcase,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

interface NavbarProps {
  className?: string;
}

interface NavLink {
  name: string;
  path: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
}

interface NavbarServiceItem {
  id: string;
  name: string;
  icon: React.ReactNode;
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

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Services', path: '/services', icon: <FaCogs />, hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio', icon: <FaBriefcase /> },
    { name: 'Contact', path: '/contact', icon: <FaPhone /> },
  ];

  const serviceDropdownItems: NavbarServiceItem[] = [
    { id: 'google-ads', name: 'Google Ads', icon: <FaGoogle />, category: 'Marketing', path: '/services#google-ads' },
    { id: 'meta-ads', name: 'Meta Ads', icon: <FaFacebook />, category: 'Marketing', path: '/services#meta-ads' },
    { id: 'political-campaign', name: 'Political Campaign', icon: <FaBullhorn />, category: 'Political', path: '/political-campaigns' },
    { id: 'social-media', name: 'Social Media Marketing', icon: <FaUsers />, category: 'Marketing', path: '/digital-marketing#social-media' },
    { id: 'youtube-seo', name: 'YouTube SEO', icon: <FaYoutube />, category: 'SEO', path: '/digital-marketing#youtube-seo' },
    { id: 'live-coverage', name: 'Live Coverage', icon: <FaVideo />, category: 'Media', path: '/services#live-coverage' },
    { id: 'web-dev', name: 'Web Development', icon: <FaCode />, category: 'Development', path: '/it-services#web-dev' },
    { id: 'mobile-apps', name: 'Mobile Apps', icon: <FaMobileAlt />, category: 'Development', path: '/it-services#mobile-apps' },
    { id: 'graphic-design', name: 'Graphic Design', icon: <FaPaintBrush />, category: 'Design', path: '/services#graphic-design' },
    { id: 'branding', name: 'Branding', icon: <FaBuilding />, category: 'Design', path: '/services#branding' },
    { id: 'video-editing', name: 'Video Editing', icon: <FaVideo />, category: 'Media', path: '/services#video-editing' },
    { id: 'content-marketing', name: 'Content Marketing', icon: <FaEnvelope />, category: 'Marketing', path: '/services#content-marketing' },
  ];

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
    navigate(path);
    setIsOpen(false);
    setShowServicesDropdown(false);
  };

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-white/95 backdrop-blur-glass shadow-glass border-b border-blue-500/20' 
          : 'bg-transparent'
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
              <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-blue-lg flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center">
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
                  <span className="text-gray-900">Beyond</span>
                  <span className="text-blue-600"> Media</span>
                </span>
                <span className="hidden xs:block text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-gray-400 uppercase leading-tight">
                  Beyond Honest.. Beyond Limits
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
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer group ${isActive(link.path)
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  {link.icon}
                  {link.name}
                  {link.hasDropdown && (
                    <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${
                      showServicesDropdown ? 'rotate-180' : ''
                    }`} />
                  )}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </RouterLink>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {showServicesDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-glass rounded-xl shadow-blue-lg border border-blue-500/20 p-2"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {serviceDropdownItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => handleServiceClick(item.path)}
                              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-500/10 rounded-lg transition-all duration-300 text-left"
                            >
                              <span className="text-blue-600">{item.icon}</span>
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Button
              variant="primary"
              size="md"
              className="ml-4"
              onClick={() => navigate('/contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-900 hover:text-blue-600 transition-colors duration-300 p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden fixed inset-0 top-16 bg-white/98 backdrop-blur-glass overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <RouterLink
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive(link.path)
                        ? 'text-blue-600 bg-blue-500/10'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-500/10'
                      }`}
                    onClick={handleLinkClick}
                  >
                    <span className="text-blue-600">{link.icon}</span>
                    {link.name}
                  </RouterLink>
                ))}

                <div className="pt-4 border-t border-blue-500/20">
                  <h4 className="text-sm font-semibold text-blue-600 mb-3">Our Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleServiceClick(item.path)}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-500/10 rounded-lg transition-all duration-300 text-left"
                      >
                        <span className="text-blue-600 text-xs">{item.icon}</span>
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      navigate('/contact');
                      setIsOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Social Icons in Mobile */}
                <div className="flex justify-center gap-4 pt-6">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300" aria-label="Facebook">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300" aria-label="Twitter">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300" aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300" aria-label="Instagram">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-300" aria-label="YouTube">
                    <FaYoutube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;