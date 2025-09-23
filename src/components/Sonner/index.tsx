import * as React from 'react';

// Completely standalone HTML/CSS Sonner/Toast component for Markdoc compatibility
// No sonner library, no ES module dependencies, pure HTML/CSS implementation

// Simple utility function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Toast types
export interface ToastProps {
  title?: string;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  cancel?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  showCloseButton?: boolean;
  onClose?: () => void;
}

// Toast state management
let toastId = 0;
const toasts: Array<ToastProps & { id: number }> = [];
const toastListeners: Array<(toasts: Array<ToastProps & { id: number }>) => void> = [];

// Clear all toasts function
function clearAllToasts() {
  toasts.length = 0;
  notifyListeners();
}

// Create isolated toast state for each instance
function createIsolatedToastState() {
  let instanceToastId = 0;
  const instanceToasts: Array<ToastProps & { id: number }> = [];
  const instanceListeners: Array<(toasts: Array<ToastProps & { id: number }>) => void> = [];

  const addToast = (toastData: ToastProps) => {
    const id = ++instanceToastId;
    const newToast = { ...toastData, id };
    instanceToasts.push(newToast);
    instanceListeners.forEach(listener => listener([...instanceToasts]));

    // Auto remove after duration
    const duration = toastData.duration || 5000;
    setTimeout(() => {
      removeToast(id);
    }, duration);

    return id;
  };

  const removeToast = (id: number) => {
    const index = instanceToasts.findIndex(toast => toast.id === id);
    if (index > -1) {
      instanceToasts.splice(index, 1);
      instanceListeners.forEach(listener => listener([...instanceToasts]));
    }
  };

  const clearAllToasts = () => {
    instanceToasts.length = 0;
    instanceListeners.forEach(listener => listener([...instanceToasts]));
  };

  const toast = {
    success: (title: string, options?: Partial<ToastProps>) =>
      addToast({ ...options, title, type: 'success' }),
    error: (title: string, options?: Partial<ToastProps>) =>
      addToast({ ...options, title, type: 'error' }),
    warning: (title: string, options?: Partial<ToastProps>) =>
      addToast({ ...options, title, type: 'warning' }),
    info: (title: string, options?: Partial<ToastProps>) =>
      addToast({ ...options, title, type: 'info' }),
    default: (title: string, options?: Partial<ToastProps>) =>
      addToast({ ...options, title, type: 'default' }),
  };

  return {
    toasts: instanceToasts,
    listeners: instanceListeners,
    toast,
    clearAllToasts,
  };
}

// Toast functions
const toast = {
  success: (title: string, options?: Partial<ToastProps>) => 
    addToast({ ...options, title, type: 'success' }),
  error: (title: string, options?: Partial<ToastProps>) => 
    addToast({ ...options, title, type: 'error' }),
  warning: (title: string, options?: Partial<ToastProps>) => 
    addToast({ ...options, title, type: 'warning' }),
  info: (title: string, options?: Partial<ToastProps>) => 
    addToast({ ...options, title, type: 'info' }),
  default: (title: string, options?: Partial<ToastProps>) => 
    addToast({ ...options, title, type: 'default' }),
};

// Add toast function
function addToast(toastData: ToastProps) {
  const id = ++toastId;
  const newToast = { ...toastData, id };
  toasts.push(newToast);
  notifyListeners();
  
  // Auto remove after duration
  const duration = toastData.duration || 5000;
  setTimeout(() => {
    removeToast(id);
  }, duration);
  
  return id;
}

// Remove toast function
function removeToast(id: number) {
  const index = toasts.findIndex(toast => toast.id === id);
  if (index > -1) {
    toasts.splice(index, 1);
    notifyListeners();
  }
}

// Notify listeners
function notifyListeners() {
  toastListeners.forEach(listener => listener([...toasts]));
}

