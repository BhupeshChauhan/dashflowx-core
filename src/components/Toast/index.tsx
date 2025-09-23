import * as React from 'react';
import { useToast } from '@/lib/use-toast';
import { Button } from '../Button';
import {
  ToastAction,
  ToastActionElement,
  ToastClose,
  ToastComp,
  ToastDescription,
  ToastProps as BaseToastProps,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './ToastComp';

// Dynamic Toast Props Interface
export interface DynamicToastProps {
  // Content
  title?: string;
  description?: string;
  children?: React.ReactNode;
  
  // Variants and styling
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  
  // Behavior
  duration?: number;
  autoDismiss?: boolean;
  
  // Actions
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'destructive';
  };
  
  
  // Callbacks
  onOpenChange?: (open: boolean) => void;
}

// Toast Variants with default white background
const getVariantClasses = (variant: DynamicToastProps['variant']) => {
  switch (variant) {
    case 'success':
      return 'border-green-200 bg-white text-green-800';
    case 'warning':
      return 'border-yellow-200 bg-white text-yellow-800';
    case 'info':
      return 'border-blue-200 bg-white text-blue-800';
    case 'destructive':
      return 'border-red-200 bg-white text-red-800';
    case 'default':
    default:
      return 'border-gray-200 bg-white text-gray-900';
  }
};

// Toast Sizes
const getSizeClasses = (size: DynamicToastProps['size']) => {
  switch (size) {
    case 'sm':
      return 'p-3 pr-6 text-xs';
    case 'lg':
      return 'p-8 pr-10 text-base';
    case 'md':
    default:
      return 'p-6 pr-8 text-sm';
  }
};


// Dynamic Toast Component
const Toast = React.memo<DynamicToastProps>(({
  title,
  description,
  children,
  variant = 'default',
  size = 'md',
  className = '',
  duration = 5000,
  autoDismiss = true,
  action,
  onOpenChange,
}) => {
  const { toast } = useToast();

  const handleToast = React.useCallback(() => {
    const toastConfig = {
      title,
      description,
      variant: (variant === 'destructive' ? 'destructive' : 'default') as 'default' | 'destructive',
      duration: autoDismiss ? duration : undefined,
      onOpenChange,
      action: action ? (
        <ToastAction 
          altText={action.label}
          onClick={action.onClick}
          className={action.variant === 'destructive' ? 'text-red-600 hover:text-red-700' : ''}
        >
          {action.label}
        </ToastAction>
      ) : undefined,
    };

    toast(toastConfig);
  }, [toast, title, description, variant, duration, autoDismiss, action, onOpenChange]);

  const variantClasses = React.useMemo(() => getVariantClasses(variant), [variant]);
  const sizeClasses = React.useMemo(() => getSizeClasses(size), [size]);

  return (
    <Button
      variant="outline"
      onClick={handleToast}
      className={`${variantClasses} ${sizeClasses} ${className}`}
    >
      {children || 'Show Toast'}
    </Button>
  );
});

Toast.displayName = 'Toast';

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastComp,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastActionElement,
  type BaseToastProps as ToastProps,
};

// Export ToastProviderWrapper for easier imports
export { ToastProviderWrapper } from './ToastProviderWrapper';
