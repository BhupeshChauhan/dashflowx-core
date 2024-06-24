import type { Meta, StoryObj } from '@storybook/react';
import { Resizable } from '.';

const meta: Meta<typeof Resizable> = {
  title: 'Element/Resizable',
  component: Resizable,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
