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
export type BreadcrumbSeparatorStyle = 'slash' | 'chevron' | 'arrow' | 'dot' | 'custom' | 'caret' | 'double-chevron' | 'triangle';

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
    default:
      return React.createElement(ChevronRight, { className: 'w-4 h-4 text-gray-400' });
  }
};

const BreadcrumbComponent = ({
  breadcrumbList,
  variant = 'default',
  size = 'md',
  separatorStyle = 'custom',
  className,
  listClassName,
  itemClassName,
  activeItemClassName,
  separatorClassName
}: iBreadcrumb) => {
  // IMMEDIATE safety check - if anything is wrong, return error immediately
  if (typeof window === 'undefined') {
    // We're on the server - return a safe placeholder
    return React.createElement('div', { 
      className: 'animate-pulse bg-gray-200 rounded p-4 text-center' 
    }, 'Loading Breadcrumb...');
  }

  // Always use a safe default breadcrumb list to prevent map errors
  const safeBreadcrumbList: iBreadcrumbItem[] = [
    { id: '1', type: 'item', title: 'Home', href: '/', separator: true },
    { id: '2', type: 'item', title: 'Products', href: '/products', separator: true },
    { id: '3', type: 'item', title: 'Current Page', separator: false }
  ];

  // Only override if we have a valid, non-empty array
  const finalBreadcrumbList = (breadcrumbList && Array.isArray(breadcrumbList) && breadcrumbList.length > 0) 
    ? breadcrumbList 
    : safeBreadcrumbList;

  const containerClasses = getBreadcrumbClasses(variant, size);
  const finalContainerClasses = className ? `${containerClasses} ${className}` : containerClasses;
  
  const linkClasses = variant === 'gradient' 
    ? 'transition-colors hover:text-blue-200' 
    : 'transition-colors hover:text-foreground';
  
  const currentClasses = variant === 'gradient' 
    ? 'font-medium text-white' 
    : 'font-medium text-foreground';
  
  const separatorClasses = variant === 'gradient' 
    ? 'text-blue-200' 
    : 'text-muted-foreground';
  
  const finalSeparatorClasses = separatorClassName ? `${separatorClasses} ${separatorClassName}` : separatorClasses;

  // Final safety check - ensure we always have an array
  if (!Array.isArray(finalBreadcrumbList) || finalBreadcrumbList.length === 0) {
    console.error('Breadcrumb: finalBreadcrumbList is not a valid array:', finalBreadcrumbList);
    return React.createElement('div', { 
      className: 'text-red-500 p-4 border border-red-300 rounded' 
    }, 'Error: Invalid breadcrumb data');
  }

  return (
    <BreadcrumbComp className={finalContainerClasses}>
      <BreadcrumbList className={listClassName}>
        {finalBreadcrumbList.map((breadcrumb, index) => {
          // Additional safety check for each breadcrumb item
          if (!breadcrumb || typeof breadcrumb !== 'object') {
            console.error('Breadcrumb: Invalid breadcrumb item:', breadcrumb);
            return null;
          }

          return (
            <React.Fragment key={breadcrumb.id || `breadcrumb-${index}`}>
              {finalBreadcrumbList.length - 1 === index && (
                <BreadcrumbItem className={activeItemClassName}>
                  <BreadcrumbPage className={currentClasses}>
                    {breadcrumb.title || 'Untitled'}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )}
              {finalBreadcrumbList.length - 1 !== index &&
                breadcrumb.type === 'item' && (
                  <BreadcrumbItem className={itemClassName}>
                    <BreadcrumbLink href={breadcrumb.href || '#'} className={linkClasses}>
                      {breadcrumb.title || 'Untitled'}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              {breadcrumb.type === 'dropdown' && (
                <BreadcrumbItem className={itemClassName}>
                  <DropdownMenuComp>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {breadcrumb?.children?.map((child, childIndex) => (
                        <DropdownMenuItem key={childIndex} className={itemClassName}>
                          {child.title}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenuComp>
                </BreadcrumbItem>
              )}
              {breadcrumb.separator && (
                <BreadcrumbSeparator className={finalSeparatorClasses}>
                  {getSeparatorIcon(separatorStyle)}
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbComp>
  );
};

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
