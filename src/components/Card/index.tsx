'use client';

import React from 'react';

interface CardProps {
  variant?: 'default' | 'bordered' | 'filled' | 'outlined' | 'ghost' | 'gradient' | 'neon' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardContent?: string;
  children?: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  footerContent?: string;
  hover?: boolean;
  shadow?: boolean;
  // New props
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  borderWidth?: '0' | '1' | '2' | '4' | '8';
  animation?: 'none' | 'fade' | 'slide' | 'bounce' | 'pulse';
  fullWidth?: boolean;
  maxWidth?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  textColor?: 'auto' | 'white' | 'black' | 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink';
  backgroundColor?: 'auto' | 'white' | 'black' | 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'transparent';
  padding?: 'auto' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  clickable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  image?: string;
  imageAlt?: string;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'gray';
  theme?: 'light' | 'dark' | 'auto';
  elevation?: '0' | '1' | '2' | '3' | '4' | '5';
}

function CardComponent({
  variant = 'default',
  size = 'md',
  className = '',
  cardTitle = 'Card Title',
  cardDescription = 'Card description',
  cardContent = 'Card content goes here.',
  children,
  showHeader = true,
  showFooter = true,
  footerContent = 'Card actions would go here',
  hover = false,
  shadow = true,
  // New props with defaults
  rounded = 'lg',
  borderWidth = '1',
  animation = 'none',
  fullWidth = false,
  maxWidth = 'none',
  textColor = 'auto',
  backgroundColor = 'auto',
  padding = 'auto',
  margin = 'none',
  clickable = false,
  disabled = false,
  loading = false,
  image = '',
  imageAlt = 'Card image',
  badge = '',
  badgeColor = 'blue',
  theme = 'light',
  elevation = '1',
}: CardProps) {
  
  // Get rounded classes with better containment
  const getRoundedClasses = () => {
    const roundedOptions = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      full: 'rounded-full' // Remove overflow-hidden to prevent content hiding
    };
    const selectedRounded = roundedOptions[rounded] || roundedOptions.lg;
    return selectedRounded;
  };

  // Get rounded-specific content classes for better containment
  const getRoundedContentClasses = () => {
    if (rounded === 'full') {
      return 'px-2'; // Add horizontal padding for fully rounded cards
    }
    return '';
  };

  // Get border width classes
  const getBorderWidthClasses = () => {
    const borderWidths = {
      '0': 'border-0',
      '1': 'border',
      '2': 'border-2',
      '4': 'border-4',
      '8': 'border-8'
    };
    return borderWidths[borderWidth] || borderWidths['1'];
  };

  // Get animation classes
  const getAnimationClasses = () => {
    const animations = {
      none: '',
      fade: 'opacity-0 animate-pulse',
      slide: 'animate-bounce',
      bounce: 'animate-bounce',
      pulse: 'animate-pulse',
      scale: 'hover:scale-105 transition-transform duration-200',
      rotate: 'hover:rotate-1 transition-transform duration-200',
      slideUp: 'animate-bounce',
      slideDown: 'animate-bounce',
      slideLeft: 'animate-bounce',
      slideRight: 'animate-bounce',
      spin: 'animate-spin',
      ping: 'animate-ping',
      wiggle: 'animate-pulse',
      flash: 'animate-pulse',
      shake: 'animate-pulse'
    };
    return animations[animation] || animations.none;
  };

  // Get max width classes
  const getMaxWidthClasses = () => {
    if (maxWidth === 'none') return '';
    const maxWidths = {
      xs: 'max-w-xs',
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      '2xl': 'max-w-2xl',
      '3xl': 'max-w-3xl',
      '4xl': 'max-w-4xl',
      '5xl': 'max-w-5xl',
      '6xl': 'max-w-6xl',
      '7xl': 'max-w-7xl'
    };
    return maxWidths[maxWidth] || '';
  };

  // Get custom color classes
  const getCustomColorClasses = () => {
    let classes = '';
    
    if (textColor !== 'auto') {
      const textColors = {
        white: 'text-white',
        black: 'text-black',
        gray: 'text-gray-600',
        blue: 'text-blue-600',
        green: 'text-green-600',
        red: 'text-red-600',
        yellow: 'text-yellow-600',
        purple: 'text-purple-600',
        pink: 'text-pink-600'
      };
      classes += ` ${textColors[textColor] || ''}`;
    }

    if (backgroundColor !== 'auto') {
      const bgColors = {
        white: 'bg-white',
        black: 'bg-black',
        gray: 'bg-gray-100',
        blue: 'bg-blue-100',
        green: 'bg-green-100',
        red: 'bg-red-100',
        yellow: 'bg-yellow-100',
        purple: 'bg-purple-100',
        pink: 'bg-pink-100',
        transparent: 'bg-transparent'
      };
      classes += ` ${bgColors[backgroundColor] || ''}`;
    }

    return classes;
  };

  // Get custom padding classes
  const getCustomPaddingClasses = () => {
    if (padding === 'auto') return '';
    const paddings = {
      none: 'p-0',
      xs: 'p-2',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
      '2xl': 'p-12'
    };
    return paddings[padding] || '';
  };

  // Get custom margin classes
  const getCustomMarginClasses = () => {
    if (margin === 'none' || margin === undefined) return '';
    const margins = {
      xs: 'm-2',
      sm: 'm-3',
      md: 'm-4',
      lg: 'm-6',
      xl: 'm-8',
      '2xl': 'm-12'
    };
    return margins[margin] || '';
  };

  // Get elevation classes
  const getElevationClasses = () => {
    const elevations = {
      '0': '',
      '1': 'shadow-sm',
      '2': 'shadow',
      '3': 'shadow-md',
      '4': 'shadow-lg',
      '5': 'shadow-xl'
    };
    return elevations[elevation] || elevations['1'];
  };

  // Get theme-based classes
  const getThemeClasses = () => {
    const themes = {
      light: 'bg-white text-gray-900',
      dark: 'bg-gray-900 text-white',
      auto: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
    };
    return themes[theme] || themes.light;
  };

  // Get variant-based classes (updated to use borderWidth and theme)
  const getVariantClasses = () => {
    const baseBorder = getBorderWidthClasses();
    const themeClasses = getThemeClasses();
    
    const variants = {
      default: `${themeClasses} ${baseBorder} border-gray-200 dark:border-gray-700`,
      bordered: `${themeClasses} ${baseBorder} border-gray-300 dark:border-gray-600`,
      filled: `${themeClasses === 'bg-white text-gray-900' ? 'bg-gray-50' : 'bg-gray-800'} ${baseBorder} border-gray-200 dark:border-gray-700`,
      outlined: `${themeClasses} ${baseBorder} border-blue-300 dark:border-blue-600`,
      ghost: `bg-transparent ${baseBorder} border-transparent`,
      gradient: `bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 ${baseBorder} border-blue-200 dark:border-blue-700`,
      neon: `bg-black ${baseBorder} border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]`,
      glass: `bg-white/20 dark:bg-black/20 backdrop-blur-md ${baseBorder} border-white/30 dark:border-gray-600/30`
    };
    return variants[variant] || variants.default;
  };

  // Get size-based classes (updated to use custom padding and size-based styling)
  const getSizeClasses = () => {
    if (padding !== 'auto') return getCustomPaddingClasses();
    
    const sizes = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    };
    return sizes[size] || sizes.md;
  };

  // Get variant-specific text and element classes
  const getVariantSpecificClasses = () => {
    const variants = {
      default: {
        textColor: 'text-gray-800',
        titleColor: 'text-gray-900',
        descriptionColor: 'text-gray-600',
        contentColor: 'text-gray-700',
        footerColor: 'text-gray-600'
      },
      bordered: {
        textColor: 'text-gray-800',
        titleColor: 'text-gray-900',
        descriptionColor: 'text-gray-600',
        contentColor: 'text-gray-700',
        footerColor: 'text-gray-600'
      },
      filled: {
        textColor: 'text-gray-800',
        titleColor: 'text-gray-900',
        descriptionColor: 'text-gray-600',
        contentColor: 'text-gray-700',
        footerColor: 'text-gray-600'
      },
      outlined: {
        textColor: 'text-gray-800',
        titleColor: 'text-gray-900',
        descriptionColor: 'text-gray-600',
        contentColor: 'text-gray-700',
        footerColor: 'text-gray-600'
      },
      ghost: {
        textColor: 'text-gray-800',
        titleColor: 'text-gray-900',
        descriptionColor: 'text-gray-600',
        contentColor: 'text-gray-700',
        footerColor: 'text-gray-600'
      },
      gradient: {
        textColor: 'text-gray-800',
        titleColor: 'text-gray-900',
        descriptionColor: 'text-gray-600',
        contentColor: 'text-gray-700',
        footerColor: 'text-gray-600'
      },
      neon: {
        textColor: 'text-cyan-400',
        titleColor: 'text-cyan-300',
        descriptionColor: 'text-cyan-200',
        contentColor: 'text-cyan-100',
        footerColor: 'text-cyan-300'
      },
      glass: {
        textColor: 'text-gray-800',
        titleColor: 'text-gray-900',
        descriptionColor: 'text-gray-600',
        contentColor: 'text-gray-700',
        footerColor: 'text-gray-600'
      }
    };
    return variants[variant] || variants.default;
  };

  // Base classes
  const baseClasses = `${getRoundedClasses()} transition-all duration-200 relative`;
  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();
  const shadowClasses = shadow ? getElevationClasses() : '';
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-lg' : '';
  const widthClasses = fullWidth ? 'w-full' : '';
  const maxWidthClasses = getMaxWidthClasses();
  const customColorClasses = getCustomColorClasses();
  const customMarginClasses = margin !== 'none' ? getCustomMarginClasses() : '';
  const animationClasses = getAnimationClasses();
  const clickableClasses = clickable ? 'cursor-pointer' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Ensure text is always sharp and clear
  const textSharpnessClasses = 'text-render-optimize antialiased subpixel-antialiased';
  
  // Reset margins for all text elements
  const marginResetClasses = 'm-0 p-0';
  
  const cardClasses = `${baseClasses} ${variantClasses} ${shadowClasses} ${hoverClasses} ${widthClasses} ${maxWidthClasses} ${customColorClasses} ${customMarginClasses} ${animationClasses} ${clickableClasses} ${disabledClasses} ${textSharpnessClasses} ${className}`.trim();
  const headerClasses = `flex flex-col space-y-1 ${sizeClasses} pb-2 ${textSharpnessClasses} ${getRoundedContentClasses()}`;
  const contentClasses = `${sizeClasses} pt-0 ${textSharpnessClasses} ${getRoundedContentClasses()}`;
  const footerClasses = `flex items-center ${sizeClasses} pt-0 border-t border-gray-200 ${textSharpnessClasses} ${getRoundedContentClasses()}`;

  const variantStyles = getVariantSpecificClasses();

  // Get loading overlay colors based on theme
  const getLoadingColors = () => {
    if (theme === 'dark') {
      return 'bg-gray-900/90 border-gray-300';
    } else if (theme === 'auto') {
      return 'bg-white/90 dark:bg-gray-900/90 border-gray-900 dark:border-gray-300';
    } else {
      return 'bg-white/90 border-gray-900';
    }
  };

  return (
    <div className={`${cardClasses} filter-none`}>
      {badge && (
        <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full bg-${badgeColor}-100 text-${badgeColor}-800 antialiased subpixel-antialiased z-10`}>
          {badge}
        </div>
      )}
      
      {image && (
        <div className="w-full h-48 bg-gray-200 rounded-t-lg">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-full object-cover rounded-t-lg m-0"
          />
        </div>
      )}

      {showHeader && (
        <div className={headerClasses}>
          <h3 className={`text-2xl font-semibold leading-none tracking-tight m-0 ${variantStyles.titleColor} antialiased subpixel-antialiased`}>
            {cardTitle}
          </h3>
          <p className={`text-sm m-0 ${variantStyles.descriptionColor} antialiased subpixel-antialiased`}>
          {cardDescription}
          </p>
        </div>
      )}
      
      <div className={contentClasses}>
        {children || (
          <p className={`${variantStyles.contentColor} antialiased subpixel-antialiased ${marginResetClasses}`}>
            {cardContent}
          </p>
        )}
      </div>
      
      {showFooter && (
        <div className={footerClasses}>
          <span className={`${variantStyles.footerColor} antialiased subpixel-antialiased ${marginResetClasses}`}>
            {footerContent}
          </span>
        </div>
      )}

      {loading && (
        <div className={`absolute inset-0 ${getLoadingColors()} flex items-center justify-center z-20 rounded-lg backdrop-blur-sm`}>
          <div className="flex flex-col items-center space-y-3">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-gray-600 dark:border-gray-600 dark:border-t-gray-300"></div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Loading...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { CardComponent as Card };