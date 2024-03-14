import { cn } from '@/utils';
import { ComponentPropsWithRef, forwardRef } from 'react';
import { Button } from '../Button';

interface iDrawer {
  header?: JSX.Element;
  contentElement: JSX.Element;
  footer?: JSX.Element;
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
}

export type DrawerProps = ComponentPropsWithRef<'div'> & iDrawer;

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
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
      ...props
    },
    ref
  ) => {
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
        ref={ref}
        id="drawer-example"
        className={cn(
          'fixed z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800',
          fixedVertical,
          fixedHorizontal,
          isOpen ? '' : 'hidden',
          className
        )}
        aria-labelledby="drawer-label"
        {...props}
      >
        <div className={cn('flex flex-col', containerClassName)}>
          <div
            className={cn(
              'flex justify-center border-b border-slate-100',
              headerClassName
            )}
          >
            {header}
            <Button
              variant="ghost"
              className="flex flex-1 justify-center items-end"
              onClick={handleClose}
            >
              X
            </Button>
          </div>
          {contentElement}
          <div
            className={cn(
              'flex justify-center border-t border-slate-10',
              footerClassName
            )}
          >
            {footer}
          </div>
        </div>
      </div>
    );
  }
);
