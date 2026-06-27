// src/components/extras/FloatingCall.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

interface FloatingCallProps {
  phoneNumber?: string;
}

const FloatingCall: React.FC<FloatingCallProps> = ({ 
  phoneNumber = '+919876543210' 
}) => {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`tel:${phoneNumber}`}
      className="fixed bottom-40 right-6 z-40 p-3 bg-accent rounded-full shadow-gold-lg hover:shadow-gold transition-all duration-300"
      aria-label="Call us"
    >
      <FaPhone className="text-primary text-2xl" />
    </motion.a>
  );
};

export default FloatingCall;