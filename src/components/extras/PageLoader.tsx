// src/components/extras/PageLoader.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface PageLoaderProps {
  className?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-purple-900 ${className}`}
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-purple-400/30 border-t-purple-400 rounded-full"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <span className="text-2xl font-poppins font-bold">
            <span className="text-white">BEYOND</span>
            <span className="text-yellow-300"> I</span>
            <span className="text-purple-300"> MEDIA</span>
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-2 text-sm text-purple-300/60"
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageLoader;