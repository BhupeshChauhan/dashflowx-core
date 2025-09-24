import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef, memo } from 'react';
import { 
  BaseInputProps, 
  InputContainer, 
  SuccessErrorMessage, 
  PrefixSuffixWrapper, 
  FormLabel 
} from '../Input/shared';

const TextAreaStyles = cva([
  'transition-all',
  'duration-100',
  'outline-none',
  'placeholder:text-gray-400',
  'px-2',
  'bg-transparent',
  'dark:text-white',
]);

interface iTextAreaProps extends BaseInputProps {
  multiLine?: boolean;
  rows?: number;
  maxRow?: number;
}

type TextAreaProps = ComponentProps<'textarea'> &
  VariantProps<typeof TextAreaStyles> &
  iTextAreaProps;

export const TextArea = memo(forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
      required,
      formMode = false,
      ...props
    },
    ref
  ) => {
    const baseContainerClasses = 'flex items-start justify-center border border-gray-200 p-2 rounded-lg focus-within:border-primary-500 focus-within:border-2';
    
    const textareaElement = (
      <textarea
        ref={ref}
        className={cn(TextAreaStyles({ className }))}
        {...props}
        disabled={disabled}
        placeholder={placeholder}
      />
    );

    const containerContent = (
      <PrefixSuffixWrapper
        prefixElement={prefixElement}
        sufixElement={sufixElement}
        prefixElementClassName="w-4 h-4 mt-2"
        sufixElementClassName="w-4 h-4 mt-2"
      >
        {textareaElement}
      </PrefixSuffixWrapper>
    );

    // Form mode: render only the textarea element for use with FormControl
    if (formMode) {
      return (
        <textarea
          ref={ref}
          className={cn(
            'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none',
            sucessMsg ? 'border-green-500 focus:ring-green-500' : '',
            errorMsg ? 'border-red-500 focus:ring-red-500' : '',
            className
          )}
          {...props}
          disabled={disabled}
          placeholder={placeholder}
        />
      );
    }

    // Default mode: render complete textarea with label and container
    return (
      <>
        <FormLabel
          lable={lable}
          lableClassName={lableClassName}
          required={required}
          htmlFor="textAreaElement"
        />
        <InputContainer
          baseClasses={baseContainerClasses}
          sucessMsg={sucessMsg}
          errorMsg={errorMsg}
          fullwidth={fullwidth}
          customClasses={fullwidth ? ' w-full' : 'w-56'}
        >
          {containerContent}
        </InputContainer>
        <SuccessErrorMessage sucessMsg={sucessMsg} errorMsg={errorMsg} />
      </>
    );
  }
));
