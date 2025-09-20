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
export const toasts: Array<ToastProps & { id: number }> = [];
export const toastListeners: Array<(toasts: Array<ToastProps & { id: number }>) => void> = [];

// Clear all toasts function
export function clearAllToasts() {
  toasts.length = 0;
  notifyListeners();
}

// Create isolated toast state for each instance
export function createIsolatedToastState() {
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
export function removeToast(id: number) {
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

// Toast functions
export const toast = {
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
