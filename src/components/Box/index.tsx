import * as React from 'react';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type BoxVariant = 'default' | 'container' | 'card' | 'spacing' | 'flex' | 'grid' | 'responsive' | 'interactive' | 'gradient' | 'animated';
export type BoxSize = 'sm' | 'md' | 'lg' | 'xl';

export interface BoxProps extends ComponentPropsWithRef<'div'> {
  variant?: BoxVariant;
  size?: BoxSize;
}

const getBoxClasses = (variant: BoxVariant, size: BoxSize) => {
  const baseClasses = 'block';
  
  const variantClasses = {
    default: '',
    container: 'container mx-auto px-4 py-8',
    card: 'bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow',
    spacing: 'space-y-4',
    flex: 'flex items-center gap-4',
    grid: 'grid grid-cols-2 gap-4',
    responsive: 'p-4 md:p-6 lg:p-8',
    interactive: 'p-4 border rounded-lg cursor-pointer hover:bg-gray-50',
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-2xl',
    animated: 'p-4 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300'
  };
  
  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg',
    xl: 'p-8 text-xl'
  };
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ 
  variant = 'default', 
  size = 'md',
  className,
  children,
  ...props 
}, ref) => {
  const boxClasses = getBoxClasses(variant, size);
  const finalClasses = className ? `${boxClasses} ${className}` : boxClasses;
  
  return React.createElement('div', {
    ref,
    className: finalClasses,
    ...props
  }, children);
});

Box.displayName = 'Box';

// Add default export for compatibility
export default Box;
