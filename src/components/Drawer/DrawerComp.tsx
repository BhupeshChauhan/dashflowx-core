import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../Button';

// Legacy interface for backward compatibility
interface LegacyDrawerProps {
  header?: React.ReactNode;
  contentElement: React.ReactNode;
  footer?: React.ReactNode;
  anchorOrigin: {
    horizontal: string;
    vertical: string;
  };
  key: string;
  containerClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
}

// Legacy DrawerComp for backward compatibility
export const DrawerComp: React.FC<LegacyDrawerProps> = React.memo(({
  header,
  contentElement,
  footer,
  anchorOrigin,
  className,
  containerClassName,
  headerClassName,
  footerClassName,
  isOpen,
  handleClose,
}) => {
  const fixedVertical = React.useMemo(() => {
    return anchorOrigin.vertical === 'left' ? 'left-0' : 'right-0';
  }, [anchorOrigin.vertical]);

  const transitionCss = React.useMemo(() => {
    if (anchorOrigin.vertical === 'left') {
      return isOpen ? 'translate-x-0' : '-translate-x-full';
    } else {
      return isOpen ? 'translate-x-0' : 'translate-x-full';
    }
  }, [anchorOrigin.vertical, isOpen]);

  const handleOverlayClick = React.useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-slate-100/50 z-40"
        onClick={handleOverlayClick}
      />
      
      {/* Drawer */}
      <div
        className={cn(
          'fixed z-50 top-0 h-screen p-4 bg-white w-80 transition-all ease-in-out duration-500',
          fixedVertical,
          transitionCss,
          className
        )}
        aria-labelledby="drawer-label"
      >
        <div className={cn('flex flex-col h-[98%]', containerClassName)}>
          {/* Header */}
          <div className={cn('flex items-center border-b border-slate-100 pb-2 mb-2')}>
            <div className={cn('flex-1', headerClassName)}>{header}</div>
            <Button
              variant="ghost"
              className="text-gray-500"
              onClick={handleClose}
            >
              <svg
                aria-hidden="true"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          
          {/* Content */}
          <div className="flex flex-1">{contentElement}</div>
          
          {/* Footer */}
          <div className={cn('flex items-center border-t border-slate-100 pt-2 mt-4', footerClassName)}>
            {footer}
          </div>
        </div>
      </div>
    </>
  );
});

DrawerComp.displayName = 'DrawerComp';