import {
  AccordionComp,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './AccordionComp';
import { AccordionBasic } from './variants/AccordionBasic';
import { AccordionOne } from './variants/AccordionOne';

interface iDfxAccordionItems {
  value: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
  disabled?: boolean;
}
interface iDfxAccordion {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
  items: Array<iDfxAccordionItems>;
  itemClassName?: string;
  itemTriggerClassName?: string;
  itemContentClassName?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
  variant: 'basic' | 'one';
}

const Accordion = ({
  type = 'single',
  collapsible = true,
  className,
  items,
  itemClassName,
  itemTriggerClassName,
  itemContentClassName,
  defaultValue,
  value,
  onValueChange,
  disabled,
  dir,
  orientation,
  variant,
}: iDfxAccordion) => {
  if (variant === 'basic') {
    return (
      <AccordionBasic
        type={type}
        collapsible={collapsible}
        className={className}
        items={items}
        itemClassName={itemClassName}
        itemTriggerClassName={itemTriggerClassName}
        itemContentClassName={itemContentClassName}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        dir={dir}
        orientation={orientation}
      />
    );
  }
  if (variant === 'one') {
    return (
      <AccordionOne
        type={type}
        collapsible={collapsible}
        className={className}
        items={items}
        itemClassName={itemClassName}
        itemTriggerClassName={itemTriggerClassName}
        itemContentClassName={itemContentClassName}
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        dir={dir}
        orientation={orientation}
      />
    );
  }

  return null;
};

export {
  Accordion,
  AccordionBasic,
  AccordionComp,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
};
