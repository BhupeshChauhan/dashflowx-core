// Completely standalone HTML/CSS Progress component for Markdoc compatibility
// No Radix UI, no external dependencies, pure HTML/CSS implementation

// Simple utility function
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

interface iProgress {
  progress: number | string;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  striped?: boolean;
}

function Progress({
  progress,
  className = '',
  variant = 'default',
  size = 'md',
  showLabel = false,
  label,
  animated = false,
  striped = false,
}: iProgress) {
  // Ensure progress is between 0 and 100
  // Handle edge cases: null, undefined, NaN, negative numbers, strings
  const parseProgress = (value: number | string): number => {
    if (typeof value === 'string') {
      const parsed = parseFloat(value);
      return isNaN(parsed) ? 0 : parsed;
    }
    return typeof value === 'number' && !isNaN(value) ? value : 0;
  };
  
  const safeProgress = parseProgress(progress);
  const clampedProgress = Math.min(Math.max(safeProgress, 0), 100);

  // Get variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-red-600';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'default':
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
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

  // Get animation classes
  const getAnimationClasses = () => {
    if (!animated) return '';
    
    if (striped) {
      return 'animate-pulse';
    }
    
    return 'animate-bounce';
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Progress Label */}
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {label || 'Progress'}
          </span>
          <span className="text-sm text-gray-500 font-mono">
            {clampedProgress}%
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-full shadow-inner border border-gray-300',
          getSizeClasses(),
          getBackgroundClasses()
        )}
      >
        {/* Progress Fill */}
        <div
          className={cn(
            'h-full transition-all duration-700 ease-out relative',
            getVariantClasses(),
            getAnimationClasses()
          )}
          style={{
            width: `${clampedProgress}%`,
            transition: 'width 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Shine effect overlay */}
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" />
          )}
          
          {/* Striped pattern for striped variant */}
          {striped && (
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.3) 10px, rgba(255,255,255,0.3) 20px)',
                backgroundSize: '20px 20px',
                animation: 'stripes 1s linear infinite',
              }}
            />
          )}
        </div>
      </div>

      {/* Custom CSS for stripes animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes stripes {
            0% { background-position: 0 0; }
            100% { background-position: 20px 0; }
          }
        `
      }} />
    </div>
  );
}

// Create compatibility export for other components that depend on ProgressComp
export const ProgressComp = Progress;

export { Progress };