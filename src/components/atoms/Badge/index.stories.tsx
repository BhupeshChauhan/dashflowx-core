import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    message: 'Insert text here',
    className: 'border border-primary-500',
  },
};