// Individual Toast Component
function ToastItem({ toast }: { toast: ToastProps & { id: number } }) {
  const getTypeClasses = () => {
    switch (toast.type) {
      case 'success':
        return {
          container: 'bg-green-50 border-green-200',
          icon: 'text-green-600',
          title: 'text-green-800',
          description: 'text-green-700',
        };
      case 'error':
        return {
          container: 'bg-red-50 border-red-200',
          icon: 'text-red-600',
          title: 'text-red-800',
          description: 'text-red-700',
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border-yellow-200',
          icon: 'text-yellow-600',
          title: 'text-yellow-800',
          description: 'text-yellow-700',
        };
      case 'info':
        return {
          container: 'bg-blue-50 border-blue-200',
          icon: 'text-blue-600',
          title: 'text-blue-800',
          description: 'text-blue-700',
        };
      case 'default':
      default:
        return {
          container: 'bg-white border-gray-200',
          icon: 'text-gray-600',
          title: 'text-gray-800',
          description: 'text-gray-700',
        };
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      case 'default':
      default:
        return '•';
    }
  };

  const typeClasses = getTypeClasses();
  const icon = getIcon();

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
        typeClasses.container,
        toast.className
      )}
    >
      {/* Icon */}
      <div className={cn('flex-shrink-0 text-lg', typeClasses.icon)}>
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-1">
        {toast.title && (
          <div className={cn('text-sm font-semibold', typeClasses.title)}>
            {toast.title}
          </div>
        )}
        {toast.description && (
          <div className={cn('text-sm', typeClasses.description)}>
            {toast.description}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        {toast.action && (
          <button
            onClick={toast.action.onClick}
            className="rounded-md bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700"
          >
            {toast.action.label}
          </button>
        )}
        {toast.cancel && (
          <button
            onClick={toast.cancel.onClick}
            className="rounded-md bg-gray-200 px-3 py-1 text-xs text-gray-700 hover:bg-gray-300"
          >
            {toast.cancel.label}
          </button>
        )}
      </div>

      {/* Close Button */}
      {toast.showCloseButton && (
        <button
          onClick={() => {
            removeToast(toast.id);
            toast.onClose?.();
          }}
          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      )}
    </div>
  );
}

// Toast Container Component
function ToastContainer({ 
  position = 'top-right', 
  isolatedState 
}: { 
  position?: ToastProps['position'];
  isolatedState?: ReturnType<typeof createIsolatedToastState>;
}) {
  const [toastList, setToastList] = React.useState<Array<ToastProps & { id: number }>>([]);

  React.useEffect(() => {
    const listener = (toasts: Array<ToastProps & { id: number }>) => {
      setToastList(toasts);
    };

    if (isolatedState) {
      isolatedState.listeners.push(listener);
      setToastList([...isolatedState.toasts]);
      
      return () => {
        const index = isolatedState.listeners.indexOf(listener);
        if (index > -1) {
          isolatedState.listeners.splice(index, 1);
        }
      };
    } else {
      toastListeners.push(listener);
      setToastList([...toasts]);

      return () => {
        const index = toastListeners.indexOf(listener);
        if (index > -1) {
          toastListeners.splice(index, 1);
        }
      };
    }
  }, [isolatedState]);

  const getPositionClasses = () => {
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

  if (toastList.length === 0) return null;

  return (
    <div className={cn('fixed z-50 flex flex-col space-y-2', getPositionClasses())}>
      {toastList.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

// Main Sonner Component (Toast Provider)
function Sonner({ 
  position = 'top-right', 
  isolatedState 
}: { 
  position?: ToastProps['position'];
  isolatedState?: ReturnType<typeof createIsolatedToastState>;
}) {
  return <ToastContainer position={position} isolatedState={isolatedState} />;
}


// Export components and utilities
export { Sonner, ToastContainer, ToastItem, toast, createIsolatedToastState, clearAllToasts };

// Legacy exports for compatibility
export const SonnerComp = Sonner;