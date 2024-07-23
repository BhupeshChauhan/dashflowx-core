import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { CardComp, CardContent } from '../../Card/CardComp';
import { TableComp as Table, TableBody, TableCell, TableRow } from '../../Table';
import { CheckboxComp } from '../../Checkbox';

interface iSsrCardGrid {
  sorting: any;
  columnFilters: any;
  columnVisibility: any;
  rowSelection: any;
  setSorting: any;
  setColumnFilters: any;
  setColumnVisibility: any;
  setRowSelection: any;
  columns: any;
  data: any;
  cardCompClassName?: string;
  cardContentClassName?: string;
  className?: string;
  showSelectAction?: boolean;
  bulkActions?: string | JSX.Element;
  actions?: string | JSX.Element;
  ssrSearch?: string | JSX.Element;
  ssrPagination?: string | JSX.Element;
  totalRecords: number;
}

export function SsrCardGrid({
  sorting,
  setSorting,
  columnFilters,
  setColumnFilters,
  columnVisibility,
  setColumnVisibility,
  rowSelection,
  setRowSelection,
  columns,
  data,
  cardContentClassName,
  cardCompClassName,
  className,
  showSelectAction,
  bulkActions,
  actions,
  ssrSearch,
  ssrPagination,
  totalRecords
}: iSsrCardGrid) {
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true, //turn off client-side pagination
    rowCount: data?.length,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className={cn('w-full', className)}>
      <div className="flex items-center justify-between py-4">
        <div className='flex items-center gap-3'>
          {showSelectAction && (
            <CheckboxComp
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && 'indeterminate')
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
          )}
          {bulkActions && bulkActions}
          {ssrSearch && ssrSearch}
        </div>
        <div className="flex items-center">
          {actions && actions}
        </div>
      </div>
      <div>
        <Table>
          <TableBody className='overflow-y-scroll'>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border-0 px-0">
                      <CardComp className={cn('w-full', cardCompClassName)}>
                        <CardContent className={cn('flex gap-3',cardContentClassName)}>
                          {showSelectAction && (
                            <TableCell>
                              <CheckboxComp
                                checked={row.getIsSelected()}
                                onCheckedChange={(value) =>
                                  row.toggleSelected(!!value)
                                }
                                aria-label="Select row"
                              />
                            </TableCell>
                          )}
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </CardContent>
                      </CardComp>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
      {showSelectAction && (
          <div className="flex-1 text-sm text-muted-foreground">
            {rowSelection.length} of{' '}
            {totalRecords} row(s) selected.
          </div>
        )}
        {ssrPagination && ssrPagination}
      </div>
    </div>
  );
}
