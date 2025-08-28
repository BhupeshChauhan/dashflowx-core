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

export const AvatarRing = ({
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
      ring: 'ring-2 ring-gray-200',
    },
    md: {
      container: 'h-10 w-10',
      text: 'text-sm',
      ring: 'ring-2 ring-gray-200',
    },
    lg: {
      container: 'h-12 w-12',
      text: 'text-base',
      ring: 'ring-3 ring-gray-200',
    },
    xl: {
      container: 'h-16 w-16',
      text: 'text-lg',
      ring: 'ring-4 ring-gray-200',
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <AvatarComp className={cn('ring-offset-2', currentSize.container, currentSize.ring)}>
      <AvatarImage src={imageSrc} alt={imageAlt} className={`m-0 ${imageClassName || ''}`.trim()} />
      <AvatarFallback className={cn('bg-gray-100 text-gray-600', currentSize.text, fallbackClassName)}>
        {fallback || 'UD'}
      </AvatarFallback>
    </AvatarComp>
  );
};
