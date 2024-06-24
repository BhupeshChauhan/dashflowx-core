import { cn } from '@/lib/utils';
import { PopoverComp, PopoverContent, PopoverTrigger } from './PopoverComp';

interface iPopover {
  popoverTrigger: JSX.Element;
  popoverContent: JSX.Element;
  triggerClassName?: string;
  contentClassName?: string;
  align?: string;
  sideOffset?: number;
}
function Popover({
  popoverTrigger,
  popoverContent,
  triggerClassName,
  contentClassName,
}: iPopover) {
  return (
    <PopoverComp>
      <PopoverTrigger asChild className={triggerClassName}>
        {popoverTrigger}
      </PopoverTrigger>
      <PopoverContent className={cn('w-80', contentClassName)}>
        {popoverContent}
      </PopoverContent>
    </PopoverComp>
  );
}

export { Popover, PopoverComp, PopoverContent, PopoverTrigger };
