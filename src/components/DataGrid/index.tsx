import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { ArrowLeftCircle, ArrowRightCircle, Settings } from 'lucide-react';
import { Button } from '../Button';
import {
  DropdownMenuComp as DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../DropDownMenu';
import { Input } from '../Input';
import {
  TableComp as Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table';
import { SsrDataTable } from './ssr';
import { CheckboxComp } from '../Checkbox';

interface iDataTable {
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
  searchColName: string;
  className?: string;
  actions?: string | JSX.Element;
  bulkActions?: string | JSX.Element;
  paginationsString?: string | JSX.Element;
  showSelectAction?: boolean;
}

function DataTable({
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
  searchColName,
  className,
  actions,
  bulkActions,
  paginationsString,
  showSelectAction,
}: iDataTable) {
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
        <div className="flex items-center">
          {bulkActions && bulkActions}
          <Input
            placeholder={`Filter ${searchColName}...`}
            value={
              (table.getColumn(searchColName)?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn(searchColName)?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="flex items-center">
          {actions && actions}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {showSelectAction && (
                  <TableHead key="select">
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
                  </TableHead>
                )}
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className='overflow-y-scroll'>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {showSelectAction && (
                    <TableCell>
                      <CheckboxComp
                        checked={row.getIsSelected()}
                        onCheckedChange={(value) => row.toggleSelected(!!value)}
                        aria-label="Select row"
                      />
                    </TableCell>
                  )}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
            {table.getFilteredSelectedRowModel().rows.length} of{' '}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
        )}
        {data.length > 10 && (
          <div className="space-x-2 flex items-center">
            {paginationsString && paginationsString}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className={cn(!table.getCanPreviousPage() ? 'text-gray-400' : '')}
            >
              <ArrowLeftCircle />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className={cn(!table.getCanNextPage() ? 'text-gray-400' : '')}
            >
              <ArrowRightCircle />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export { DataTable, SsrDataTable };
