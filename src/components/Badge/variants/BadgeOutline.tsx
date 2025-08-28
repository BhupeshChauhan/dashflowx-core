import { cn } from '@/lib/utils';
import { BadgeComp } from '../BadgeComp';
import { TypographyComp as Typography } from '../../Typography/TypographyComp';

interface iDfxBadge {
  textContent: string | JSX.Element;
  icon?: JSX.Element;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: any;
  library?: 'react' | 'next';
  path?: string;
}

export const BadgeOutline = ({
  textContent,
  icon,
  className,
  iconClassName,
  textClassName,
  size = 'md',
  type,
  library = 'react',
  path,
}: iDfxBadge) => {
  const sizeStyles = {
    sm: {
      container: 'px-2 py-1 text-xs',
      icon: 'w-3 h-3',
      gap: 'gap-1',
    },
    md: {
      container: 'px-3 py-1.5 text-sm',
      icon: 'w-4 h-4',
      gap: 'gap-2',
    },
    lg: {
      container: 'px-4 py-2 text-base',
      icon: 'w-5 h-5',
      gap: 'gap-2',
    },
  };

  const currentSize = sizeStyles[size];

  const BadgeContent = () => (
    <>
      {icon && (
        <span className={cn('flex items-center justify-center', currentSize.icon, iconClassName)}>
          {icon}
        </span>
      )}
      <span className={cn('font-medium', textClassName)}>
        {textContent}
      </span>
    </>
  );

  if (type && path) {
    return (
      <Typography
        as={type}
        {...(library === 'react' && { to: path })}
        {...(library === 'next' && { href: path })}
        className={cn(
          'inline-flex items-center rounded-full border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-50',
          currentSize.container,
          currentSize.gap,
          className
        )}
      >
        <BadgeContent />
      </Typography>
    );
  }

  return (
    <BadgeComp 
      variant="outline"
      className={cn(
        'inline-flex items-center rounded-full border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-50',
        currentSize.container,
        currentSize.gap,
        className
      )}
    >
      <BadgeContent />
    </BadgeComp>
  );
};
