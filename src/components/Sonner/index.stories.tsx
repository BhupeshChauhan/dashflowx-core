import type { Meta, StoryObj } from '@storybook/react';
import { Sonner } from '.';

const meta: Meta<typeof Sonner> = {
  title: 'Element/Sonner',
  component: Sonner,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
