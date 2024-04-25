import { FooterOne } from '@/components';
import { ComponentPropsWithRef, forwardRef } from 'react';

interface iFooterActions {
  id: number;
  label: JSX.Element;
}

interface iDfaxFooterProps {
  copyRight: JSX.Element;
  actions: Array<iFooterActions>;
  variant: string;
}

export type DfaxFooterProps = ComponentPropsWithRef<'div'> & iDfaxFooterProps;
export const DfaxFooter = forwardRef<HTMLDivElement, DfaxFooterProps>(
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
