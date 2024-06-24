import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '.';

const meta: Meta<typeof Skeleton> = {
  title: 'Element/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
