import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, forwardRef, memo } from 'react';
import { 
  BaseInputProps, 
  InputContainer, 
  SuccessErrorMessage, 
  PrefixSuffixWrapper, 
  FormLabel 
} from '../shared';

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

interface iInput2Props extends BaseInputProps {
  input2ContainerClassName?: string;
}

type Input2Props = ComponentProps<'input'> &
  VariantProps<typeof input2Styles> &
  iInput2Props;

export const Input2 = memo(forwardRef<HTMLInputElement, Input2Props>(
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
      formMode = false,
      ...props
    },
    ref
  ) => {
    const baseContainerClasses = 'flex items-center justify-start focus-within:border-b-gray-500 relative overflow-hidden border-b-2 transition';
    
    const inputElement = (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        className={cn(input2Styles({ className }))}
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

    // Form mode: render only the input element for use with FormControl
    if (formMode) {
      return (
        <input
          ref={ref}
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          className={cn(
            'flex h-10 w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-b-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
            sucessMsg ? 'border-b-green-500 focus:border-b-green-500' : '',
            errorMsg ? 'border-b-red-500 focus:border-b-red-500' : '',
            className
          )}
          {...props}
          disabled={disabled}
        />
      );
    }

    // Default mode: render complete input with label and container
    return (
      <div className={cn('mb-2', className)}>
        <FormLabel
          lable={lable}
          lableClassName={lableClassName}
          required={required}
          htmlFor="input2Element"
        />
        <InputContainer
          baseClasses={baseContainerClasses}
          sucessMsg={sucessMsg}
          errorMsg={errorMsg}
          fullwidth={fullwidth}
          customClasses={input2ContainerClassName}
        >
          {containerContent}
        </InputContainer>
        <SuccessErrorMessage sucessMsg={sucessMsg} errorMsg={errorMsg} />
      </div>
    );
  }
));
