import {
  HeroFive,
  HeroFour,
  HeroOne,
  HeroSix,
  HeroThree,
  HeroTwo,
} from '@/components';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iDHeroOneProps {
  heroImage?: JSX.Element;
  actions: JSX.Element;
  heading: JSX.Element;
  caption: JSX.Element;
  variant: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
  subElement?: JSX.Element;
  textSecClassName: string;
}

export type HeroOneProps = ComponentPropsWithRef<'div'> & iDHeroOneProps;

export const DfaxHero = forwardRef<HTMLDivElement, HeroOneProps>(
  (
    {
      heroImage,
      className,
      actions,
      heading,
      caption,
      variant,
      subElement,
      textSecClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} {...props}>
        {variant === 'one' && (
          <HeroOne
            heroImage={heroImage}
            className={className}
            actions={actions}
            heading={heading}
            caption={caption}
            textSecClassName={textSecClassName}
          />
        )}
        {variant === 'two' && (
          <HeroTwo
            heroImage={heroImage}
            className={className}
            actions={actions}
            heading={heading}
            caption={caption}
            textSecClassName={textSecClassName}
          />
        )}
        {variant === 'three' && (
          <HeroThree
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
            textSecClassName={textSecClassName}
          />
        )}
        {variant === 'four' && (
          <HeroFour
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
            textSecClassName={textSecClassName}
          />
        )}
        {variant === 'five' && (
          <HeroFive
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
            subElement={subElement}
            textSecClassName={textSecClassName}
          />
        )}
        {variant === 'six' && (
          <HeroSix
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
            subElement={subElement}
            textSecClassName={textSecClassName}
          />
        )}
      </div>
    );
  }
);
