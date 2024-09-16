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
  actionButton: string;
  title: string;
  description: string;
  onSubmit: () => void;
}

export const AlertDailogBasic = ({
  actionButton,
  title,
  description,
  onSubmit,
}: iAlertDailogComp) => {
  return (
    <AlertDialogComp>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{actionButton}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-white'>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogComp>
  );
};
