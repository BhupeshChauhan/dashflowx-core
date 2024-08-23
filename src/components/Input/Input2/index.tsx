import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const input2Styles = cva([
  'w-full',
  'flex-1',
  'appearence-none',
  'placeholder:text-gray-400',
  'focus:outline-none',
  'bg-white',
  'px-4',
  'py-2',
  'text-base',
  'text-gray-700',
]);

interface iInput2Props {
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
  input2ContainerClassName?: string;
  required?: boolean;
}

type Input2Props = ComponentProps<'input'> &
  VariantProps<typeof input2Styles> &
  iInput2Props;

export const Input2 = forwardRef<HTMLInputElement, Input2Props>(
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
      input2ContainerClassName,
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
          htmlFor="input2Element"
        >
          {lable} {required && <span className='text-red-500'>*</span>}
        </label>
        <div
          className={cn(
            'flex items-center justify-start focus-within:border-b-gray-500 relative overflow-hidden border-b-2 transition',
            lable ? 'mt-1' : '',
            sucessMsg
              ? 'border-green-500 focus-within:border-green-400 focus-within:border-2'
              : '',
            errorMsg
              ? 'border-red-500 focus-within:border-red-400 focus-within:border-2'
              : '',
            fullwidth ? ' w-full' : 'w-60',
            input2ContainerClassName
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
            id="input2Element"
            type="text"
            autoComplete="off"
            placeholder={placeholder}
            className={cn(input2Styles({ className }))}
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
