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
  const baseStyles: string = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary';
  
  const variants: Record<string, string> = {
    primary: 'bg-primary-light text-white hover:bg-primary-dark focus:ring-gold-500/50',
    gold: 'bg-gradient-gold text-primary font-semibold hover:shadow-gold-lg focus:ring-gold-500/50 hover:scale-105',
    outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-primary focus:ring-gold-500/50',
    ghost: 'text-gray-300 hover:text-accent hover:bg-gold-500/10 focus:ring-gold-500/50',
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