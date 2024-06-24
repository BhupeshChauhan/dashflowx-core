import type { Meta, StoryObj } from '@storybook/react';
import { RocketIcon } from 'lucide-react';
import { Alert } from '.';

const meta: Meta<typeof Alert> = {
  title: 'Element/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Basic',
    description: 'This is a basic alert',
    variant: 'basic',
    prefix: <RocketIcon className="h-4 w-4" />,
  },
};
