import { cn } from '@/lib/utils';
import { ComponentProps, forwardRef } from 'react';

// Form-specific input components that are guaranteed to work with FormControl
export const FormInput = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FormInput.displayName = 'FormInput';

export const FormInput2 = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-b-blue-500 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FormInput2.displayName = 'FormInput2';

export const FormTextArea = forwardRef<HTMLTextAreaElement, ComponentProps<'textarea'>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
FormTextArea.displayName = 'FormTextArea';

// Form-compatible RadioGroup component (simplified)
export const FormRadioGroup = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('grid gap-2', className)} {...props}>
        {children}
      </div>
    );
  }
);
FormRadioGroup.displayName = 'FormRadioGroup';

export const FormRadioGroupItem = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        ref={ref}
        className={cn(
          'h-4 w-4 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2',
          className
        )}
        {...props}
      />
    );
  }
);
FormRadioGroupItem.displayName = 'FormRadioGroupItem';

// Form-compatible Select component (simplified HTML select)
export const FormSelect = forwardRef<HTMLSelectElement, ComponentProps<'select'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);
FormSelect.displayName = 'FormSelect';

// Form-compatible Switch component (simplified)
export const FormSwitch = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, ...props }, ref) => (
    <input
      type="checkbox"
      ref={ref}
      className={cn(
        'peer h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-transparent bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-blue-600',
        className
      )}
      {...props}
    />
  )
);
FormSwitch.displayName = 'FormSwitch';

// Form-compatible Checkbox component
export const FormCheckbox = forwardRef<HTMLInputElement, ComponentProps<'input'> & { label?: string }>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            'h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2',
            className
          )}
          {...props}
        />
        {label && (
          <label className="text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
      </div>
    );
  }
);
FormCheckbox.displayName = 'FormCheckbox';

// Form-compatible DatePicker component (simplified)
export const FormDatePicker = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="date"
        ref={ref}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);
FormDatePicker.displayName = 'FormDatePicker';

// Form-compatible Toggle component (simplified)
export const FormToggle = forwardRef<HTMLButtonElement, ComponentProps<'button'> & { pressed?: boolean }>(
  ({ className, pressed, children, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3 py-2',
        pressed ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);
FormToggle.displayName = 'FormToggle';

// Form-compatible ToggleGroup component (simplified)
export const FormToggleGroup = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
FormToggleGroup.displayName = 'FormToggleGroup';
