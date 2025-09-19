import * as React from 'react';
import { Button } from '../Button';
import {
  DialogClose,
  DialogComp,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './DialogComp';

// Type definitions
export interface DialogAction {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success' | 'warning';
  disabled?: boolean;
}

export interface DialogProps {
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
  
  // Action props
  actions?: DialogAction[];
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  
  // Styling props
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  
  // Behavior props
  type?: 'default' | 'confirmation' | 'info' | 'warning' | 'error';
  loading?: boolean;
  disabled?: boolean;
}

// Constants
const SIZE_CLASSES: Record<NonNullable<DialogProps['size']>, string> = {
  sm: 'sm:max-w-[300px]',
  md: 'sm:max-w-[425px]',
  lg: 'sm:max-w-[600px]',
  xl: 'sm:max-w-[800px]',
  full: 'sm:max-w-[95vw]',
};

const TYPE_CONFIGS = {
  default: {
    title: 'Dialog',
    description: '',
    actions: [{ label: 'Close', variant: 'outline' as const, disabled: false }]
  },
  confirmation: {
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed?',
    actions: [
      { label: 'Cancel', variant: 'outline' as const, disabled: false },
      { label: 'Confirm', variant: 'destructive' as const, disabled: false }
    ]
  },
  info: {
    title: 'Information',
    description: 'Here is some important information.',
    actions: [{ label: 'Got it', variant: 'primary' as const, disabled: false }]
  },
  warning: {
    title: 'Warning',
    description: 'Please be careful with this action.',
    actions: [
      { label: 'Cancel', variant: 'outline' as const, disabled: false },
      { label: 'Continue', variant: 'destructive' as const, disabled: false }
    ]
  },
  error: {
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    actions: [{ label: 'Close', variant: 'destructive' as const, disabled: false }]
  }
} as const;

// Optimized Dialog Component
const Dialog: React.FC<DialogProps> = React.memo(({
  open,
  onOpenChange,
  trigger,
  triggerText = 'Open Dialog',
  triggerVariant = 'outline',
  title,
  description,
  children,
  actions,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  size = 'md',
  contentClassName,
  headerClassName,
  footerClassName,
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
  const sizeClass = SIZE_CLASSES[size];

  // Event handlers
  const handleActionClick = React.useCallback((action: DialogAction) => {
    action.onClick?.();
  }, []);

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  }, [onOpenChange]);

  const handlePointerDownOutside = React.useCallback((e: Event) => {
    if (!closeOnOverlayClick) {
      e.preventDefault();
    }
  }, [closeOnOverlayClick]);

  const handleEscapeKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (!closeOnEscape) {
      e.preventDefault();
    }
  }, [closeOnEscape]);

  // Render trigger
  const triggerElement = React.useMemo(() => {
    if (trigger) {
      return <DialogTrigger asChild>{trigger}</DialogTrigger>;
    }
    
    return (
      <DialogTrigger asChild>
        <Button variant={triggerVariant} disabled={disabled}>
          {triggerText}
        </Button>
      </DialogTrigger>
    );
  }, [trigger, triggerText, triggerVariant, disabled]);

  // Render actions
  const actionsElement = React.useMemo(() => {
    if (finalActions.length === 0) return null;

    return (
      <DialogFooter className={footerClassName}>
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
      </DialogFooter>
    );
  }, [finalActions, handleActionClick, disabled, loading, footerClassName]);

  // Render content
  const contentElement = React.useMemo(() => {
    if (!children) return null;
    
    return <div className="py-4">{children}</div>;
  }, [children]);

  return (
    <DialogComp open={isOpen} onOpenChange={handleOpenChange}>
      {triggerElement}
      
      <DialogContent 
        className={`${sizeClass} ${contentClassName || ''}`}
        onPointerDownOutside={handlePointerDownOutside}
        onEscapeKeyDown={handleEscapeKeyDown}
      >
        <DialogHeader className={headerClassName}>
          <DialogTitle>{finalTitle}</DialogTitle>
          {finalDescription && (
            <DialogDescription>{finalDescription}</DialogDescription>
          )}
        </DialogHeader>

        {contentElement}
        {actionsElement}

        {showCloseButton && (
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="absolute right-4 top-4">
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </DialogComp>
  );
});

Dialog.displayName = 'Dialog';

export {
  Dialog,
  DialogClose,
  DialogComp,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};