import { ComponentPropsWithRef, forwardRef } from 'react';
import { Button } from '../Button';

interface iAccordionSummaryProps {
  expandIcon?: JSX.Element;
  accordionNumber: number;
  activeIndex: number;
  summaryClassName?: string;
  collapseIcon?: JSX.Element;
  onClick?: () => void;
  summaryColor?:
    | 'none'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | undefined;
  summaryVariant?: 'none' | 'solid' | 'outline' | 'ghost' | undefined;
}

export type AccordionSummaryProps = ComponentPropsWithRef<'h2'> &
  iAccordionSummaryProps;
const AccordionSummary = forwardRef<HTMLHeadingElement, AccordionSummaryProps>(
  (
    {
      children,
      expandIcon,
      collapseIcon,
      accordionNumber,
      summaryClassName,
      activeIndex,
      onClick,
      summaryColor,
      summaryVariant,
      ...props
    },
    ref
  ) => {
    return (
      <h2
        id={`accordion-collapse-heading-${accordionNumber}`}
        ref={ref}
        className="mb-2"
        {...props}
      >
        <Button
          variant={summaryVariant || 'outline'}
          color={summaryColor || 'none'}
          className={`p-5 font-medium rtl:text-right rounded-t-xl + ${summaryClassName}`}
          data-accordion-target={`#accordion-collapse-body-${accordionNumber}`}
          aria-expanded="true"
          aria-controls={`accordion-collapse-body-${accordionNumber}`}
          fullwidth={true}
          onClick={onClick}
        >
          <div className="w-full flex items-center rounded-none justify-between">
            {children}
            {expandIcon && collapseIcon && activeIndex === accordionNumber
              ? expandIcon
              : collapseIcon}
          </div>
        </Button>
      </h2>
    );
  }
);

export default AccordionSummary;
