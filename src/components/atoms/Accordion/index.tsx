import { ComponentPropsWithRef, forwardRef } from 'react';
import { Typography } from '../Typography';

interface iAccordionProps {
  title: string;
  description: JSX.Element;
  accordionClassName?: string;
}

export type AccordionProps = ComponentPropsWithRef<'div'> & iAccordionProps;
const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ title, description, accordionClassName, children, ...props }, ref) => {
    return (
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className={'bg-white shadow-md p-4 mt-2 ' + accordionClassName}
        ref={ref}
        {...props}
      >
        <div className="flex justify-center flex-col mb-2">
          <Typography as="h2" className="text-2xl font-bold">
            {title}
          </Typography>
          {description}
        </div>
        {children}
      </div>
    );
  }
);

export default Accordion;
