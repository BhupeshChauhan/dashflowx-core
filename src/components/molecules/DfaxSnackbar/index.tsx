import { Alert } from '@/components';
import { cn } from '@/utils';
import { useEffect } from 'react';

export interface iDfaxSnackbar {
  isOpen: boolean;
  onClose: () => void;
  autoHideDuration: number;
  message: JSX.Element;
  collapseIcon: JSX.Element;
  summaryClassName?: string;
  color?: 'primary' | 'secondary' | 'success' | 'error' | undefined;
  variant?: 'solid' | 'outlined' | undefined;
  SnackbarClassName?: string;
  anchorOrigin: {
    horizontal: string;
    vertical: string;
  };
  endIcon: JSX.Element;
  actions: JSX.Element;
  startIcon: JSX.Element;
  key: string;
}

export const DfaxSnackbar: React.FC<iDfaxSnackbar> = ({
  isOpen,
  onClose,
  autoHideDuration,
  message,
  color,
  variant,
  SnackbarClassName,
  anchorOrigin,
  actions,
  endIcon,
  startIcon,
  key,
}) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(
        function () {
          //Start the timer
          onClose; //After 1 second, set render to true
        }.bind(this),
        autoHideDuration
      );
    }
  }, [autoHideDuration, isOpen, onClose]);

  const IsOpenCss = isOpen ? '' : 'hidden';
  const fixedVertical =
    anchorOrigin.vertical === 'left'
      ? 'left-2'
      : anchorOrigin.vertical === 'right'
        ? 'right-2'
        : 'left-2';
  const fixedHorizontal =
    anchorOrigin.horizontal === 'top'
      ? 'top-2'
      : anchorOrigin.horizontal === 'bottom'
        ? 'bottom-2'
        : 'bottom-2';

  return (
    <div
      key={key}
      className={cn('fixed', IsOpenCss, fixedVertical, fixedHorizontal)}
    >
      <Alert
        color={color}
        variant={variant}
        className={SnackbarClassName}
        actions={actions}
        endIcon={endIcon}
        startIcon={startIcon}
      >
        {message}
      </Alert>
    </div>
  );
};

export default DfaxSnackbar;
