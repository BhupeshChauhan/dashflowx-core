import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';
import { Input2 } from './Input2';

const inputStyles = cva([
  'w-full',
  'transition-all',
  'duration-100',
  'outline-none',
  'placeholder:text-gray-400',
  'px-2',
  'bg-transparent',
  'border-gray-300',
  'dark:bg-gray-700',
]);

interface iInputProps {
  fullwidth?: boolean;
  disabled?: boolean;
  prefixElement?: JSX.Element;
  sufixElement?: JSX.Element;
  sucessMsg?: String;
  errorMsg?: String;
  lable?: String;
  lableClassName?: String;
  sufixElementClassName?: string;
  prefixElementClassName?: string;
  inputContainerClassName?: string;
  required?: boolean;
}

type InputProps = ComponentProps<'input'> &
  VariantProps<typeof inputStyles> &
  iInputProps;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefixElement,
      sufixElement,
      fullwidth,
      disabled,
      sucessMsg,
      errorMsg,
      placeholder,
      lable,
      lableClassName,
      sufixElementClassName,
      inputContainerClassName,
      prefixElementClassName,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('mb-2', className)}>
        <label
          className={cn(
            'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
            lable ? '' : 'hidden',
            lableClassName
          )}
          htmlFor="inputElement"
        >
          {lable} {required && <span className='text-red-500'>*</span>}
        </label>
        <div
          className={cn(
            'flex items-center justify-start border border-gray-200 p-2 rounded-lg focus-within:border-primary-500 focus-within:border-2',
            lable ? 'mt-1' : '',
            sucessMsg
              ? 'border-green-500 focus-within:border-green-400 focus-within:border-2'
              : '',
            errorMsg
              ? 'border-red-500 focus-within:border-red-400 focus-within:border-2'
              : '',
            fullwidth ? ' w-full' : 'w-60',
            inputContainerClassName
          )}
        >
          <div
            className={cn(
              prefixElementClassName,
              prefixElement ? '' : 'hidden'
            )}
          >
            {prefixElement}
          </div>
          <input
            ref={ref}
            id="inputElement"
            type="text"
            autoComplete="off"
            placeholder={placeholder}
            className={cn(inputStyles({ className }))}
            {...props}
            disabled={disabled}
          />
          <div
            className={cn(sufixElementClassName, sufixElement ? '' : 'hidden')}
          >
            {sufixElement}
          </div>
        </div>
        <p
          className={cn(
            'mt-2 text-sm text-green-500',
            sucessMsg ? '' : 'hidden'
          )}
        >
          {sucessMsg}
        </p>
        <p
          className={cn('mt-2 text-sm text-red-500', errorMsg ? '' : 'hidden')}
        >
          {errorMsg}
        </p>
      </div>
    );
  }
);

export { Input, Input2 }