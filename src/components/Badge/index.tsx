import { BadgeComp, BadgeVariants } from './BadgeComp';
import { TypographyComp as Typography } from '../Typography/TypographyComp';

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
    const baseClasses = `inline-flex items-center rounded-full font-medium cursor-pointer`;
    
    if (library === 'next') {
      return (
        <Typography
          as={type}
          href={path} // Use href for Next.js
          className={`${baseClasses} ${className || ''}`}
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
          className={`${baseClasses} ${className || ''}`}
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
  BadgeComp, 
  BadgeVariants
};
