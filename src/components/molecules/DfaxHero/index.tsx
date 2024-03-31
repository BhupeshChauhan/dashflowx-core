import { HeroOne, HeroThree, HeroTwo } from '@/components';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iDHeroOneProps {
  heroImage: string;
  actions: JSX.Element;
  heading: JSX.Element;
  caption: JSX.Element;
  variant: string;
}

export type HeroOneProps = ComponentPropsWithRef<'div'> & iDHeroOneProps;

export const DfaxHero = forwardRef<HTMLDivElement, HeroOneProps>(
  (
    { heroImage, className, actions, heading, caption, variant, ...props },
    ref
  ) => {
    return (
      <div ref={ref} {...props}>
        {variant === 'one' && (
          <HeroOne
            heroImage={heroImage}
            actions={actions}
            heading={heading}
            caption={caption}
          />
        )}
        {variant === 'two' && (
          <HeroTwo
            heroImage={heroImage}
            actions={actions}
            heading={heading}
            caption={caption}
          />
        )}
        {variant === 'three' && (
          <HeroThree actions={actions} heading={heading} caption={caption} />
        )}
      </div>
    );
  }
);
