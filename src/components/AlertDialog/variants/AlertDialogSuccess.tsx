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

interface iAlertDialogComp {
  actionButton: string | JSX.Element;
  title: string;
  description: string;
  onSubmit: () => void;
  buttonClassName?: string;
  submitClassName?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AlertDialogSuccess = ({
  actionButton,
  title,
  description,
  onSubmit,
  buttonClassName,
  submitClassName,
  size = 'md',
}: iAlertDialogComp) => {
  const sizeStyles = {
    sm: {
      content: 'max-w-sm p-4',
      title: 'text-base font-semibold',
      description: 'text-sm',
      footer: 'gap-2',
      button: 'px-3 py-1.5 text-sm',
    },
    md: {
      content: 'max-w-lg p-6',
      title: 'text-lg font-semibold',
      description: 'text-sm',
      footer: 'gap-3',
      button: 'px-4 py-2 text-sm',
    },
    lg: {
      content: 'max-w-xl p-8',
      title: 'text-xl font-semibold',
      description: 'text-base',
      footer: 'gap-4',
      button: 'px-6 py-3 text-base',
    },
  };

  const currentSize = sizeStyles[size];

  return (
    <AlertDialogComp>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={cn('border-green-200 text-green-700 hover:bg-green-50', buttonClassName)}>
          {actionButton}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={cn('bg-green-50 border-green-200', currentSize.content)}>
        <AlertDialogHeader>
          <AlertDialogTitle className={cn('text-green-900', currentSize.title)}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className={cn('text-green-700', currentSize.description)}>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={currentSize.footer}>
          <AlertDialogCancel className={cn('border-green-300 text-green-700 hover:bg-green-100', currentSize.button)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={onSubmit} 
            className={cn('bg-green-600 text-white hover:bg-green-700 focus:ring-green-500', currentSize.button, submitClassName)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogComp>
  );
};
