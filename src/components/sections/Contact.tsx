// src/components/sections/Contact.tsx
import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaHeadset,
  FaShieldAlt,
  FaStar,
  FaUser,
  FaBuilding,
  FaComment,
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

// Initialize EmailJS with your public key
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
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
      value: '+91 9010079111',
      icon: <FaPhone />,
      link: 'tel:+919010079111',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'email',
      label: 'Email',
      value: 'info@beyondmedia.com',
      icon: <FaEnvelope />,
      link: 'mailto:info@beyond.com',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'address',
      label: 'Office Address',
      value: 'Madhapur, Hyderabad, Telangana 500081',
      icon: <FaMapMarkerAlt />,
      link: 'https://maps.google.com/?q=Madhapur,Hyderabad',
      color: 'from-purple-400 to-purple-600'
    }, 
    {
      id: 'hours',
      label: 'Working Hours',
      value: 'Mon - Sat, 9:00 AM - 7:00 PM',
      icon: <FaClock />,
      link: '#',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/beyondmedia',
      color: '#1877F2'
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://x.com/BeyondIMedia',
      color: '#1DA1F2'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/beyondmedia',
      color: '#0A66C2'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/beyondmedia',
      color: '#E4405F'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: <FaYoutube />,
      url: 'https://www.youtube.com/@BeyondPolitics9',
      color: '#FF0000'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      url: 'https://wa.me/+919010079111',
      color: '#25D366'
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

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

    try {
      // Send email using EmailJS
      // Replace with your actual EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.service || 'Not specified',
        subject: formData.subject || 'No subject',
        message: formData.message,
        to_email: 'info@beyondmedia.com', // Your email address
      };

      // Replace with your actual EmailJS service ID, template ID, and public key
      const result = await emailjs.send(
        'service_f774n36', // Replace with your Service ID
        'template_ufnou5d', // Replace with your Template ID
        templateParams,
        't7FzzGIMaFHtnkO5U' // Replace with your Public Key
      );

      if (result.text === 'OK') {
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
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      setFormError('Failed to send message. Please try again later.');

      // Reset after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const infoCardVariants: Variants = {
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
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-20 lg:py-28 bg-purple-900 relative overflow-hidden"
      aria-label="Contact us"
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
          badge="Contact Us"
          title="Let's Start Your Digital Journey"
          subtitle="Ready to transform your digital presence? Reach out to our team and let's create something extraordinary together."
          badgeClassName="bg-purple-500/20 text-purple-200 border-purple-400/30 backdrop-blur-sm"
          titleClassName="text-white"
          subtitleClassName="text-purple-200"
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
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 hover:border-purple-400/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group hover:bg-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-purple-300 text-xs font-medium uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-white font-medium text-sm md:text-base group-hover:text-purple-200 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 shadow-lg"
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
                    className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-purple-300 hover:text-white hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 hover:bg-white/20"
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
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-lg text-center hover:shadow-purple-500/20 transition-all duration-300">
                <div className="text-purple-300 text-xl">⭐</div>
                <div className="text-white font-bold text-sm">4.9/5</div>
                <div className="text-purple-200 text-xs">Client Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-lg text-center hover:shadow-purple-500/20 transition-all duration-300">
                <div className="text-purple-300 text-xl">🚀</div>
                <div className="text-white font-bold text-sm">500+</div>
                <div className="text-purple-200 text-xs">Projects Done</div>
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
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <h3 className="text-white font-poppins font-semibold text-xl md:text-2xl mb-2">
                Send Us a Message
              </h3>
              <p className="text-purple-200 text-sm mb-6">
                Fill in the form below and we'll get back to you within 24 hours.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-purple-200 text-sm font-medium mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      {/* <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 z-10" /> */}
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg"
                        placeholder="John Doe"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-purple-200 text-sm font-medium mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      {/* <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 z-10" /> */}
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg"
                        placeholder="john@example.com"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-purple-200 text-sm font-medium mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      {/* <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 z-10" /> */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-purple-200 text-sm font-medium mb-1.5">
                      Company Name
                    </label>
                    <div className="relative">
                      {/* <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 z-10" /> */}
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-purple-200 text-sm font-medium mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg appearance-none"
                  >
                    <option value="" className="bg-purple-900">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-purple-900 text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-purple-200 text-sm font-medium mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-purple-200 text-sm font-medium mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    {/* <FaComment className="absolute left-3 top-3 text-purple-400 z-10" /> */}
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-purple-300/50 focus:border-purple-400/50 focus:outline-none transition-all duration-300 shadow-lg resize-y"
                      placeholder="Tell us about your project..."
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
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
                    className="text-red-400 text-sm bg-red-500/20 p-3 rounded-lg border border-red-400/30 backdrop-blur-sm"
                  >
                    {formError}
                  </motion.div>
                )}

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm bg-green-500/20 p-3 rounded-lg border border-green-400/30 backdrop-blur-sm flex items-center gap-2"
                  >
                    <FaCheckCircle />
                    Thank you for your message! We'll get back to you within 24 hours.
                  </motion.div>
                )}

                <p className="text-xs text-purple-300 text-center">
                  <FaShieldAlt className="inline mr-1" />
                  Your information is secure and will not be shared with third parties.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 h-64 md:h-80 relative shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.234567890123!2d78.390321!3d17.449876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90d1c5b0c0c5%3A0x8b8b8b8b8b8b8b8b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="w-full h-full"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-500/30 backdrop-blur-sm px-6 py-3 rounded-xl border border-purple-400/30 shadow-lg text-center">
              <p className="text-white text-sm font-medium">
                📍 Madhapur, Hyderabad, Telangana 500081
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-purple-300 text-xs"
        >
          <span className="flex items-center gap-2">
            <FaShieldAlt className="text-purple-400" />
            Secure & Confidential
          </span>
          <span className="flex items-center gap-2">
            <FaHeadset className="text-purple-400" />
            24/7 Support
          </span>
          <span className="flex items-center gap-2">
            <FaClock className="text-purple-400" />
            Fast Response Time
          </span>
          <span className="flex items-center gap-2">
            <FaStar className="text-purple-400" />
            98% Client Satisfaction
          </span>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;