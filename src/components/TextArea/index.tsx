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

    // Form mode: render textarea with container but without label/error messages for use with FormControl
    if (formMode) {
      return (
        <div className={cn('mb-2', className)}>
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
        </div>
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
