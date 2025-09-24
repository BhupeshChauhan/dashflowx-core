'use client';

import * as React from 'react';
import { useToast } from '@/lib/use-toast';
import { Button } from '../Button';
import { ToastAction } from '../Toast';
import { ToasterComp } from './ToasterComp';

// Dynamic Toaster Props Interface
export interface DynamicToasterProps {
  // Content
  title?: string;
  description?: string;
  children?: React.ReactNode;
  
  // Variants and styling
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  
  // Background color options
  bgColor?: 'white' | 'gray' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink' | 'indigo' | 'teal' | 'orange' | 'cyan' | 'lime' | 'emerald' | 'violet' | 'fuchsia' | 'rose' | 'sky' | 'amber' | 'stone' | 'neutral' | 'zinc' | 'slate';
  bgIntensity?: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  
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
  
  // Toaster specific
  showToaster?: boolean;
  maxToasts?: number;
  expand?: boolean;
  richColors?: boolean;
  closeButton?: boolean;
}

// Dynamic Toaster Component
const Toaster = React.memo<DynamicToasterProps>(({
  title = 'Scheduled: Catch up',
  description = 'Friday, February 10, 2023 at 5:57 PM',
  children,
  variant = 'default',
  size = 'md',
  className = '',
  bgColor,
  bgIntensity = '50',
  duration = 5000,
  autoDismiss = true,
  action,
  onOpenChange,
  showToaster = true,
}) => {
  const { toast } = useToast();

  const handleToast = React.useCallback(() => {
    // Generate background color classes if bgColor is provided
    const bgColorClass = bgColor ? `bg-${bgColor}-${bgIntensity}` : '';
    const textColorClass = bgColor ? `text-${bgColor}-${parseInt(bgIntensity) + 300}` : '';
    const borderColorClass = bgColor ? `border-${bgColor}-${parseInt(bgIntensity) + 100}` : '';
    
    const toastConfig = {
      title,
      description,
      variant: variant as 'default' | 'destructive' | 'success' | 'warning' | 'info',
      duration: autoDismiss ? duration : undefined,
      onOpenChange,
      className: `${bgColorClass} ${textColorClass} ${borderColorClass}`.trim(),
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
  }, [toast, title, description, variant, bgColor, bgIntensity, duration, autoDismiss, action, onOpenChange]);

  const getVariantClasses = React.useCallback(() => {
    switch (variant) {
      case 'success':
        return 'border-green-200 bg-white text-green-800 hover:bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-white text-yellow-800 hover:bg-yellow-50';
      case 'info':
        return 'border-blue-200 bg-white text-blue-800 hover:bg-blue-50';
      case 'destructive':
        return 'border-red-200 bg-white text-red-800 hover:bg-red-50';
      case 'default':
      default:
        return 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50';
    }
  }, [variant]);

  const getSizeClasses = React.useCallback(() => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-xs';
      case 'lg':
        return 'px-6 py-3 text-base';
      case 'md':
      default:
        return 'px-4 py-2 text-sm';
    }
  }, [size]);

  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();

  return (
    <div className="space-y-4">
      {showToaster && <ToasterComp />}
      <Button
        variant="outline"
        onClick={handleToast}
        className={`${variantClasses} ${sizeClasses} ${className}`}
      >
        {children || 'Add to calendar'}
      </Button>
    </div>
  );
});

Toaster.displayName = 'Toaster';

export { Toaster, ToasterComp };
