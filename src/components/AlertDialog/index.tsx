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
  onCancel: () => void;
  onSubmit: () => void;
  variant: 'basic';
}

const AlertDialog = ({
  actionButton,
  title,
  description,
  onCancel,
  onSubmit,
  variant,
}: iAlertDialog) => {
  if (variant === 'basic') {
    return (
      <AlertDailogBasic
        actionButton={actionButton}
        title={title}
        description={description}
        onCancel={onCancel}
        onSubmit={onSubmit}
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
