import type { Meta, StoryObj } from '@storybook/react';
import { List } from '.';

const meta: Meta<typeof List> = {
  title: 'Element/List',
  component: List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OrderList: Story = {
  args: {
    varients: 'ordered',
    listArray: [
      {
        id: 1,
        content: 'Item 1',
      },
      {
        id: 2,
        content: 'Item 2',
      },
      {
        id: 3,
        content: 'Item 3',
      },
      {
        id: 4,
        content: 'Item 4',
      },
      {
        id: 5,
        content: 'Item 5',
      },
      {
        id: 6,
        content: 'Item 6',
      },
      {
        id: 7,
        content: 'Item 7',
      },
      {
        id: 8,
        content: 'Item 8',
      },
      {
        id: 9,
        content: 'Item 9',
      },
      {
        id: 10,
        content: 'Item 10',
      },
    ],
  },
};

export const UnorderList: Story = {
  args: {
    varients: 'unordered',
    listArray: [
      {
        id: 1,
        content: 'Item 1',
      },
      {
        id: 2,
        content: 'Item 2',
      },
      {
        id: 3,
        content: 'Item 3',
      },
      {
        id: 4,
        content: 'Item 4',
      },
      {
        id: 5,
        content: 'Item 5',
      },
      {
        id: 6,
        content: 'Item 6',
      },
      {
        id: 7,
        content: 'Item 7',
      },
      {
        id: 8,
        content: 'Item 8',
      },
      {
        id: 9,
        content: 'Item 9',
      },
      {
        id: 10,
        content: 'Item 10',
      },
    ],
  },
};

export const IconUnorderList: Story = {
  args: {
    varients: 'iconunordered',
    listArray: [
      {
        id: 1,
        content: 'Item 1',
        icon: (
          <svg
            className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        ),
      },
      {
        id: 2,
        content: 'Item 2',
        icon: (
          <svg
            className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        ),
      },
      {
        id: 3,
        content: 'Item 3',
        icon: (
          <svg
            className="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        ),
      },
    ],
  },
};
