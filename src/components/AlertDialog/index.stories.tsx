import type { Meta, StoryObj } from '@storybook/react';
import { AlertDialog } from '.';

const meta: Meta<typeof AlertDialog> = {
  title: 'Element/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    actionButton: 'Open Dialog',
    title: 'Basic',
    description: 'This is a basic alert',
    variant: 'basic',
  },
};
