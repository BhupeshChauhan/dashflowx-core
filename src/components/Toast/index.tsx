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
  
  // Positioning
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  
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

// Position Classes
const getPositionClasses = (position: DynamicToastProps['position']) => {
  switch (position) {
    case 'top-left':
      return 'top-4 left-4';
    case 'top-center':
      return 'top-4 left-1/2 transform -translate-x-1/2';
    case 'top-right':
      return 'top-4 right-4';
    case 'bottom-left':
      return 'bottom-4 left-4';
    case 'bottom-center':
      return 'bottom-4 left-1/2 transform -translate-x-1/2';
    case 'bottom-right':
      return 'bottom-4 right-4';
    default:
      return 'top-4 right-4';
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
  position = 'top-right',
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
  const positionClasses = React.useMemo(() => getPositionClasses(position), [position]);

  return (
    <div className={`fixed z-50 ${positionClasses}`}>
      <ToastProvider>
        <ToastViewport />
        <Button
          variant="outline"
          onClick={handleToast}
          className={`${variantClasses} ${sizeClasses} ${className}`}
        >
          {children || 'Show Toast'}
        </Button>
      </ToastProvider>
    </div>
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
