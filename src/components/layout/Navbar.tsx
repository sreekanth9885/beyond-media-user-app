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
import { Link } from 'react-scroll';
import type { NavLink } from '../../types';
import Button from '../ui/Button';

interface NavbarProps {
  className?: string;
}
interface NavbarServiceItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
}
const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', to: 'hero', icon: <FaHome /> },
    { name: 'About', to: 'about', icon: <FaInfoCircle /> },
    { name: 'Services', to: 'services', icon: <FaCogs />, hasDropdown: true },
    { name: 'Portfolio', to: 'portfolio', icon: <FaBriefcase /> },
    { name: 'Contact', to: 'contact', icon: <FaPhone /> },
  ];

  const serviceDropdownItems: NavbarServiceItem[] = [
    { id: 'google-ads', name: 'Google Ads', icon: <FaGoogle />, category: 'Marketing' },
    { id: 'meta-ads', name: 'Meta Ads', icon: <FaFacebook />, category: 'Marketing' },
    { id: 'political-campaign', name: 'Political Campaign', icon: <FaBullhorn />, category: 'Political' },
    { id: 'social-media', name: 'Social Media Marketing', icon: <FaUsers />, category: 'Marketing' },
    { id: 'youtube-seo', name: 'YouTube SEO', icon: <FaYoutube />, category: 'SEO' },
    { id: 'live-coverage', name: 'Live Coverage', icon: <FaVideo />, category: 'Media' },
    { id: 'web-dev', name: 'Web Development', icon: <FaCode />, category: 'Development' },
    { id: 'mobile-apps', name: 'Mobile Apps', icon: <FaMobileAlt />, category: 'Development' },
    { id: 'graphic-design', name: 'Graphic Design', icon: <FaPaintBrush />, category: 'Design' },
    { id: 'branding', name: 'Branding', icon: <FaBuilding />, category: 'Design' },
    { id: 'video-editing', name: 'Video Editing', icon: <FaVideo />, category: 'Media' },
    { id: 'content-marketing', name: 'Content Marketing', icon: <FaEnvelope />, category: 'Marketing' },
  ];

  const dropdownVariants = {
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
  }satisfies Variants;

  const mobileMenuVariants = {
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
  }satisfies Variants;

  const handleLinkClick = useCallback((): void => {
    setIsOpen(false);
    setShowServicesDropdown(false);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary/95 backdrop-blur-glass shadow-glass border-b border-gold-500/20' 
          : 'bg-transparent'
      } ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
<motion.div
  whileHover={{ scale: 1.03 }}
  className="flex items-center"
>
  <Link
  to="hero"
  smooth
  duration={500}
  className="flex items-center gap-3 cursor-pointer"
>
  <div className="bg-white rounded-lg p-2 shadow-md">
    <img
      src="/logo.svg"
      alt="Beyond Media"
      className="h-12 w-auto"
    />
  </div>

  <div className="flex flex-col">
    <span className="text-2xl font-poppins font-bold">
      <span className="text-white">Beyond</span>
      <span className="text-accent"> Media</span>
    </span>

    <span className="text-xs tracking-[0.3em] text-gray-400 uppercase">
      Beyond Honest.. Beyond Limits
    </span>
  </div>
</Link>
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
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-accent transition-colors duration-300 cursor-pointer group"
                  activeClass="text-accent"
                  spy={true}
                  hashSpy={true}
                >
                  {link.icon}
                  {link.name}
                  {link.hasDropdown && (
                    <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${
                      showServicesDropdown ? 'rotate-180' : ''
                    }`} />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {showServicesDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-72 bg-primary/95 backdrop-blur-glass rounded-xl shadow-gold-lg border border-gold-500/20 p-2"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {serviceDropdownItems.map((item) => (
                            <Link
                              key={item.id}
                              to="services"
                              smooth={true}
                              duration={500}
                              className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-accent hover:bg-gold-500/10 rounded-lg transition-all duration-300"
                              onClick={handleLinkClick}
                            >
                              <span className="text-accent">{item.icon}</span>
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <Button
              variant="gold"
              size="md"
              className="ml-4"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-accent transition-colors duration-300 p-2"
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
            className="lg:hidden fixed inset-0 top-16 bg-primary/98 backdrop-blur-glass overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-accent hover:bg-gold-500/10 rounded-lg transition-all duration-300"
                    onClick={handleLinkClick}
                  >
                    <span className="text-accent">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}

                <div className="pt-4 border-t border-gold-500/20">
                  <h4 className="text-sm font-semibold text-gold-500 mb-3">Our Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceDropdownItems.map((item) => (
                      <Link
                        key={item.id}
                        to="services"
                        smooth={true}
                        duration={500}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-accent hover:bg-gold-500/10 rounded-lg transition-all duration-300"
                        onClick={handleLinkClick}
                      >
                        <span className="text-accent text-xs">{item.icon}</span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>

                {/* Social Icons in Mobile */}
                <div className="flex justify-center gap-4 pt-6">
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Facebook">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Twitter">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="Instagram">
                    <FaInstagram size={20} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300" aria-label="YouTube">
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