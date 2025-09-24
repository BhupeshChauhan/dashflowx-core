import { cn } from '@/lib/utils';
import React from 'react';

// Shared interfaces for input components
export interface BaseInputProps {
  fullwidth?: boolean;
  disabled?: boolean;
  prefixElement?: JSX.Element;
  sufixElement?: JSX.Element;
  sucessMsg?: string;
  errorMsg?: string;
  lable?: string;
  lableClassName?: string;
  sufixElementClassName?: string;
  prefixElementClassName?: string;
  required?: boolean;
  // Form compatibility props
  formMode?: boolean;
}

// Shared utility functions
export const getContainerClasses = (
  baseClasses: string,
  sucessMsg?: string,
  errorMsg?: string,
  fullwidth?: boolean,
  customClasses?: string
) => {
  return cn(
    baseClasses,
    sucessMsg
      ? 'border-green-500 focus-within:border-green-400 focus-within:border-2'
      : '',
    errorMsg
      ? 'border-red-500 focus-within:border-red-400 focus-within:border-2'
      : '',
    fullwidth ? ' w-full' : 'w-60',
    customClasses
  );
};

export const getMessageClasses = (isSuccess: boolean, isVisible: boolean) => {
  return cn(
    'mt-2 text-sm',
    isSuccess ? 'text-green-500' : 'text-red-500',
    isVisible ? '' : 'hidden'
  );
};

// Shared components
export const InputContainer: React.FC<{
  children: React.ReactNode;
  sucessMsg?: string;
  errorMsg?: string;
  fullwidth?: boolean;
  customClasses?: string;
  baseClasses: string;
}> = ({
  children,
  sucessMsg,
  errorMsg,
  fullwidth,
  customClasses,
  baseClasses,
}) => (
  <div
    className={getContainerClasses(
      baseClasses,
      sucessMsg,
      errorMsg,
      fullwidth,
      customClasses
    )}
  >
    {children}
  </div>
);

export const SuccessErrorMessage: React.FC<{
  sucessMsg?: string;
  errorMsg?: string;
}> = ({ sucessMsg, errorMsg }) => (
  <>
    <p className={getMessageClasses(true, !!sucessMsg)}>
      {sucessMsg}
    </p>
    <p className={getMessageClasses(false, !!errorMsg)}>
      {errorMsg}
    </p>
  </>
);

export const PrefixSuffixWrapper: React.FC<{
  prefixElement?: JSX.Element;
  sufixElement?: JSX.Element;
  prefixElementClassName?: string;
  sufixElementClassName?: string;
  children: React.ReactNode;
}> = ({
  prefixElement,
  sufixElement,
  prefixElementClassName,
  sufixElementClassName,
  children,
}) => (
  <>
    <div
      className={cn(
        prefixElementClassName,
        prefixElement ? '' : 'hidden'
      )}
    >
      {prefixElement}
    </div>
    {children}
    <div
      className={cn(sufixElementClassName, sufixElement ? '' : 'hidden')}
    >
      {sufixElement}
    </div>
  </>
);

export const FormLabel: React.FC<{
  lable?: string;
  lableClassName?: string;
  required?: boolean;
  htmlFor?: string;
}> = ({ lable, lableClassName, required, htmlFor }) => (
  <label
    className={cn(
      'block font-bold mb-2 text-sm text-gray-900 dark:text-white',
      lable ? '' : 'hidden',
      lableClassName
    )}
    htmlFor={htmlFor}
  >
    {lable} {required && <span className='text-red-500'>*</span>}
  </label>
);
