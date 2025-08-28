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

export const AvatarSquare = ({
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
    <AvatarComp className={cn('rounded-none', currentSize.container)}>
      <AvatarImage src={imageSrc} alt={imageAlt} className={`m-0 ${imageClassName || ''}`.trim()} />
      <AvatarFallback className={cn('bg-gray-100 text-gray-600 rounded-none', currentSize.text, fallbackClassName)}>
        {fallback || 'UD'}
      </AvatarFallback>
    </AvatarComp>
  );
};
