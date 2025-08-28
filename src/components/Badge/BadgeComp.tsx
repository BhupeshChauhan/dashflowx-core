import * as React from 'react';

import { cn } from '../../lib/utils';

// Simple variant and size mapping without external dependencies
const getBadgeClasses = (variant: string, size: string) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-colors';
  
  const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  
  return cn(
    baseClasses,
    variantClasses[variant as keyof typeof variantClasses] || variantClasses.outline,
    sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.md
  );
};

export interface BadgeProps {
  variant?: 'outline' | 'secondary' | 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

function BadgeComp({ className, variant = 'outline', size = 'md', children }: BadgeProps) {
  const badgeClasses = getBadgeClasses(variant, size);
  const finalClasses = cn(badgeClasses, className);
  
  return (
    <div className={finalClasses}>
      {children}
    </div>
  );
}

export { BadgeComp };
