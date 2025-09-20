import * as React from 'react';

// Completely standalone HTML/CSS Popover for Markdoc compatibility
// No Radix UI, no external dependencies, pure HTML/CSS implementation

// Simple utility function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface iPopover {
  popoverTrigger: JSX.Element;
  popoverContent: JSX.Element;
  triggerClassName?: string;
  contentClassName?: string;
  align?: string;
  sideOffset?: number;
}

function Popover({
  popoverTrigger,
  popoverContent,
  triggerClassName = '',
  contentClassName = '',
  align = 'center',
  sideOffset = 4,
}: iPopover) {
  // Get alignment classes
  const getAlignmentClasses = () => {
    switch (align) {
      case 'start':
        return 'left-0';
      case 'end':
        return 'right-0';
      case 'center':
      default:
        return 'left-1/2 transform -translate-x-1/2';
    }
  };

  return (
    <div className="relative inline-block group">
      {/* Trigger */}
      <div className={cn('cursor-pointer', triggerClassName)}>
        {popoverTrigger}
      </div>

      {/* Content - shown on hover */}
      <div
        className={cn(
          'absolute z-50 w-80 rounded-md border bg-white p-4 text-gray-900 shadow-md outline-none',
          'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
          'transition-all duration-200',
          getAlignmentClasses(),
          contentClassName
        )}
        style={{
          top: `calc(100% + ${sideOffset}px)`,
        }}
      >
        {popoverContent}
      </div>
    </div>
  );
}

// Create compatibility exports for other components that depend on these
// These are simple wrappers that don't use Radix UI
export const PopoverComp = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const PopoverContent = ({ children, className, ...props }: any) => (
  <div className={cn('w-80', className)} {...props}>
    {children}
  </div>
);

export const PopoverTrigger = ({ children, className, ...props }: any) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export { Popover };