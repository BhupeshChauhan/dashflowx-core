import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '.';

const meta: Meta<typeof Table> = {
  title: 'Element/Table',
  component: Table,
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
