import { AlertComp, AlertDescription, AlertTitle } from './AlertComp';
import { AlertBasic } from './variants/AlertBasic';

interface iDfxAlert {
  prefix?: JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  variant: 'basic';
}

const Alert = ({
  prefix,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  variant,
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
      />
    );
};

export { Alert, AlertComp, AlertDescription, AlertTitle };
