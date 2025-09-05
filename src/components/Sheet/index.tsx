import React, { useCallback, useMemo } from 'react';
import { Button, type ButtonVariant } from '../Button';
import { cn } from '@/lib/utils';
import {
  SheetClose,
  SheetComp,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from './SheetComp';

// Types and Interfaces
export type SheetBgColor = 
  | 'white' 
  | 'gray' 
  | 'slate' 
  | 'zinc' 
  | 'neutral' 
  | 'stone' 
  | 'red' 
  | 'orange' 
  | 'amber' 
  | 'yellow' 
  | 'lime' 
  | 'green' 
  | 'emerald' 
  | 'teal' 
  | 'cyan' 
  | 'sky' 
  | 'blue' 
  | 'indigo' 
  | 'violet' 
  | 'purple' 
  | 'fuchsia' 
  | 'pink' 
  | 'rose'
  | 'transparent'
  | 'glass'
  | 'gradient';

export type SheetBgIntensity = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export interface SheetAction {
  id: string;
  label: string;
  variant?: ButtonVariant;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  closeOnClick?: boolean;
}

export interface SheetConfig {
  id: string;
  title: string;
  description?: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  actions?: SheetAction[];
  content?: React.ReactNode;
  className?: string;
  showClose?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  backgroundColor?: SheetBgColor;
  backgroundIntensity?: SheetBgIntensity;
  customBgColor?: string;
}

export interface DynamicSheetProps {
  config: SheetConfig;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onActionClick?: (actionId: string) => void;
  className?: string;
}

// Predefined Sheet Configurations
const SHEET_CONFIGS = {
  info: {
    id: 'info',
    title: 'Information',
    description: 'This is an informational sheet.',
    side: 'right' as const,
    size: 'md' as const,
    backgroundColor: 'blue' as const,
    backgroundIntensity: '50' as const,
    content: (
      <div className="py-4 space-y-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900">Information</h4>
          <p className="text-blue-700 text-sm mt-1">
            This is a simple informational sheet with custom content.
          </p>
        </div>
      </div>
    ),
    actions: [
      {
        id: 'ok',
        label: 'OK',
        variant: 'primary' as const,
        type: 'button' as const,
        closeOnClick: true,
      },
    ],
  },
  confirmation: {
    id: 'confirmation',
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed? This action cannot be undone.',
    side: 'top' as const,
    size: 'sm' as const,
    backgroundColor: 'yellow' as const,
    backgroundIntensity: '50' as const,
    content: (
      <div className="py-4">
        <div className="flex items-center space-x-2 text-yellow-600">
          <span className="text-lg">⚠️</span>
          <p className="text-sm">Are you sure you want to proceed?</p>
        </div>
      </div>
    ),
    actions: [
      {
        id: 'confirm',
        label: 'Confirm',
        variant: 'destructive' as const,
        type: 'button' as const,
        closeOnClick: true,
      },
      {
        id: 'cancel',
        label: 'Cancel',
        variant: 'outline' as const,
        type: 'button' as const,
        closeOnClick: true,
      },
    ],
  },
  settings: {
    id: 'settings',
    title: 'Settings',
    description: 'Configure your application settings.',
    side: 'right' as const,
    size: 'lg' as const,
    backgroundColor: 'gray' as const,
    backgroundIntensity: '50' as const,
    content: (
      <div className="py-4 space-y-6">
        <div className="space-y-4">
          <h4 className="font-semibold">Appearance</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Dark Mode</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Notifications</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold">Privacy</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Analytics</span>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Crash Reports</span>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
          </div>
        </div>
      </div>
    ),
    actions: [
      {
        id: 'save',
        label: 'Save',
        variant: 'primary' as const,
        type: 'button' as const,
        closeOnClick: true,
      },
      {
        id: 'cancel',
        label: 'Cancel',
        variant: 'outline' as const,
        type: 'button' as const,
        closeOnClick: true,
      },
    ],
  },
};

// Utility Functions
const getSizeClasses = (size: string) => {
  switch (size) {
    case 'sm':
      return 'sm:max-w-sm';
    case 'md':
      return 'sm:max-w-md';
    case 'lg':
      return 'sm:max-w-lg';
    case 'xl':
      return 'sm:max-w-xl';
    case 'full':
      return 'sm:max-w-full';
    default:
      return 'sm:max-w-md';
  }
};

const getBackgroundClasses = (backgroundColor?: SheetBgColor, backgroundIntensity?: SheetBgIntensity, customBgColor?: string) => {
  // Handle special cases first
  if (backgroundColor === 'transparent') {
    return 'bg-transparent';
  }
  
  if (backgroundColor === 'glass') {
    return 'bg-white/10 backdrop-blur-md border border-white/20';
  }
  
  if (backgroundColor === 'gradient') {
    return 'bg-gradient-to-br from-blue-50 to-purple-50';
  }
  
  if (backgroundColor === 'white') {
    return 'bg-white';
  }
  
  // Handle custom color
  if (customBgColor) {
    return '';
  }
  
  // Handle all other colors with intensity
  if (backgroundColor && backgroundIntensity) {
    return `bg-${backgroundColor}-${backgroundIntensity}`;
  }
  
  // Default fallback
  return 'bg-background';
};

// Main Dynamic Sheet Component
function DynamicSheet({ 
  config, 
  trigger, 
  open, 
  onOpenChange, 
  onActionClick,
  className 
}: DynamicSheetProps) {
  const sizeClasses = useMemo(() => getSizeClasses(config.size || 'md'), [config.size]);
  const backgroundClasses = useMemo(() => getBackgroundClasses(config.backgroundColor, config.backgroundIntensity, config.customBgColor), [config.backgroundColor, config.backgroundIntensity, config.customBgColor]);

  const defaultTrigger = useMemo(() => (
    <Button variant="outline">
      Open {config.title}
    </Button>
  ), [config.title]);

  const handleActionClick = useCallback((action: SheetAction) => {
    // Call the action's onClick handler if provided
    action.onClick?.();
    
    // Call the global action click handler
    onActionClick?.(action.id);
    
    // Close the sheet if closeOnClick is true
    if (action.closeOnClick) {
      onOpenChange?.(false);
    }
  }, [onActionClick, onOpenChange]);

  return (
    <SheetComp open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        {trigger || defaultTrigger}
      </SheetTrigger>
      <SheetContent 
        side={config.side || 'right'}
        className={cn(sizeClasses, backgroundClasses, config.className, className)}
        style={config.customBgColor ? { backgroundColor: config.customBgColor } : undefined}
      >
        {config.showHeader !== false && (
          <SheetHeader>
            <SheetTitle>{config.title}</SheetTitle>
            {config.description && (
              <SheetDescription>{config.description}</SheetDescription>
            )}
          </SheetHeader>
        )}
        
        <div className="flex-1">
          {config.content}
        </div>
        
        {config.showFooter !== false && config.actions && config.actions.length > 0 && (
          <SheetFooter>
            {config.actions.map((action) => (
              <Button
                key={action.id}
                type={action.type || 'button'}
                variant={action.variant || 'primary'}
                disabled={action.disabled}
                onClick={() => handleActionClick(action)}
              >
                {action.label}
              </Button>
            ))}
          </SheetFooter>
        )}
      </SheetContent>
    </SheetComp>
  );
}

// Convenience function to create sheet from config
function createSheet(config: SheetConfig) {
  return (props: Omit<DynamicSheetProps, 'config'>) => (
    <DynamicSheet {...props} config={config} />
  );
}

// Pre-configured Sheet Components
const InfoSheet = createSheet(SHEET_CONFIGS.info);
const SettingsSheet = createSheet(SHEET_CONFIGS.settings);
const ConfirmationSheet = createSheet(SHEET_CONFIGS.confirmation);

// Legacy Sheet component for backward compatibility
function Sheet() {
  return <DynamicSheet config={SHEET_CONFIGS.info} />;
}

export {
  Sheet,
  DynamicSheet,
  InfoSheet,
  SettingsSheet,
  ConfirmationSheet,
  createSheet,
  SheetClose,
  SheetComp,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
