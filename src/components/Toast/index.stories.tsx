import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '.';

const meta: Meta<typeof Toast> = {
  title: 'Element/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
