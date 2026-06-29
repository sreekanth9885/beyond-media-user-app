// src/components/ui/SectionHeading.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { SectionHeadingProps } from '../../types';

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  badge, 
  title, 
  subtitle, 
  className = '',
  centered = true 
}) => {
  // Split title to highlight last word with gold color
  const words: string[] = title.split(' ');
  const lastWord: string = words.pop() || '';
  const restOfTitle: string = words.join(' ');

  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
      >
        {restOfTitle && <span className="text-gray-900">{restOfTitle} </span>}
        <span className="text-blue-600">{lastWord}</span>
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;