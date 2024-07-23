import type { Meta, StoryObj } from '@storybook/react';
import { SsrCardGrid } from '.';

const meta: Meta<typeof SsrCardGrid> = {
  title: 'Element/SsrCardGrid',
  component: SsrCardGrid,
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
