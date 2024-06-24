import type { Meta, StoryObj } from '@storybook/react';
import { Sheet } from '.';

const meta: Meta<typeof Sheet> = {
  title: 'Element/Sheet',
  component: Sheet,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
