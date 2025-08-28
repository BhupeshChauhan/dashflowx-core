import { cn } from '@/lib/utils';
import { AvatarComp, AvatarFallback, AvatarImage } from '../AvatarComp';

interface iDfxAvatar {
  imageSrc: string;
  imageAlt: string;
  fallback: JSX.Element;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  imageClassName?: string;
  fallbackClassName?: string;
}

export const AvatarRounded = ({
  imageSrc,
  imageAlt,
  fallback,
  size = 'md',
  imageClassName,
  fallbackClassName,
}: iDfxAvatar) => {
  const sizeStyles = {
    sm: {
      container: 'h-8 w-8',
      text: 'text-xs',
    },
    md: {
      container: 'h-10 w-10',
      text: 'text-sm',
    },
    lg: {
      container: 'h-12 w-12',
      text: 'text-base',
    },
    xl: {
      container: 'h-16 w-16',
      text: 'text-lg',
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <AvatarComp className={cn('rounded-lg', currentSize.container)}>
      <AvatarImage src={imageSrc} alt={imageAlt} className={imageClassName} />
      <AvatarFallback className={cn('bg-blue-100 text-blue-600 rounded-lg', currentSize.text, fallbackClassName)}>
        {fallback || 'UD'}
      </AvatarFallback>
    </AvatarComp>
  );
};
