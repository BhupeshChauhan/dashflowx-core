import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iGridProps {
  baseCol: string;
  xsCol: string;
  mdCol: string;
  lgCol: string;
  xlCol: string;
  gap: string;
}

export type GridProps = ComponentPropsWithRef<'div'> & iGridProps;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    { baseCol, xsCol, mdCol, lgCol, xlCol, children, gap, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          `grid grid-cols-${baseCol} gap-${gap}`,
          xsCol ? `xs:grid-cols-${xsCol}` : '',
          mdCol ? `md:grid-cols-${mdCol}` : '',
          lgCol ? `lg:grid-cols-${lgCol}` : '',
          xlCol ? `xl:grid-cols-${xlCol}` : '',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
