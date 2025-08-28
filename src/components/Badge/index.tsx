import { BadgeComp } from './BadgeComp';
import { TypographyComp as Typography } from '../Typography/TypographyComp';
import { cn } from '../../lib/utils';

interface iDfxBadge {
  type?: any;
  icon?: JSX.Element;
  textContent: string | JSX.Element;
  library?: 'react' | 'next';
  path?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant: 'outline' | 'secondary' | 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = ({
  type,
  icon,
  textContent,
  library = 'react',
  path,
  className,
  iconClassName,
  textClassName,
  variant = 'outline',
  size = 'md',
}: iDfxBadge) => {
  // Handle interactive badges with Typography component
  if (type && path) {
    const baseClasses = 'inline-flex items-center rounded-full font-medium transition-colors cursor-pointer';
    
    // Get variant and size classes like BadgeComp
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
    
    const badgeClasses = cn(
      baseClasses,
      variantClasses[variant] || variantClasses.outline,
      sizeClasses[size] || sizeClasses.md,
      className
    );
    
    if (library === 'next') {
      return (
        <Typography
          as={type}
          href={path} // Use href for Next.js
          className={badgeClasses}
        >
          {icon && <span className={`mr-2 ${iconClassName || ''}`}>{icon}</span>}
          <span className={textClassName || ''}>{textContent}</span>
        </Typography>
      );
    } else {
      return (
        <Typography
          as={type}
          to={path} // Use to for React Router
          className={badgeClasses}
        >
          {icon && <span className={`mr-2 ${iconClassName || ''}`}>{icon}</span>}
          <span className={textClassName || ''}>{textContent}</span>
        </Typography>
      );
    }
  }

  // Use BadgeComp for all non-interactive badges
  return (
    <BadgeComp 
      variant={variant}
      size={size}
      className={className}
    >
      {icon && <span className={`mr-2 ${iconClassName || ''}`}>{icon}</span>}
      <span className={textClassName || ''}>{textContent}</span>
    </BadgeComp>
  );
};

export { 
  Badge, 
  BadgeComp
};
