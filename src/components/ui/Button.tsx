// src/components/ui/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  ariaLabel,
  ...props 
}) => {
  const baseStyles: string = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900';

  const variants: Record<string, string> = {
    primary: 'bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 focus:ring-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30',
    secondary: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10',
    accent: 'bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105',
    outline: 'border-2 border-purple-400/50 text-purple-200 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white',
    ghost: 'text-purple-200 hover:text-white hover:bg-white/10',
  };

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };

  const disabledStyles: string = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;