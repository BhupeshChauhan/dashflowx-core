import { Card, Grid, Typography } from '@/components';
import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iCardsArray {
  id: number;
  element: JSX.Element;
}

interface iGridProps {
  title?: string;
  description?: JSX.Element;
  cardsArray: Array<iCardsArray>;
  titleClassName?: string;
  gridClassName?: string;
}

export type GridProps = ComponentPropsWithRef<'div'> & iGridProps;

export const DfaxCardGrid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      cardsArray,
      className,
      title,
      description,
      titleClassName,
      gridClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className={className} ref={ref} {...props}>
        {(title || description) && (
          <div className="flex justify-center flex-col mb-2">
            {title && (
              <Typography
                as="h2"
                className={cn('text-2xl font-bold ', titleClassName)}
              >
                {title}
              </Typography>
            )}
            {description && description}
          </div>
        )}
        <Grid className={gridClassName}>
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
