import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from '.';

const meta: Meta<typeof Toaster> = {
  title: 'Element/Toaster',
  component: Toaster,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
