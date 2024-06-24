import { cn } from '@/lib/utils';
import { CalendarComp } from './CalendarComp';

interface iCalendar {
  mode: 'default' | 'single' | 'multiple' | 'range';
  date: any;
  setDate: any;
  className?: string;
  initialFocus?: boolean;
}

function Calendar({
  mode = 'default',
  date,
  setDate,
  className,
  initialFocus = false,
}: iCalendar) {
  return (
    <CalendarComp
      mode={mode}
      selected={date}
      onSelect={setDate}
      className={cn('rounded-md border shadow', className)}
      initialFocus={initialFocus}
    />
  );
}

export { Calendar, CalendarComp };
