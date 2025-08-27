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
import { AlertDialogSuccess } from './variants/AlertDialogSuccess';
import { AlertDialogWarning } from './variants/AlertDialogWarning';
import { AlertDialogError } from './variants/AlertDialogError';
import { AlertDialogInfo } from './variants/AlertDialogInfo';

interface iAlertDialog {
  actionButton: string| JSX.Element;
  title: string;
  description: string;
  onSubmit: () => void;
  variant: 'basic' | 'success' | 'warning' | 'error' | 'info';
  buttonClassName?: string;
  submitClassName?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AlertDialog = ({
  actionButton,
  title,
  description,
  onSubmit,
  variant,
  buttonClassName,
  submitClassName,
  size = 'md',
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
        size={size}
      />
    );
  }
  
  if (variant === 'success') {
    return (
      <AlertDialogSuccess
        actionButton={actionButton}
        title={title}
        description={description}
        onSubmit={onSubmit}
        buttonClassName={buttonClassName}
        submitClassName={submitClassName}
        size={size}
      />
    );
  }
  
  if (variant === 'warning') {
    return (
      <AlertDialogWarning
        actionButton={actionButton}
        title={title}
        description={description}
        onSubmit={onSubmit}
        buttonClassName={buttonClassName}
        submitClassName={submitClassName}
        size={size}
      />
    );
  }
  
  if (variant === 'error') {
    return (
      <AlertDialogError
        actionButton={actionButton}
        title={title}
        description={description}
        onSubmit={onSubmit}
        buttonClassName={buttonClassName}
        submitClassName={submitClassName}
        size={size}
      />
    );
  }
  
  if (variant === 'info') {
    return (
      <AlertDialogInfo
        actionButton={actionButton}
        title={title}
        description={description}
        onSubmit={onSubmit}
        buttonClassName={buttonClassName}
        submitClassName={submitClassName}
        size={size}
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
  AlertDailogBasic,
  AlertDialogSuccess,
  AlertDialogWarning,
  AlertDialogError,
  AlertDialogInfo,
};
