import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '.';

const meta: Meta<typeof Box> = {
  title: 'Element/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: <>Title</>,
    className: 'bg-gray-100',
  },
};
