import { cn } from '@/lib/utils';
import { SliderComp } from './SliderComp';

type SliderProps = React.ComponentProps<typeof SliderComp>;

function Slider({ className, ...props }: SliderProps) {
  return (
    <SliderComp
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn('w-[60%]', className)}
      {...props}
    />
  );
}

export { Slider, SliderComp };
