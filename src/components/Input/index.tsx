import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef, memo } from 'react';
import { Input2 } from './Input2';
import { 
  BaseInputProps, 
  InputContainer, 
  SuccessErrorMessage, 
  PrefixSuffixWrapper, 
  FormLabel 
} from './shared';

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

interface iInputProps extends BaseInputProps {
  inputContainerClassName?: string;
}

type InputProps = ComponentProps<'input'> &
  VariantProps<typeof inputStyles> &
  iInputProps;

const Input = memo(forwardRef<HTMLInputElement, InputProps>(
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
      formMode = false,
      ...props
    },
    ref
  ) => {
    const baseContainerClasses = 'flex items-center justify-start border border-gray-200 p-2 rounded-lg focus-within:border-primary-500 focus-within:border-2';
    
    const inputElement = (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        className={cn(inputStyles({ className }))}
        {...props}
        disabled={disabled}
      />
    );

    const containerContent = (
      <PrefixSuffixWrapper
        prefixElement={prefixElement}
        sufixElement={sufixElement}
        prefixElementClassName={prefixElementClassName}
        sufixElementClassName={sufixElementClassName}
      >
        {inputElement}
      </PrefixSuffixWrapper>
    );

    // Form mode: render input with container but without label/error messages for use with FormControl
    if (formMode) {
      return (
        <div className={cn('mb-2', className)}>
          <InputContainer
            baseClasses={baseContainerClasses}
            sucessMsg={sucessMsg}
            errorMsg={errorMsg}
            fullwidth={fullwidth}
            customClasses={inputContainerClassName}
          >
            {containerContent}
          </InputContainer>
          <SuccessErrorMessage sucessMsg={sucessMsg} errorMsg={errorMsg} />
        </div>
      );
    }

    // Default mode: render complete input with label and container
    return (
      <div className={cn('mb-2', className)}>
        <FormLabel
          lable={lable}
          lableClassName={lableClassName}
          required={required}
          htmlFor="inputElement"
        />
        <InputContainer
          baseClasses={baseContainerClasses}
          sucessMsg={sucessMsg}
          errorMsg={errorMsg}
          fullwidth={fullwidth}
          customClasses={inputContainerClassName}
        >
          {containerContent}
        </InputContainer>
        <SuccessErrorMessage sucessMsg={sucessMsg} errorMsg={errorMsg} />
      </div>
    );
  }
));

export { Input, Input2 }