// src/components/ui/Container.tsx
import React from 'react';
import type { ContainerProps } from '../../types';

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  fluid = false 
}) => {
  return (
    <div className={`${fluid ? 'px-4 sm:px-6 lg:px-8' : 'container mx-auto px-4 sm:px-6 lg:px-8'} ${className}`}>
      {children}
    </div>
  );
};

export default Container;