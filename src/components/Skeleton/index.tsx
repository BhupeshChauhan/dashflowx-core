import React from 'react';
import { SkeletonComp as DashflowSkeletonComp } from './SkeletonComp';
import { cn } from '@/lib/utils';

// Skeleton color variants
export type SkeletonColor = 
  | 'default' 
  | 'gray' 
  | 'slate' 
  | 'zinc' 
  | 'neutral' 
  | 'stone' 
  | 'red' 
  | 'orange' 
  | 'amber' 
  | 'yellow' 
  | 'lime' 
  | 'green' 
  | 'emerald' 
  | 'teal' 
  | 'cyan' 
  | 'sky' 
  | 'blue' 
  | 'indigo' 
  | 'violet' 
  | 'purple' 
  | 'fuchsia' 
  | 'pink' 
  | 'rose'
  | 'gradient'
  | 'glass';

// Skeleton color intensity variants
export type SkeletonColorIntensity = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

// Enhanced Skeleton component with color support
export interface SkeletonProps {
  className?: string;
  color?: SkeletonColor;
  colorIntensity?: SkeletonColorIntensity;
  variant?: 'default' | 'circular' | 'rectangular' | 'text' | 'avatar';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
  children?: React.ReactNode;
}

export function Skeleton({
  className = '',
  color = 'default',
  colorIntensity = '200',
  variant = 'default',
  size = 'md',
  width,
  height,
  animation = 'pulse',
  children,
  ...props
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded-none';
      case 'text':
        return 'rounded-sm';
      case 'avatar':
        return 'rounded-full';
      default:
        return 'rounded-md';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-3';
      case 'md':
        return 'h-4';
      case 'lg':
        return 'h-6';
      case 'xl':
        return 'h-8';
      default:
        return 'h-4';
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'pulse':
        return 'animate-pulse';
      case 'wave':
        return 'animate-pulse';
      case 'none':
        return '';
      default:
        return 'animate-pulse';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'gradient':
        return 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700';
      case 'glass':
        return 'bg-white/20 backdrop-blur-sm border border-white/30';
      case 'default':
        return `bg-gray-${colorIntensity} dark:bg-gray-700`;
      default:
        return `bg-${color}-${colorIntensity} dark:bg-${color}-800`;
    }
  };

  const getDimensions = () => {
    const styles: React.CSSProperties = {};
    if (width) styles.width = typeof width === 'number' ? `${width}px` : width;
    if (height) styles.height = typeof height === 'number' ? `${height}px` : height;
    return styles;
  };

  const skeletonClasses = cn(
    getColorClasses(),
    getVariantClasses(),
    getSizeClasses(),
    getAnimationClasses(),
    !width && !height && 'w-full',
    className
  );

  return (
    <DashflowSkeletonComp
      className={skeletonClasses}
      style={getDimensions()}
      {...props}
    >
      {children}
    </DashflowSkeletonComp>
  );
}

// Re-export the original SkeletonComp for direct usage
export { DashflowSkeletonComp as SkeletonComp };
