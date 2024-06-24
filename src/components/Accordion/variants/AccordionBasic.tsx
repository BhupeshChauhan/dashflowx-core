import { cn } from '@/lib/utils';
import {
  AccordionComp,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../AccordionComp';

interface iAccordionCompItems {
  value: string;
  title: string | JSX.Element;
  description: string | JSX.Element;
  disabled?: boolean;
}
interface iAccordionComp {
  type: 'single' | 'multiple';
  collapsible: boolean;
  className?: string;
  items: Array<iAccordionCompItems>;
  itemClassName?: string;
  itemTriggerClassName?: string;
  itemContentClassName?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  dir?: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
}
export function AccordionBasic({
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
}: iAccordionComp) {
  return (
    <AccordionComp
      type="single" // Corrected type prop
      collapsible={collapsible}
      className={cn('w-full', className)}
      {...(type === 'single' && {
        defaultValue: defaultValue,
        value: value,
        onValueChange: onValueChange,
      })}
      disabled={disabled}
      dir={dir}
      orientation={orientation}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className={itemClassName}
          disabled={item.disabled}
        >
          <AccordionTrigger className={itemTriggerClassName}>
            {item.title}
          </AccordionTrigger>
          <AccordionContent className={itemContentClassName}>
            {item.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionComp>
  );
}
