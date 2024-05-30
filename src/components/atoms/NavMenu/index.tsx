import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iNavMenuProps {
  actions?: JSX.Element;
}
export type NavMenuProps = ComponentPropsWithRef<'ul'> & iNavMenuProps;

export const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          'font-medium sm:bg-white flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0',
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);

export const NavMenuTwo = forwardRef<HTMLUListElement, NavMenuProps>(
  ({ children, actions, className, ...props }, ref) => {
    return (
      <>
        <ul
          ref={ref}
          className={cn(
            'font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0',
            className
          )}
          {...props}
        >
          {children}
        </ul>
        <div className="m-2 md:hidden">{actions}</div>
      </>
    );
  }
);

export const NavMenuThree = forwardRef<HTMLUListElement, NavMenuProps>(
  ({ children, actions, className, ...props }, ref) => {
    return (
      <>
        <ul
          ref={ref}
          className={cn('space-y-2 font-medium', className)}
          {...props}
        >
          {children}
        </ul>
        <div className="m-2 md:hidden">{actions}</div>
      </>
    );
  }
);
