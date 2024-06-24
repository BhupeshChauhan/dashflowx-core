import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import {
  PopoverComp as Popover,
  PopoverContent,
  PopoverTrigger,
} from '../Popover';

interface iDatePicker {
  mode: 'default' | 'single' | 'multiple' | 'range';
  date: any;
  setDate: any;
  className?: string;
  initialFocus?: boolean;
}

export function DatePicker({
  mode = 'default',
  date,
  setDate,
  className,
  initialFocus,
}: iDatePicker) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode={mode}
          date={date}
          setDate={setDate}
          initialFocus={initialFocus}
        />
      </PopoverContent>
    </Popover>
  );
}
