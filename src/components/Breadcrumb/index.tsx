'use client';

import * as React from 'react';
import {
  ChevronRight,
  ArrowRight,
  Minus,
  ChevronsRight,
  ChevronDown,
  Triangle,
  Slash,
  Circle,
  Square,
  Star,
  Heart,
  Diamond,
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeftRight,
  ArrowUpDown,
  GripVertical,
  MoreHorizontal,
  Plus,
} from 'lucide-react';
import {
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../DropDownMenu/DropdownMenuComp';
import {
  BreadcrumbComp,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './BreadcrumbComp';

export type BreadcrumbVariant = 'default' | 'minimal' | 'bordered' | 'filled' | 'gradient' | 'outlined';
export type BreadcrumbSize = 'sm' | 'md' | 'lg';
export type BreadcrumbSeparatorStyle = 
  | 'slash' 
  | 'chevron' 
  | 'arrow' 
  | 'dot' 
  | 'custom'
  | 'caret'
  | 'double-chevron'
  | 'triangle'
  | 'circle'
  | 'square'
  | 'star'
  | 'heart'
  | 'diamond'
  | 'arrow-up-right'
  | 'arrow-down-right'
  | 'arrow-left-right'
  | 'arrow-up-down'
  | 'grip-vertical'
  | 'more-horizontal'
  | 'plus';

interface iBreadcrumbItemChild {
  title: string | JSX.Element;
  href?: string;
}

interface iBreadcrumbItem {
  id: string;
  type: 'item' | 'dropdown';
  title: string | JSX.Element;
  href?: string;
  children?: iBreadcrumbItemChild[];
  separator?: boolean;
}

interface iBreadcrumb {
  breadcrumbList?: iBreadcrumbItem[];
  variant?: BreadcrumbVariant;
  size?: BreadcrumbSize;
  separatorStyle?: BreadcrumbSeparatorStyle;
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  separatorClassName?: string;
}

const getBreadcrumbClasses = (variant: BreadcrumbVariant, size: BreadcrumbSize) => {
  const baseClasses = 'flex items-center space-x-1';
  
  const variantClasses = {
    default: 'text-sm text-muted-foreground',
    minimal: 'text-sm text-gray-600',
    bordered: 'text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-2',
    filled: 'text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2',
    gradient: 'text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg px-3 py-2',
    outlined: 'text-sm text-gray-700 border-2 border-gray-300 rounded-lg px-3 py-2'
  };
  
  const sizeClasses = {
    sm: 'text-xs space-x-1',
    md: 'text-sm space-x-2',
    lg: 'text-base space-x-3'
  };
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
};

const getSeparatorIcon = (style: BreadcrumbSeparatorStyle) => {
  switch (style) {
    case 'slash':
      return React.createElement(Slash, { className: 'w-4 h-4 text-gray-400' });
    case 'chevron':
      return React.createElement(ChevronRight, { className: 'w-4 h-4 text-gray-400' });
    case 'arrow':
      return React.createElement(ArrowRight, { className: 'w-4 h-4 text-gray-400' });
    case 'dot':
      return React.createElement(Minus, { className: 'w-2 h-2 text-gray-400' });
    case 'custom':
      return React.createElement(ChevronRight, { className: 'w-4 h-4 text-gray-400' });
    case 'caret':
      return React.createElement(ChevronDown, { className: 'w-4 h-4 text-gray-400' });
    case 'double-chevron':
      return React.createElement(ChevronsRight, { className: 'w-4 h-4 text-gray-400' });
    case 'triangle':
      return React.createElement(Triangle, { className: 'w-3 h-3 text-gray-400' });
    case 'circle':
      return React.createElement(Circle, { className: 'w-2 h-2 text-gray-400 fill-current' });
    case 'square':
      return React.createElement(Square, { className: 'w-2 h-2 text-gray-400 fill-current' });
    case 'star':
      return React.createElement(Star, { className: 'w-3 h-3 text-gray-400 fill-current' });
    case 'heart':
      return React.createElement(Heart, { className: 'w-3 h-3 text-gray-400 fill-current' });
    case 'diamond':
      return React.createElement(Diamond, { className: 'w-3 h-3 text-gray-400 fill-current' });
    case 'arrow-up-right':
      return React.createElement(ArrowUpRight, { className: 'w-4 h-4 text-gray-400' });
    case 'arrow-down-right':
      return React.createElement(ArrowDownRight, { className: 'w-4 h-4 text-gray-400' });
    case 'arrow-left-right':
      return React.createElement(ArrowLeftRight, { className: 'w-4 h-4 text-gray-400' });
    case 'arrow-up-down':
      return React.createElement(ArrowUpDown, { className: 'w-4 h-4 text-gray-400' });
    case 'grip-vertical':
      return React.createElement(GripVertical, { className: 'w-3 h-3 text-gray-400' });
    case 'more-horizontal':
      return React.createElement(MoreHorizontal, { className: 'w-4 h-4 text-gray-400' });
    case 'plus':
      return React.createElement(Plus, { className: 'w-3 h-3 text-gray-400' });
    default:
      return React.createElement(ChevronRight, { className: 'w-4 h-4 text-gray-400' });
  }
};

const BreadcrumbComponent = React.forwardRef<HTMLDivElement, iBreadcrumb>(({
  variant = 'default',
  size = 'md',
  separatorStyle = 'chevron',
  breadcrumbList = [],
  className,
  ...props
}, ref) => {
  // SSR Safety: Check if we're in a browser environment
  if (typeof window === 'undefined') {
    // We're on the server - return a safe placeholder
    return React.createElement('div', {
      className: 'animate-pulse bg-gray-200 rounded p-4 text-center'
    }, 'Loading Breadcrumb...');
  }

  // Ensure we have a safe breadcrumb list
  const safeBreadcrumbList = Array.isArray(breadcrumbList) ? breadcrumbList : [];
  const finalBreadcrumbList: iBreadcrumbItem[] = safeBreadcrumbList.length > 0 ? safeBreadcrumbList : [
    { id: '1', type: 'item', title: 'Home', href: '/', separator: false }
  ];

  // Generate classes based on variant and size
  const containerClasses = getBreadcrumbClasses(variant, size);
  const linkClasses = 'text-blue-600 hover:text-blue-800 transition-colors duration-200';
  const currentClasses = 'text-gray-900 font-medium';
  const separatorClasses = 'mx-2 text-gray-400';

  return React.createElement(React.Fragment, {}, 
    React.createElement('nav', {
      ref,
      'aria-label': 'Breadcrumb',
      className: containerClasses,
      ...props
    }, 
      React.createElement('ol', {
        className: 'flex items-center space-x-1 md:space-x-3 list-decimal list-inside'
      }, 
        finalBreadcrumbList.map((item: iBreadcrumbItem, index: number) => {
          const isLast = index === finalBreadcrumbList.length - 1;
          const isDropdown = item.type === 'dropdown' && item.children && item.children.length > 0;

          return React.createElement(React.Fragment, { key: item.id }, [
            React.createElement('li', {
              key: `${item.id}-item`,
              className: 'flex items-center'
            }, [
              // Show ordered list number
              React.createElement('span', {
                key: `${item.id}-number`,
                className: 'mr-2 text-sm text-gray-500 font-medium'
              }, `${index + 1}.`),
              
              // Render item content
              isDropdown ? 
                React.createElement(DropdownMenuComp, {
                  key: `${item.id}-dropdown`
                }, [
                  React.createElement(DropdownMenuTrigger, {
                    key: `${item.id}-trigger`,
                    className: `${linkClasses} flex items-center`
                  }, [
                    React.createElement('span', {}, item.title),
                    React.createElement(BreadcrumbEllipsis, {
                      className: 'ml-1 h-4 w-4'
                    })
                  ]),
                  React.createElement(DropdownMenuContent, {
                    key: `${item.id}-content`
                  }, 
                    item.children?.map((child: iBreadcrumbItemChild, childIndex: number) => 
                      React.createElement(DropdownMenuItem, {
                        key: `${item.id}-child-${childIndex}`,
                        className: 'cursor-pointer'
                      }, 
                        React.createElement('a', {
                          href: child.href,
                          className: 'block w-full'
                        }, child.title)
                      )
                    )
                  )
                ]) :
                React.createElement('div', {
                  className: 'flex items-center'
                }, [
                  item.href && !isLast ? 
                    React.createElement('a', {
                      href: item.href,
                      className: linkClasses
                    }, item.title) :
                    React.createElement('span', {
                      className: isLast ? currentClasses : linkClasses
                    }, item.title)
                ])
            ]),
            
            // Add separator if not the last item
            item.separator && !isLast && 
              React.createElement('li', {
                key: `${item.id}-separator`,
                className: separatorClasses
              }, getSeparatorIcon(separatorStyle))
          ]);
        })
      )
    )
  );
});

// Client-side wrapper to prevent SSR issues
const ClientBreadcrumb = (props: iBreadcrumb) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    try {
      setIsMounted(true);
    } catch (error) {
      console.error('Error mounting ClientBreadcrumb:', error);
      setHasError(true);
    }
  }, []);

  // Show loading state during SSR and initial render
  if (!isMounted) {
    return React.createElement('div', { 
      className: 'animate-pulse bg-gray-200 rounded p-4 text-center' 
    }, 'Loading Breadcrumb...');
  }

  // Show error state if something went wrong
  if (hasError) {
    return React.createElement('div', { 
      className: 'text-red-500 p-4 border border-red-300 rounded text-center' 
    }, 'Error loading breadcrumb');
  }

  // Only render the actual component after mounting
  try {
    return React.createElement(BreadcrumbComponent, props);
  } catch (error) {
    console.error('Error rendering BreadcrumbComponent:', error);
    return React.createElement('div', { 
      className: 'text-red-500 p-4 border border-red-300 rounded text-center' 
    }, 'Error rendering breadcrumb');
  }
};

export const Breadcrumb = ClientBreadcrumb;

export {
  BreadcrumbComp,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
