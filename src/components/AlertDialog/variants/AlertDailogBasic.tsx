import { cn } from '@/lib/utils';
import { Button } from '../../Button';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogComp,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../AlertDialogComp';

interface iAlertDailogComp {
  actionButton: string | JSX.Element;
  title: string;
  description: string;
  onSubmit: () => void;
  buttonClassName?: string;
  submitClassName?: string;
}

export const AlertDailogBasic = ({
  actionButton,
  title,
  description,
  onSubmit,
  buttonClassName,
  submitClassName
}: iAlertDailogComp) => {
  return (
    <AlertDialogComp>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={buttonClassName}>{actionButton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-white'>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit} className={cn('text-white',submitClassName)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogComp>
  );
};
