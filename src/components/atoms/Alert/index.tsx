/* eslint-disable react-hooks/exhaustive-deps */
import { cn } from '@/utils';
import { ComponentProps, forwardRef } from 'react';

interface iAlertProps {
  fullwidth?: boolean;
  disabled?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  variant?: 'solid' | 'outlined' | undefined;
  size?: string;
  colorscheme?: string;
  color?: 'primary' | 'secondary' | 'error' | 'success' | undefined;
  children?: JSX.Element;
  actions?: JSX.Element;
}

export type AlertProps = ComponentProps<'div'> & iAlertProps;

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant,
      size,
      colorscheme,
      className,
      color,
      fullwidth,
      disabled,
      startIcon,
      endIcon,
      children,
      actions,
      ...props
    },
    ref
  ) => {
    const variantsCss =
      variant === 'solid' ? '' : variant === 'outlined' ? 'border' : '';

    const colorCss =
      variant === 'outlined'
        ? 'bg-white'
        : variant === 'solid'
          ? color === 'primary'
            ? 'bg-primary-500 border-primary-100'
            : color === 'secondary'
              ? 'bg-secondary-500 border-secondary-100'
              : color === 'error'
                ? 'bg-red-500 border-red-100'
                : color === 'success'
                  ? 'bg-green-500 border-green-100'
                  : ''
          : '';

    const colorSchemeCss =
      variant === 'solid'
        ? 'text-white'
        : variant === 'outlined'
          ? color === 'primary'
            ? 'text-primary-500 border-primary-100'
            : color === 'secondary'
              ? 'text-secondary-500 border-secondary-100'
              : color === 'error'
                ? 'text-red-500 border-red-100'
                : color === 'success'
                  ? 'text-green-500 border-green-100'
                  : ''
          : '';

    return (
      <div
        className={cn(
          'p-4 mb-4 text-sm rounded-lg',
          variantsCss,
          colorCss,
          colorSchemeCss,
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center relative">
          <div
            className={`w-4 h-4 mr-2 flex flex-col ${startIcon ? '' : 'hidden'}`}
          >
            {startIcon}
          </div>
          <div className={`${actions ? 'mr-4' : ''}`}>{children}</div>
          <div
            className={`flex justify-end items-end flex-1 ${endIcon ? 'mr-8' : ''} ${actions ? '' : 'hidden'}`}
          >
            {actions}
          </div>
          <div
            className={`absolute right-0 w-4 h-4 ml-2 ${endIcon ? '' : 'hidden'}`}
          >
            {endIcon}
          </div>
        </div>
      </div>
    );
  }
);
