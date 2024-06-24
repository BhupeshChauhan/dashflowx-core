import { cn } from '@/lib/utils';
import { AspectRatioComp } from './AspectRatioComp';

interface iAspectRatio {
  ratio: number;
  children: JSX.Element;
  className?: string;
}

function AspectRatio({ ratio, children, className }: iAspectRatio) {
  return (
    <AspectRatioComp ratio={ratio} className={cn('bg-muted', className)}>
      {children}
    </AspectRatioComp>
  );
}

export { AspectRatio, AspectRatioComp };
