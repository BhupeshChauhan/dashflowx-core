import { Button } from '@/components';
import { DropDown } from '@/components/atoms/DropDown';
import { DropDownItems } from '@/components/atoms/DropDownItems';
import { ComponentPropsWithRef, forwardRef, useState } from 'react';

interface iDfaxDropDownItems {
  id: string;
  itemElement: JSX.Element;
}

interface iDfaxDropDown {
  isOpen: boolean;
  onClose: () => void;
  items: Array<iDfaxDropDownItems>;
}

export type DfaxDropDownProps = ComponentPropsWithRef<'div'> & iDfaxDropDown;

export const DfaxDropDown = forwardRef<HTMLDivElement, DfaxDropDownProps>(
  ({ items, ...props }, ref) => {
    const [OpenDropDown, setOpenDropDown] = useState(false);
    const handleOpenDropDown = () => {
      setOpenDropDown(!OpenDropDown);
    };
    const handleCloseDropDown = () => {
      setOpenDropDown(false);
    };
    return (
      <div ref={ref} {...props}>
        <Button variant="solid" color="primary" onClick={handleOpenDropDown}>
          Open DropDown
        </Button>
        <DropDown onClose={handleCloseDropDown} isOpen={OpenDropDown}>
          {items.map((item) => (
            <DropDownItems key={item.id}>{item.itemElement}</DropDownItems>
          ))}
        </DropDown>
      </div>
    );
  }
);
