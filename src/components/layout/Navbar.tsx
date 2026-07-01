// src/components/layout/Navbar.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
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
    { id: 'google-ads', name: 'Google Ads', category: 'Marketing', path: '/services#google-ads' },
    { id: 'meta-ads', name: 'Meta Ads', category: 'Marketing', path: '/services#meta-ads' },
    { id: 'political-campaign', name: 'Political Campaign', category: 'Political', path: '/political-campaigns' },
    { id: 'social-media', name: 'Social Media Marketing', category: 'Marketing', path: '/digital-marketing#social-media' },
    { id: 'youtube-seo', name: 'YouTube SEO', category: 'SEO', path: '/digital-marketing#youtube-seo' },
    { id: 'live-coverage', name: 'Live Coverage', category: 'Media', path: '/services#live-coverage' },
    { id: 'web-dev', name: 'Web Development', category: 'Development', path: '/it-services#web-dev' },
    { id: 'mobile-apps', name: 'Mobile Apps', category: 'Development', path: '/it-services#mobile-apps' },
    { id: 'graphic-design', name: 'Graphic Design', category: 'Design', path: '/services#graphic-design' },
    { id: 'branding', name: 'Branding', category: 'Design', path: '/services#branding' },
    { id: 'video-editing', name: 'Video Editing', category: 'Media', path: '/services#video-editing' },
    { id: 'content-marketing', name: 'Content Marketing', category: 'Marketing', path: '/services#content-marketing' },
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
                    <span className="text-purple-300"> Media</span>
                  </span>
                  <span className="hidden xs:block text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-purple-300/60 uppercase leading-tight">
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
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer group ${isActive(link.path)
                        ? 'text-white'
                      : 'text-white/80 hover:text-white'
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

                  {/* Services Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {showServicesDropdown && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 w-64 bg-purple-900/95 backdrop-blur-glass rounded-xl shadow-2xl border border-white/10 p-2"
                        >
                          <div className="grid grid-cols-1 gap-0.5">
                            {serviceDropdownItems.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => handleServiceClick(item.path)}
                                className="flex items-center px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-left"
                              >
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
                className="ml-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 shadow-purple-lg"
                onClick={() => navigate('/contact')}
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

      {/* Mobile Menu - Separate from nav for better rendering */}
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
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${isActive(link.path)
                        ? 'text-white bg-white/10'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </RouterLink>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-purple-300 mb-3">Our Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleServiceClick(item.path)}
                        className="flex items-center px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-left"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 shadow-purple-lg"
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
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="Facebook">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="Twitter">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="Instagram">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300" aria-label="YouTube">
                    <FaYoutube size={20} />
                  </a>
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