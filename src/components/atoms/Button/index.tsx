import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef, useImperativeHandle, useRef } from 'react';

const buttonStyles = cva(
  [
    'rounded-md',
    'font-semibold',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
    'text-wrap',
  ],
  {
    variants: {
      variant: {
        none: '',
        solid: '',
        outline: 'border-2',
        ghost: 'transition-colors duration-300',
      },
      size: {
        xs: 'px-4 py-2 text-sm',
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-md',
        base: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-6 py-3 text-xl',
        xxl: 'px-6 py-3 text-2xl',
      },
      colorscheme: {
        none: 'text-primary-light border-primary-500',
        primary: 'text-white',
      },
      color: {
        none: 'bg-transparent',
        primary: 'bg-primary-light dark:bg-primary-dark text-white',
        secondary: 'bg-secondary-light dark:bg-secondary-dark',
        success: 'bg-green-500',
        error: 'bg-red-500',
      },
    },
    defaultVariants: {
      variant: 'none',
      size: 'md',
      colorscheme: 'none',
      color: 'none',
    },
  }
);

interface iButtonProps {
  fullwidth?: boolean;
  disabled?: boolean;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> &
  iButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current!, []);
    return (
      <button
        ref={buttonRef}
        className={cn(
          buttonStyles({ variant, size, colorscheme, color, className }),
          fullwidth ? ' w-full' : '',
          'focus:animate-wiggle'
        )}
        {...props}
        onAnimationEnd={() => buttonRef.current && buttonRef.current.blur()}
        disabled={disabled}
      >
        <div className="flex items-center justify-center">
          <div className={`w-4 h-4 mr-2 ${startIcon ? '' : 'hidden'}`}>
            {startIcon}
          </div>
          {children}
          <div className={`w-4 h-4 ml-2 ${endIcon ? '' : 'hidden'}`}>
            {endIcon}
          </div>
        </div>
      </button>
    );
  }
);
