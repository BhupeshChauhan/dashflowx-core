import { Card, Grid, Typography } from '@/components';
import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iCardsArray {
  id: number;
  element: JSX.Element;
}

interface iGridProps {
  baseCol: string;
  xsCol?: string;
  mdCol?: string;
  lgCol?: string;
  xlCol?: string;
  gap: string;
  title: string;
  description: JSX.Element;
  cardsArray: Array<iCardsArray>;
  titleClassName?: string;
}

export type GridProps = ComponentPropsWithRef<'div'> & iGridProps;

export const DfaxCardGrid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      baseCol,
      xsCol,
      mdCol,
      lgCol,
      xlCol,
      gap,
      cardsArray,
      className,
      title,
      description,
      titleClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
        {...props}
      >
        <div className="flex justify-center flex-col mb-2">
          <Typography
            as="h2"
            className={cn('text-2xl font-bold ', titleClassName)}
          >
            {title}
          </Typography>
          {description}
        </div>
        <Grid
          baseCol={baseCol}
          xsCol={xsCol || ''}
          mdCol={mdCol || ''}
          lgCol={lgCol || ''}
          xlCol={xlCol || ''}
          gap={gap}
        >
          {cardsArray.map((card) => (
            <div className="h-auto max-w-full rounded-lg" key={card.id}>
              <Card>{card.element}</Card>
            </div>
          ))}
        </Grid>
      </div>
    );
  }
);
