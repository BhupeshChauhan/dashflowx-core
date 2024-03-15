import type { Meta, StoryObj } from '@storybook/react';
import { DfaxDropDown } from '.';

const meta: Meta<typeof DfaxDropDown> = {
  title: 'Components/DfaxDropDown',
  component: DfaxDropDown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DropDown: Story = {
  args: {
    items: [
      {
        id: '1',
        itemElement: (
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </a>
        ),
      },
      {
        id: '2',
        itemElement: (
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Settings
          </a>
        ),
      },
      {
        id: '3',
        itemElement: (
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Earnings
          </a>
        ),
      },
    ],
  },
};
