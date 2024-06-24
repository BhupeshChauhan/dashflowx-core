import { X } from 'lucide-react';
import { Button } from '../../Button';
import { AlertComp, AlertDescription, AlertTitle } from '../AlertComp';

interface iDfxAlert {
  prefix?: JSX.Element;
  title: string | JSX.Element;
  description: string | JSX.Element;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export const AlertBasic = ({
  prefix,
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}: iDfxAlert) => {
  return (
    <AlertComp className={className}>
      <div className="flex items-center gap-3">
        {prefix}
        <div>
          <AlertTitle className={titleClassName}>{title}</AlertTitle>
          <AlertDescription className={descriptionClassName}>
            {description}
          </AlertDescription>
        </div>
        <Button variant="ghost" className="p-0 m-0 h-6">
          <X className="h-6 w-6" />
        </Button>
      </div>
    </AlertComp>
  );
};
