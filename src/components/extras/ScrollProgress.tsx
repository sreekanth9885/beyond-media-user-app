// src/components/extras/ScrollProgress.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = (): void => {
      const scrollTop: number = window.scrollY;
      const docHeight: number = document.documentElement.scrollHeight - window.innerHeight;
      const progress: number = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-primary"
      style={{ originX: 0 }}
    >
      <motion.div
        className="h-full bg-gradient-gold"
        style={{ width: `${scrollProgress}%` }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default ScrollProgress;