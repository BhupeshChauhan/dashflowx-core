import {
  IconUnOrderList,
  OrderList,
  UnOrderList,
} from '@/components/atoms/List';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iListArray {
  id: number;
  content: string;
  className?: string;
  icon?: JSX.Element;
}

interface iDfaxListPros {
  varients: 'ordered' | 'iconunordered' | 'unordered';
  listArray?: Array<iListArray>;
  listClassName?: string;
}

export type DfaxListProps = ComponentPropsWithRef<'div'> & iDfaxListPros;
export const DfaxList = forwardRef<HTMLDivElement, DfaxListProps>(
  ({ listArray, listClassName, varients, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {varients === 'ordered' ? (
          <OrderList listArray={listArray} listClassName={listClassName} />
        ) : varients === 'iconunordered' ? (
          <IconUnOrderList
            listArray={listArray}
            listClassName={listClassName}
          />
        ) : (
          <UnOrderList listArray={listArray} listClassName={listClassName} />
        )}
      </div>
    );
  }
);
