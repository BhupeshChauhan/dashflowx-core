import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iListArray {
  id: number;
  content: string;
  className?: string;
  icon?: JSX.Element;
}
interface iOrderListProps {
  listArray?: Array<iListArray>;
  listClassName?: string;
}

export type OrderListProps = ComponentPropsWithRef<'ol'> & iOrderListProps;

interface iUnOrderListProps {
  listArray?: Array<iListArray>;
  listClassName?: string;
}
export type UnOrderListProps = ComponentPropsWithRef<'ul'> & iUnOrderListProps;

export const OrderList = forwardRef<HTMLOListElement, OrderListProps>(
  ({ listArray, listClassName, ...props }, ref) => {
    return (
      <ol
        className={cn(
          'max-w-md space-y-1 list-decimal list-inside',
          listClassName
        )}
        ref={ref}
        {...props}
      >
        {listArray?.map((element) => (
          <li key={element.id} className={element.className}>
            {element.content}
          </li>
        ))}
      </ol>
    );
  }
);

export const UnOrderList = forwardRef<HTMLUListElement, UnOrderListProps>(
  ({ listArray, listClassName, ...props }, ref) => {
    return (
      <ul
        className={cn(
          'max-w-md space-y-1 list-disc list-inside',
          listClassName
        )}
        ref={ref}
        {...props}
      >
        {listArray?.map((element) => (
          <li key={element.id} className={element.className}>
            {element.content}
          </li>
        ))}
      </ul>
    );
  }
);

export const IconUnOrderList = forwardRef<HTMLUListElement, UnOrderListProps>(
  ({ listArray, listClassName, ...props }, ref) => {
    return (
      <ul
        className={cn('max-w-md space-y-1 list-inside', listClassName)}
        ref={ref}
        {...props}
      >
        {listArray?.map((element) => (
          <li
            key={element.id}
            className={cn('flex items-center', element.className)}
          >
            {element.icon}
            {element.content}
          </li>
        ))}
      </ul>
    );
  }
);
