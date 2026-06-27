// src/components/layout/Footer.tsx
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaPaperPlane,
  FaHeart,
  FaShieldAlt,
  FaLock,
  FaClock,
  FaGlobe
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import Container from '../ui/Container';

interface QuickLink {
  id: string;
  label: string;
  to: string;
}

interface ServiceLink {
  id: string;
  label: string;
  to: string;
}

interface IndustryLink {
  id: string;
  label: string;
  to: string;
}

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

interface TrustBadge {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'subscribing' | 'success' | 'error'>('idle');

  const quickLinks: QuickLink[] = [
    { id: '1', label: 'Home', to: 'hero' },
    { id: '2', label: 'About Us', to: 'about' },
    { id: '3', label: 'Services', to: 'services' },
    { id: '4', label: 'Portfolio', to: 'portfolio' },
    { id: '5', label: 'Process', to: 'process' },
    { id: '6', label: 'Contact', to: 'contact' },
  ];

  const serviceLinks: ServiceLink[] = [
    { id: '1', label: 'Google Ads', to: 'services' },
    { id: '2', label: 'Meta Ads', to: 'services' },
    { id: '3', label: 'Political Campaign', to: 'political-campaign' },
    { id: '4', label: 'Social Media Marketing', to: 'digital-marketing' },
    { id: '5', label: 'YouTube SEO', to: 'digital-marketing' },
    { id: '6', label: 'Live Event Coverage', to: 'services' },
    { id: '7', label: 'Web Development', to: 'it-services' },
    { id: '8', label: 'Mobile App Development', to: 'it-services' },
  ];

  const industryLinks: IndustryLink[] = [
    { id: '1', label: 'Education', to: 'industries' },
    { id: '2', label: 'Healthcare', to: 'industries' },
    { id: '3', label: 'Politics', to: 'industries' },
    { id: '4', label: 'Entertainment', to: 'industries' },
    { id: '5', label: 'Business', to: 'industries' },
    { id: '6', label: 'Real Estate', to: 'industries' },
    { id: '7', label: 'Technology', to: 'industries' },
    { id: '8', label: 'NGOs', to: 'industries' },
  ];

  const socialLinks: SocialLink[] = [
    { id: 'facebook', name: 'Facebook', icon: <FaFacebook />, url: '#', color: '#1877F2' },
    { id: 'twitter', name: 'Twitter', icon: <FaTwitter />, url: '#', color: '#1DA1F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: <FaLinkedin />, url: '#', color: '#0A66C2' },
    { id: 'instagram', name: 'Instagram', icon: <FaInstagram />, url: '#', color: '#E4405F' },
    { id: 'youtube', name: 'YouTube', icon: <FaYoutube />, url: '#', color: '#FF0000' },
    { id: 'whatsapp', name: 'WhatsApp', icon: <FaWhatsapp />, url: '#', color: '#25D366' },
  ];

  const trustBadges: TrustBadge[] = [
    { id: '1', label: 'Secure Payments', icon: <FaLock /> },
    { id: '2', label: 'Data Privacy', icon: <FaShieldAlt /> },
    { id: '3', label: '24/7 Support', icon: <FaClock /> },
    { id: '4', label: 'Global Reach', icon: <FaGlobe /> },
  ];

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setNewsletterStatus('subscribing');

    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setNewsletterStatus('success');
        setEmail('');
        setTimeout(() => setNewsletterStatus('idle'), 3000);
      } else {
        setNewsletterStatus('error');
        setTimeout(() => setNewsletterStatus('idle'), 3000);
      }
    }, 1500);
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }satisfies Variants;

  return (
    <footer 
      className="bg-primary-dark border-t border-gold-500/10 relative overflow-hidden"
      role="contentinfo"
      aria-label="Footer"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-poppins font-bold">
                <span className="text-white">DIGITAL</span>
                <span className="text-accent">PRO</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We craft data-driven digital strategies that elevate brands, drive engagement, and deliver measurable results across all platforms.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                <FaPhone className="text-accent text-xs" />
                +91 98765 43210
              </a>
              <a href="mailto:info@digitalpro.com" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-300 text-sm">
                <FaEnvelope className="text-accent text-xs" />
                info@digitalpro.com
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-accent text-xs" />
                DigitalPro Tower, Cyber City, Hyderabad
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-gold-500/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-gold-500/30 transition-all duration-300"
                  style={{ color: social.color }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-poppins font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/30 group-hover:bg-gold-500 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-poppins font-semibold text-lg mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/30 group-hover:bg-gold-500 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Industries */}
            <div>
              <h4 className="text-white font-poppins font-semibold text-lg mb-4">
                Industries
              </h4>
              <ul className="space-y-2.5">
                {industryLinks.slice(0, 4).map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm cursor-pointer flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500/30 group-hover:bg-gold-500 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-poppins font-semibold text-base mb-3">
                Subscribe to Newsletter
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 pr-12 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300 text-sm"
                  aria-label="Subscribe to newsletter"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'subscribing'}
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 p-1.5 bg-gold-500 rounded-lg text-primary hover:bg-gold-600 transition-colors duration-300 disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  {newsletterStatus === 'subscribing' ? (
                    <span className="animate-spin">⟳</span>
                  ) : newsletterStatus === 'success' ? (
                    <FaCheckCircle />
                  ) : (
                    <FaPaperPlane className="text-xs" />
                  )}
                </button>
              </form>
              {newsletterStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-xs mt-2"
                >
                  ✓ Subscribed successfully!
                </motion.p>
              )}
              {newsletterStatus === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-2"
                >
                  Please enter a valid email address.
                </motion.p>
              )}
              <p className="text-gray-500 text-[10px] mt-2">
                Weekly insights. No spam. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="py-4 border-t border-gold-500/10 flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {trustBadges.map((badge) => (
            <div key={badge.id} className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="text-accent">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="py-4 border-t border-gold-500/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <div className="text-gray-400 text-center md:text-left">
            © {currentYear} <span className="text-accent">DigitalPro</span>. All rights reserved.
            Made with <FaHeart className="inline text-red-500 mx-1" /> in India.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="text-gray-500 hover:text-accent transition-colors duration-300 text-xs">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-500 hover:text-accent transition-colors duration-300 text-xs">
              Terms of Service
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-500 hover:text-accent transition-colors duration-300 text-xs">
              Cookie Policy
            </a>
          </div>

          {/* Back to Top Link */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-accent hover:text-gold-400 transition-colors duration-300 text-sm cursor-pointer flex items-center gap-1 group"
          >
            Back to Top
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;