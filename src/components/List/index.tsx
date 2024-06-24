import { ComponentPropsWithRef, forwardRef } from 'react';
import { IconUnOrderList, OrderList, UnOrderList } from './ListComp';

interface iListArray {
  id: number;
  content: string;
  className?: string;
  icon?: JSX.Element;
}

interface iListPros {
  varients: 'ordered' | 'iconunordered' | 'unordered';
  listArray?: Array<iListArray>;
  listClassName?: string;
}

export type ListProps = ComponentPropsWithRef<'div'> & iListPros;
const List = forwardRef<HTMLDivElement, ListProps>(
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

export { IconUnOrderList, List, OrderList, UnOrderList };
