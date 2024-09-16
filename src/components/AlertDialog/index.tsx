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
  actionButton: string;
  title: string;
  description: string;
  onSubmit: () => void;
  variant: 'basic';
  buttonClassName?: string;
}

const AlertDialog = ({
  actionButton,
  title,
  description,
  onSubmit,
  variant,
  buttonClassName
}: iAlertDialog) => {
  if (variant === 'basic') {
    return (
      <AlertDailogBasic
        actionButton={actionButton}
        title={title}
        description={description}
        onSubmit={onSubmit}
        buttonClassName={buttonClassName}
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
