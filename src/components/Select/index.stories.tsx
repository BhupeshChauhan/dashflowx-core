import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Element/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    items: [
      {
        id: '1',
        itemElement: <span>Dashboard</span>,
      },
      {
        id: '2',
        itemElement: <span>Settings</span>,
      },
      {
        id: '3',
        itemElement: <span>Earnings</span>,
      },
    ],
  },
};
