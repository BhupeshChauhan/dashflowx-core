import * as React from 'react';
import { ToastProvider, ToastViewport } from './ToastComp';

interface ToastProviderWrapperProps {
  children: React.ReactNode;
}

export const ToastProviderWrapper: React.FC<ToastProviderWrapperProps> = ({ children }) => {
  return (
    <ToastProvider>
      {children}
      <ToastViewport />
    </ToastProvider>
  );
};
