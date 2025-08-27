import { X } from 'lucide-react';
import { Button } from '../../Button';
import { AlertComp, AlertDescription, AlertTitle } from '../AlertComp';
import { cn } from '@/lib/utils';

interface iDfxAlert {
  prefix?: JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AlertError = ({
  prefix,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  size = 'md',
}: iDfxAlert) => {
  const sizeStyles = {
    sm: {
      container: 'p-3 text-sm',
      icon: 'w-4 h-4',
      title: 'text-sm font-medium',
      description: 'text-sm',
      button: 'h-5',
      closeIcon: 'h-5 w-5',
    },
    md: {
      container: 'p-4 text-sm',
      icon: 'w-5 h-5',
      title: 'text-base font-semibold',
      description: 'text-sm',
      button: 'h-6',
      closeIcon: 'h-6 w-6',
    },
    lg: {
      container: 'p-5 text-base',
      icon: 'w-6 h-6',
      title: 'text-lg font-semibold',
      description: 'text-base',
      button: 'h-7',
      closeIcon: 'h-7 w-7',
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <AlertComp 
      className={cn('bg-red-50 border-red-200 text-red-800', currentSize.container, className)}
    >
      <div className="flex items-center gap-3">
        {prefix && (
          <div className={cn('text-red-500 flex-shrink-0', currentSize.icon)}>
            {prefix}
          </div>
        )}
        <div className="flex-1">
          <AlertTitle className={cn('text-red-900', currentSize.title, titleClassName)}>
            {title}
          </AlertTitle>
          <AlertDescription className={cn('text-red-700', currentSize.description, descriptionClassName)}>
            {description}
          </AlertDescription>
        </div>
        <Button variant="ghost" className={cn('p-0 m-0 text-red-500 hover:text-red-700', currentSize.button)}>
          <X className={currentSize.closeIcon} />
        </Button>
      </div>
    </AlertComp>
  );
};
