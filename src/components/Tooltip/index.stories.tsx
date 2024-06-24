import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '.';

const meta: Meta<typeof Tooltip> = {
  title: 'Element/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
