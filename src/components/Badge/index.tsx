import { cn } from '@/lib/utils';
import { TypographyComp as Typography } from '../Typography/TypographyComp';
import { BadgeComp, ButtonVariants } from './BadgeComp';

interface iDfxBadge {
  type: any;
  icon?: JSX.Element;
  textContent: string | JSX.Element;
  library?: 'react' | 'next';
  path?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant: 'outline' | 'secondary' | 'default' | 'destructive';
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
}: iDfxBadge) => {
  return (
    <Typography
      as={type}
      {...(library === 'react' && {
        to: path,
      })}
      {...(library === 'next' && {
        href: path,
      })}
      className={cn(
        ButtonVariants({ variant: variant }),
        'flex gap-2 px-4 py-2',
        variant === 'outline' ? 'hover:bg-slate-100' : '',
        className
      )}
    >
      {icon && (
        <span
          className={cn(
            'p-2 text-primary bg-gray-300 rounded-full w-full h-full',
            iconClassName
          )}
        >
          {icon}
        </span>
      )}
      <span
        className={cn(
          'p-2 w-full h-full',
          variant === 'default' ? 'text-white' : '',
          textClassName
        )}
      >
        {textContent}
      </span>
    </Typography>
  );
};

export { Badge, BadgeComp, ButtonVariants as BadgeVariants };
