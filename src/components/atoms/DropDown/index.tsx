import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iDropDownProps {
  isOpen: boolean;
  onClose: () => void;
}

export type DropDownProps = ComponentPropsWithRef<'div'> & iDropDownProps;
export const DropDown = forwardRef<HTMLDivElement, DropDownProps>(
  ({ isOpen, onClose, children, ...props }, ref) => {
    return (
      <div
        id="dropdown"
        ref={ref}
        {...props}
        className={cn(
          'z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700',
          isOpen ? '' : 'hidden'
        )}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {children}
        </ul>
      </div>
    );
  }
);
