import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Button } from '../Button';
import { CardComp, CardContent } from '../Card/CardComp';
import { Input } from '../Input';
import { TableComp as Table, TableBody, TableCell, TableRow } from '../Table';

interface iCardGrid {
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
  cardCompClassName?: string;
  cardContentClassName?: string;
  className?: string;
}

export function CardGrid({
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
  cardContentClassName,
  cardCompClassName,
  className,
}: iCardGrid) {
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
        {data.length > 10 && (
          <div className="space-x-2">
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
      <div>
        <Table>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border-0 px-0">
                      <CardComp className={cn('w-full', cardCompClassName)}>
                        <CardContent className={cardContentClassName}>
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
    </div>
  );
}
