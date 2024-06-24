import { AvatarComp, AvatarFallback, AvatarImage } from './AvatarComp';

interface iDfxAvatar {
  imageSrc: string;
  imageAlt: string;
  fallback: JSX.Element;
}

const Avatar = ({ imageSrc, imageAlt, fallback }: iDfxAvatar) => {
  return (
    <AvatarComp>
      <AvatarImage src={imageSrc} alt={imageAlt} />
      <AvatarFallback>{fallback ? fallback : 'UD'}</AvatarFallback>
    </AvatarComp>
  );
};

export { Avatar, AvatarComp, AvatarFallback, AvatarImage };
