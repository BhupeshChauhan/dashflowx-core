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

export const AlertDialogInfo = ({
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
        <Button variant="outline" className={cn('border-blue-200 text-blue-700 hover:bg-blue-50', buttonClassName)}>
          {actionButton}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className={cn('bg-blue-50 border-blue-200', currentSize.content)}>
        <AlertDialogHeader>
          <AlertDialogTitle className={cn('text-blue-900', currentSize.title)}>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className={cn('text-blue-700', currentSize.description)}>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className={currentSize.footer}>
          <AlertDialogCancel className={cn('border-blue-300 text-blue-700 hover:bg-blue-100', currentSize.button)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction 
            onClick={onSubmit} 
            className={cn('bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500', currentSize.button, submitClassName)}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogComp>
  );
};
