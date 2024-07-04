import {
  TooltipComp,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './TooltipComp';

interface iTooltip {
  tooltipTrigger: React.ReactNode;
  tooltipContent: React.ReactNode;
  side?: 'bottom' | 'left' | 'right' | 'top';
  align?: 'start' | 'end';
  className?: string;
}

function Tooltip({
  tooltipTrigger,
  tooltipContent,
  side,
  align,
  className,
}: iTooltip) {
  return (
    <TooltipProvider>
      <TooltipComp delayDuration={100}>
        <TooltipTrigger asChild>{tooltipTrigger}</TooltipTrigger>
        <TooltipContent side={side} align={align} className={className}>
          {tooltipContent}
        </TooltipContent>
      </TooltipComp>
    </TooltipProvider>
  );
}

export {
  Tooltip,
  TooltipComp,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
};
