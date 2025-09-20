import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '.';

const meta: Meta<typeof Progress> = {
  title: 'Element/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Color variant of the progress bar',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress bar',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the progress label',
    },
    label: {
      control: 'text',
      description: 'Custom label text',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to show animation',
    },
    striped: {
      control: 'boolean',
      description: 'Whether to show striped pattern',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    progress: 66,
    className: 'w-[400px]',
  },
};

export const WithLabel: Story = {
  args: {
    progress: 75,
    className: 'w-[400px]',
    showLabel: true,
    label: 'Upload Progress',
  },
};

export const Success: Story = {
  args: {
    progress: 100,
    className: 'w-[400px]',
    variant: 'success',
    showLabel: true,
    label: 'Completed',
  },
};

export const Warning: Story = {
  args: {
    progress: 60,
    className: 'w-[400px]',
    variant: 'warning',
    showLabel: true,
    label: 'Almost Complete',
  },
};

export const Error: Story = {
  args: {
    progress: 25,
    className: 'w-[400px]',
    variant: 'error',
    showLabel: true,
    label: 'Failed',
  },
};

export const Info: Story = {
  args: {
    progress: 45,
    className: 'w-[400px]',
    variant: 'info',
    showLabel: true,
    label: 'Processing',
  },
};

export const SmallSize: Story = {
  args: {
    progress: 80,
    className: 'w-[400px]',
    size: 'sm',
    showLabel: true,
    label: 'Small Progress',
  },
};

export const LargeSize: Story = {
  args: {
    progress: 90,
    className: 'w-[400px]',
    size: 'lg',
    showLabel: true,
    label: 'Large Progress',
  },
};

export const Animated: Story = {
  args: {
    progress: 75,
    className: 'w-[400px]',
    animated: true,
    showLabel: true,
    label: 'Loading...',
  },
};

export const Striped: Story = {
  args: {
    progress: 60,
    className: 'w-[400px]',
    striped: true,
    showLabel: true,
    label: 'Processing',
  },
};

export const AnimatedStriped: Story = {
  args: {
    progress: 85,
    className: 'w-[400px]',
    animated: true,
    striped: true,
    showLabel: true,
    label: 'Uploading...',
  },
};

export const ClampingTest: Story = {
  args: {
    progress: 150, // Should clamp to 100
    className: 'w-[400px]',
    showLabel: true,
    label: 'Over 100% (Clamped)',
  },
};

export const NegativeProgress: Story = {
  args: {
    progress: -25, // Should clamp to 0
    className: 'w-[400px]',
    showLabel: true,
    label: 'Negative (Clamped to 0)',
  },
};

export const StringProgress: Story = {
  args: {
    progress: "75.5" as any, // String that should be parsed
    className: 'w-[400px]',
    showLabel: true,
    label: 'String Progress',
  },
};