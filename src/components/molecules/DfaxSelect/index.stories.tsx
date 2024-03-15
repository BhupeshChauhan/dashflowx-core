import type { Meta, StoryObj } from '@storybook/react';
import { DfaxSelect } from '.';

const meta: Meta<typeof DfaxSelect> = {
  title: 'Components/DfaxSelect',
  component: DfaxSelect,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {
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
