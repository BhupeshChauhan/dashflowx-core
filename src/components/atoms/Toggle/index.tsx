import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iToggleProps {
  label?: JSX.Element | string;
  toggleClassName?: string;
}

export type ToggleProps = ComponentPropsWithRef<'label'> & iToggleProps;

export const Toggle = forwardRef<HTMLLabelElement, ToggleProps>(
  ({ label, toggleClassName, ...props }, ref) => {
    return (
      <label
        className="inline-flex items-center cursor-pointer"
        ref={ref}
        {...props}
      >
        <input type="checkbox" value="" className="sr-only peer" />
        <div
          className={cn(
            "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600",
            toggleClassName
          )}
        ></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      </label>
    );
  }
);
