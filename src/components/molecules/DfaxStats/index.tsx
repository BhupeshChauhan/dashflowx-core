import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Typography } from '../../atoms/Typography';

interface iStatsArrayProps {
  id: number;
  label: String;
  stat: String;
}

interface iDfaxStatsProps {
  statsArray: Array<iStatsArrayProps>;
  varient: String;
  statsClassName: String;
  labelClassName: String;
}

export type DfaxStatsProps = ComponentPropsWithRef<'div'> & iDfaxStatsProps;

export const DfaxStats = forwardRef<HTMLDivElement, DfaxStatsProps>(
  (
    {
      className,
      statsArray,
      varient,
      statsClassName,
      labelClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          'flex items-center justify-between gap-16 py-16 border-y-4 mt-16 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8',
          className
        )}
        ref={ref}
        {...props}
      >
        {varient === 'one' &&
          statsArray.map((element) => (
            <div className="flex items-center justify-between" key={element.id}>
              <Typography
                className={cn(
                  'text-6xl text-primary-500 font-semibold',
                  statsClassName
                )}
              >
                {element.stat}
              </Typography>
              <Typography
                className={cn('text-xl font-thin capitalize', labelClassName)}
              >
                {element.label}
              </Typography>
            </div>
          ))}
      </div>
    );
  }
);
