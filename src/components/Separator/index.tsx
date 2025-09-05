import { SeparatorComp } from './SeparatorComp';
import { cn } from '@/lib/utils';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  color?: 'default' | 'primary' | 'secondary' | 'accent' | 'muted' | 'destructive' | 'success' | 'warning';
  variant?: 'solid' | 'dashed' | 'dotted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function Separator({ 
  orientation = 'horizontal',
  color = 'default',
  variant = 'solid',
  size = 'md',
  className = ''
}: SeparatorProps) {
  // Generate color classes based on color prop
  const getColorClasses = () => {
    switch (color) {
      case 'primary':
        return 'bg-blue-500';
      case 'secondary':
        return 'bg-gray-500';
      case 'accent':
        return 'bg-purple-500';
      case 'muted':
        return 'bg-gray-300';
      case 'destructive':
        return 'bg-red-500';
      case 'success':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-200';
    }
  };

  // Generate variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'dashed':
        return 'border-dashed';
      case 'dotted':
        return 'border-dotted';
      default:
        return 'border-solid';
    }
  };

  // Generate size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return orientation === 'vertical' ? 'w-0.5' : 'h-0.5';
      case 'lg':
        return orientation === 'vertical' ? 'w-2' : 'h-2';
      default:
        return orientation === 'vertical' ? 'w-px' : 'h-px';
    }
  };

  const orientationClasses = orientation === 'vertical' 
    ? 'w-px h-full' 
    : 'h-px w-full';

  const colorClasses = getColorClasses();
  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();

  const combinedClasses = cn(
    orientationClasses,
    colorClasses,
    variantClasses,
    sizeClasses,
    className
  );

  return (
    <SeparatorComp
      orientation={orientation}
      className={combinedClasses}
    />
  );
}

export { Separator, SeparatorComp };
