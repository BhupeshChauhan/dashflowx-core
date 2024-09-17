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
} from './AlertDialogComp';
import { AlertDailogBasic } from './variants/AlertDailogBasic';

interface iAlertDialog {
  actionButton: string| JSX.Element;
  title: string;
  description: string;
  onSubmit: () => void;
  variant: 'basic';
  buttonClassName?: string;
  submitClassName?: string;
}

const AlertDialog = ({
  actionButton,
  title,
  description,
  onSubmit,
  variant,
  buttonClassName,
  submitClassName
}: iAlertDialog) => {
  if (variant === 'basic') {
    return (
      <AlertDailogBasic
        actionButton={actionButton}
        title={title}
        description={description}
        onSubmit={onSubmit}
        buttonClassName={buttonClassName}
        submitClassName={submitClassName}
      />
    );
  }
  return null;
};

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogComp,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
};
