import { BadgeComp, ButtonVariants } from './BadgeComp';
import { BadgeDefault } from './variants/BadgeDefault';
import { BadgeSecondary } from './variants/BadgeSecondary';
import { BadgeOutline } from './variants/BadgeOutline';
import { BadgeDestructive } from './variants/BadgeDestructive';

interface iDfxBadge {
  type: any;
  icon?: JSX.Element;
  textContent: string | JSX.Element;
  library?: 'react' | 'next';
  path?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  variant: 'outline' | 'secondary' | 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = ({
  type,
  icon,
  textContent,
  library = 'react',
  path,
  className,
  iconClassName,
  textClassName,
  variant = 'outline',
  size = 'md',
}: iDfxBadge) => {
  if (variant === 'default') {
    return (
      <BadgeDefault
        textContent={textContent}
        icon={icon}
        className={className}
        iconClassName={iconClassName}
        textClassName={textClassName}
        size={size}
        type={type}
        library={library}
        path={path}
      />
    );
  }
  
  if (variant === 'secondary') {
    return (
      <BadgeSecondary
        textContent={textContent}
        icon={icon}
        className={className}
        iconClassName={iconClassName}
        textClassName={textClassName}
        size={size}
      />
    );
  }
  
  if (variant === 'outline') {
    return (
      <BadgeOutline
        textContent={textContent}
        icon={icon}
        className={className}
        iconClassName={iconClassName}
        textClassName={textClassName}
        size={size}
        type={type}
        library={library}
        path={path}
      />
    );
  }
  
  if (variant === 'destructive') {
    return (
      <BadgeDestructive
        textContent={textContent}
        icon={icon}
        className={className}
        iconClassName={iconClassName}
        textClassName={textClassName}
        size={size}
        type={type}
        library={library}
        path={path}
      />
    );
  }
  
  return (
    <BadgeOutline
      textContent={textContent}
      icon={icon}
      className={className}
      iconClassName={iconClassName}
      textClassName={textClassName}
      size={size}
      type={type}
      library={library}
      path={path}
    />
  );
};

export { 
  Badge, 
  BadgeComp, 
  ButtonVariants as BadgeVariants,
  BadgeDefault,
  BadgeSecondary,
  BadgeOutline,
  BadgeDestructive
};
