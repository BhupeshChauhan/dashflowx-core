import type { Meta, StoryObj } from '@storybook/react';
import { CircleDotDashed, LucideSortAsc } from 'lucide-react';
import { SsrDataTable } from '.';
import { Button } from '../../Button';
import {
  DropdownMenuComp,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../DropDownMenu';

const meta: Meta<typeof SsrDataTable> = {
  title: 'Element/SsrDataTable',
  component: SsrDataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    sorting: [],
    columnFilters: [],
    columnVisibility: [],
    rowSelection: [],
    setSorting: () => {},
    setColumnFilters: () => {},
    setColumnVisibility: () => {},
    setRowSelection: () => {},
    bulkActions: "bulkActions",
    actions: 'action',
    showSelectAction: true,
    columns: [
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }: any) => (
          <div className="capitalize">{row.getValue('status')}</div>
        ),
      },
      {
        accessorKey: 'email',
        header: ({ column }: any) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              Email
              <LucideSortAsc className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }: any) => (
          <div className="lowercase">{row.getValue('email')}</div>
        ),
      },
      {
        accessorKey: 'amount',
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }: any) => {
          const amount = parseFloat(row.getValue('amount'));

          // Format the amount as a dollar amount
          const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(amount);

          return <div className="text-right font-medium">{formatted}</div>;
        },
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }: any) => {
          const payment = row.original;

          return (
            <DropdownMenuComp>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <CircleDotDashed className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copy payment ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenuComp>
          );
        },
      },
    ],
    data: [
      {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
      },
      {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
      },
      {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
      },
      {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
      },
      {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
      },
      {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
      },
      {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
      },
      {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
      },
      {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
      },
      {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
      },
      {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
      },
      {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
      },
      {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
      {
        id: 'm5gr84i9',
        amount: 316,
        status: 'success',
        email: 'ken99@yahoo.com',
      },
      {
        id: '3u1reuv4',
        amount: 242,
        status: 'success',
        email: 'Abe45@gmail.com',
      },
      {
        id: 'derv1ws0',
        amount: 837,
        status: 'processing',
        email: 'Monserrat44@gmail.com',
      },
      {
        id: '5kma53ae',
        amount: 874,
        status: 'success',
        email: 'Silas22@gmail.com',
      },
      {
        id: 'bhqecj4p',
        amount: 721,
        status: 'failed',
        email: 'carmella@hotmail.com',
      },
    ],
  },
};
