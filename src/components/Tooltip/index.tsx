import { Button } from '../Button';
import {
  TooltipComp,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './TooltipComp';

function Tooltip() {
  return (
    <TooltipProvider>
      <TooltipComp>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
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
