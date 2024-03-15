import { ComponentPropsWithRef, forwardRef } from 'react';

export type DropDownItemsProps = ComponentPropsWithRef<'li'>;

export const DropDownItems = forwardRef<HTMLLIElement, DropDownItemsProps>(
  ({ children, ...props }, ref) => {
    return (
      <li ref={ref} {...props}>
        {children}
      </li>
    );
  }
);
