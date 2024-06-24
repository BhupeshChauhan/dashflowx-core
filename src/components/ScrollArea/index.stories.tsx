import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '.';

const meta: Meta<typeof ScrollArea> = {
  title: 'Element/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
