import { cn } from '@/lib/utils';
import {
  CarouselApi,
  CarouselComp,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './CarouselComp';

interface iCarousel {
  items: {
    id: string;
    content: JSX.Element;
  }[];
  className?: string;
}

function Carousel({ items, className }: iCarousel) {
  return (
    <CarouselComp className={cn('w-full max-w-xs m-auto', className)}>
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id}>{item.content}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselComp>
  );
}

export {
  Carousel,
  CarouselComp,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
};
