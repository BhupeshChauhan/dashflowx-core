import { ComponentPropsWithRef, forwardRef } from 'react';
import { FooterOne } from './FooterComp';

interface iFooterActions {
  id: number;
  label: JSX.Element;
}

interface iFooterProps {
  copyRight: JSX.Element;
  actions: Array<iFooterActions>;
  variant: string;
}

export type FooterProps = ComponentPropsWithRef<'div'> & iFooterProps;

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ copyRight, className, actions, variant, ...props }, ref) => {
    return (
      <footer ref={ref} {...props}>
        {variant === 'one' && (
          <FooterOne
            className={className}
            copyRight={copyRight}
            actions={actions}
          />
        )}
      </footer>
    );
  }
);

export { Footer, FooterOne };
