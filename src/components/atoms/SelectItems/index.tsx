import { ComponentPropsWithRef, forwardRef } from 'react';

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
