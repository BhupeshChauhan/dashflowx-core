import type { Meta, StoryObj } from '@storybook/react';
import { Menubar } from '.';

const meta: Meta<typeof Menubar> = {
  title: 'Element/Menubar',
  component: Menubar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
