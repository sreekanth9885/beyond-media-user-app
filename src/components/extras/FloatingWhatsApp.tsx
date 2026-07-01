// src/components/extras/FloatingWhatsApp.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ 
  phoneNumber = '+91 9010079111'
}) => {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-6 z-40 p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg hover:shadow-2xl hover:shadow-green-500/30 hover:from-green-600 hover:to-green-800 transition-all duration-300"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </motion.a>
  );
};

export default FloatingWhatsApp;