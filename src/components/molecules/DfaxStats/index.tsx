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
}

export type DfaxStatsProps = ComponentPropsWithRef<'div'> & iDfaxStatsProps;

export const DfaxStats = forwardRef<HTMLDivElement, DfaxStatsProps>(
  ({ className, statsArray, varient, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex items-center justify-between gap-16 py-16 border-y-4 mt-16',
          className
        )}
        ref={ref}
        {...props}
      >
        {varient === 'one' &&
          statsArray.map((element) => (
            <div className="flex items-center justify-between" key={element.id}>
              <Typography className="text-6xl font-bold">
                {element.stat}
              </Typography>
              <Typography className="text-xl capitalize">
                {element.label}
              </Typography>
            </div>
          ))}
      </div>
    );
  }
);
