import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../../lib/utils';

const BadgeVariants = cva(
  'inline-flex items-center rounded-full font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        outline: 'border border-gray-300 bg-white text-gray-800 hover:bg-gray-50',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1.5 text-sm',
        lg: 'px-4 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof BadgeVariants> {}

function BadgeComp({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(BadgeVariants({ variant, size }), className)} {...props} />
  );
}

export { BadgeComp, BadgeVariants };
