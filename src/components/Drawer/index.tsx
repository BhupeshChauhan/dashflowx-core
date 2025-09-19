import * as React from 'react';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

// Type definitions
export interface DrawerAction {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning';
  disabled?: boolean;
}

export interface DrawerProps {
  // Basic props
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  triggerText?: string;
  triggerVariant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning';
  
  // Content props
  title?: string;
  description?: string;
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  
  // Action props
  actions?: DrawerAction[];
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  
  // Position and styling props
  position?: 'left' | 'right' | 'top' | 'bottom';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  overlayClassName?: string;
  
  // Behavior props
  type?: 'default' | 'info' | 'warning' | 'error' | 'success';
  loading?: boolean;
  disabled?: boolean;
}

// Constants
const POSITION_CLASSES = {
  left: {
    container: 'left-0 top-0 h-screen',
    transform: {
      open: 'translate-x-0',
      closed: '-translate-x-full'
    }
  },
  right: {
    container: 'right-0 top-0 h-screen',
    transform: {
      open: 'translate-x-0',
      closed: 'translate-x-full'
    }
  },
  top: {
    container: 'top-0 left-0 w-screen',
    transform: {
      open: 'translate-y-0',
      closed: '-translate-y-full'
    }
  },
  bottom: {
    container: 'bottom-0 left-0 w-screen',
    transform: {
      open: 'translate-y-0',
      closed: 'translate-y-full'
    }
  }
} as const;

const SIZE_CLASSES = {
  sm: {
    horizontal: 'w-64',
    vertical: 'h-64'
  },
  md: {
    horizontal: 'w-80',
    vertical: 'h-80'
  },
  lg: {
    horizontal: 'w-96',
    vertical: 'h-96'
  },
  xl: {
    horizontal: 'w-[28rem]',
    vertical: 'h-[28rem]'
  },
  full: {
    horizontal: 'w-screen',
    vertical: 'h-screen'
  }
} as const;

const TYPE_CONFIGS = {
  default: {
    title: 'Drawer',
    description: '',
    actions: [{ label: 'Close', variant: 'outline' as const, disabled: false }]
  },
  info: {
    title: 'Information',
    description: 'Here is some important information.',
    actions: [{ label: 'Got it', variant: 'primary' as const, disabled: false }]
  },
  warning: {
    title: 'Warning',
    description: 'Please be careful with this action.',
    actions: [{ label: 'Close', variant: 'warning' as const, disabled: false }]
  },
  error: {
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    actions: [{ label: 'Close', variant: 'destructive' as const, disabled: false }]
  },
  success: {
    title: 'Success',
    description: 'Operation completed successfully.',
    actions: [{ label: 'Close', variant: 'success' as const, disabled: false }]
  }
} as const;

// Optimized Drawer Component
const Drawer: React.FC<DrawerProps> = React.memo(({
  open,
  onOpenChange,
  trigger,
  triggerText = 'Open Drawer',
  triggerVariant = 'primary',
  title,
  description,
  children,
  header,
  footer,
  actions,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  position = 'left',
  size = 'md',
  className,
  containerClassName,
  headerClassName,
  footerClassName,
  overlayClassName,
  type = 'default',
  loading = false,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(open ?? false);

  // Sync external open state
  React.useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open);
    }
  }, [open]);

  // Get configuration
  const config = React.useMemo(() => TYPE_CONFIGS[type], [type]);
  const finalTitle = title || config.title;
  const finalDescription = description || config.description;
  const finalActions = actions || config.actions;

  // Get position and size classes
  const positionConfig = React.useMemo(() => POSITION_CLASSES[position], [position]);
  const sizeConfig = React.useMemo(() => SIZE_CLASSES[size], [size]);
  
  const isVertical = position === 'top' || position === 'bottom';
  const sizeClass = isVertical ? sizeConfig.vertical : sizeConfig.horizontal;
  const transformClass = isOpen ? positionConfig.transform.open : positionConfig.transform.closed;

  // Event handlers
  const handleActionClick = React.useCallback((action: DrawerAction) => {
    action.onClick?.();
  }, []);

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  }, [onOpenChange]);

  const handleClose = React.useCallback(() => {
    handleOpenChange(false);
  }, [handleOpenChange]);

  const handleOverlayClick = React.useCallback((e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  }, [closeOnOverlayClick, handleClose]);

  const handleKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (closeOnEscape && e.key === 'Escape') {
      handleClose();
    }
  }, [closeOnEscape, handleClose]);

  // Add escape key listener
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // Render trigger
  const triggerElement = React.useMemo(() => {
    if (trigger) {
      return <div onClick={() => handleOpenChange(true)}>{trigger}</div>;
    }
    
    return (
      <Button 
        variant={triggerVariant} 
        disabled={disabled}
        onClick={() => handleOpenChange(true)}
      >
        {triggerText}
      </Button>
    );
  }, [trigger, triggerText, triggerVariant, disabled, handleOpenChange]);

  // Render actions
  const actionsElement = React.useMemo(() => {
    if (finalActions.length === 0) return null;

    return (
      <div className={cn('flex items-center justify-end gap-2 pt-4 border-t border-gray-200', footerClassName)}>
        {finalActions.map((action, index) => (
          <Button
            key={`${action.label}-${index}`}
            variant={action.variant || 'primary'}
            onClick={() => handleActionClick(action)}
            disabled={action.disabled || disabled || loading}
            className={loading ? 'opacity-50' : ''}
          >
            {action.label}
          </Button>
        ))}
      </div>
    );
  }, [finalActions, handleActionClick, disabled, loading, footerClassName]);

  // Render header
  const headerElement = React.useMemo(() => {
    if (header) return header;
    
    return (
      <div className={cn('flex items-center justify-between pb-4 border-b border-gray-200', headerClassName)}>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">{finalTitle}</h2>
          {finalDescription && (
            <p className="text-sm text-gray-600 mt-1">{finalDescription}</p>
          )}
        </div>
        {showCloseButton && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Close drawer</span>
          </Button>
        )}
      </div>
    );
  }, [header, headerClassName, finalTitle, finalDescription, showCloseButton, handleClose]);

  // Render footer
  const footerElement = React.useMemo(() => {
    if (footer) return footer;
    return actionsElement;
  }, [footer, actionsElement]);

  return (
    <>
      {/* Trigger */}
      {triggerElement}
      
      {/* Drawer - only render when open */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className={cn(
              'fixed inset-0 z-40 bg-black/50 transition-opacity',
              overlayClassName
            )}
            onClick={handleOverlayClick}
          />
          
          {/* Drawer */}
          <div
            className={cn(
              'fixed z-50 bg-white shadow-xl transition-transform duration-300 ease-in-out',
              positionConfig.container,
              sizeClass,
              transformClass,
              className
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
          >
            <div className={cn('flex flex-col h-full p-6', containerClassName)}>
              {headerElement}
              
              <div className="flex-1 overflow-y-auto py-4">
                {children}
              </div>
              
              {footerElement}
            </div>
          </div>
        </>
      )}
    </>
  );
});

Drawer.displayName = 'Drawer';

// DrawerComp for backward compatibility
export const DrawerComp = Drawer;

export { Drawer };