// Completely standalone HTML/CSS Progress component for Markdoc compatibility
// No Radix UI, no external dependencies, pure HTML/CSS implementation

// Simple utility function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface iProgress {
  progress: number;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
}

function Progress({
  progress,
  className = '',
  variant = 'default',
  size = 'md',
  showLabel = false,
  label,
  animated = false,
}: iProgress) {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  // Get variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      case 'default':
      default:
        return 'bg-gray-500';
    }
  };

  // Get size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-2';
      case 'lg':
        return 'h-6';
      case 'md':
      default:
        return 'h-4';
    }
  };

  // Get background variant classes
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-green-100';
      case 'warning':
        return 'bg-yellow-100';
      case 'error':
        return 'bg-red-100';
      case 'info':
        return 'bg-blue-100';
      case 'default':
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Progress Label */}
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {label || 'Progress'}
          </span>
          <span className="text-sm text-gray-500">
            {clampedProgress}%
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-full',
          getSizeClasses(),
          getBackgroundClasses()
        )}
      >
        <div
          className={cn(
            'h-full transition-all duration-300 ease-in-out',
            getVariantClasses(),
            animated && 'animate-pulse'
          )}
          style={{
            width: `${clampedProgress}%`,
          }}
        />
      </div>
    </div>
  );
}

// Create compatibility export for other components that depend on ProgressComp
export const ProgressComp = Progress;

export { Progress };