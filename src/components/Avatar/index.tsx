import { AvatarComp, AvatarFallback, AvatarImage } from './AvatarComp';
import { AvatarBasic } from './variants/AvatarBasic';
import { AvatarRounded } from './variants/AvatarRounded';
import { AvatarSquare } from './variants/AvatarSquare';
import { AvatarRing } from './variants/AvatarRing';

interface iDfxAvatar {
  imageSrc: string;
  imageAlt: string;
  fallback: JSX.Element;
  variant?: 'basic' | 'rounded' | 'square' | 'ring';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar = ({ 
  imageSrc, 
  imageAlt, 
  fallback, 
  variant = 'basic',
  size = 'md'
}: iDfxAvatar) => {
  if (variant === 'basic') {
    return (
      <AvatarBasic
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        fallback={fallback}
        size={size}
      />
    );
  }
  
  if (variant === 'rounded') {
    return (
      <AvatarRounded
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        fallback={fallback}
        size={size}
      />
    );
  }
  
  if (variant === 'square') {
    return (
      <AvatarSquare
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        fallback={fallback}
        size={size}
      />
    );
  }
  
  if (variant === 'ring') {
    return (
      <AvatarRing
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        fallback={fallback}
        size={size}
      />
    );
  }
  
  return (
    <AvatarBasic
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      fallback={fallback}
      size={size}
    />
  );
};

export { 
  Avatar, 
  AvatarComp, 
  AvatarFallback, 
  AvatarImage,
  AvatarBasic,
  AvatarRounded,
  AvatarSquare,
  AvatarRing
};
