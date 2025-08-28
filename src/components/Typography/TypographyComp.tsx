import * as React from 'react';
import { cn } from '../../lib/utils';

// Simple style mapping without external dependencies
const getTypographyClasses = (props: {
  emphasis?: 'low';
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'thin' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
  underline?: boolean;
}) => {
  const baseClasses = 'w-full';
  
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };
  
  const weightClasses = {
    thin: 'font-thin',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
  };
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const emphasisClasses = {
    low: 'text-gray-600 font-light',
  };
  
  return cn(
    baseClasses,
    props.size && sizeClasses[props.size],
    props.weight && weightClasses[props.weight],
    props.align && alignClasses[props.align],
    props.emphasis && emphasisClasses[props.emphasis],
    props.italic && 'italic',
    props.underline && 'underline underline-offset-2'
  );
};

interface TypographyProps {
  as?: React.ElementType;
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'thin' | 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
  underline?: boolean;
  emphasis?: 'low';
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // Allow other props to pass through
}

export const TypographyComp = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      as: Component = 'span',
      size,
      weight,
      align,
      italic,
      underline,
      emphasis,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const typographyClasses = getTypographyClasses({ size, weight, align, italic, underline, emphasis });

    return (
      <Component
        ref={ref}
        className={cn(typographyClasses, className)}
        {...props}
      />
    );
  }
);
