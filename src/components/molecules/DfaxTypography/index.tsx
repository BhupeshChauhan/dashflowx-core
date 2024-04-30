import { Typography } from '@/components';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iDHeroOneProps {
  size?: 'base' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | null;
  weight?: 'bold' | 'thin' | 'normal' | 'medium' | 'semibold' | 'black' | null;
  align?: 'center' | 'left' | 'right' | null;
  italic?: boolean | null;
  underline?: boolean;
  emphasis?: 'low' | null;
  variant?: string;
}

export type HeroOneProps = ComponentPropsWithRef<'div'> & iDHeroOneProps;

export const DfaxTypography = forwardRef<HTMLDivElement, HeroOneProps>(
  (
    {
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      className,
      variant,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} {...props}>
        {variant === 'one' && (
          <Typography
            as="h1"
            className={className}
            size={size}
            weight={weight}
            align={align}
            italic={italic}
            underline={underline}
            emphasis={emphasis}
          >
            {children}
          </Typography>
        )}
        {variant === 'two' && (
          <Typography
            as="h2"
            className={className}
            size={size}
            weight={weight}
            align={align}
            italic={italic}
            underline={underline}
            emphasis={emphasis}
          >
            {children}
          </Typography>
        )}
        {variant === 'three' && (
          <Typography
            as="h3"
            className={className}
            size={size}
            weight={weight}
            align={align}
            italic={italic}
            underline={underline}
            emphasis={emphasis}
          >
            {children}
          </Typography>
        )}
        {variant === 'four' && (
          <Typography
            as="h4"
            className={className}
            size={size}
            weight={weight}
            align={align}
            italic={italic}
            underline={underline}
            emphasis={emphasis}
          >
            {children}
          </Typography>
        )}
        {variant === 'five' && (
          <Typography
            as="h5"
            className={className}
            size={size}
            weight={weight}
            align={align}
            italic={italic}
            underline={underline}
            emphasis={emphasis}
          >
            {children}
          </Typography>
        )}
        {variant === 'six' && (
          <Typography
            as="h6"
            className={className}
            size={size}
            weight={weight}
            align={align}
            italic={italic}
            underline={underline}
            emphasis={emphasis}
          >
            {children}
          </Typography>
        )}
        {variant === 'para' && (
          <Typography
            as="p"
            className={className}
            size={size}
            weight={weight}
            align={align}
            italic={italic}
            underline={underline}
            emphasis={emphasis}
          >
            {children}
          </Typography>
        )}
      </div>
    );
  }
);
