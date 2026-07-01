// src/components/extras/FloatingCall.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';

interface FloatingCallProps {
  phoneNumber?: string;
}

const FloatingCall: React.FC<FloatingCallProps> = ({ 
  phoneNumber = '+91 9010079111'
}) => {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`tel:${phoneNumber}`}
      className="fixed bottom-40 right-6 z-40 p-3 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
      aria-label="Call us"
    >
      <FaPhone className="text-white text-2xl" />
    </motion.a>
  );
};

export default FloatingCall;