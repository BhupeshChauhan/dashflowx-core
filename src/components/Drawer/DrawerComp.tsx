import { cn } from '@/lib/utils';
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

export const DrawerComp = forwardRef<HTMLDivElement, DrawerProps>(
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
        ? 'left-0'
        : anchorOrigin.vertical === 'right'
          ? 'right-0'
          : 'left-0';

    const transitionCss =
      anchorOrigin.vertical === 'left'
        ? isOpen
          ? 'translate-x-0'
          : '-translate-x-full'
        : anchorOrigin.vertical === 'right'
          ? isOpen
            ? '-translate-x-0'
            : 'translate-x-full'
          : isOpen
            ? 'translate-x-0'
            : '-translate-x-full';

    return (
      <>
        <div
          className={cn(
            'fixed top-0 left-0 w-screen h-screen bg-slate-100/50',
            isOpen ? '' : 'hidden'
          )}
          onClick={handleClose}
        />
        <div
          ref={ref}
          className={cn(
            'fixed z-40 top-0 h-screen p-4 bg-white w-80 transition-all ease-in-out duration-500 transform peer-checked:translate-x-0',
            fixedVertical,
            transitionCss,
            className
          )}
          aria-labelledby="drawer-label"
          {...props}
          onClick={handleClose}
        >
          <div className={cn('flex flex-col h-[98%]', containerClassName)}>
            <div
              className={cn(
                'flex items-center border-b border-slate-100 pb-2 mb-2'
              )}
            >
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="flex flex-1">{contentElement}</div>
            <div
              className={cn(
                'flex items-center border-t border-slate-100 pt-2 mt-4',
                footerClassName
              )}
            >
              {footer}
            </div>
          </div>
        </div>
      </>
    );
  }
);
