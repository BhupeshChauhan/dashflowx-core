import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../lib/types';
import { cn } from '../../lib/utils';
import { forwardRef } from 'react';

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

type TypographyProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C>;

export const TypographyComp = forwardRef(
  <C extends React.ElementType = 'span'>(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TypographyProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';
    const typographyClasses = getTypographyClasses({ align, size, emphasis, italic, underline, weight });

    return (
      <Component
        ref={ref}
        className={cn(typographyClasses, className)}
        {...props}
      />
    );
  }
) as <C extends React.ElementType = 'span'>(
  props: TypographyProps<C> & { ref?: PolymorphicRef<C> }
) => React.ReactElement;
