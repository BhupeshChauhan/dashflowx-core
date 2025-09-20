import * as React from 'react';
import { cn } from '@/lib/utils';
import { SliderComp } from './SliderComp';

// Type definitions
export interface SliderProps {
  // Basic props
  value?: number[];
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
  
  // Styling props
  className?: string;
  trackClassName?: string;
  rangeClassName?: string;
  thumbClassName?: string;
  
  // Behavior props
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  inverted?: boolean;
  
  // Display props
  showLabels?: boolean;
  showValue?: boolean;
  showTicks?: boolean;
  tickCount?: number;
  label?: string;
  valueLabel?: string;
  
  // Event handlers
  onValueChange?: (value: number[]) => void;
  onValueCommit?: (value: number[]) => void;
  
  // Size variants
  size?: 'sm' | 'md' | 'lg';
  
  // Color variants
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

// Size configuration
const getSizeConfig = (size: SliderProps['size'] = 'md') => {
  switch (size) {
    case 'sm':
      return {
        trackHeight: 'h-1',
        thumbSize: 'h-3 w-3',
        spacing: 'space-y-1',
      };
    case 'lg':
      return {
        trackHeight: 'h-3',
        thumbSize: 'h-6 w-6',
        spacing: 'space-y-3',
      };
    case 'md':
    default:
      return {
        trackHeight: 'h-2',
        thumbSize: 'h-5 w-5',
        spacing: 'space-y-2',
      };
  }
};

// Variant configuration
const getVariantConfig = (variant: SliderProps['variant'] = 'default') => {
  switch (variant) {
    case 'primary':
      return {
        track: 'bg-blue-100',
        range: 'bg-blue-600',
        thumb: 'border-blue-600 bg-white',
      };
    case 'success':
      return {
        track: 'bg-green-100',
        range: 'bg-green-600',
        thumb: 'border-green-600 bg-white',
      };
    case 'warning':
      return {
        track: 'bg-yellow-100',
        range: 'bg-yellow-500',
        thumb: 'border-yellow-500 bg-white',
      };
    case 'error':
      return {
        track: 'bg-red-100',
        range: 'bg-red-600',
        thumb: 'border-red-600 bg-white',
      };
    case 'default':
    default:
      return {
        track: 'bg-gray-200',
        range: 'bg-gray-600',
        thumb: 'border-gray-600 bg-white',
      };
  }
};

// Optimized Slider Component
const Slider: React.FC<SliderProps> = React.memo(({
  value,
  defaultValue = [50],
  min = 0,
  max = 100,
  step = 1,
  className,
  trackClassName,
  rangeClassName,
  thumbClassName,
  disabled = false,
  orientation = 'horizontal',
  inverted = false,
  showLabels = false,
  showValue = false,
  showTicks = false,
  tickCount = 5,
  label,
  valueLabel,
  onValueChange,
  onValueCommit,
  size = 'md',
  variant = 'default',
}) => {
  // Get size and variant configurations
  const sizeConfig = React.useMemo(() => getSizeConfig(size), [size]);
  const variantConfig = React.useMemo(() => getVariantConfig(variant), [variant]);

  // Generate tick marks
  const ticks = React.useMemo(() => {
    if (!showTicks) return [];
    const tickValues = [];
    const tickStep = (max - min) / (tickCount - 1);
    for (let i = 0; i < tickCount; i++) {
      tickValues.push(min + (tickStep * i));
    }
    return tickValues;
  }, [showTicks, min, max, tickCount]);

  // Handle value change
  const handleValueChange = React.useCallback((newValue: number[]) => {
    onValueChange?.(newValue);
  }, [onValueChange]);

  // Handle value commit
  const handleValueCommit = React.useCallback((newValue: number[]) => {
    onValueCommit?.(newValue);
  }, [onValueCommit]);

  // Render tick marks
  const renderTicks = () => {
    if (!showTicks) return null;
    
    return (
      <div className="flex justify-between mt-1">
        {ticks.map((tick, index) => (
          <div
            key={index}
            className="text-xs text-gray-500 text-center"
            style={{ width: `${100 / (tickCount - 1)}%` }}
          >
            {tick}
          </div>
        ))}
      </div>
    );
  };

  // Render value display
  const renderValueDisplay = () => {
    if (!showValue) return null;
    
    const currentValue = value || defaultValue;
    const displayValue = currentValue[0] || 0;
    
    return (
      <div className="text-sm text-gray-600 font-medium">
        {valueLabel || `${displayValue}`}
      </div>
    );
  };

  // Render label
  const renderLabel = () => {
    if (!showLabels || !label) return null;
    
    return (
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
    );
  };

  return (
    <div className={cn('w-full', sizeConfig.spacing, className)}>
      {/* Label */}
      {renderLabel()}
      
      {/* Value Display */}
      {renderValueDisplay()}
      
      {/* Slider */}
      <SliderComp
        value={value}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        orientation={orientation}
        inverted={inverted}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        className={cn(
          'relative flex w-full touch-none select-none items-center',
          orientation === 'vertical' && 'flex-col h-64',
          className
        )}
      >
        {/* Track */}
        <div className={cn(
          'relative w-full grow overflow-hidden rounded-full',
          sizeConfig.trackHeight,
          variantConfig.track,
          trackClassName
        )}>
          {/* Range */}
          <div className={cn(
            'absolute h-full rounded-full',
            variantConfig.range,
            rangeClassName
          )} />
        </div>
        
        {/* Thumb */}
        <div className={cn(
          'block rounded-full border-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          sizeConfig.thumbSize,
          variantConfig.thumb,
          thumbClassName
        )} />
      </SliderComp>
      
      {/* Tick Marks */}
      {renderTicks()}
    </div>
  );
});

Slider.displayName = 'Slider';

// Legacy interface for backward compatibility
type LegacySliderProps = React.ComponentProps<typeof SliderComp>;

// Legacy Slider function for backward compatibility
function LegacySlider({ className, ...props }: LegacySliderProps) {
  return (
    <SliderComp
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn('w-[60%]', className)}
      {...props}
    />
  );
}

export { 
  Slider, 
  LegacySlider,
  SliderComp 
};