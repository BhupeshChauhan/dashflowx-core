import { ComponentPropsWithRef, forwardRef } from 'react';

interface iAccordionDetailsProps {
  accordionNumber: number;
  activeIndex: number;
  descriptionClassName?: string;
}

export type AccordionDetailsProps = ComponentPropsWithRef<'div'> &
  iAccordionDetailsProps;

const AccordionDetails = forwardRef<HTMLDivElement, AccordionDetailsProps>(
  (
    { children, accordionNumber, activeIndex, descriptionClassName, ...props },
    ref
  ) => {
    return (
      <div
        id={`accordion-collapse-body-${accordionNumber}`}
        className={`${activeIndex === accordionNumber ? 'p-4 mb-2' : 'hidden ' + descriptionClassName}`}
        aria-labelledby={`accordion-collapse-heading-${accordionNumber}`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default AccordionDetails;
