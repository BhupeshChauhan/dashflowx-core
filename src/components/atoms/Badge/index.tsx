import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iBadgeProps {
  message?: string;
}

export type BadgeProps = ComponentPropsWithRef<'span'> & iBadgeProps;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ message, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'bg-slate-100 text-primary-500 w-32 text-xs font-medium me-2 px-2.5 py-0.5 rounded ',
          className
        )}
        {...props}
      >
        {message}
      </span>
    );
  }
);
