import { ComponentPropsWithRef, forwardRef } from 'react';
import { SelectComp, SelectItems } from './SelectComp';

interface iSelectItems {
  id: string;
  itemElement: JSX.Element;
}

interface iSelect {
  isOpen: boolean;
  onClose: () => void;
  selected: string;
  items: Array<iSelectItems>;
}

export type SelectProps = ComponentPropsWithRef<'div'> & iSelect;

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ items, selected, ...props }, ref) => {
    return (
      <SelectComp ref={ref} {...props}>
        {items.map((item) => (
          <SelectItems selected={selected === item.id}>
            {item.itemElement}
          </SelectItems>
        ))}
      </SelectComp>
    );
  }
);

export { Select, SelectComp, SelectItems };
