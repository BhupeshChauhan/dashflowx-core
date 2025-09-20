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
  // Parse and clamp progress value
  const parseProgress = (value: number | string): number => {
    if (typeof value === 'string') {
      const parsed = parseFloat(value);
      return isNaN(parsed) ? 0 : parsed;
    }
    return typeof value === 'number' && !isNaN(value) ? value : 0;
  };
  
  const safeProgress = parseProgress(progress);
  const progressWidth = Math.min(Math.max(safeProgress, 0), 100);

  // Size classes - matching the working example
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2.5', 
    lg: 'h-4'
  };

  // Variant classes - simplified and reliable
  const variantClasses = {
    default: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    error: 'bg-red-600',
    info: 'bg-blue-500'
  };

  // Background classes
  const backgroundClasses = {
    default: 'bg-gray-200',
    success: 'bg-green-100',
    warning: 'bg-yellow-100',
    error: 'bg-red-100',
    info: 'bg-blue-100'
  };

  // Container classes
  const containerClasses = cn(
    'w-full rounded-full overflow-hidden',
    backgroundClasses[variant],
    sizeClasses[size],
    className
  );

  // Progress bar classes
  const progressClasses = cn(
    'rounded-full transition-all duration-300 ease-in-out',
    variantClasses[variant],
    sizeClasses[size],
    animated && 'animate-pulse',
    striped && 'bg-stripes'
  );

  return (
    <div className="w-full">
      {/* Progress Label */}
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {label || 'Progress'}
          </span>
          <span className="text-sm text-gray-500 font-mono">
            {progressWidth}%
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <div
        className={containerClasses}
        role="progressbar"
        aria-valuenow={progressWidth}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={progressClasses}
          style={{
            width: `${progressWidth}%`,
          }}
        />
      </div>

      {/* Striped pattern CSS */}
      {striped && (
        <style dangerouslySetInnerHTML={{
          __html: `
            .bg-stripes {
              background-image: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.3) 10px,
                rgba(255,255,255,0.3) 20px
              );
              background-size: 20px 20px;
              animation: stripes 1s linear infinite;
            }
            @keyframes stripes {
              0% { background-position: 0 0; }
              100% { background-position: 20px 0; }
            }
          `
        }} />
      )}
    </div>
  );
}

// Create compatibility export for other components that depend on ProgressComp
export const ProgressComp = Progress;

export { Progress };