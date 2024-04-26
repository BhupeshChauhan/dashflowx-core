import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const inputStyles = cva([
  'w-full',
  'transition-all',
  'duration-100',
  'outline-none',
  'placeholder:text-gray-400',
  'px-2',
  'bg-transparent',
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
}

type InputProps = ComponentProps<'input'> &
  VariantProps<typeof inputStyles> &
  iInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
      ...props
    },
    ref
  ) => {
    return (
      <>
        <label
          className={`ml-1 text-primary-light dark:text-white ${lable ? '' : 'hidden'} ${lableClassName}`}
          htmlFor="inputElement"
        >
          {' '}
          {lable}
        </label>
        <div
          className={`flex items-center ${lable ? 'mt-1' : ''} justify-start border border-gray-200 p-2 rounded-lg focus-within:border-primary-500 focus-within:border-2 + 
        ${sucessMsg ? 'border-green-500 focus-within:border-green-400 focus-within:border-2' : ''} 
        ${errorMsg ? 'border-red-500 focus-within:border-red-400 focus-within:border-2' : ''} 
        ${fullwidth ? ' w-full' : 'w-60'}`}
        >
          <div className={`w-4 h-4 ${prefixElement ? '' : 'hidden'}`}>
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
          <div className={`w-4 h-4 ${sufixElement ? '' : 'hidden'}`}>
            {sufixElement}
          </div>
        </div>
        <p
          className={`mt-2 text-sm text-green-500 ${sucessMsg ? '' : 'hidden'}`}
        >
          {sucessMsg}
        </p>
        <p className={`mt-2 text-sm text-red-500 ${errorMsg ? '' : 'hidden'}`}>
          {errorMsg}
        </p>
      </>
    );
  }
);
