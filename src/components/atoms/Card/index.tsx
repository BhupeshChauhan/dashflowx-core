import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type CardProps = ComponentPropsWithRef<'div'>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
