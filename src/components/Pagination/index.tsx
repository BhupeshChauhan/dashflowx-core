import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  PaginationComp,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './PaginationComp';

// Type definitions
export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  totalItems?: number;
  itemsPerPage?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showEllipsis?: boolean;
  maxVisiblePages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
  variant?: 'default' | 'minimal' | 'compact' | 'extended';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  showInfo?: boolean;
  showPageSize?: boolean;
  pageSizeOptions?: number[];
  onPageSizeChange?: (pageSize: number) => void;
}

// Default configuration
const defaultProps: Required<Pick<PaginationProps, 'currentPage' | 'totalPages' | 'itemsPerPage' | 'showFirstLast' | 'showPrevNext' | 'showEllipsis' | 'maxVisiblePages' | 'variant' | 'size' | 'disabled' | 'showInfo' | 'showPageSize' | 'pageSizeOptions'>> = {
  currentPage: 1,
  totalPages: 10,
  itemsPerPage: 10,
  showFirstLast: false,
  showPrevNext: true,
  showEllipsis: true,
  maxVisiblePages: 5,
  variant: 'default',
  size: 'md',
  disabled: false,
  showInfo: false,
  showPageSize: false,
  pageSizeOptions: [10, 20, 50, 100],
};

// Utility functions
const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number,
  showEllipsis: boolean
): (number | 'ellipsis')[] => {
  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | 'ellipsis')[] = [];
  const halfVisible = Math.floor(maxVisiblePages / 2);

  if (currentPage <= halfVisible + 1) {
    // Show first pages
    for (let i = 1; i <= maxVisiblePages - 1; i++) {
      pages.push(i);
    }
    if (showEllipsis && totalPages > maxVisiblePages) {
      pages.push('ellipsis');
    }
    pages.push(totalPages);
  } else if (currentPage >= totalPages - halfVisible) {
    // Show last pages
    pages.push(1);
    if (showEllipsis && totalPages > maxVisiblePages) {
      pages.push('ellipsis');
    }
    for (let i = totalPages - maxVisiblePages + 2; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Show middle pages
    pages.push(1);
    if (showEllipsis) {
      pages.push('ellipsis');
    }
    for (let i = currentPage - halfVisible + 1; i <= currentPage + halfVisible - 1; i++) {
      pages.push(i);
    }
    if (showEllipsis) {
      pages.push('ellipsis');
    }
    pages.push(totalPages);
  }

  return pages;
};

const getVariantClasses = (variant: PaginationProps['variant'] = 'default'): string => {
  const variantMap: Record<NonNullable<PaginationProps['variant']>, string> = {
    default: 'gap-1',
    minimal: 'gap-0.5',
    compact: 'gap-0',
    extended: 'gap-2',
  };
  return variantMap[variant];
};

const getSizeClasses = (size: PaginationProps['size'] = 'md'): string => {
  const sizeMap: Record<NonNullable<PaginationProps['size']>, string> = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  return sizeMap[size];
};

// Dynamic Pagination Component
const Pagination: React.FC<PaginationProps> = React.memo(({
  currentPage = defaultProps.currentPage,
  totalPages = defaultProps.totalPages,
  totalItems,
  itemsPerPage = defaultProps.itemsPerPage,
  showFirstLast = defaultProps.showFirstLast,
  showPrevNext = defaultProps.showPrevNext,
  showEllipsis = defaultProps.showEllipsis,
  maxVisiblePages = defaultProps.maxVisiblePages,
  onPageChange,
  className,
  variant = defaultProps.variant,
  size = defaultProps.size,
  disabled = defaultProps.disabled,
  showInfo = defaultProps.showInfo,
  showPageSize = defaultProps.showPageSize,
  pageSizeOptions = defaultProps.pageSizeOptions,
  onPageSizeChange,
}) => {
  // Calculate total pages if not provided
  const calculatedTotalPages = React.useMemo(() => {
    if (totalItems && itemsPerPage) {
      return Math.ceil(totalItems / itemsPerPage);
    }
    return totalPages;
  }, [totalItems, itemsPerPage, totalPages]);

  // Generate page numbers
  const pageNumbers = React.useMemo(() => 
    generatePageNumbers(currentPage, calculatedTotalPages, maxVisiblePages, showEllipsis),
    [currentPage, calculatedTotalPages, maxVisiblePages, showEllipsis]
  );

  // Event handlers
  const handlePageChange = React.useCallback((page: number) => {
    if (disabled || page < 1 || page > calculatedTotalPages || page === currentPage) {
      return;
    }
    onPageChange?.(page);
  }, [disabled, calculatedTotalPages, currentPage, onPageChange]);

  const handlePageSizeChange = React.useCallback((newPageSize: number) => {
    if (disabled) return;
    onPageSizeChange?.(newPageSize);
  }, [disabled, onPageSizeChange]);

  // Calculate info text
  const infoText = React.useMemo(() => {
    if (!showInfo || !totalItems) return '';
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    return `Showing ${startItem}-${endItem} of ${totalItems} items`;
  }, [showInfo, totalItems, currentPage, itemsPerPage]);

  const variantClasses = React.useMemo(() => getVariantClasses(variant), [variant]);
  const sizeClasses = React.useMemo(() => getSizeClasses(size), [size]);

  return (
    <div className={cn('flex flex-col items-center space-y-4', className)}>
      {/* Pagination Controls */}
      <PaginationComp>
        <PaginationContent className={cn(variantClasses, sizeClasses)}>
          {/* First Page */}
          {showFirstLast && currentPage > 1 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!disabled) handlePageChange(1);
                }}
                className={disabled ? 'pointer-events-none opacity-50' : ''}
              >
                1
              </PaginationLink>
            </PaginationItem>
          )}

          {/* Previous Button */}
          {showPrevNext && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className={disabled || currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          )}

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => (
            <PaginationItem key={index}>
              {page === 'ellipsis' ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!disabled) handlePageChange(page);
                  }}
                  isActive={page === currentPage}
                  className={disabled ? 'pointer-events-none opacity-50' : ''}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          {/* Next Button */}
          {showPrevNext && (
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className={disabled || currentPage >= calculatedTotalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          )}

          {/* Last Page */}
          {showFirstLast && currentPage < calculatedTotalPages && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!disabled) handlePageChange(calculatedTotalPages);
                }}
                className={disabled ? 'pointer-events-none opacity-50' : ''}
              >
                {calculatedTotalPages}
              </PaginationLink>
            </PaginationItem>
          )}
        </PaginationContent>
      </PaginationComp>

      {/* Info Text */}
      {showInfo && infoText && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {infoText}
        </div>
      )}

      {/* Page Size Selector */}
      {showPageSize && (
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
            disabled={disabled}
            className="rounded border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
});

Pagination.displayName = 'Pagination';

export {
  Pagination,
  PaginationComp,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};