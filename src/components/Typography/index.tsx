import { ComponentPropsWithRef, forwardRef } from 'react';
import { TypographyComp } from './TypographyComp';

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

const Typography = forwardRef<HTMLDivElement, HeroOneProps>(
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
          <TypographyComp
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
          </TypographyComp>
        )}
        {variant === 'two' && (
          <TypographyComp
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
          </TypographyComp>
        )}
        {variant === 'three' && (
          <TypographyComp
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
          </TypographyComp>
        )}
        {variant === 'four' && (
          <TypographyComp
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
          </TypographyComp>
        )}
        {variant === 'five' && (
          <TypographyComp
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
          </TypographyComp>
        )}
        {variant === 'six' && (
          <TypographyComp
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
          </TypographyComp>
        )}
        {variant === 'para' && (
          <TypographyComp
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
          </TypographyComp>
        )}
      </div>
    );
  }
);

export { Typography, TypographyComp };
