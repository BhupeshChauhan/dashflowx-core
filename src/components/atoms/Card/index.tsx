import { ComponentPropsWithRef, forwardRef } from 'react';

export type CardProps = ComponentPropsWithRef<'div'>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        {...props}
      >
        {children}
      </div>
    );
  }
);
