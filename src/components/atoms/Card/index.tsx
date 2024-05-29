import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

export type CardProps = ComponentPropsWithRef<'div'>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        {children}
      </div>
    );
  }
);
