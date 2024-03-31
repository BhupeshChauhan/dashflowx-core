import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type GridProps = ComponentPropsWithRef<'div'>;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('grid grid-cols-2 md:grid-cols-3 gap-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
