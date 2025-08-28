import React from 'react';

interface iDfxBadgeSSR {
  textContent: string | React.ReactElement;
  variant?: 'outline' | 'secondary' | 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactElement;
  iconClassName?: string;
  textClassName?: string;
}

/**
 * SSR-Safe Badge Component
 * This version is designed to work in server-side rendering contexts
 * without any browser-specific APIs
 */
export const BadgeSSR: React.FC<iDfxBadgeSSR> = ({
  textContent,
  variant = 'outline',
  size = 'md',
  className,
  icon,
  iconClassName,
  textClassName,
}) => {
  // Simple class generation without external dependencies
  const getClasses = () => {
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
    
    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;
  };

  return (
    <div className={getClasses()}>
      {icon && <span className={`mr-2 ${iconClassName || ''}`}>{icon}</span>}
      <span className={textClassName || ''}>{textContent}</span>
    </div>
  );
};

export default BadgeSSR;
