import { ComponentPropsWithRef, forwardRef } from 'react';

interface iSelectProps {
  label?: String;
}

export type SelectProps = ComponentPropsWithRef<'div'> & iSelectProps;

export const SelectComp = forwardRef<HTMLDivElement, SelectProps>(
  ({ label, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <label
          htmlFor="select"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {label}
        </label>
        <select
          id="select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {children}
        </select>
      </div>
    );
  }
);

interface iSelectItemsProps {
  selected: boolean;
}

export type SelectItemsProps = ComponentPropsWithRef<'option'> &
  iSelectItemsProps;

export const SelectItems = forwardRef<HTMLOptionElement, SelectItemsProps>(
  ({ selected, children, ...props }, ref) => {
    return (
      <option ref={ref} {...props} selected={selected}>
        {children}
      </option>
    );
  }
);
