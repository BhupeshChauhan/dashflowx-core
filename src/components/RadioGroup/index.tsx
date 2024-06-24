import { cn } from '@/lib/utils';
import { Label } from '../Label';
import { RadioGroupComp, RadioGroupItem } from './RadioGroupComp';

interface iRadioGroup {
  items: {
    id: string;
    title: string;
    value: string;
    handleClick?: any;
  }[];
  className?: string;
  defaultValue: string;
}

function RadioGroup({ items, defaultValue, className }: iRadioGroup) {
  return (
    <RadioGroupComp defaultValue={defaultValue}>
      {items.map((item) => (
        <div className={cn('flex items-center space-x-2', className)}>
          <RadioGroupItem
            value={item.value}
            id={item.id}
            onClick={item.handleClick}
          />
          <Label htmlFor={item.id}>{item.title}</Label>
        </div>
      ))}
    </RadioGroupComp>
  );
}

export { RadioGroup, RadioGroupComp, RadioGroupItem };
