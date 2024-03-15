import { Select } from '@/components/atoms/Select';
import { SelectItems } from '@/components/atoms/SelectItems';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iDfaxSelectItems {
  id: string;
  itemElement: JSX.Element;
}

interface iDfaxSelect {
  isOpen: boolean;
  onClose: () => void;
  selected: string;
  items: Array<iDfaxSelectItems>;
}

export type DfaxSelectProps = ComponentPropsWithRef<'div'> & iDfaxSelect;

export const DfaxSelect = forwardRef<HTMLDivElement, DfaxSelectProps>(
  ({ items, selected, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <Select>
          {items.map((item) => (
            <SelectItems selected={selected === item.id}>
              {item.itemElement}
            </SelectItems>
          ))}
        </Select>
      </div>
    );
  }
);
