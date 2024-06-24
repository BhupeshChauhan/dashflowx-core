import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '.';

const meta: Meta<typeof DataTable> = {
  title: 'Element/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
