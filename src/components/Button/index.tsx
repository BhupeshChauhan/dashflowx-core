import React from 'react';

export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'destructive'
  | 'success'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'gradient'
  | 'glass'
  | 'neon'
  | 'soft'
  | 'bordered';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'icon' | 'default';

export type ButtonShape = 'default' | 'rounded' | 'pill' | 'square' | 'circle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

// Helper functions moved outside component for reuse
const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
    case 'secondary':
      return 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500';
    case 'outline':
      return 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500';
    case 'ghost':
      return 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
    case 'destructive':
      return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
    case 'success':
      return 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500';
    case 'warning':
      return 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500';
    case 'info':
      return 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400';
    case 'light':
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300';
    case 'dark':
      return 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-600';
    case 'gradient':
      return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500';
    case 'glass':
      return 'bg-gradient-to-br from-white/90 via-white/70 to-white/50 border border-white/60 text-gray-800 hover:from-white/95 hover:via-white/80 hover:to-white/60 focus:ring-blue-300/50 shadow-lg shadow-gray-200/50 backdrop-blur-sm';
    case 'neon':
      return 'bg-black text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400 shadow-lg shadow-cyan-400/50';
    case 'soft':
      return 'bg-blue-50 text-blue-700 hover:bg-blue-100 focus:ring-blue-300';
    case 'bordered':
      return 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-400';
    default:
      return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  }
};

const getSizeClasses = (size: ButtonSize | null | undefined) => {
  if (!size) return 'px-4 py-2 text-sm';
  
  switch (size) {
    case 'xs':
      return 'px-2 py-1 text-xs';
    case 'sm':
      return 'px-3 py-1.5 text-sm';
    case 'md':
      return 'px-4 py-2 text-sm';
    case 'lg':
      return 'px-6 py-3 text-base';
    case 'xl':
      return 'px-8 py-4 text-lg';
    case '2xl':
      return 'px-10 py-5 text-xl';
    case 'icon':
      return 'p-2'; // For icon-only buttons
    case 'default':
      return 'px-4 py-2 text-sm';
    default:
      return 'px-4 py-2 text-sm';
  }
};

const getShapeClasses = (shape: ButtonShape) => {
  switch (shape) {
    case 'default':
      return 'rounded-md';
    case 'rounded':
      return 'rounded-lg';
    case 'pill':
      return 'rounded-full';
    case 'square':
      return 'rounded-none';
    case 'circle':
      return 'rounded-full';
    default:
      return 'rounded-md';
  }
};

// Working Button component with Tailwind CSS
const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  shape = 'default',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  children = 'Button',
  className = '',
  type = 'button',
  href,
  target,
  rel,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const shapeClasses = getShapeClasses(shape);
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const finalClasses = [
    baseClasses,
    variantClasses,
    sizeClasses,
    shapeClasses,
    widthClasses,
    className
  ].filter(Boolean).join(' ');

  // Handle circle shape for icon-only buttons
  if (shape === 'circle') {
    const circleSize = size === 'xs' ? 'w-8 h-8' : 
                      size === 'sm' ? 'w-10 h-10' : 
                      size === 'md' ? 'w-12 h-12' : 
                      size === 'lg' ? 'w-14 h-14' : 
                      size === 'xl' ? 'w-16 h-16' : 'w-20 h-20';
    
    const circleClasses = `${baseClasses} ${variantClasses} ${circleSize} ${shapeClasses} ${className}`;
    
    return React.createElement('button', {
      ref,
      className: circleClasses,
      disabled: disabled || loading,
      type,
      ...props
    }, icon || children);
  }

  // Handle link buttons
  if (href) {
    return React.createElement('a', {
      href,
      target,
      rel,
      className: finalClasses,
      ...props
    }, [
      loading && React.createElement('svg', {
        key: 'loading',
        className: 'animate-spin -ml-1 mr-2 h-4 w-4',
        fill: 'none',
        viewBox: '0 0 24 24'
      }, [
        React.createElement('circle', {
          className: 'opacity-25',
          cx: '12',
          cy: '12',
          r: '10',
          stroke: 'currentColor',
          strokeWidth: '4'
        }),
        React.createElement('path', {
          className: 'opacity-75',
          fill: 'currentColor',
          d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        })
      ]),
      icon && iconPosition === 'left' && React.createElement('span', { key: 'icon-left' }, icon),
      children,
      icon && iconPosition === 'right' && React.createElement('span', { key: 'icon-right' }, icon)
    ]);
  }

  // Regular button
  return React.createElement('button', {
    ref,
    className: finalClasses,
    disabled: disabled || loading,
    type,
    ...props
  }, [
    loading && React.createElement('svg', {
      key: 'loading',
      className: 'animate-spin -ml-1 mr-2 h-4 w-4',
      fill: 'none',
      viewBox: '0 0 24 24'
    }, [
      React.createElement('circle', {
        className: 'opacity-25',
        cx: '12',
        cy: '12',
        r: '10',
        stroke: 'currentColor',
        strokeWidth: '4'
      }),
      React.createElement('path', {
        className: 'opacity-75',
        fill: 'currentColor',
        d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      })
    ]),
    icon && iconPosition === 'left' && React.createElement('span', { key: 'icon-left' }, icon),
    children,
    icon && iconPosition === 'right' && React.createElement('span', { key: 'icon-right' }, icon)
  ]);
});

// Client-side wrapper to prevent SSR issues
const ClientButton = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="animate-pulse bg-gray-200 rounded p-4 text-center">
        Loading Button...
      </div>
    );
  }

  return <ButtonComponent {...props} ref={ref} />;
});

export const Button = ClientButton;

// Create a ButtonVariants function for backward compatibility
const ButtonVariants = (props?: { variant?: ButtonVariant; size?: ButtonSize | null; shape?: ButtonShape }) => {
  const variant = props?.variant || 'primary';
  const size = props?.size || 'md';
  const shape = props?.shape || 'default';
  
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const shapeClasses = getShapeClasses(shape);
  
  return `${baseClasses} ${variantClasses} ${sizeClasses} ${shapeClasses}`;
};

// Export legacy names for backward compatibility
export const ButtonComp = Button;
export { ButtonVariants };
