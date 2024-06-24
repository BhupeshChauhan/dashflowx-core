import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '.';

const meta: Meta<typeof Pagination> = {
  title: 'Element/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
