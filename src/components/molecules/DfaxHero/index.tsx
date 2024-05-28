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
  element?: JSX.Element;
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
      element,
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
          />
        )}
        {variant === 'two' && (
          <HeroTwo
            heroImage={heroImage}
            className={className}
            actions={actions}
            heading={heading}
            caption={caption}
          />
        )}
        {variant === 'three' && (
          <HeroThree
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
          />
        )}
        {variant === 'four' && (
          <HeroFour
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
          />
        )}
        {variant === 'five' && (
          <HeroFive
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
            element={element}
          />
        )}
        {variant === 'six' && (
          <HeroSix
            actions={actions}
            heading={heading}
            caption={caption}
            className={className}
            element={element}
          />
        )}
      </div>
    );
  }
);
