import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const TextAreaStyles = cva([
  'transition-all',
  'duration-100',
  'outline-none',
  'placeholder:text-gray-400',
  'px-2',
  'bg-transparent',
  'dark:text-white',
]);

interface iTextAreaProps {
  fullwidth?: boolean;
  disabled?: boolean;
  prefixElement?: JSX.Element;
  sufixElement?: JSX.Element;
  sucessMsg?: String;
  errorMsg?: String;
  multiLine?: boolean;
  rows?: number;
  maxRow?: number;
  lable?: string;
  lableClassName?: string;
}

type TextAreaProps = ComponentProps<'textarea'> &
  VariantProps<typeof TextAreaStyles> &
  iTextAreaProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
          htmlFor="textAreaElement"
        >
          {' '}
          {lable}
        </label>
        <div
          className={`flex items-start justify-center border border-gray-200 p-2 rounded-lg focus-within:border-primary-500 focus-within:border-2 + 
        ${sucessMsg ? 'border-green-500 focus-within:border-green-400 focus-within:border-2' : ''} 
        ${errorMsg ? 'border-red-500 focus-within:border-red-400 focus-within:border-2' : ''} 
        ${fullwidth ? ' w-full' : 'w-56'}`}
        >
          <div className={`w-4 h-4 mt-2 ${prefixElement ? '' : 'hidden'}`}>
            {prefixElement}
          </div>
          <textarea
            ref={ref}
            id="textAreaElement"
            className={cn(TextAreaStyles({ className }))}
            {...props}
            disabled={disabled}
            placeholder={placeholder}
          />
          <div className={`w-4 h-4 mt-2 ${sufixElement ? '' : 'hidden'}`}>
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
