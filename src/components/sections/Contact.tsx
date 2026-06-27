// src/components/sections/Contact.tsx
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaUser,
  FaBuilding,
  FaComment,
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaHeadset,
  FaShieldAlt,
  FaStar,
} from 'react-icons/fa';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

interface ContactInfo {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

interface SocialLink {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState<string>('');

  const contactInfo: ContactInfo[] = [
    {
      id: 'phone',
      label: 'Phone',
      value: '+91 98765 43210',
      icon: <FaPhone />,
      link: 'tel:+919876543210',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'email',
      label: 'Email',
      value: 'info@digitalpro.com',
      icon: <FaEnvelope />,
      link: 'mailto:info@digitalpro.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'address',
      label: 'Office Address',
      value: 'DigitalPro Tower, Cyber City, Hyderabad, India',
      icon: <FaMapMarkerAlt />,
      link: 'https://maps.google.com',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'hours',
      label: 'Working Hours',
      value: 'Mon - Sat, 9:00 AM - 7:00 PM',
      icon: <FaClock />,
      link: '#',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const socialLinks: SocialLink[] = [
    { id: 'facebook', name: 'Facebook', icon: <FaFacebook />, url: '#', color: '#1877F2' },
    { id: 'twitter', name: 'Twitter', icon: <FaTwitter />, url: '#', color: '#1DA1F2' },
    { id: 'linkedin', name: 'LinkedIn', icon: <FaLinkedin />, url: '#', color: '#0A66C2' },
    { id: 'instagram', name: 'Instagram', icon: <FaInstagram />, url: '#', color: '#E4405F' },
    { id: 'youtube', name: 'YouTube', icon: <FaYoutube />, url: '#', color: '#FF0000' },
    { id: 'whatsapp', name: 'WhatsApp', icon: <FaWhatsapp />, url: '#', color: '#25D366' }
  ];

  const services = [
    'Google Ads',
    'Meta Ads',
    'Political Campaign',
    'Social Media Marketing',
    'YouTube SEO',
    'Live Event Coverage',
    'Web Development',
    'Mobile App Development',
    'Graphic Design',
    'Branding',
    'Video Editing',
    'Content Marketing'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    // Simulate API call
    setTimeout(() => {
      // Validation check
      if (!formData.name || !formData.email || !formData.message) {
        setFormStatus('error');
        setFormError('Please fill in all required fields.');
        return;
      }

      if (!formData.email.includes('@')) {
        setFormStatus('error');
        setFormError('Please enter a valid email address.');
        return;
      }

      // Success
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      });

      // Reset after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }satisfies Variants;

  const infoCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      y: -5,
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  }satisfies Variants;

  return (
    <section 
      id="contact" 
      className="py-16 md:py-20 lg:py-28 bg-primary-light relative overflow-hidden"
      aria-label="Contact us"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>

      <Container>
        <SectionHeading
          badge="Contact Us"
          title="Let's Start Your Digital Journey"
          subtitle="Ready to transform your digital presence? Reach out to our team and let's create something extraordinary together."
        />

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          {/* Contact Info - Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 md:space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <motion.a
                key={info.id}
                href={info.link}
                variants={infoCardVariants}
                whileHover="hover"
                className="block bg-primary/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-white font-medium text-sm md:text-base group-hover:text-accent transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-primary/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gold-500/10"
            >
              <h4 className="text-white font-poppins font-semibold text-sm mb-4">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-gold-500/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-gold-500/30 transition-all duration-300"
                    style={{ color: social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3"
            >
              <div className="bg-primary/50 backdrop-blur-sm rounded-xl p-3 border border-gold-500/10 text-center">
                <div className="text-accent text-xl">⭐</div>
                <div className="text-white font-bold text-sm">4.9/5</div>
                <div className="text-gray-400 text-xs">Client Rating</div>
              </div>
              <div className="bg-primary/50 backdrop-blur-sm rounded-xl p-3 border border-gold-500/10 text-center">
                <div className="text-accent text-xl">🚀</div>
                <div className="text-white font-bold text-sm">500+</div>
                <div className="text-gray-400 text-xs">Projects Done</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.div
              variants={itemVariants}
              className="bg-primary/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gold-500/10"
            >
              <h3 className="text-white font-poppins font-semibold text-xl md:text-2xl mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Fill in the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300"
                        placeholder="John Doe"
                        required
                        aria-required="true"
                      />
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300"
                        placeholder="john@example.com"
                        required
                        aria-required="true"
                      />
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-400 text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-gray-400 text-sm font-medium mb-1.5">
                      Company Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-10 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300"
                        placeholder="Your Company"
                      />
                      <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-gray-400 text-sm font-medium mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300 appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-primary">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 pl-10 bg-white/5 border border-gold-500/10 rounded-lg text-white placeholder-gray-500 focus:border-gold-500/50 focus:outline-none transition-all duration-300 resize-y"
                      placeholder="Tell us about your project..."
                      required
                      aria-required="true"
                    />
                    <FaComment className="absolute left-3 top-3 text-gray-500" />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span>
                      Sending...
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <FaCheckCircle className="mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20"
                  >
                    {formError}
                  </motion.div>
                )}

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/20 flex items-center gap-2"
                  >
                    <FaCheckCircle />
                    Thank you for your message! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  <FaShieldAlt className="inline mr-1" />
                  Your information is secure and will not be shared with third parties.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-primary/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/10 h-64 md:h-80 relative">
            <img
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=400&fit=crop"
              alt="Office location map"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end justify-center">
              <div className="bg-primary/90 backdrop-blur-sm px-6 py-4 rounded-t-2xl border border-gold-500/20 text-center">
                <p className="text-gray-400 text-sm">
                  📍 DigitalPro Tower, Cyber City, Hyderabad, India
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent text-xs hover:text-gold-400 transition-colors duration-300"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-gray-500 text-xs"
        >
          <span className="flex items-center gap-2">
            <FaShieldAlt className="text-accent" />
            Secure & Confidential
          </span>
          <span className="flex items-center gap-2">
            <FaHeadset className="text-accent" />
            24/7 Support
          </span>
          <span className="flex items-center gap-2">
            <FaClock className="text-accent" />
            Fast Response Time
          </span>
          <span className="flex items-center gap-2">
            <FaStar className="text-accent" />
            98% Client Satisfaction
          </span>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;