import { AlertComp, AlertDescription, AlertTitle } from './AlertComp';
import { AlertBasic } from './variants/AlertBasic';
import { AlertSuccess } from './variants/AlertSuccess';
import { AlertWarning } from './variants/AlertWarning';
import { AlertError } from './variants/AlertError';
import { AlertInfo } from './variants/AlertInfo';

interface iDfxAlert {
  prefix?: JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant: 'basic' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}

const Alert = ({
  prefix,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  variant,
  size = 'md',
}: iDfxAlert) => {
  if (variant === 'basic')
    return (
      <AlertBasic
        className={className}
        title={title}
        description={description}
        prefix={prefix}
        titleClassName={titleClassName}
        descriptionClassName={descriptionClassName}
        size={size}
      />
    );
  
  if (variant === 'success')
    return (
      <AlertSuccess
        className={className}
        title={title}
        description={description}
        prefix={prefix}
        titleClassName={titleClassName}
        descriptionClassName={descriptionClassName}
        size={size}
      />
    );
  
  if (variant === 'warning')
    return (
      <AlertWarning
        className={className}
        title={title}
        description={description}
        prefix={prefix}
        titleClassName={titleClassName}
        descriptionClassName={descriptionClassName}
        size={size}
      />
    );
  
  if (variant === 'error')
    return (
      <AlertError
        className={className}
        title={title}
        description={description}
        prefix={prefix}
        titleClassName={titleClassName}
        descriptionClassName={descriptionClassName}
        size={size}
      />
    );
  
  if (variant === 'info')
    return (
      <AlertInfo
        className={className}
        title={title}
        description={description}
        prefix={prefix}
        titleClassName={titleClassName}
        descriptionClassName={descriptionClassName}
        size={size}
      />
    );
};

export { 
  Alert, 
  AlertComp, 
  AlertDescription, 
  AlertTitle,
  AlertBasic,
  AlertSuccess,
  AlertWarning,
  AlertError,
  AlertInfo
};
