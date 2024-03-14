import { Accordion, AccordionDetails, AccordionSummary } from '@/components';
import { useState } from 'react';

interface iDfaxAccordionItem {
  id: number;
  title: JSX.Element;
  description: JSX.Element;
  expandIcon: JSX.Element;
  collapseIcon: JSX.Element;
  summaryClassName?: string;
  summaryColor?:
    | 'none'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | undefined;
  summaryVariant?: 'none' | 'solid' | 'outline' | 'ghost' | undefined;
  descriptionClassName?: string;
}

export interface iDfaxAccordion {
  title: string;
  description: JSX.Element;
  accordionClassName?: string;
  titleClassName?: string;
  items?: Array<iDfaxAccordionItem>;
}

export const DfaxAccordion: React.FC<iDfaxAccordion> = ({
  title,
  description,
  accordionClassName,
  titleClassName,
  items,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(items);
  return (
    <Accordion
      title={title}
      description={description}
      accordionClassName={accordionClassName}
      titleClassName={titleClassName}
    >
      {items?.map((item) => {
        const {
          id,
          title,
          description,
          expandIcon,
          collapseIcon,
          summaryColor,
          summaryVariant,
          summaryClassName,
          descriptionClassName,
        } = item;
        return (
          <div key={id}>
            <AccordionSummary
              activeIndex={activeIndex}
              accordionNumber={id}
              onClick={() => {
                if (activeIndex === id) {
                  setActiveIndex(0);
                } else {
                  setActiveIndex(id);
                }
              }}
              expandIcon={expandIcon}
              collapseIcon={collapseIcon}
              summaryColor={summaryColor}
              summaryVariant={summaryVariant}
              summaryClassName={summaryClassName}
            >
              {title}
            </AccordionSummary>
            <AccordionDetails
              accordionNumber={id}
              activeIndex={activeIndex}
              descriptionClassName={descriptionClassName}
            >
              {description}
            </AccordionDetails>
          </div>
        );
      })}
    </Accordion>
  );
};
