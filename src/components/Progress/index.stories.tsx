import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '.';

const meta: Meta<typeof Progress> = {
  title: 'Element/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    progress: 66,
    className: 'w-[800px]',
  },
};
