import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '.';

const meta: Meta<typeof Popover> = {
  title: 'Element/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    popoverTrigger: <p>Popover trigger</p>,
    popoverContent: <p>Popover content</p>,
  },
};
