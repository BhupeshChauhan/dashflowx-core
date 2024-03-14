import { ComponentPropsWithRef, forwardRef } from 'react';
import { Typography } from '../Typography';

interface iAccordionProps {
  title: string;
  description: JSX.Element;
  accordionClassName?: string;
  titleClassName?: string;
}

export type AccordionProps = ComponentPropsWithRef<'div'> & iAccordionProps;
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      title,
      description,
      accordionClassName,
      titleClassName,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        id="accordion-collapse"
        data-accordion="collapse"
        className={'bg-white shadow-md p-4 mt-2 ' + accordionClassName}
        ref={ref}
        {...props}
      >
        <div className="flex justify-center flex-col mb-2">
          <Typography
            as="h2"
            className={'text-2xl font-bold ' + titleClassName}
          >
            {title}
          </Typography>
          {description}
        </div>
        {children}
      </div>
    );
  }
);
