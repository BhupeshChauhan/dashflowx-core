import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';
export type NavMenuProps = ComponentPropsWithRef<'ul'>;
export const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          'font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700',
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);